import React from "react";

import { Text, Line, Img, Button } from "components";
import FETemplateButton from "components/FETemplateButton";

const FETemplateaddedOnePage = () => {
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between w-[100%]">
          
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <div className="flex items-start justify-start max-w-[982px] w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_50 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Select Screen
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_501 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Choose the screens you want your in project
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray_801 h-[1px] w-[100%]" />
              </div>
            </div>
            <div className="md:h-[625px] h-[713px] relative w-[100%]">
              <div className="absolute bottom-[0] md:h-[181px] h-[209px] inset-x-[0] mx-[auto] md:w-[100%] w-[98%]">
                <div className="absolute flex items-center justify-start left-[0] top-[0] w-[39%]">
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="bg-gray_901 flex h-[181px] items-center justify-start p-[8px] rounded-[4px] w-[181px]">
                      <Img
                        src="images/img_image62.png"
                        className="h-[91px] md:h-[auto] my-[37px] object-cover rounded-[4px] w-[100%]"
                        alt="imageSixtyTwo"
                      />
                    </div>
                    <div className="bg-gray_901 flex h-[181px] items-center justify-start p-[8px] rounded-[4px] w-[181px]">
                      <Img
                        src="images/img_image62_91x165.png"
                        className="h-[91px] md:h-[auto] my-[37px] object-cover rounded-[4px] w-[100%]"
                        alt="imageSixtyTwo_One"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute bg-gray_900 bottom-[0] flex flex-col gap-[16px] h-[89px] md:h-[auto] inset-x-[0] items-center justify-start max-w-[982px] mx-[auto] w-[100%]">
                  <Line className="bg-gray_801 h-[1px] w-[100%]" />
                  <div className="flex md:flex-col flex-row gap-[20px] items-start justify-start w-[100%]">
                    <FETemplateButton
                      className="flex sm:flex-1 flex-col items-center justify-center sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] sm:w-[100%] w-[161px]"
                      text_One="Selected Screens (1)"
                    />
                    <div className="flex flex-1 flex-row gap-[12px] items-center justify-end w-[100%]">
                      <Button className="border-[1px] border-solid border-teal_A400 cursor-pointer flex-1 font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[100%]">
                        Previous
                      </Button>
                      <Button className="bg-gradient  cursor-pointer flex-1 font-medium px-[12px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_900 w-[100%]">
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gray_901 flex items-center justify-start p-[11px] right-[0] top-[0] w-[60%]">
                <div className="flex flex-col md:gap-[40px] gap-[88px] items-center justify-start mb-[136px] mt-[13px] w-[100%]">
                  <div className="flex flex-row sm:gap-[40px] items-end justify-between md:w-[100%] w-[96%]">
                    <Text
                      className="font-normal mb-[3px] mt-[8px] not-italic text-gray_50 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Signup Screen
                    </Text>
                    <Button className="border-[1px] border-solid border-teal_A400 cursor-pointer font-medium min-w-[138px] sm:px-[20px] px-[24px] py-[8px] rounded-[4px] text-[12px] text-center text-teal_A400 w-[auto]">
                      Remove Screen
                    </Button>
                  </div>
                  <div className="flex items-center justify-start w-[100%]">
                    <Img
                      src="images/img_rectangle179.png"
                      className="h-[332px] md:h-[auto] object-cover rounded-[4px] w-[100%]"
                      alt="rectangle179"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col items-start justify-start left-[0] top-[3%] w-[38%]">
                <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                  <div className="bg-gray_901 h-[181px] relative rounded-[4px] w-[181px]">
                    <Img
                      src="images/img_image62_1.png"
                      className="h-[91px] m-[auto] object-cover rounded-[4px] w-[92%]"
                      alt="imageSixtyTwo_Two"
                    />
                    <div className="absolute bg-gray_900_66 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[74px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[181px]">
                      <Img
                        src="images/img_close_teal_a400.svg"
                        className="h-[32px] w-[32px]"
                        alt="close"
                      />
                    </div>
                  </div>
                  <div className="bg-gray_901 flex h-[181px] items-center justify-start p-[8px] rounded-[4px] w-[181px]">
                    <Img
                      src="images/img_image62_2.png"
                      className="h-[91px] md:h-[auto] my-[37px] object-cover rounded-[4px] w-[100%]"
                      alt="imageSixtyTwo_Three"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between mt-[16px] md:w-[100%] w-[65%]">
                  <Text
                    className="font-normal not-italic text-gray_300 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Login
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_300 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Signup
                  </Text>
                </div>
                <div className="flex flex-row gap-[20px] items-center justify-between mt-[20px] w-[100%]">
                  <div className="bg-gray_901 flex h-[181px] items-center justify-start p-[8px] rounded-[4px] w-[181px]">
                    <Img
                      src="images/img_image62_3.png"
                      className="h-[91px] md:h-[auto] my-[37px] object-cover rounded-[4px] w-[100%]"
                      alt="imageSixtyTwo_Four"
                    />
                  </div>
                  <div className="bg-gray_901 flex h-[181px] items-center justify-start p-[8px] rounded-[4px] w-[181px]">
                    <Img
                      src="images/img_image62_4.png"
                      className="h-[91px] md:h-[auto] my-[37px] object-cover rounded-[4px] w-[100%]"
                      alt="imageSixtyTwo_Five"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-[89px] items-center justify-start mt-[14px] md:w-[100%] w-[87%]">
                  <Text
                    className="font-normal not-italic text-gray_300 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Products List
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_300 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Product Details
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FETemplateaddedOnePage;
