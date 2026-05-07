import React from "react";

import { Img, Text } from "components";

const MyAccountMyDetailsNineSidebar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_801 flex items-start justify-start p-[12px] rounded-[4px] md:w-[100%] w-[92%]">
          <div className="flex items-center justify-start self-stretch w-[auto]">
            <div className="flex flex-row gap-[12px] items-center justify-start self-stretch w-[auto]">
              <Img
                src="images/img_user.svg"
                className="h-[24px] w-[24px]"
                alt="user"
              />
              <Text
                className="font-inter font-medium text-gray_50 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                {props?.text}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="flex items-center justify-start sm:pl-[20px] pl-[24px] py-[12px] rounded-[6px] md:w-[100%] w-[248px]">
            <div className="flex flex-row gap-[12px] items-center justify-start self-stretch w-[auto]">
              <Img
                src="images/img_clock.svg"
                className="h-[24px] w-[24px]"
                alt="clock"
              />
              <Text
                className="font-inter font-normal not-italic text-gray_300 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                {props?.text_One}
              </Text>
            </div>
          </div>
          <div className="flex items-center justify-start mt-[8px] sm:pl-[20px] pl-[24px] py-[12px] rounded-[6px] md:w-[100%] w-[248px]">
            <div className="flex flex-row gap-[12px] items-center justify-start self-stretch w-[auto]">
              <Img
                src="images/img_menu.svg"
                className="h-[24px] w-[24px]"
                alt="menu"
              />
              <Text
                className="font-inter font-normal not-italic text-gray_300 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                {props?.text_Two}
              </Text>
            </div>
          </div>
          <div className="flex items-center justify-start mt-[586px] md:w-[100%] w-[81%]">
            <div className="flex flex-row items-center justify-between w-[100%]">
              <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                <Text
                  className="font-inter font-medium text-center text-gray_50 w-[auto]"
                  variant="body3"
                >
                  {props?.ramg}
                </Text>
                <Text
                  className="font-inter font-light text-center text-gray_50 w-[auto]"
                  variant="body3"
                >
                  {props?.email}
                </Text>
              </div>
              <Img
                src="images/img_arrowright.svg"
                className="h-[24px] w-[24px]"
                alt="arrowright"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MyAccountMyDetailsNineSidebar.defaultProps = {
  text: "My Details",
  text_One: "Password",
  text_Two: "Billing",
  ramg: "Ram G",
  email: "ram@gmail.com",
};

export default MyAccountMyDetailsNineSidebar;
