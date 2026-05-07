import React from "react";

import { Line, Button, Img, Text } from "components";
import StepsTwentySixCheckmark from "components/StepsTwentySixCheckmark";
import StepsThirteenColumntwo from "components/StepsThirteenColumntwo";
import StepsThirteenStepper from "components/StepsThirteenStepper";

const StepsFortyFivePage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-inter gap-[123px] sm:gap-[40px] md:gap-[40px] items-center justify-center mx-[auto] p-[180px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="h-[168px] md:h-[196px] max-w-[919px] mt-[28px] mx-[auto] relative w-[100%]">
          <div className="absolute flex h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] w-[69%]">
            <div className="flex flex-col md:gap-[40px] gap-[72px] items-center justify-start w-[100%]">
              <div className="h-[48px] relative sm:w-[100%] w-[86%]">
                <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[46px] items-center justify-between w-[100%]">
                    <div className="h-[5px] relative sm:w-[100%] w-[46%]">
                      <Line className="bg-gray_501 h-[5px] m-[auto] w-[100%]" />
                      <Line className="absolute bg-teal_A400 h-[5px] inset-[0] justify-center m-[auto] w-[100%]" />
                    </div>
                    <div className="h-[5px] relative sm:w-[100%] w-[46%]">
                      <Line className="bg-gray_501 h-[5px] m-[auto] w-[100%]" />
                      <Line className="absolute bg-teal_A400 h-[5px] inset-[0] justify-center m-[auto] w-[100%]" />
                    </div>
                  </div>
                </div>
                <StepsTwentySixCheckmark className="absolute border-[1px] border-solid border-teal_A400 flex h-[48px] inset-[0] items-center justify-center m-[auto] sm:px-[20px] px-[24px] py-[12px] rounded-[50%] w-[48px]" />
              </div>
              <div className="h-[48px] relative w-[100%]">
                <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[86%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[46px] items-center justify-between w-[100%]">
                    <Line className="bg-gray_501 h-[5px] w-[46%]" />
                    <Line className="bg-gray_501 h-[5px] w-[46%]" />
                  </div>
                </div>
                <StepsThirteenColumntwo className="absolute border-[1px] border-gray_501 border-solid flex font-normal h-[100%] inset-[0] items-center justify-center m-[auto] not-italic sm:px-[20px] rounded-[50%] text-[16px] text-center text-gray_501 w-[max-content]" />
                <StepsThirteenColumntwo className="absolute border-[1px] border-gray_501 border-solid flex font-normal h-[100%] inset-y-[0] items-center justify-center left-[0] my-[auto] not-italic sm:px-[20px] rounded-[50%] text-[16px] text-center text-gray_501 w-[48px]" />
                <StepsThirteenColumntwo className="absolute border-[1px] border-gray_501 border-solid flex font-normal h-[100%] inset-y-[0] items-center justify-center my-[auto] not-italic sm:px-[20px] right-[0] rounded-[50%] text-[16px] text-center text-gray_501 w-[48px]" />
              </div>
            </div>
          </div>
          <div className="absolute md:h-[125px] h-[168px] inset-y-[0] my-[auto] right-[0] w-[37%]">
            <div className="absolute flex h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[6%] w-[81%]">
              <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                <div className="flex flex-col gap-[115px] md:gap-[40px] items-center justify-start w-[auto]">
                  <div className="h-[5px] overflow-hidden relative w-[100%]">
                    <div className="w-full h-full absolute bg-gray_501"></div>
                    <div
                      className="h-full absolute bg-teal_A400"
                      style={{ width: "36%" }}
                    ></div>
                  </div>
                  <Line className="bg-gray_501 h-[5px] w-[100%]" />
                </div>
                <Line className="bg-gray_501 h-[74px] my-[25px] w-[5px]" />
              </div>
            </div>
            <StepsThirteenStepper
              className="absolute border-[1px] border-solid border-teal_A400 flex flex-col h-[48px] md:h-[auto] items-center justify-start left-[0] sm:px-[20px] px-[22.8px] py-[9.6px] rounded-[50%] top-[0] sm:w-[100%] w-[48px]"
              one="3"
            />
            <StepsThirteenColumntwo className="absolute border-[1px] border-gray_501 border-solid flex font-normal h-[48px] items-center justify-center not-italic sm:px-[20px] right-[0] rounded-[50%] text-[16px] text-center text-gray_501 top-[0] w-[48px]" />
            <StepsThirteenColumntwo className="absolute border-[1px] border-gray_501 border-solid bottom-[0] flex font-normal h-[48px] items-center justify-center not-italic sm:px-[20px] right-[0] rounded-[50%] text-[16px] text-center text-gray_501 w-[48px]" />
          </div>
          <StepsTwentySixCheckmark className="absolute border-[1px] border-solid border-teal_A400 flex h-[48px] items-center justify-center left-[0] sm:px-[20px] px-[24px] py-[12px] rounded-[50%] top-[0] w-[48px]" />
        </div>
        <div className="flex flex-col gap-[13px] items-center justify-start max-w-[877px] mb-[29px] mx-[auto] w-[100%]">
          <Text
            className="font-semibold text-center text-gray_50 w-[auto]"
            as="h2"
            variant="h2"
          >
            Generating Sample Data
          </Text>
          <Text
            className="font-normal leading-[150.00%] not-italic text-center text-gray_501 w-[100%]"
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
      </div>
    </>
  );
};

export default StepsFortyFivePage;
