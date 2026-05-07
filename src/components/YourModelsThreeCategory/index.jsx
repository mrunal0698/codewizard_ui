import React from "react";

import { Img, Text, Button } from "components";

const YourModelsThreeCategory = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[16px] justify-start my-[4px] w-[100%]">
          <div className="h-[96px] md:ml-[0] ml-[28px] relative w-[55%]">
            <Img
              src="images/img_group25.svg"
              className="absolute h-[96px] inset-y-[0] my-[auto] right-[0] w-[auto]"
              alt="file"
            />
            <Text
              className="absolute bg-gray_901 bottom-[28%] font-inter font-normal h-[23px] justify-center left-[0] not-italic outline outline-[0.5px] outline-gray_801 pb-[2px] pt-[5px] px-[7px] rounded-[4px] text-gray_50 text-left w-[61px]"
              variant="body3"
            >
              {props?.groupSixtyThree}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-[100%]">
            <div className="flex flex-row items-center justify-between w-[100%]">
              <Button className="bg-teal_900 cursor-pointer font-inter font-normal min-w-[93px] not-italic px-[10px] py-[4px] rounded-[13px] text-[12px] text-center text-teal_A400 w-[auto]">
                {props?.ecommerce}
              </Button>
              <Text
                className="font-inter font-light text-gray_501 text-left w-[auto]"
                variant="body3"
              >
                {props?.v10}
              </Text>
            </div>
            <Text
              className="font-inter font-normal mt-[12px] not-italic text-gray_50 text-left w-[auto]"
              variant="body2"
            >
              {props?.modelname}
            </Text>
            <Text
              className="font-inter font-normal leading-[150.00%] mt-[10px] not-italic text-gray_501 text-left w-[100%]"
              variant="body2"
            >
              {props?.timeZone}
            </Text>
            <Text
              className="font-inter font-medium md:ml-[0] ml-[67px] mt-[5px] text-gray_300 text-left w-[auto]"
              variant="body3"
            >
              {props?.readmore}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

YourModelsThreeCategory.defaultProps = {
  groupSixtyThree: "file type",
  ecommerce: "E-commerce",
  v10: "v1.0",
  modelname: "model_name",
  timeZone: "Amet minim mollit non deserunt ullamco est sit am...",
  readmore: "Read More",
};

export default YourModelsThreeCategory;
