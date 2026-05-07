import React from "react";
import { useState,useEffect } from "react";
import { Text } from "components";

const TechStackDescription = ({
  selectedTech,
  rhsDescription,
  selectedName,
}) => {
  const [selectedTechFeatures,setSelectedTechFeatures] = useState([]);
  useEffect(() => {
    if(selectedTech?.BeTechnologyFeatures){
      setSelectedTechFeatures(selectedTech?.BeTechnologyFeatures);
    }else if(selectedTech?.FeTechnologyFeatures){
      setSelectedTechFeatures(selectedTech?.FeTechnologyFeatures);
    }else if (selectedTech?.DbFeatures){
      setSelectedTechFeatures(selectedTech?.DbFeatures)
    }else if(selectedTech?.CapFeatures){
      setSelectedTechFeatures(selectedTech?.CapFeatures)
    }
  },[selectedTech]);
  return (
    <>
      {Object.keys(selectedTech).length === 0 ? (
        <div className="bg-gray_901 flex md:flex-1 items-center justify-start p-[128px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[50%] mt-[24px] h-[480px]">
          <Text
            className="font-normal leading-[150.00%] my-[160px] not-italic text-center text-gray_501 w-[100%]"
            as="h6"
            variant="h6"
          >
            {rhsDescription}
          </Text>
        </div>
      ) : (
        <>
          <div className="bg-gray_901 flex md:flex-1 flex-col items-start justify-start mt-[24px] p-[18px] sm:px-[20px] md:w-[100%] w-[50%] h-[480px] overflow-y-auto">
            <Text
              className="font-semibold mt-[6px] text-gray_50 text-left w-[auto]"
              as="h4"
              variant="h4"
            >
              {selectedName}
            </Text>
            <Text
              className="font-normal leading-[150.00%] mt-[19px] not-italic text-gray_300 text-left"
              as="h6"
              variant="h6"
            >
              {selectedTech?.Description}
            </Text>
            {selectedTechFeatures.length > 0 ? (
              <>
                <Text
                  className="font-semibold mt-[2rem] text-gray_50 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Features
                </Text>
                {/* <Text
                  className="font-normal leading-[150.00%] not-italic text-gray_300 text-left"
                  as="h6"
                  variant="h6"
                > */}
                  {selectedTechFeatures.map((item) => {
                      return (
                        <Text
                          className="font-normal leading-[150.00%] mt-[19px] not-italic text-gray_300 text-left"
                          as="h6"
                          variant="h6"
                        >
                          {item}
                        </Text>
                      );
                    })}
                {/* </Text> */}
              </>
            ) : null}
          </div>
        </>
      )}
    </>
  );
};

export default TechStackDescription;
