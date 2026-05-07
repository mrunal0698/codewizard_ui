import React from "react";

import { Text, Img } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <aside className={props.className}>
        <Text
          className="font-inter font-medium md:ml-[0] ml-[24px] mr-[73px] mt-[24px] text-gray_50 text-left w-[auto]"
          as="h3"
          variant="h3"
        >
          E-commence
        </Text>
        <div className="h-[137px] mb-[622px] mt-[19px] mx-[auto] relative w-[92%]">
          <div className="flex flex-col gap-[12px] items-center justify-start mb-[-29px] ml-[12px] mt-[auto] self-stretch w-[auto] z-[1]">
            <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
              <Img
                src="images/img_arrowright_gray_300.svg"
                className="h-[24px] w-[24px]"
                alt="arrowright"
              />
              <Text
                className="font-inter font-normal not-italic text-gray_300 text-left w-[auto]"
                variant="body2"
              >
                filename
              </Text>
            </div>
            <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
              <Img
                src="images/img_arrowright_gray_300.svg"
                className="h-[24px] w-[24px]"
                alt="arrowright_One"
              />
              <Text
                className="font-inter font-normal not-italic text-gray_300 text-left w-[auto]"
                variant="body2"
              >
                filename
              </Text>
            </div>
            <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
              <Img
                src="images/img_arrowright_gray_300.svg"
                className="h-[24px] w-[24px]"
                alt="arrowright_Two"
              />
              <Text
                className="font-inter font-normal not-italic text-gray_300 text-left w-[auto]"
                variant="body2"
              >
                filename
              </Text>
            </div>
            <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
              <Img
                src="images/img_location_gray_50.svg"
                className="h-[24px] w-[24px]"
                alt="location"
              />
              <Text
                className="font-inter font-normal not-italic text-gray_50 text-left w-[auto]"
                variant="body2"
              >
                filename
              </Text>
            </div>
          </div>
          <div className="bg-gray_801 h-[34px] mt-[auto] mx-[auto] rounded-[4px] w-[100%]"></div>
        </div>
      </aside>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
