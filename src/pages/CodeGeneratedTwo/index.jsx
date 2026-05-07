import React from "react";

import { Img, Text, List, Button } from "components";
import { useNavigate } from "react-router-dom";

const CodeGeneratedTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-end mx-[auto] p-[40px] sm:px-[20px] w-[100%]">
        <div className="flex flex-col items-center justify-start max-w-[780px] mt-[8px] mx-[auto] md:px-[20px] w-[100%]">
          <Img
            src="images/img_lottie.png"
            className="h-[230px] md:h-[auto] object-cover w-[230px]"
            alt="lottie"
          />
          <Text
            className="font-medium mt-[36px] text-center text-gray_50 w-[auto]"
            as="h1"
            variant="h1"
          >
            Code Generated Successfully!
          </Text>
          <List
            className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[28px] w-[100%]"
            orientation="horizontal"
          >
            <div className="bg-gray_901 flex flex-1 flex-col gap-[13px] h-[180px] items-center justify-center p-[32px] sm:px-[20px] rounded-[8px] w-[100%]">
              <Text
                className="font-medium mt-[17px] text-gray_50 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                100507
              </Text>
              <Text
                className="font-medium mb-[19px] text-gray_501 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Total Lines
              </Text>
            </div>
            <div className="bg-gray_901 flex flex-1 flex-col gap-[13px] h-[180px] items-center justify-start p-[50px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]">
              <Text
                className="font-medium text-gray_50 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                856
              </Text>
              <Text
                className="font-medium mb-[2px] text-gray_501 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Files
              </Text>
            </div>
            <div className="bg-gray_901 flex flex-1 flex-col gap-[13px] h-[180px] items-center justify-center p-[43px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]">
              <Text
                className="font-medium mt-[6px] text-gray_50 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                3MB
              </Text>
              <Text
                className="font-medium mb-[8px] text-gray_501 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Total Size
              </Text>
            </div>
            <div className="bg-gray_901 flex flex-1 flex-col gap-[13px] h-[180px] items-center justify-center p-[34px] sm:px-[20px] rounded-[8px] w-[100%]">
              <Text
                className="font-medium mt-[15px] text-gray_50 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                0:20
              </Text>
              <Text
                className="font-medium mb-[17px] text-gray_501 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Time Taken
              </Text>
            </div>
          </List>
          <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-center mt-[166px] md:w-[100%] w-[68%]">
            <Button
              className="common-pointer border-[1px] border-solid border-teal_A400 cursor-pointer font-medium px-[20px] py-[12px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[252px]"
              onClick={() => navigate("/codetwo")}
            >
              View Code
            </Button>
            <Button className="bg-gradient  cursor-pointer font-medium p-[12px] rounded-[4px] text-[14px] text-center text-gray_900 w-[252px]">
              Run Code
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeGeneratedTwoPage;
