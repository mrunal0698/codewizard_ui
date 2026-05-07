import React from "react";

import { Line, Button, Img, Text } from "components";
import StepsTwentySixCheckmark from "components/StepsTwentySixCheckmark";
import StepsThirteenStepper from "components/StepsThirteenStepper";
import StepsThirteenColumntwo from "components/StepsThirteenColumntwo";

const StepsFortyNinePage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-inter items-center justify-center mx-[auto] p-[180px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="h-[168px] sm:h-[196px] md:h-[340px] max-w-[919px] mt-[28px] mx-[auto] relative w-[100%]">
          <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[93%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[63%]">
                <div className="flex sm:flex-col flex-row sm:gap-[46px] items-center justify-between w-[100%]">
                  <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[46%]">
                    <div className="flex flex-col gap-[115px] md:gap-[40px] items-center justify-start w-[100%]">
                      <div className="h-[5px] relative w-[100%]">
                        <Line className="bg-gray_501 h-[5px] m-[auto] w-[100%]" />
                        <Line className="absolute bg-teal_A400 h-[5px] inset-[0] justify-center m-[auto] w-[100%]" />
                      </div>
                      <div className="h-[5px] overflow-hidden relative w-[100%]">
                        <div className="w-full h-full absolute bg-gray_501"></div>
                        <div
                          className="h-full absolute bg-teal_A400"
                          style={{ width: "36%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-[115px] md:gap-[40px] items-center justify-start sm:w-[100%] w-[46%]">
                    <div className="h-[5px] relative w-[100%]">
                      <Line className="bg-gray_501 h-[5px] m-[auto] w-[100%]" />
                      <Line className="absolute bg-teal_A400 h-[5px] inset-[0] justify-center m-[auto] w-[100%]" />
                    </div>
                    <div className="h-[5px] relative w-[100%]">
                      <Line className="bg-gray_501 h-[5px] m-[auto] w-[100%]" />
                      <Line className="absolute bg-teal_A400 h-[5px] inset-[0] justify-center m-[auto] w-[100%]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[115px] md:gap-[40px] items-center justify-start md:ml-[0] ml-[46px] md:w-[100%] w-[29%]">
                <div className="h-[5px] relative w-[100%]">
                  <Line className="bg-gray_501 h-[5px] m-[auto] w-[100%]" />
                  <Line className="absolute bg-teal_A400 h-[5px] inset-[0] justify-center m-[auto] w-[100%]" />
                </div>
                <div className="h-[5px] relative w-[100%]">
                  <Line className="bg-gray_501 h-[5px] m-[auto] w-[100%]" />
                  <Line className="absolute bg-teal_A400 h-[5px] inset-[0] justify-center m-[auto] w-[100%]" />
                </div>
              </div>
              <div className="h-[74px] md:ml-[0] ml-[21px] relative w-[1%] md:w-[100%]">
                <Line className="bg-gray_501 h-[74px] m-[auto] w-[5px]" />
                <Line className="absolute bg-teal_A400 h-[74px] inset-[0] justify-center m-[auto] w-[5px]" />
              </div>
            </div>
          </div>
          <StepsTwentySixCheckmark className="absolute border-[1px] border-solid border-teal_A400 flex h-[48px] items-center justify-center left-[0] sm:px-[20px] px-[24px] py-[12px] rounded-[50%] top-[0] w-[48px]" />
          <div className="absolute flex md:flex-col flex-row md:gap-[40px] h-[100%] inset-[0] items-center justify-center m-[auto] w-[37%]">
            <div className="flex flex-col md:gap-[40px] gap-[72px] items-center justify-start md:w-[100%] w-[15%]">
              <StepsTwentySixCheckmark className="border-[1px] border-solid border-teal_A400 flex h-[48px] items-center justify-center sm:px-[20px] px-[24px] py-[12px] rounded-[50%] w-[48px]" />
              <StepsThirteenStepper
                className="border-[1px] border-solid border-teal_A400 flex flex-col h-[48px] md:h-[auto] items-start justify-start sm:px-[20px] px-[22.8px] py-[9.6px] rounded-[50%] sm:w-[100%] w-[48px]"
                one="7"
              />
            </div>
            <div className="flex flex-col md:gap-[40px] gap-[72px] items-center justify-start md:w-[100%] w-[15%]">
              <StepsTwentySixCheckmark className="border-[1px] border-solid border-teal_A400 flex h-[48px] items-center justify-center sm:px-[20px] px-[24px] py-[12px] rounded-[50%] w-[48px]" />
              <StepsTwentySixCheckmark className="border-[1px] border-solid border-teal_A400 flex h-[48px] items-center justify-center sm:px-[20px] px-[24px] py-[12px] rounded-[50%] w-[48px]" />
            </div>
          </div>
          <StepsTwentySixCheckmark className="absolute border-[1px] border-solid border-teal_A400 flex h-[48px] items-center justify-center sm:px-[20px] px-[24px] py-[12px] right-[0] rounded-[50%] top-[0] w-[48px]" />
          <StepsTwentySixCheckmark className="absolute border-[1px] border-solid border-teal_A400 bottom-[0] flex h-[48px] items-center justify-center sm:px-[20px] px-[24px] py-[12px] right-[0] rounded-[50%] w-[48px]" />
          <StepsThirteenColumntwo className="absolute border-[1px] border-gray_501 border-solid bottom-[0] flex font-normal h-[48px] items-center justify-center left-[0] not-italic sm:px-[20px] rounded-[50%] text-[16px] text-center text-gray_501 w-[48px]" />
        </div>
        <Text
          className="font-semibold mt-[123px] text-center text-gray_50 w-[auto]"
          as="h2"
          variant="h2"
        >
          Pushing Code to Github
        </Text>
        <Text
          className="font-normal leading-[150.00%] mb-[29px] mt-[13px] not-italic text-center text-gray_501 sm:w-[100%] w-[96%]"
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

export default StepsFortyNinePage;
