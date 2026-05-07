import React from "react";

import { Button, Img, Line, Text } from "components";

const CapabilitiesTwoSidemenu = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="flex items-center justify-start mx-[auto] my-[113px] w-[73%]">
          <div className="flex flex-row gap-[9px] items-center justify-between w-[100%]">
            <div className="flex flex-col gap-[4px] items-center justify-start self-stretch w-[auto]">
              <Button className="border-[1px] border-solid border-teal_A400 flex h-[32px] items-center justify-center rounded-[50%] w-[32px]">
                <Img
                  src="images/img_checkmark_teal_a400.svg"
                  className=""
                  alt="checkmark"
                />
              </Button>
              <Line className="bg-gray_501 h-[41px] w-[1px]" />
              <Button className="border-[1px] border-solid border-teal_A400 flex h-[32px] items-center justify-center rounded-[50%] w-[32px]">
                <Img
                  src="images/img_checkmark_teal_a400.svg"
                  className=""
                  alt="checkmark_One"
                />
              </Button>
              <Line className="bg-gray_501 h-[41px] w-[1px]" />
              <Button className="border-[1px] border-solid border-teal_A400 flex h-[32px] items-center justify-center rounded-[50%] w-[32px]">
                <Img
                  src="images/img_checkmark_teal_a400.svg"
                  className=""
                  alt="checkmark_Two"
                />
              </Button>
              <Line className="bg-gray_501 h-[41px] w-[1px]" />
              <Button className="border-[1px] border-solid border-teal_A400 flex h-[32px] items-center justify-center rounded-[50%] w-[32px]">
                <Img
                  src="images/img_checkmark_teal_a400.svg"
                  className=""
                  alt="checkmark_Three"
                />
              </Button>
              <Line className="bg-gray_501 h-[41px] w-[1px]" />
              <Button className="border-[1px] border-solid border-teal_A400 flex h-[32px] items-center justify-center rounded-[50%] w-[32px]">
                <Img
                  src="images/img_checkmark_teal_a400.svg"
                  className=""
                  alt="checkmark_Four"
                />
              </Button>
              <Line className="bg-gray_501 h-[41px] w-[1px]" />
              <div className="border-[1px] border-solid border-teal_A400 flex h-[40px] md:h-[auto] items-start justify-start px-[19px] py-[8px] rounded-[50%] w-[40px]">
                <div className="bg-teal_A400 border-[1px] border-solid border-teal_A400 flex h-[32px] md:h-[auto] items-center justify-center my-[-5px] mx-[-17px] px-[16px] py-[8px] rounded-[50%] w-[32px]">
                  <Text
                    className="font-inter font-semibold text-gray_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    {props?.one}
                  </Text>
                </div>
              </div>
              <Line className="bg-gray_501 h-[41px] w-[1px]" />
              <Text
                className="border-[1px] border-gray_501 border-solid flex font-inter font-normal h-[32px] items-center justify-center not-italic rounded-[50%] text-center text-gray_501 w-[32px]"
                as="h6"
                variant="h6"
              >
                {props?.componentTwelve}
              </Text>
              <Line className="bg-gray_501 h-[41px] w-[1px]" />
              <Text
                className="border-[1px] border-gray_501 border-solid flex font-inter font-normal h-[32px] items-center justify-center not-italic rounded-[50%] text-center text-gray_501 w-[32px]"
                as="h6"
                variant="h6"
              >
                {props?.componentEleven}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[auto]">
              <Text
                className="font-inter font-light md:ml-[0] ml-[3px] text-gray_300 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                {props?.selectamodel}
              </Text>
              <Text
                className="font-inter font-light md:ml-[0] ml-[3px] mt-[61px] text-gray_300 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                {props?.selectfrontend}
              </Text>
              <Text
                className="font-inter font-light md:ml-[0] ml-[3px] mt-[61px] text-gray_300 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                {props?.selectscreen}
              </Text>
              <Text
                className="font-inter font-light mt-[61px] text-gray_300 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                {props?.selectbackend}
              </Text>
              <Text
                className="font-inter font-light md:ml-[0] ml-[3px] mt-[63px] text-gray_300 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                {props?.selectdatabase}
              </Text>
              <Text
                className="font-inter font-normal leading-[150.00%] md:ml-[0] ml-[3px] mt-[52px] not-italic text-gray_50 text-left sm:w-[100%] w-[98%]"
                as="h5"
                variant="h5"
              >
                {props?.selectcapabilit_One}
              </Text>
              <Text
                className="font-inter font-light md:ml-[0] ml-[3px] mt-[38px] text-gray_300 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                {props?.basicdetails}
              </Text>
              <Text
                className="font-inter font-light md:ml-[0] ml-[3px] mt-[60px] text-gray_300 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                {props?.review}
              </Text>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

CapabilitiesTwoSidemenu.defaultProps = {
  one: "6",
  componentTwelve: "7",
  componentEleven: "8",
  selectamodel: "Select A Model",
  selectfrontend: "Select Front End",
  selectscreen: "Select Screen",
  selectbackend: "Select Back End",
  selectdatabase: "Select Database",
  selectcapabilit_One: "Select Capabilities",
  basicdetails: "Basic Details",
  review: "Review",
};

export default CapabilitiesTwoSidemenu;
