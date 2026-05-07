import React from "react";

import { Img, Text } from "components";

const ModelLibraryCategory = (props) => {

  const { model, updateSelectedModel, selectedModel, className, idx, showModelDescription } = props;
  
  return (
    <>
      <div 
        onClick={() => updateSelectedModel(model)}
        className={`relative group ${selectedModel?.ModelId === model?.ModelId ? "bg-bluegray_906 border-[2px] border-solid border-blue_804": "bg-gray_901"} ${className}`}
        key={idx}
        >
        <Img
          src={model?.IconPath}
          className="h-[35px] w-[35px]"
          alt="report"
        />
        <Text
          className="font-inter text-center text-gray_50 w-[auto]"
          variant="body3"
        >
          {model.ModelName}
        </Text>

        <Img 
          src="images/info.svg"
          className="w-7 h-7 absolute top-1 right-1 hidden group-hover:block hover:bg-primary p-1 rounded-full"
          onClick={() => showModelDescription(true)}
        />
      </div>
    </>
  );
};

export default ModelLibraryCategory;