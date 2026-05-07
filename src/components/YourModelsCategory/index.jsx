import React from "react";
import { useState } from "react";

import { Img, Text, Button } from "components";
import { ValidateYoursModel } from "shared/common";
import helper from 'shared/helper';
import AlertBoxModal from "modals/AlertBoxModal";
import CommonAlertModal from "modals/CommonAlertModal";
import { DeleteModelFile, GetUserModels } from "shared/services";
import { useAuth0 } from "@auth0/auth0-react";

const YourModelsCategory = (props) => {
  const { model, updateSelectedModel, selectedModel, className, setYourModelList } = props;

  const [isReadMore, setIsReadMore] = useState(false);
  const [logsPopup,setLogsPopup] = useState(false);
  const [logs,setLogs] = useState({});
  const [deletePopup,setDeletePopup] = useState(false);

  const { user } = useAuth0();

  const ModelValidationHandler = async () => {
    const res = await ValidateYoursModel(selectedModel);
    if(res?.status) {
      global.AlertPopup("success",res?.statusText || "Model file is verified successfully you can proceed!");
    }else {
      if(!helper.IsJSONEmpty(res?.statusText)){
        setLogs({
          status:"warning",
          reviewMessage: res?.statusText
        })
        setLogsPopup(true);
        } else {
          global.AlertPopup("error","Model is invalid, throwing error while validating");
        }
      }
  }

  const updateLogsPopup = (value) => {
    setLogsPopup(value)
  }

  const deleteModelFromBackend = async (id) => {
    setDeletePopup(false);
    global.Busy(true);
    await DeleteModelFile(id).then(async (res) => {
     if(res.status){
      global.AlertPopup("success","Model deleted sucessfully");
      await GetUserModels(user?.email).then(res => {
        global.Busy(false);
        if(res.status){
          setYourModelList(res?.values?.value);
        }
      })
     }else {
       global.Busy(false);
       global.AlertPopup("error",`Can't delete ${selectedModel?.ModelName} while it is associated with existing project`)
     }
    })
  }

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      <AlertBoxModal
        open={logsPopup}
        finishFunction={() => updateLogsPopup(false)}
        finishButtonName="Close"
        alertMessage={logs?.reviewMessage}
        className={`${logs?.status === "warning" ? "h-[70%] w-[70%]" : "h-[35%] w-[50%]"}`}
      />
      <CommonAlertModal
        openModal={deletePopup}
        updateOpenModel={() => setDeletePopup(false)}
        onclickYesButtonHandler={deleteModelFromBackend}
        delteId={selectedModel?.ModelId}
        alertText={`Are you sure you want to delete ${selectedModel?.ModelName}?`}
      />
      <div
        key={model.ModelId}
        onClick={() => updateSelectedModel(model)}
        className={`${selectedModel?.ModelId === model?.ModelId? "bg-bluegray_906 border-teal_A400": "bg-gray_901 border-none"} ${className} `}
       >
        <div className="flex flex-col gap-[8px] justify-start my-[4px] w-[100%] h-[100%] relative">
          <Button
            className={`${selectedModel?.ModelId !== model?.ModelId ? "invisible" : "visible"} bg-teal_800 cursor-pointer font-inter font-normal not-italic px-[5px] py-[4px] rounded-[13px] text-[12px] text-center text-gray_50 w-[60px] hover:bg-gradient`}
            onClick={() =>ModelValidationHandler(selectedModel)}
          >
            Validate
          </Button>
          <Img
            src="images/delete_icon.png"
            className={`${selectedModel?.ModelId !== model?.ModelId ? "invisible" : "visible"} "common-pointer absolute h-[28px] right-[0] rounded-[6px] top-[0] w-[auto] hover:scale-125`}
            alt="close_One"
            onClick={() => setDeletePopup(true)}
          />
          <div className="h-[96px] mx-[auto] relative w-[auto]">
            <Img
              src="images/img_group25.svg"
              className="h-[96px] w-[auto]"
              alt="file"
            />
            <Text
              className="absolute bg-bluegray_906 bottom-[28%] font-inter font-normal h-[23px] justify-center left-[0] not-italic outline outline-[0.5px] outline-gray_801 pb-[2px] pt-[5px] px-[7px] rounded-[4px] text-gray_50 text-left w-[61px]"
              variant="body3"
            >
              {model?.ModelType}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-[100%] gap-[8px]">
            <div className="flex flex-row items-center justify-between w-[100%]">
              <Button className="bg-teal_900 cursor-pointer font-inter font-normal min-w-[93px] not-italic px-[10px] py-[4px] rounded-[13px] text-[12px] text-center text-teal_A400 w-[auto]">
                {model?.Industry?.IndustryName}
              </Button>
              <Text
                className="font-inter font-light text-gray_501 text-left w-[auto]"
                variant="body3"
              >
                {model?.Version}
              </Text>
            </div>
            <Text
              className="font-inter font-normal not-italic text-gray_50 text-left w-[auto]"
              variant="body3"
            >
              {model?.ModelName}
            </Text>
            <Text
              className="font-inter font-normal leading-[150.00%] not-italic text-gray_501 text-left w-[100%]"
              variant="body3"
            >
              {!isReadMore ? (
                model?.ModelDescription && <span>{model?.ModelDescription.slice(0,10)}...</span>
              ) : (
                <>
                  {model?.ModelDescription} <br/>
                    ID : {model?.ModelId}
                </>
              )}
            </Text>
            <Text
              className="font-medium md:ml-[0] ml-[67px] text-gray_300 text-left w-[auto]"
              variant="body3"
              onClick={toggleReadMore}
            >
              {isReadMore ? "Read Less" : "Read More"}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

YourModelsCategory.defaultProps = {
  className : "",
  updateSelectedModel : () => {},
  setYourModelList : () => {}
};

export default YourModelsCategory;
