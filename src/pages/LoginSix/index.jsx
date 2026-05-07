import React from "react";

import SignupOneSidebarframe529821 from "components/SignupOneSidebarframe529821";
import { Text, Button, Img, Line, Input } from "components";
import SignupOneSocial from "components/SignupOneSocial";
import SignupOneSocial1 from "components/SignupOneSocial1";

const LoginSixPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-inter gap-[25px] items-center justify-start mx-[auto] p-[24px] sm:px-[20px] w-[100%]">
        <SignupOneSidebarframe529821 className="flex flex-col md:hidden justify-start md:px-[20px] w-[9%]" />
        <div className="flex flex-col items-center justify-start mb-[8px] md:px-[20px] md:w-[100%] w-[46%]">
          <Text
            className="font-semibold text-center text-gray_50 w-[auto]"
            as="h2"
            variant="h2"
          >
            Welcome Back!
          </Text>
          <Text
            className="font-normal mt-[11px] not-italic text-center text-gray_501 w-[auto]"
            as="h6"
            variant="h6"
          >
            It’s great to see you.
          </Text>
          <div className="flex flex-col items-center justify-start mt-[32px] w-[100%]">
            <SignupOneSocial
              className="border-[1px] border-gray_801 border-solid flex flex-col items-center justify-center sm:px-[20px] md:px-[40px] px-[64px] py-[12px] rounded-[4px] sm:w-[100%] w-[555px]"
              text="Login with Google"
            />
            <Button
              className="border-[1px] border-gray_801 border-solid cursor-pointer flex items-center justify-center sm:min-w-[100%] min-w-[555px] mt-[20px] px-[64px] py-[12px] rounded-[4px] w-[auto]"
              leftIcon={
                <Img
                  src="images/img_settings.svg"
                  className="mr-[12px]"
                  alt="settings"
                />
              }
            >
              <div className="font-normal md:px-[40px] not-italic sm:px-[20px] text-[16px] text-gray_300 text-left">
                Login with Github
              </div>
            </Button>
            <SignupOneSocial1
              className="border-[1px] border-gray_801 border-solid flex flex-col items-center justify-center mt-[20px] sm:px-[20px] md:px-[40px] px-[64px] py-[12px] rounded-[4px] sm:w-[100%] w-[555px]"
              text_One="Login with Linkedin"
            />
            <div className="flex sm:flex-col flex-row gap-[12px] items-center justify-between mt-[42px] w-[100%]">
              <Line className="bg-gray_801 h-[1px] sm:mt-[0] my-[9px] w-[46%]" />
              <Text
                className="font-medium text-gray_50 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                OR
              </Text>
              <Line className="bg-gray_801 h-[1px] sm:mt-[0] my-[9px] w-[46%]" />
            </div>
            <div className="flex flex-col gap-[20px] items-start justify-start mt-[41px] self-stretch sm:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                <Text
                  className="font-semibold text-gray_300 text-left w-[auto]"
                  variant="body2"
                >
                  Email ID
                </Text>
                <Input
                  wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid flex p-[12px] rounded-[4px] w-[100%]"
                  className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                  type="email"
                  name="email"
                  placeholder="ram@gmail.com"
                  prefix={
                    <Img
                      src="images/img_mail.svg"
                      className="mr-[8px] my-[auto]"
                      alt="mail"
                    />
                  }
                ></Input>
              </div>
              <div className="flex flex-col gap-[8px] items-end justify-start self-stretch sm:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Password
                  </Text>
                  <Input
                    wrapClassName="bg-gray_905 border-[2px] border-pink_900 border-solid flex p-[12px] rounded-[4px] w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-red_400 text-[12px] text-left text-red_400 w-[100%]"
                    name="textfield"
                    placeholder="••••••••••"
                    prefix={
                      <Img
                        src="images/img_lock_red_400.svg"
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
                <div className="flex flex-row gap-[8px] items-start justify-between sm:w-[100%] w-[555px]">
                  <Text
                    className="font-normal not-italic text-left text-red_400 w-[auto]"
                    variant="body3"
                  >
                    Incorrect Password!
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_501 text-left w-[auto]"
                    variant="body3"
                  >
                    Forgot password?
                  </Text>
                </div>
              </div>
            </div>
            <Button className="bg-teal_900 cursor-pointer font-medium mt-[36px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[555px]">
              Proceed
            </Button>
            <Text
              className="font-medium mt-[19px] text-gray_501 text-left w-[auto]"
              variant="body2"
            ></Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSixPage;
