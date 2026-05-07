import React, { useState } from "react";

import { Button, Img, Line, Text } from "components";
import { DeleteModelFile, GetUserModels } from "shared/services";
import { useAuth0 } from "@auth0/auth0-react";
import AlertBoxModal from "modals/AlertBoxModal";

const YourDesignCategory = (props) => {

  const { model, updateSelectedModel, selectedModel, className, idx, setYourModelList } = props;
  const [toggleDropdown,setToggleDropdown] = useState(false);
  const [deletePopup,setDeletePopup] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false);

  const { user } = useAuth0();

  const deleteModelHandler = async (id) => {
    setDeletePopup(false);
    global.Busy(true);
    await DeleteModelFile(model.ModelId).then(async (res) => {
     if(res.status){
       await GetUserModels(user?.email).then(res => {
         global.Busy(false);
         global.AlertPopup("success","Model deleted sucessfully");
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

  const printString = (str) => {
    if(str?.length > 18){
       return `${str.slice(0,15)}...`;
    }else{
      return str;
    }
  }

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      <AlertBoxModal
        isOpen={deletePopup}
        onConfirm={deleteModelHandler}
        confirmText="Delete"
        message={`Are you sure you want to delete ${selectedModel?.ModelName}?`}
        onClose={() => setDeletePopup(false)}
      />
      <div 
        onClick={() => updateSelectedModel(model)}
        className={`${selectedModel?.ModelId === model?.ModelId ? "border-[2px] border-solid border-blue_804": ""} ${className} relative bg-secondary`}
        key={idx}
      >
        <div className="h-[70px] mx-[auto] relative w-[auto]">
          <Img
            src="images/img_group25.svg"
            className="h-[70px] w-[auto]"
            alt="file"
          />
          <Text
            className="absolute bg-bluegray_906 bottom-[20%] font-inter font-normal text-[10px] justify-center left-[0] not-italic outline outline-[0.5px] outline-gray_801 pb-[2px] pt-[5px] px-[7px] rounded-[4px] text-gray_50 text-left w-[auto]"
            variant="body3"
          >
            {model?.ModelType}
          </Text>
        </div>
        <Text
          className="font-inter text-center text-gray_50 w-[auto]"
          variant="body3"
        >
          {printString(model.ModelName)}
        </Text>

        <div className="flex justify-between items-center w-[100%]">
          <Button className={`bg-primary text-core text-[10px] w-auto py-1 px-2 rounded-3xl`}>
            {model?.Industry?.IndustryName}
          </Button>
          <Text
            className="font-inter font-light text-hint text-left w-[auto]"
            variant="body3"
          >
            {model?.Version}
          </Text>
        </div>

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
          className="font-medium text-gray_300 text-left w-[auto]"
          variant="body3"
          onClick={toggleReadMore}
        >
          {isReadMore ? "Read Less" : "Read More"}
        </Text>

        {selectedModel?.ModelId === model?.ModelId && (
          <Img
            src="images/dots-y.svg"
            className="absolute top-2 right-2 cursor-pointer h-4 w-4 rounded-full"
            alt="overflowmenu"
            onClick={() => setToggleDropdown(!toggleDropdown)}
          />
        )}

        {toggleDropdown && selectedModel?.ModelId === model?.ModelId && (
           <div className={`absolute right-7 top-3 bg-base flex flex-col gap-1 items-start justify-start p-2 rounded-md w-[100px] cursor-default`}>
              <div className="flex flex-row gap-1 items-center justify-start py-1 px-1 self-stretch rounded-sm w-[auto] cursor-pointer hover:bg-error"
                onClick={() => setDeletePopup(true)}
              >
                <Img
                  src="images/Delete_icon.svg"
                  className="cursor-pointer h-4 rounded-[50%] w-4"
                  alt="user"
                />
                <Text
                  className="cursor-pointer font-normal not-italic text-gray_50 text-left w-[auto]"
                  variant="body3"
                >
                  Delete
                </Text>
              </div>
              <Line className="bg-gray_801 h-[1px] rounded-[1px] w-[100%]" />
           </div>
        )}
      </div>
    </>
  );
};

export default YourDesignCategory;