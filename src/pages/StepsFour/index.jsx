import React from "react";

import { Line, List, Button, Img, Text } from "components";
import StepsTwentySixCheckmark from "components/StepsTwentySixCheckmark";
import StepsThirteenStepper from "components/StepsThirteenStepper";
import StepsThirteenColumntwo from "components/StepsThirteenColumntwo";

const StepsFourPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-inter items-center justify-start mx-[auto] p-[164px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="md:h-[245px] h-[288px] max-w-[919px] mx-[auto] relative w-[100%]">
          <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[96%]">
            <div className="flex md:flex-col flex-row gap-[20px] items-start justify-between w-[100%]">
              <Line className="bg-gray_501 md:h-[5px] h-[74px] mb-[26px] md:mt-[0] mt-[145px] md:w-[100%] w-[5px]" />
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[auto]">
                <div className="flex md:flex-col flex-row gap-[20px] items-start justify-between w-[100%]">
                  <div className="flex md:flex-1 flex-col gap-[115px] md:gap-[40px] items-start justify-start md:w-[100%] w-[98%]">
                    <List
                      className="sm:flex-col flex-row gap-[46px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                      orientation="horizontal"
                    >
                      <div className="h-[5px] sm:ml-[0] relative w-[100%]">
                        <Line className="bg-gray_501 h-[5px] m-[auto] w-[100%]" />
                        <Line className="absolute bg-teal_A400 h-[5px] inset-[0] justify-center m-[auto] w-[100%]" />
                      </div>
                      <div className="h-[5px] sm:ml-[0] relative w-[100%]">
                        <Line className="bg-gray_501 h-[5px] m-[auto] w-[100%]" />
                        <Line className="absolute bg-teal_A400 h-[5px] inset-[0] justify-center m-[auto] w-[100%]" />
                      </div>
                      <div className="h-[5px] sm:ml-[0] relative w-[100%]">
                        <Line className="bg-gray_501 h-[5px] m-[auto] w-[100%]" />
                        <Line className="absolute bg-teal_A400 h-[5px] inset-[0] justify-center m-[auto] w-[100%]" />
                      </div>
                    </List>
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                      <Line className="bg-gray_501 h-[5px] w-[30%]" />
                      <Line className="bg-gray_501 h-[5px] w-[30%]" />
                      <Line className="bg-gray_501 h-[5px] w-[30%]" />
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[46px] items-center justify-start md:w-[100%] w-[65%]">
                      <Line className="bg-gray_501 h-[5px] w-[46%]" />
                      <Line className="bg-gray_501 h-[5px] w-[46%]" />
                    </div>
                  </div>
                  <div className="h-[74px] md:mt-[0] mt-[25px] relative w-[1%] md:w-[100%]">
                    <Line className="bg-gray_501 h-[74px] m-[auto] w-[5px]" />
                    <Line className="absolute bg-teal_A400 h-[35px] inset-x-[0] mx-[auto] top-[0] w-[5px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <StepsTwentySixCheckmark className="absolute border-[1px] border-solid border-teal_A400 flex h-[48px] items-center justify-center left-[0] sm:px-[20px] px-[24px] py-[12px] rounded-[50%] top-[0] w-[48px]" />
          <StepsTwentySixCheckmark className="absolute border-[1px] border-solid border-teal_A400 flex h-[48px] items-center justify-center left-[32%] sm:px-[20px] px-[24px] py-[12px] rounded-[50%] top-[0] w-[48px]" />
          <StepsTwentySixCheckmark className="absolute border-[1px] border-solid border-teal_A400 flex h-[48px] items-center justify-center sm:px-[20px] px-[24px] py-[12px] right-[32%] rounded-[50%] top-[0] w-[48px]" />
          <StepsThirteenStepper
            className="absolute border-[1px] border-solid border-teal_A400 flex flex-col h-[48px] md:h-[auto] items-center justify-start sm:px-[20px] px-[22.8px] py-[9.6px] right-[0] rounded-[50%] top-[0] sm:w-[100%] w-[48px]"
            one="4"
          />
          <div className="absolute flex md:flex-col flex-row md:gap-[40px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[37%]">
            <StepsThirteenColumntwo className="border-[1px] border-gray_501 border-solid flex font-normal h-[48px] items-center justify-center not-italic sm:px-[20px] rounded-[50%] text-[16px] text-center text-gray_501 w-[48px]" />
            <StepsThirteenColumntwo className="border-[1px] border-gray_501 border-solid flex font-normal h-[48px] items-center justify-center not-italic sm:px-[20px] rounded-[50%] text-[16px] text-center text-gray_501 w-[48px]" />
          </div>
          <StepsThirteenColumntwo className="absolute border-[1px] border-gray_501 border-solid flex font-normal h-[max-content] inset-y-[0] items-center justify-center left-[0] my-[auto] not-italic sm:px-[20px] rounded-[50%] text-[16px] text-center text-gray_501 w-[48px]" />
          <StepsThirteenColumntwo className="absolute border-[1px] border-gray_501 border-solid bottom-[0] flex font-normal h-[48px] items-center justify-center left-[32%] not-italic sm:px-[20px] rounded-[50%] text-[16px] text-center text-gray_501 w-[48px]" />
          <StepsThirteenColumntwo className="absolute border-[1px] border-gray_501 border-solid bottom-[0] flex font-normal h-[48px] items-center justify-center left-[0] not-italic sm:px-[20px] rounded-[50%] text-[16px] text-center text-gray_501 w-[48px]" />
          <StepsThirteenColumntwo className="absolute border-[1px] border-gray_501 border-solid bottom-[0] flex font-normal h-[48px] items-center justify-center not-italic sm:px-[20px] right-[32%] rounded-[50%] text-[16px] text-center text-gray_501 w-[48px]" />
          <StepsThirteenColumntwo className="absolute border-[1px] border-gray_501 border-solid flex font-normal h-[max-content] inset-y-[0] items-center justify-center my-[auto] not-italic sm:px-[20px] right-[0] rounded-[50%] text-[16px] text-center text-gray_501 w-[48px]" />
        </div>
        <Text
          className="font-semibold mt-[88px] text-center text-gray_50 w-[auto]"
          as="h2"
          variant="h2"
        >
          Generated Test Cases
        </Text>
        <Text
          className="font-normal leading-[150.00%] mt-[16px] not-italic text-center text-gray_501 sm:w-[100%] w-[93%]"
          as="h6"
          variant="h6"
        >
          Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
          commodo consectetur convallis risus. Sed condimentum enim dignissim
          adipiscing faucibus consequat, urna. Viverra purus et erat auctor
          aliquam. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin
          imperdiet commodo consectetur convallis risus
        </Text>
      </div>
    </>
  );
};

export default StepsFourPage;
