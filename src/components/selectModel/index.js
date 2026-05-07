import React, { useState,useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Button, Img, List, Line, Text } from "components";
import ModelLibraryCategory from "components/ModelLibraryCategory";
import ModelUploader from "modals/ModelUploader";
import { GetExistingModels, GetUserModels } from "shared/services";
import CWModal from "modals/Modal";
import ModelCatalogue from "components/ModelCatalogue/ModelCatalogue";
import helper from 'shared/helper';
import YourDesignCategory from "components/YourDesignCategory";
import CreateDesignForm from "modals/CreateDesignForm/CreateDesignForm";

const SelectModel = (props) => {
  const { className, RenderModelCatalogue, ownDesign, updateAppData } = props;

  const [inputvalue, setInputvalue] = React.useState("");
  const [existingModelList,setExistingModelList] = useState([]);
  const [yourModelList,setYourModelList] = useState([]);
  const [modelListToShow,setModelListToShow] = useState([]);
  const [selectedModel,setSelectedModel] = useState({});
  const [toggleModel, setToggleModel] = useState(ownDesign);
  const [modelUploader,setModelUploader] = useState(ownDesign);
  const [uploadedModelResponse,setUploadedModelResponse] = useState({});
  const [modelCatalogue, setModelCatalogue] = useState(false);
  const [createDesignForm, setCreateDesignForm] = useState(false);

  const { user } = useAuth0();

  useEffect(_ => {
    if(existingModelList?.length > 0 && !toggleModel){
      const filteredList = existingModelList.filter(singleModel => {
        const modelTypeInLowerCase = singleModel?.ModelName.toLowerCase();
          if(modelTypeInLowerCase.startsWith(inputvalue.toLowerCase()))
             return true;
          if(modelTypeInLowerCase.includes(inputvalue))
             return true;
           return false;
      })
      setModelListToShow(filteredList);
    }else {
      const filteredList = yourModelList.filter(singleModel => {
        const modelTypeInLowerCase = singleModel?.ModelName.toLowerCase();
          if(modelTypeInLowerCase.startsWith(inputvalue.toLowerCase()))
             return true;
          if(modelTypeInLowerCase.includes(inputvalue))
             return true;
           return false;
          })
          setModelListToShow(filteredList);
        } 
    },[inputvalue,toggleModel,existingModelList,yourModelList]);

  useEffect(() => {
      (async _ => {
        setModelListToShow([]);
        if(toggleModel){
          global.Busy(true);
          await GetUserModels(user?.email).then(res => {
          global.Busy(false);
            if (res.status){
              setYourModelList(res?.values.value);
              if(!helper.IsJSONEmpty(uploadedModelResponse) && !RenderModelCatalogue){
                setSelectedModel(uploadedModelResponse);
                updateAppData(uploadedModelResponse, "model");
              }
            }
          })
        }else{
          const res = await GetExistingModels();
          if(res.status){
            setExistingModelList(res.values);
          }
        }
      })()
    }, [uploadedModelResponse, toggleModel]);

  const updateSelectedModel = (singleModel) => {
    if(!toggleModel && RenderModelCatalogue) {
      setModelCatalogue(true);
    }else if(!RenderModelCatalogue) {
        updateAppData(singleModel, "model");
    }
    setSelectedModel(singleModel); 
  };

  const updateModelUploader = (value) => {
     setModelUploader(value);
  }
 
  const showModelDescription = (bool) => {
    setModelCatalogue(bool)
  }

  return (
    <>
        <ModelUploader
          uploadComponentToShow={modelUploader}
          updateUploadComponentToShow={updateModelUploader} 
          updateModelResponse={(x) => setUploadedModelResponse(x)}
        />
        <CWModal open={modelCatalogue} className="bg-[#191919] border-[1px] border-[#FFFFFF4D] px-[25px] rounded-[8px] w-[900px] md:w-[100%]" close={() => setModelCatalogue(false)}>
          <ModelCatalogue selectedModel={selectedModel} close={() => setModelCatalogue(false)}/>
        </CWModal>
        <CWModal open={createDesignForm} close={() => setCreateDesignForm(false)}
          className="rounded-xl" >
          <CreateDesignForm close={() => setCreateDesignForm(false)} />
        </CWModal>
        <div className={`flex flex-col items-start justify-start w-[100%] ${className}`}>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
            <div className="flex flex-row gap-[16px] items-end justify-start rounded-[4px] self-stretch w-[auto]">
              <Button
                onClick={() => setToggleModel(false)}
                className={`${
                  !toggleModel ? "text-blue_804 border-b-[2px] border-solid border-blue_804" : "text-gray_50"
                } cursor-pointer font-medium py-[5px] rounded-[2px] text-gray_501 text-[15px] text-center w-[auto]`}
              >
                Existing Designs
              </Button>
              <Button
                onClick={() =>  setToggleModel(true)}
                className={`${
                  toggleModel ? "text-blue_804  border-b-[2px] border-solid border-blue_804" : "text-gray_50"
                } cursor-pointer font-medium py-[5px] rounded-[2px] text-gray_501 text-[15px] text-center w-[auto]`}
              >
                Your Designs
              </Button>
                 <Line className="bg-gray_804 h-[100%] w-[1px]" /> 
                    <Button
                        onClick = {() => updateModelUploader(true)}
                        className={`text-hint cursor-pointer font-medium text-sm p-[5px] w-auto`}
                    >
                      Upload Design
                    </Button>
                   <Button
                    onClick={() =>  setCreateDesignForm(true)}
                    className="cursor-pointer font-medium py-[5px] rounded-[2px] text-gray_501 text-[15px] text-center w-[auto]"
                  >
                    Create Your Designs
                  </Button>
            </div>
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-[16px] items-end justify-end md:w-[100%] w-[auto]">
              <div className="bg-transparent flex items-center gap-[8px] border-b-[2px] border-solid border-tex-gray-50 w-[165px] hover:w-[220px] ease-in-out transition-[width]">
                <img src="images/ic_round-search.png" alt="search" className="h-[18px] w-[18px]"/>
                <input type="search" placeholder="Search Models" 
                 className="border-0 bg-gray_900 text-gray-50 w-full bg-transparent text-[14px] p-0" name="searchbox"
                 value={inputvalue}
                 onChange={(e) => setInputvalue(e?.target?.value)}
                />
              </div>
            </div>
          </div>
          {!toggleModel ? (
            <div className="md:gap-[20px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-6 justify-center pt-[24px] overflow-y-auto w-[100%] fadeIn min-h-[115px]">
              {modelListToShow.map((x,idx) => {
                return (
                  <ModelLibraryCategory
                    className="cursor-pointer flex flex-1 flex-col h-[91px] items-center justify-center p-[8px] rounded-[7px] w-[145px] gap-[12px]"
                    model={x}
                    updateSelectedModel={updateSelectedModel}
                    selectedModel={selectedModel}
                    idx={idx}
                    showModelDescription={showModelDescription}
                  />
                )
              })}
            </div>
          ) : modelListToShow.length > 0 ?  (
            <div className="flex w-[100%] pt-[24px] fadeIn">
              <List
                className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-6 w-[100%]"
                orientation="horizontal"
              >
                {modelListToShow.map((model) => {
                  return (
                    <YourDesignCategory
                    className="cursor-pointer flex flex-1 flex-col h-[auto] items-center justify-center p-2 rounded-[7px] w-[145px] gap-[12px]"
                    updateSelectedModel={updateSelectedModel}
                    selectedModel={selectedModel}
                    model={model}
                    setYourModelList={x => setYourModelList(x)}
                  />
                  )
                })}
              </List>
            </div>
          ) : (
            <div className="flex items-center justify-center w-[100%] h-[115px]">
                   <Text
                      className="cursor-pointer font-normal text-left text-subtle w-[auto]"
                      variant="body2"
                    >
                      No files! Please upload your designs
                    </Text>
                </div>
          )}
        </div>
        {/* <div className="flex flex-col gap-[16px] items-start justify-start max-w-[982px] w-[100%]">
          <div className="flex h-[41px] md:h-[auto] items-start justify-between w-[100%]">
            <div className="flex flex-row gap-[12px] items-center justify-between w-[100%]">
              <div className="flex flex-1 md:flex-1 flex-row gap-[8px] items-end justify-start md:w-[100%] w-[auto]">
                {selectedModel ? (
                  <>
                    <Img
                      src="images/img_download_teal_a400.svg"
                      className="h-[24px] w-[24px]"
                      alt="download"
                    />
                    <Text
                      className="cursor-pointer font-medium text-left text-teal_A400 w-[auto]"
                      as="h6"
                      variant="h6"
                      onClick={downloadSelectedModel}
                    >
                      Download Model
                    </Text>
                  </>
                ) : (
                  false
                )}
              </div>
            </div>
          </div>
        </div> */}
    </>
  );
};

SelectModel.defaultProps = {
  RenderModelCatalogue : false,
  ownDesign : false
}

export default SelectModel;
