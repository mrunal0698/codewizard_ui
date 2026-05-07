import React from "react";

import SignupOneSidebarframe529821 from "components/SignupOneSidebarframe529821";
import { Text, Input, Img, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const ResetPasswordTwoPage = () => {
  const navigate = useNavigate();

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
                wrapClassName="common-pointer bg-gray_902 border-[1px] border-gray_501 border-solid flex p-[12px] rounded-[4px] w-[100%]"
                className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                onClick={() => navigate("/resetpasswordthree")}
                name="textfield"
                placeholder="•••••|"
                prefix={
                  <Img
                    src="images/img_lock_gray_300.svg"
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
            <div className="md:h-[18px] h-[6px] mt-[12px] relative w-[100%]">
              <Line className="absolute bg-gray_501 h-[6px] inset-[0] justify-center m-[auto] rounded-[3px] w-[100%]" />
              <Line className="absolute bg-red_400 h-[6px] inset-y-[0] left-[0] my-[auto] rounded-[3px] w-[20%]" />
            </div>
            <div className="flex flex-row sm:gap-[40px] items-start justify-between mt-[13px] w-[100%]">
              <Text
                className="font-normal not-italic text-gray_50 text-left w-[auto]"
                variant="body3"
              >
                Your password must contain:
              </Text>
              <Text
                className="font-semibold text-left text-red_400 w-[auto]"
                variant="body3"
              >
                Weak
              </Text>
            </div>
            <Text
              className="font-normal leading-[150.00%] mt-[4px] not-italic text-gray_50 text-left"
              variant="body3"
            >
              <>
                a symbol
                <br />
                an uppercase letter
                <br />a lowercase letter
                <br />a number
                <br />8 characters minimum
              </>
            </Text>
            <div className="flex flex-col gap-[8px] items-start justify-start mt-[20px] self-stretch sm:w-[100%] w-[auto]">
              <Text
                className="font-semibold text-gray_300 text-left w-[auto]"
                variant="body2"
              >
                Confirm Password
              </Text>
              <Input
                wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid flex p-[12px] rounded-[4px] w-[100%]"
                className="font-light p-[0] placeholder:text-gray_801 text-[12px] text-gray_801 text-left w-[100%]"
                type="password"
                name="textfield_One"
                placeholder="Confirm your new password"
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
                      src="images/img_eye.svg"
                      className="rounded-[17px]"
                      alt="eye"
                    />
                  </div>
                }
              ></Input>
            </div>
            <Button className="bg-teal_900 cursor-pointer font-medium mt-[32px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[555px]">
              Change Password
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordTwoPage;
