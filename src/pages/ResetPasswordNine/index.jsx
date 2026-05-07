import React from "react";

import SignupOneSidebarframe529821 from "components/SignupOneSidebarframe529821";
import { Text, Input, Img, Line, CheckBox, Button } from "components";

const ResetPasswordNinePage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-inter gap-[123px] sm:gap-[40px] md:gap-[40px] items-center justify-start mx-[auto] p-[24px] sm:px-[20px] w-[100%]">
        <SignupOneSidebarframe529821 className="flex flex-col md:hidden justify-start md:px-[20px] w-[9%]" />
        <div className="flex flex-col gap-[31px] items-center justify-start mb-[155px] md:px-[20px] md:w-[100%] w-[46%]">
          <Text
            className="font-semibold text-center text-gray_50 w-[auto]"
            as="h2"
            variant="h2"
          >
            Reset Your Password
          </Text>
          <div className="flex flex-col items-start justify-start w-[100%]">
            <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
              <Text
                className="font-semibold text-gray_300 text-left w-[auto]"
                variant="body2"
              >
                New Password
              </Text>
              <Input
                wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid flex p-[12px] rounded-[4px] w-[100%]"
                className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                name="textfield"
                placeholder="••••••••••"
                prefix={
                  <Img
                    src="images/img_lock.svg"
                    className="mr-[8px] my-[5px]"
                    alt="lock"
                  />
                }
                suffix={
                  <div className="h-[34px] ml-[35px] w-[34px] rounded-[50%]">
                    <Img
                      src="images/img_eye_gray_501.svg"
                      className="rounded-[17px] my-[auto]"
                      alt="eye"
                    />
                  </div>
                }
              ></Input>
            </div>
            <Line className="bg-teal_A400 h-[6px] mt-[12px] rounded-[3px] w-[100%]" />
            <div className="flex flex-row sm:gap-[40px] items-center justify-between mt-[14px] w-[100%]">
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
            <div className="flex h-[90px] md:h-[94px] justify-end mt-[4px] relative w-[26%]">
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
            <div className="flex flex-col gap-[8px] items-start justify-start mt-[20px] self-stretch sm:w-[100%] w-[auto]">
              <Text
                className="font-semibold text-gray_300 text-left w-[auto]"
                variant="body2"
              >
                Confirm Password
              </Text>
              <Input
                wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid flex p-[12px] rounded-[4px] w-[100%]"
                className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                name="textfield_One"
                placeholder="••••••••••"
                prefix={
                  <Img
                    src="images/img_lock.svg"
                    className="mr-[8px]"
                    alt="lock"
                  />
                }
                suffix={
                  <div className="h-[34px] ml-[35px] w-[34px] rounded-[50%]">
                    <Img
                      src="images/img_eye_gray_501.svg"
                      className="rounded-[17px]"
                      alt="eye"
                    />
                  </div>
                }
              ></Input>
            </div>
            <Button className="bg-gradient  cursor-pointer font-medium mt-[32px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[555px]">
              Change Password
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordNinePage;
