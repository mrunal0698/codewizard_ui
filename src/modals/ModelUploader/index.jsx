import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Img, Text, Button, SelectBox } from "components";
import UploadModelColumninputOne from "components/UploadModelColumninputOne";
import { useDropzone } from "react-dropzone";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AlertBoxModal from "modals/AlertBoxModal";
import {  GetIndutries, ModelValidation } from "shared/services";
import { UploadModel } from "shared/common";
import helper from 'shared/helper';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '65%',
  height: '75%',
  bgcolor: 'blur',
  boxShadow: 24,
};

const ModelUploader = (props) => {

  const { updateModelResponse, updateUploadComponentToShow, uploadComponentToShow } = props;

  const [selectedFile, setSelectedFile] = useState(null);
  const [activeInputValue, setActiveInputValue] = useState("");
  const [userFilledDetail, setUserFilledDetail] = useState({});
  const [error,setError] = useState({});
  const [logs,setLogs] = useState({});
  const [industryList,setIndustryList] = useState([]);

  const { user } = useAuth0();

  useEffect(() => {
      (async _ => {
        const res = await GetIndutries();
        if(res.status){
          const industrySelectList =  res.values?.map((item) => {
            const industrySelectObject = {
              value: item.IndustryId,
              label: item?.IndustryName
            }
            return industrySelectObject
          }) 
          setIndustryList(industrySelectList); 
        }
      })()
  },[])
 
  const validateForm = (e) => {
    const {name, value} = e.target;
    setError((obj) => {
    const curError= {...obj,[name] : ""};
    switch(name){
        case "version" :
            if(!value){
                curError[name] = "Please enter version"
              }
              break ;
        case "industry" :
            if(!value){
                curError[name] = "Please select industry"
              }
          break; 
        default :
          break;              
        }     
        return curError;
    })   
  }

  const updateInputValue = (name) => {
    setActiveInputValue(name);
  };
  const onChangeInputsHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    validateForm(e);
      setUserFilledDetail((curDetail) => {
        return { ...curDetail, [name]: value };
      });
  }
  const onChangeDropdownHandler = (name,value) => {
    setUserFilledDetail(curDetails => {
       return {...curDetails,[name] : value.value};
    });
    setError(curError => {
      return{...curError,industry : ""}
    })
  }

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[acceptedFiles.length-1];
    const fileType = file.name.slice(file.name.length-4);
    setSelectedFile(file);
    if(fileType !== ".mdj"){
      setError(curError => {
        return{...curError,uploadedModel : "This type of file is not allowed to upload"}
      })
    }else {
      setError(curError => {
        return{...curError,uploadedModel : ""}
      })
    }
  }, []);
     
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const closeChoosenModel = () => {
    setSelectedFile(null);
    setError(curError => {
      return{...curError,uploadedModel : null}
    })
  }

  const onClickUploadHandler = async () => {
    let submit = true;
    if(!selectedFile){
      submit = false;
      setError(curError => {
        return{...curError,uploadedModel : "Please upload the model file"}
      })
    }
    ["version","industry"].map((key) => {
      if(helper.IsNullValue(userFilledDetail[key])){
        submit = false;
        setError(curError => {
          return{...curError,[key] : "Input should not be empty"}
        })
      }else{
        setError(curError => {
          return{...curError,[key] : ""}
        })
      }
    })

    if(submit){   
      let formData = new FormData();
      formData.append("filename", selectedFile);
      global.Busy(true);

      await ModelValidation(formData).then(async res => {
        if(res.status) {
          let formData = new FormData();
          formData.append("filename", selectedFile);
          const payload = {...userFilledDetail,uploadedModel:selectedFile};

          const uploadRes = await UploadModel(payload,formData,user);
          global.Busy(false); 
          if(uploadRes.status){
            updateModelResponse(uploadRes?.values);
            global.AlertPopup("success","Model has uploaded successfully!");
            closeUploader();
          } else {
            global.AlertPopup("error",uploadRes?.statusText);
          }
        }else {
          global.Busy(false);
          const errors = extractErrorDetails(res?.statusText);
          if(helper.IsNullValue(errors)) global.AlertPopup("error","An error occurred during design validation");
          else {
            setLogs(errors)
          }
        }
      })
    } 
  }

  const closeUploader = () => {
    setUserFilledDetail({});
    setError({})
    setSelectedFile(null);
    setLogs(false);
    updateUploadComponentToShow(false);
  }

  const extractErrorDetails = (messagesString) => {
    try {
       const _outerMsg = JSON.parse(messagesString);
       const errors = _outerMsg.errors.ERROR;
       return {errors,message:_outerMsg.message};
    } catch (error) {
      console.error('Error parsing messages string:', error);
      return null;
    }
  }
  return (
    <>
      <Modal
        open={uploadComponentToShow}
         aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="sm:!w-[90%] md:!w-[90%] bg-gray_901 rounded-md overflow-y-auto">
          <AlertBoxModal
            isOpen={!helper.IsJSONEmpty(logs)}
            onConfirm={() => setLogs({})}
            onClose={closeUploader}
            message={logs?.errors}
            title={logs?.message || 'Please fix the below errors'}
            alertType={'error'}
            className={`bg-base min-h-auto max-h-[400px] w-[650px] px-12 py-8 rounded-lg border-[1px] border-hint overflow-y-auto`}
          />
          <div className="bg-gray_901 flex flex-col gap-[60px] items-center justify-start p-[48px] md:px-[20px] max-w-[960px] m-[auto] w-[100%]">
            <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between w-[100%]">
              <div className="relative flex md:flex-1 flex-col items-center justify-start p-[36px] rounded-[4px] md:w-[100%] w-[49%]">
                {selectedFile === null ? (
                  <>
                    <div {...getRootProps()}
                      className={`${ isDragActive ? "border-teal_A400" : "border-gray_801"
                      } flex flex-col items-center justify-end text-center p-7 border-[3px] border-dashed lg:h-[200px] h-[240px] w-[100%] sm:px-[20px] font-semibold text-gray_300`}
                    >
                      <input {...getInputProps()} />
                      {isDragActive ? (
                        <Text
                         className="text-center text-core"
                         variant="body2"
                         >
                          Drop the files here ...
                        </Text>
                      ) : (
                        <>
                          <Text
                           className="text-center text-core my-auto"
                           variant="body2"
                           >
                            Please upload your desings here to Your Library
                          </Text>
                          <Text 
                           className="font-medium text-subtle border-[2px] border-solid border-primary py-2 px-6 rounded-[4px] text-[14px] cursor-pointer"
                            variant="body2"
                           >
                            Browse From Your Device
                          </Text>
                        </>
                        )}
                    </div>
                  </>
                ) : (
                  <div className="h-[195px] relative w-[100%] border-[3px] border-dashed border-gray_801 p-9">
                    <div className="absolute bottom-[0] flex h-[183px] md:h-[195px] inset-x-[0] justify-end mx-[auto] w-[100%]">
                      <div className="absolute bottom-[5%] flex flex-col gap-[19px] inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                          <Img
                            src="images/img_group25.svg"
                            className="w-[80px]"
                            alt="file"
                          />
                        <div className="flex flex-col gap-[5px] items-center justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_50 text-left w-[auto]"
                            variant="body2"
                          >
                            {selectedFile.name}
                          </Text>
                          <Text
                            className="font-light text-gray_501 text-left w-[auto]"
                            variant="body3"
                          >
                            {selectedFile.size}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_close_gray_801.svg"
                      className="cursor-pointer absolute h-[24px] right-5 rounded-[6px] top-5 w-[auto]"
                      onClick={closeChoosenModel}
                      alt="close_One"
                    />
                  </div>
                )}

                {error.uploadedModel && (
                  <Text
                    className="font-normal not-italic text-center text-red_400 w-[auto] absolute bottom-[8px] left-[auto]"
                    variant="body2"
                  >
                    {error.uploadedModel}
                  </Text>
                )}
                <a href="https://replicacia-technologies-pvt-ltd.gitbook.io/code-wizard-documentation/introduction/how-to-design-star-uml-file" 
                  target="_blank" rel="noreferrer"
                  className="text-[12px] font-light text-core hover:text-primary pt-8"
                  >
                  Need help to design star uml file?
                </a>
              </div>
              <div className="flex md:flex-1 flex-col gap-[20px] items-center justify-start md:w-[100%] w-[49%]">
                <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto] relative">
                    <Text
                      className="font-semibold text-gray_300 text-left w-[auto]"
                      variant="body2"
                    >
                      <label htmlFor="message">Description</label>
                    </Text>
                    <textarea
                      id="message"
                      rows="4"
                      className="block w-full text-sm text-gray_300 bg-gray_902 rounded-lg p-[10px] border-[1px] solid focus:border-gray_501 !font-inter !font-light placeholder:text-gray_801 !text-[12px]"
                      placeholder="Enter description of this model..."
                      onChange={onChangeInputsHandler}
                      name="description"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto] relative">
                    <Text
                      className="font-semibold text-gray_300 text-left w-[auto] after:content-['*'] after:ml-0.5 after:text-red-500"
                      variant="body2"
                    >
                      Version
                    </Text>
                    <UploadModelColumninputOne
                      className={`${
                        error.version
                          ? "!border-red_400 color-pink_900"
                          : ""
                      }bg-gray_902 border-[1px] border-solid flex flex-col items-start justify-start px-[12px] py-[15px] rounded-[4px] sm:w-[100%] w-[100%] focus:border-gray_501`}
                      updateInputValue={updateInputValue}
                      activeInputValue={activeInputValue}
                      onChangeInputsHandler={onChangeInputsHandler}
                      name="version"
                      validateForm={validateForm}
                    />
                    {error.version && (
                      <Text
                        className="font-normal not-italic text-left text-red_400 w-[auto] absolute bottom-[-18px] left-[5px]"
                        variant="body3"
                      >
                        {error.version}
                      </Text>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto] relative">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto] after:content-['*'] after:ml-0.5 after:text-red-500"
                    variant="body2"
                  >
                    Industry
                  </Text>
                  <SelectBox
                    className="bg-gray_902 font-normal not-italic rounded-[4px] text-[12px] text-gray_300 text-left w-[100%]"
                    placeholderClassName="text-gray_300"
                    name="industry"
                    placeholder="Select Industry"
                    isSearchable={true}
                    isMulti={false}
                    options={industryList}
                    onChange={onChangeDropdownHandler}
                    value={userFilledDetail.industry}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_50_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  {error.industry && (
                    <Text
                      className="font-normal not-italic text-left text-red_400 w-[auto] absolute bottom-[-18px] left-[5px]"
                      variant="body3"
                    >
                      {error.industry}
                    </Text>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[26px] items-center justify-center md:w-[100%] w-[41%]">
              <Button
                onClick={closeUploader}
                className="border-[1px] border-solid border-teal_A400 cursor-pointer font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[14px] rounded-[4px] text-[16px] text-center text-teal_A400 w-[161px]"
              >
                Cancel
              </Button>
              <Button
                onClick={onClickUploadHandler}
                className={`bg-gradient text-gray_50 cursor-pointer font-sm sm:px-[20px] md:px-[40px] px-[64px] py-[14px] rounded-[4px] text-[16px] text-center w-[161px]`}
              >
                Save
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ModelUploader;

ModelUploader.defaultProps = {
  updateModelResponse : () => {},
  updateUploadComponentToShow : () => {},
  uploadComponentToShow : false
}