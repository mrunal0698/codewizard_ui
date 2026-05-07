import React from "react";

import Sidebar1 from "components/Sidebar1";
import { Text, Line, Button } from "components";

const CodeOnePage = () => {
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between max-w-[1256px] mx-[auto] md:px-[20px] w-[100%]">
          <Sidebar1 className="bg-gray_901 flex flex-col md:hidden justify-start w-[250px]" />
          <div className="flex flex-1 flex-col font-consolas md:gap-[40px] gap-[443px] justify-start w-[100%]">
            <Text
              className="font-normal leading-[150.00%] md:ml-[0] ml-[8px] text-gray_51 text-left"
              variant="body2"
            ></Text>
            <div className="flex flex-col font-inter gap-[16px] h-[89px] md:h-[auto] items-start justify-start max-w-[982px] w-[100%]">
              <Line className="bg-gray_801 h-[1px] w-[100%]" />
              <div className="flex items-start justify-start w-[100%]">
                <div className="flex items-center justify-end w-[100%]">
                  <Button className="bg-gradient  cursor-pointer font-medium px-[12px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_900 w-[161px]">
                    Download Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeOnePage;
