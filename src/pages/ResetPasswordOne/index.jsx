import React from "react";

import SignupOneSidebarframe529821 from "components/SignupOneSidebarframe529821";
import { Text, Input, Img, Button } from "components";
import LoginFourStackeye from "components/LoginFourStackeye";

const ResetPasswordOnePage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-inter items-center justify-start mx-[auto] p-[24px] sm:px-[20px] w-[100%]">
        <SignupOneSidebarframe529821 className="flex flex-col md:hidden justify-start md:px-[20px] w-[9%]" />
        <Text
          className="font-semibold mt-[197px] text-center text-gray_50 w-[auto]"
          as="h2"
          variant="h2"
        >
          Reset Your Password
        </Text>
        <div className="flex flex-col gap-[32px] items-center justify-start mb-[223px] mt-[31px] md:px-[20px] md:w-[100%] w-[46%]">
          <div className="flex flex-col gap-[20px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
            <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
              <Text
                className="font-semibold text-gray_50 text-left w-[auto]"
                variant="body2"
              >
                New Password
              </Text>
              <LoginFourStackeye className="bg-gray_902 border-[1px] border-gray_801 border-solid h-[48px] p-[12px] relative rounded-[4px] sm:w-[100%] w-[555px]" />
            </div>
            <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
              <Text
                className="font-semibold text-gray_50 text-left w-[auto]"
                variant="body2"
              >
                Confirm Password
              </Text>
              <Input
                wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid flex p-[12px] rounded-[4px] w-[100%]"
                className="font-light p-[0] placeholder:text-gray_801 text-[12px] text-gray_801 text-left w-[100%]"
                type="password"
                name="textfield"
                placeholder="Confirm your new password"
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
                      src="images/img_eye.svg"
                      className="rounded-[17px] my-[auto]"
                      alt="eye"
                    />
                  </div>
                }
              ></Input>
            </div>
          </div>
          <Button className="bg-teal_900 cursor-pointer font-medium px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[555px]">
            Change Password
          </Button>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordOnePage;
