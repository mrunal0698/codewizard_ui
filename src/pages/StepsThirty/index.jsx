import React from "react";

import { Button, Img, Line, Text } from "components";
import StepsTwentySixCheckmark from "components/StepsTwentySixCheckmark";
import StepsThirteenColumntwo from "components/StepsThirteenColumntwo";
import StepsThirteenStepper from "components/StepsThirteenStepper";

const StepsThirtyPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-center mx-[auto] p-[180px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col items-center justify-start max-w-[919px] mx-[auto] my-[28px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
            <StepsTwentySixCheckmark className="border-[1px] border-solid border-teal_A400 flex h-[48px] items-center justify-center sm:px-[20px] px-[24px] py-[12px] rounded-[50%] w-[48px]" />
            <div className="h-[168px] relative md:w-[100%] w-[95%]">
              <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[98%]">
                <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between w-[100%]">
                  <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[97%]">
                    <div className="flex md:flex-col flex-row md:gap-[46px] items-center justify-between w-[100%]">
                      <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[65%]">
                        <div className="flex flex-col gap-[115px] md:gap-[40px] items-end justify-start w-[100%]">
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
                          <div className="h-[5px] overflow-hidden relative w-[46%]">
                            <div className="w-full h-full absolute bg-gray_501"></div>
                            <div
                              className="h-full absolute bg-teal_A400"
                              style={{ width: "36%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[115px] md:gap-[40px] items-center justify-start md:w-[100%] w-[30%]">
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
                  <div className="h-[74px] relative w-[1%] md:w-[100%]">
                    <Line className="bg-gray_501 h-[74px] m-[auto] w-[5px]" />
                    <Line className="absolute bg-teal_A400 h-[74px] inset-[0] justify-center m-[auto] w-[5px]" />
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-row h-[100%] inset-y-[0] items-center justify-between left-[28%] my-[auto] w-[39%]">
                <div className="flex flex-col md:gap-[40px] gap-[72px] items-center justify-start w-[15%]">
                  <StepsTwentySixCheckmark className="border-[1px] border-solid border-teal_A400 flex h-[48px] items-center justify-center sm:px-[20px] px-[24px] py-[12px] rounded-[50%] w-[48px]" />
                  <StepsThirteenColumntwo className="border-[1px] border-gray_501 border-solid flex font-normal h-[48px] items-center justify-center not-italic sm:px-[20px] rounded-[50%] text-[16px] text-center text-gray_501 w-[48px]" />
                </div>
                <div className="flex flex-col md:gap-[40px] gap-[72px] items-center justify-start w-[15%]">
                  <StepsTwentySixCheckmark className="border-[1px] border-solid border-teal_A400 flex h-[48px] items-center justify-center sm:px-[20px] px-[24px] py-[12px] rounded-[50%] w-[48px]" />
                  <StepsThirteenStepper
                    className="border-[1px] border-solid border-teal_A400 flex flex-col h-[48px] md:h-[auto] items-start justify-start sm:px-[20px] px-[22.8px] py-[9.6px] rounded-[50%] sm:w-[100%] w-[48px]"
                    one="6"
                  />
                </div>
              </div>
              <StepsTwentySixCheckmark className="absolute border-[1px] border-solid border-teal_A400 flex h-[48px] items-center justify-center sm:px-[20px] px-[24px] py-[12px] right-[0] rounded-[50%] top-[0] w-[48px]" />
              <StepsTwentySixCheckmark className="absolute border-[1px] border-solid border-teal_A400 bottom-[0] flex h-[48px] items-center justify-center sm:px-[20px] px-[24px] py-[12px] right-[0] rounded-[50%] w-[48px]" />
            </div>
          </div>
          <Text
            className="font-semibold mt-[123px] text-center text-gray_50 w-[auto]"
            as="h2"
            variant="h2"
          >
            Pushing Code to Github
          </Text>
          <Text
            className="font-normal leading-[150.00%] mt-[13px] not-italic text-center text-gray_501 sm:w-[100%] w-[96%]"
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

export default StepsThirtyPage;
