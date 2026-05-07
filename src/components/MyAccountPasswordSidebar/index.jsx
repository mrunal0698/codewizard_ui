import React from "react";

import { Img, Text, Input } from "components";

const MyAccountPasswordSidebar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex items-center justify-start sm:pl-[20px] pl-[24px] py-[12px] rounded-[6px] md:w-[100%] w-[248px]">
          <div className="flex flex-row gap-[12px] items-center justify-start self-stretch w-[auto]">
            <Img
              src="images/img_user_gray_300.svg"
              className="h-[24px] w-[24px]"
              alt="user"
            />
            <Text
              className="font-inter font-normal not-italic text-gray_300 text-left w-[auto]"
              as="h6"
              variant="h6"
            >
              {props?.text}
            </Text>
          </div>
        </div>
        <Input
          wrapClassName="bg-gray_801 flex mt-[8px] pl-[12px] pr-[35px] py-[12px] rounded-[4px] w-[92%]"
          className="font-inter font-medium p-[0] placeholder:text-gray_50 sm:pr-[20px] text-[16px] text-gray_50 text-left w-[100%]"
          name="menuitem"
          placeholder="Password"
          prefix={
            <Img
              src="images/img_clock_gray_50.svg"
              className="mr-[12px] my-[auto]"
              alt="clock"
            />
          }
        ></Input>
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
              {props?.text_One}
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
    </>
  );
};

MyAccountPasswordSidebar.defaultProps = {
  text: "My details",
  text_One: "Billing",
  ramg: "Ram G",
  email: "ram@gmail.com",
};

export default MyAccountPasswordSidebar;
