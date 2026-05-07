import React from "react";

import MyAccountMyDetailsNineSidemenu from "components/MyAccountMyDetailsNineSidemenu";
import MyAccountPasswordSidebar from "components/MyAccountPasswordSidebar";
import { Text, Line, Input, Img, CheckBox, Button } from "components";

const MyAccountPasswordPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start max-w-[1256px] mx-[auto] md:px-[20px] w-[100%]">
          <MyAccountMyDetailsNineSidemenu className="bg-gray_901 border-gray_801 border-r-[1px] border-solid flex flex-col md:hidden justify-start w-[72px]" />
          <MyAccountPasswordSidebar
            className="bg-gray_901 flex flex-1 flex-col items-center justify-start py-[24px] w-[100%]"
            text="My details"
            text_One="Billing"
            ramg="Ram G"
            email="ram@gmail.com"
          />
          <div className="flex flex-1 flex-col gap-[179px] md:gap-[40px] items-center justify-start md:ml-[0] ml-[24px] w-[100%]">
            <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
              <div className="flex items-start justify-start max-w-[912px] w-[100%]">
                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-medium text-gray_50 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Password
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_501 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Please enter your current password to change your
                        password.
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray_801 h-[1px] w-[100%]" />
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-gray_50 text-left w-[auto]"
                    variant="body2"
                  >
                    Current Password
                  </Text>
                  <Input
                    wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid flex px-[12px] py-[15px] rounded-[4px] sm:w-[100%] w-[512px]"
                    className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                    name="textfield"
                    placeholder="replicacia"
                    suffix={
                      <div className="h-[34px] ml-[35px] w-[34px] rounded-[50%]">
                        <Img
                          src="images/img_component_2.svg"
                          className="rounded-[17px] my-[auto]"
                          alt="Component 2"
                        />
                      </div>
                    }
                  ></Input>
                  <Text
                    className="font-normal not-italic text-gray_501 text-right w-[auto]"
                    variant="body3"
                  >
                    Forgot password?
                  </Text>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-gray_50 text-left w-[auto]"
                    variant="body2"
                  >
                    New Password
                  </Text>
                  <Input
                    wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid flex px-[12px] py-[15px] rounded-[4px] sm:w-[100%] w-[512px]"
                    className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                    name="textfield_One"
                    placeholder="replicacia"
                    suffix={
                      <div className="h-[34px] ml-[35px] w-[34px] rounded-[50%]">
                        <Img
                          src="images/img_component_2.svg"
                          className="rounded-[17px] my-[auto]"
                          alt="Component 2"
                        />
                      </div>
                    }
                  ></Input>
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <Line className="bg-teal_A400 h-[6px] rounded-[3px] w-[100%]" />
                      <div className="flex flex-row items-center justify-between mt-[14px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_50 text-left w-[auto]"
                          variant="body3"
                        >
                          Your password is strong and safe to use.
                        </Text>
                        <Text
                          className="font-semibold text-left text-teal_A400 w-[auto]"
                          variant="body3"
                        >
                          Strong
                        </Text>
                      </div>
                      <div className="flex h-[90px] md:h-[94px] justify-end mt-[4px] relative w-[29%]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="absolute h-[12px] left-[0] top-[4%] w-[12px]"
                          alt="checkmark"
                        />
                        <Img
                          src="images/img_checkmark.svg"
                          className="absolute h-[12px] left-[0] top-[24%] w-[12px]"
                          alt="checkmark_One"
                        />
                        <Img
                          src="images/img_checkmark.svg"
                          className="absolute bottom-[22%] h-[12px] left-[0] w-[12px]"
                          alt="checkmark_Two"
                        />
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[12px] mb-[2px] mt-[auto] w-[12px]"
                          alt="checkmark_Three"
                        />
                        <CheckBox
                          className="font-normal justify-center leading-[150.00%] m-[auto] not-italic text-[12px] text-gray_50 text-left"
                          inputClassName="absolute mr-[5px]"
                          name="asymbolanupperc_One"
                          label="&lt;&gt;a symbol&lt;br /&gt;an uppercase letter&lt;br /&gt;a lowercase letter&lt;br /&gt;a number&lt;br /&gt;8 characters minimum&lt;/&gt;"
                        ></CheckBox>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-gray_50 text-left w-[auto]"
                    variant="body2"
                  >
                    Confirm Password
                  </Text>
                  <Input
                    wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid flex px-[12px] py-[15px] rounded-[4px] sm:w-[100%] w-[512px]"
                    className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                    name="textfield_Two"
                    placeholder="replicacia"
                    suffix={
                      <div className="h-[34px] ml-[35px] w-[34px] rounded-[50%]">
                        <Img
                          src="images/img_component_2.svg"
                          className="rounded-[17px] my-[auto]"
                          alt="Component 2"
                        />
                      </div>
                    }
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-start justify-start max-w-[912px] w-[100%]">
              <Line className="bg-gray_801 h-[1px] w-[100%]" />
              <div className="flex items-start justify-start w-[100%]">
                <div className="flex flex-row gap-[12px] items-center justify-end w-[100%]">
                  <Button className="border-[1px] border-solid border-teal_A400 cursor-pointer flex-1 font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[100%]">
                    Cancel
                  </Button>
                  <Button className="bg-gradient  cursor-pointer flex-1 font-medium px-[12px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_900 w-[100%]">
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccountPasswordPage;
