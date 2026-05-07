import React from "react";

import SignupOneSidebarframe529821 from "components/SignupOneSidebarframe529821";
import { Text, SelectBox, Img, Input, Button } from "components";

const BillingAddressTenPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-inter items-center justify-start mx-[auto] p-[24px] sm:px-[20px] w-[100%]">
        <SignupOneSidebarframe529821 className="flex flex-col md:hidden justify-start md:px-[20px] w-[9%]" />
        <Text
          className="font-semibold mt-[125px] text-center text-gray_50 w-[auto]"
          as="h2"
          variant="h2"
        >
          One Last Step
        </Text>
        <div className="flex flex-col gap-[32px] items-center justify-start mb-[154px] mt-[29px] md:px-[20px] md:w-[100%] w-[46%]">
          <div className="flex flex-col gap-[12px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
            <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
              <Text
                className="font-semibold text-gray_300 text-left w-[auto]"
                variant="body2"
              >
                Billing Address
              </Text>
              <SelectBox
                className="bg-gray_902 border-[1px] border-gray_801 border-solid font-normal not-italic p-[12px] rounded-[4px] text-[12px] text-gray_300 text-left w-[100%]"
                placeholderClassName="text-gray_300"
                name="country"
                placeholder="India"
                getOptionLabel={(e) => (
                  <div className="flex items-center">
                    <Img
                      src="images/img_globe.svg"
                      className="h-[24px] mr-[8px] w-[24px]"
                      alt="globe"
                    />
                    <span>{e.label}</span>
                  </div>
                )}
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_gray_50_24x24.svg"
                    className="h-[24px] w-[24px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
            </div>
            <Input
              wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid flex p-[12px] rounded-[4px] w-[100%]"
              className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
              name="textfield"
              placeholder="F Block 121 Ground Floor"
              prefix={
                <Img
                  src="images/img_home_gray_801.svg"
                  className="mr-[8px] my-[auto]"
                  alt="home"
                />
              }
            ></Input>
            <Input
              wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid flex p-[12px] rounded-[4px] w-[100%]"
              className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
              name="textfield_One"
              placeholder="Punjabi Bagh"
              prefix={
                <Img
                  src="images/img_home_gray_801.svg"
                  className="mr-[8px] my-[auto]"
                  alt="home"
                />
              }
            ></Input>
            <Input
              wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid flex p-[12px] rounded-[4px] w-[100%]"
              className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
              name="textfield_Two"
              placeholder="New Delhi"
              prefix={
                <Img
                  src="images/img_ticket.svg"
                  className="mr-[8px] my-[auto]"
                  alt="ticket"
                />
              }
            ></Input>
            <div className="flex sm:flex-col flex-row gap-[17px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
              <Input
                wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid flex p-[12px] rounded-[4px] sm:w-[100%] w-[49%]"
                className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                name="textfield_Three"
                placeholder="Delhi"
                prefix={
                  <Img
                    src="images/img_flag.svg"
                    className="mr-[8px] my-[auto]"
                    alt="flag"
                  />
                }
              ></Input>
              <Input
                wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid flex p-[12px] rounded-[4px] sm:w-[100%] w-[49%]"
                className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                name="zipcode"
                placeholder="110025"
                prefix={
                  <Img
                    src="images/img_location.svg"
                    className="mr-[8px] my-[auto]"
                    alt="location"
                  />
                }
              ></Input>
            </div>
          </div>
          <Button className="bg-gradient  cursor-pointer font-medium px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[555px]">
            Proceed
          </Button>
        </div>
      </div>
    </>
  );
};

export default BillingAddressTenPage;
