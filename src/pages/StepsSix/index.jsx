import React from "react";

import { Line, Button, Img, Text } from "components";
import StepsTwentySixCheckmark from "components/StepsTwentySixCheckmark";
import StepsThirteenColumntwo from "components/StepsThirteenColumntwo";

const StepsSixPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-inter items-center justify-end mx-[auto] p-[92px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="h-[288px] md:h-[317px] max-w-[920px] mt-[72px] mx-[auto] relative w-[100%]">
          <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[96%]">
            <div className="flex md:flex-col flex-row gap-[20px] items-start justify-between w-[100%]">
              <Line className="bg-gray_501 md:h-[5px] h-[74px] mb-[26px] md:mt-[0] mt-[145px] md:w-[100%] w-[5px]" />
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[auto]">
                <div className="flex md:flex-col flex-row md:gap-[46px] items-start justify-between w-[100%]">
                  <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[65%]">
                    <div className="flex flex-col gap-[115px] md:gap-[40px] items-center justify-start w-[100%]">
                      <div className="sm:gap-[20px] gap-[46px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                        <div className="h-[5px] relative w-[100%]">
                          <Line className="bg-gray_501 h-[5px] m-[auto] w-[100%]" />
                          <Line className="absolute bg-teal_A400 h-[5px] inset-[0] justify-center m-[auto] w-[100%]" />
                        </div>
                        <div className="h-[5px] relative w-[100%]">
                          <Line className="bg-gray_501 h-[5px] m-[auto] w-[100%]" />
                          <Line className="absolute bg-teal_A400 h-[5px] inset-[0] justify-center m-[auto] w-[100%]" />
                        </div>
                        <Line className="bg-gray_501 h-[5px] w-[100%]" />
                        <Line className="bg-gray_501 h-[5px] w-[100%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-[46px] items-center justify-between w-[100%]">
                        <Line className="bg-gray_501 h-[5px] w-[46%]" />
                        <Line className="bg-gray_501 h-[5px] w-[46%]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[115px] md:gap-[40px] items-center justify-start md:w-[100%] w-[30%]">
                    <div className="h-[5px] relative w-[100%]">
                      <Line className="bg-gray_501 h-[5px] m-[auto] w-[100%]" />
                      <Line className="absolute bg-teal_A400 h-[5px] inset-[0] justify-center m-[auto] w-[100%]" />
                    </div>
                    <Line className="bg-gray_501 h-[5px] w-[100%]" />
                  </div>
                </div>
              </div>
              <div className="h-[74px] md:mt-[0] mt-[25px] relative w-[1%] md:w-[100%]">
                <Line className="bg-gray_501 h-[74px] m-[auto] w-[5px]" />
                <Line className="absolute bg-teal_A400 h-[74px] inset-[0] justify-center m-[auto] w-[5px]" />
              </div>
            </div>
          </div>
          <StepsTwentySixCheckmark className="absolute border-[1px] border-solid border-teal_A400 flex h-[48px] items-center justify-center left-[0] sm:px-[20px] px-[24px] py-[12px] rounded-[50%] top-[0] w-[48px]" />
          <StepsTwentySixCheckmark className="absolute border-[1px] border-solid border-teal_A400 flex h-[48px] items-center justify-center left-[32%] sm:px-[20px] px-[24px] py-[12px] rounded-[50%] top-[0] w-[48px]" />
          <StepsTwentySixCheckmark className="absolute border-[1px] border-solid border-teal_A400 flex h-[48px] items-center justify-center sm:px-[20px] px-[24px] py-[12px] right-[32%] rounded-[50%] top-[0] w-[48px]" />
          <StepsTwentySixCheckmark className="absolute border-[1px] border-solid border-teal_A400 flex h-[48px] items-center justify-center sm:px-[20px] px-[24px] py-[12px] right-[0] rounded-[50%] top-[0] w-[48px]" />
          <Img
            src="images/img_close_red_400_48x48.svg"
            className="absolute h-[48px] inset-y-[0] my-[auto] right-[0] rounded-[50%] w-[48px]"
            alt="close"
          />
          <div className="absolute flex md:flex-col flex-row md:gap-[40px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[37%]">
            <StepsThirteenColumntwo className="border-[1px] border-gray_501 border-solid flex font-normal h-[48px] items-center justify-center not-italic sm:px-[20px] rounded-[50%] text-[16px] text-center text-gray_501 w-[48px]" />
            <StepsThirteenColumntwo className="border-[1px] border-gray_501 border-solid flex font-normal h-[48px] items-center justify-center not-italic sm:px-[20px] rounded-[50%] text-[16px] text-center text-gray_501 w-[48px]" />
          </div>
          <StepsThirteenColumntwo className="absolute border-[1px] border-gray_501 border-solid flex font-normal h-[max-content] inset-y-[0] items-center justify-center left-[0] my-[auto] not-italic sm:px-[20px] rounded-[50%] text-[16px] text-center text-gray_501 w-[48px]" />
          <StepsThirteenColumntwo className="absolute border-[1px] border-gray_501 border-solid bottom-[0] flex font-normal h-[48px] items-center justify-center left-[32%] not-italic sm:px-[20px] rounded-[50%] text-[16px] text-center text-gray_501 w-[48px]" />
          <StepsThirteenColumntwo className="absolute border-[1px] border-gray_501 border-solid bottom-[0] flex font-normal h-[48px] items-center justify-center left-[0] not-italic sm:px-[20px] rounded-[50%] text-[16px] text-center text-gray_501 w-[48px]" />
          <StepsThirteenColumntwo className="absolute border-[1px] border-gray_501 border-solid bottom-[0] flex font-normal h-[48px] items-center justify-center not-italic sm:px-[20px] right-[32%] rounded-[50%] text-[16px] text-center text-gray_501 w-[48px]" />
        </div>
        <Text
          className="font-semibold mt-[91px] text-center text-gray_50 w-[auto]"
          as="h2"
          variant="h2"
        >
          Code Complication Failed
        </Text>
        <Text
          className="font-normal leading-[150.00%] mt-[13px] not-italic text-center text-gray_501 sm:w-[100%] w-[81%]"
          as="h6"
          variant="h6"
        >
          Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
          commodo consectetur convallis risus. Sed condimentum enim dignissim
          adipiscing faucibus consequat, urna. Viverra purus et erat auctor
          aliquam. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin
          imperdiet commodo consectetur convallis risus
        </Text>
        <Button
          className="bg-gradient  cursor-pointer flex items-center justify-center min-w-[161px] mt-[32px] px-[64px] py-[10px] rounded-[4px] w-[auto]"
          leftIcon={
            <Img
              src="images/img_arrowleft.svg"
              className="mr-[8px]"
              alt="arrow_left"
            />
          }
        >
          <div className="font-medium md:px-[40px] sm:px-[20px] text-[14px] text-gray_900 text-left">
            Go To Home
          </div>
        </Button>
      </div>
    </>
  );
};

export default StepsSixPage;
