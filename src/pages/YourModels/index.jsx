import React from "react";

import ModelLibrarySidemenu from "components/ModelLibrarySidemenu";
import { Text, Line, Button, Input, Img, List } from "components";
import { CloseSVG } from "../../assets/images";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const YourModelsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const existingModelDetail = "Amet minim mollit non deserunt ullamco est sit aliquadolor do amet sint. Velit officia consequat duis enimvelit mollit. Exercitation veniam consequat sunt nostrudamet."
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between max-w-[1256px] mx-[auto] md:px-[20px] w-[100%]">
          <ModelLibrarySidemenu
            className="bg-gray_901 flex flex-col md:hidden justify-start w-[250px]"
            ramg="Ram G"
            email="ram@gmail.com"
          />
          <div className="flex flex-1 flex-col items-start justify-start md:mt-[0] mt-[32px] w-[100%]">
            <div className="flex items-start justify-start max-w-[982px] w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_50 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Model Library
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_501 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Choose Models from the existing library or add your own
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray_801 h-[1px] w-[100%]" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between mt-[32px] w-[100%]">
              <div className="border-[1px] border-gray_801 border-solid flex flex-row gap-[8px] items-center justify-start p-[6px] rounded-[4px] self-stretch w-[auto]">
                <div className="flex items-center justify-center px-[14px] py-[10px] rounded-[6px] self-stretch w-[auto]">
                  <Text
                    className="font-normal not-italic text-gray_50 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Existing Models
                  </Text>
                </div>
                <Button className="bg-gray_300 cursor-pointer font-medium min-w-[124px] px-[14px] py-[10px] rounded-[2px] text-[16px] text-center text-gray_900 w-[auto]">
                  Your Models
                </Button>
              </div>
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-[16px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid flex p-[16px] rounded-[4px] sm:w-[100%] w-[53%]"
                  className="font-medium p-[0] placeholder:text-gray_300 text-[16px] text-gray_300 text-left w-[100%]"
                  name="searchbox"
                  placeholder="Customer Accounts"
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer ml-[35px] my-[auto]"
                        onClick={() => setInputvalue("")}
                        color="#dddddd"
                      />
                    ) : (
                      <Img
                        src="images/img_search.svg"
                        className="cursor-pointer ml-[35px] my-[auto]"
                        alt="search"
                      />
                    )
                  }
                ></Input>
                <Button
                  className="bg-teal_A400 cursor-pointer flex items-center justify-center min-w-[217px] px-[20px] py-[16px] rounded-[4px] w-[auto]"
                  leftIcon={
                    <Img
                      src="images/img_plus_gray_900.svg"
                      className="mr-[8px]"
                      alt="plus"
                    />
                  }
                >
                  <div className="font-medium text-[16px] text-gray_900 text-left">
                    Upload New Model
                  </div>
                </Button>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 grid-cols-2 mt-[24px] w-[49%]"
              orientation="horizontal"
            >
              <div className="bg-gray_901 flex items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                <div className="flex flex-col gap-[16px] justify-start my-[4px] w-[100%]">
                  <div className="h-[96px] md:ml-[0] ml-[28px] relative w-[55%]">
                    <Img
                      src="images/img_group25.svg"
                      className="absolute h-[96px] inset-y-[0] my-[auto] right-[0] w-[auto]"
                      alt="file"
                    />
                    <Text
                      className="absolute bg-gray_901 bottom-[28%] font-normal h-[23px] justify-center left-[0] not-italic outline outline-[0.5px] outline-gray_801 pb-[2px] pt-[5px] px-[7px] rounded-[4px] text-gray_50 text-left w-[61px]"
                      variant="body3"
                    >
                      file type
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Button className="bg-teal_900 cursor-pointer font-normal min-w-[93px] not-italic px-[10px] py-[4px] rounded-[13px] text-[12px] text-center text-teal_A400 w-[auto]">
                        E-commerce
                      </Button>
                      <Text
                        className="font-light text-gray_501 text-left w-[auto]"
                        variant="body3"
                      >
                        v1.0
                      </Text>
                    </div>
                    <Text
                      className="font-normal mt-[12px] not-italic text-gray_50 text-left w-[auto]"
                      variant="body2"
                    >
                      model_name
                    </Text>
                    <Text
                      className="font-normal leading-[150.00%] mt-[10px] not-italic text-gray_501 text-left w-[100%]"
                      variant="body2"
                    >
                      {/* Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet. */}
                      {isReadMore ? (
                        <span>
                          {existingModelDetail.slice(0, 100)}...
                        </span>
                       ): existingModelDetail}
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[67px] mt-[5px] text-gray_300 text-left w-[auto]"
                      variant="body3" onClick={toggleReadMore}
                    >
                      { isReadMore ? "Read More ": "Read Less"}
                    </Text>

                  {/* call below code for Read More */}
                    {/* <Text
                      className="font-normal leading-[150.00%] mt-[10px] not-italic text-gray_501 text-left w-[100%]"
                      variant="body2"
                    >
                      Amet minim mollit non deserunt ullamco est sit am...
                    </Text>
                    <Text
                      className="common-pointer font-medium md:ml-[0] ml-[67px] mt-[5px] text-gray_300 text-left w-[auto]"
                      variant="body3"
                      // onClick={() => navigate("/yourmodels")}
                    >
                      Read More
                    </Text> */}
                  </div>
                </div>
              </div>
              <div className="bg-gray_901 flex items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                <div className="flex flex-col gap-[16px] justify-start my-[4px] w-[100%]">
                  <div className="h-[96px] md:ml-[0] ml-[28px] relative w-[55%]">
                    <Img
                      src="images/img_group25.svg"
                      className="absolute h-[96px] inset-y-[0] my-[auto] right-[0] w-[auto]"
                      alt="file"
                    />
                    <Text
                      className="absolute bg-gray_901 bottom-[28%] font-normal h-[23px] justify-center left-[0] not-italic outline outline-[0.5px] outline-gray_801 pb-[2px] pt-[5px] px-[7px] rounded-[4px] text-gray_50 text-left w-[61px]"
                      variant="body3"
                    >
                      file type
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Button className="bg-teal_900 cursor-pointer font-normal min-w-[93px] not-italic px-[10px] py-[4px] rounded-[13px] text-[12px] text-center text-teal_A400 w-[auto]">
                        E-commerce
                      </Button>
                      <Text
                        className="font-light text-gray_501 text-left w-[auto]"
                        variant="body3"
                      >
                        v1.0
                      </Text>
                    </div>
                    <Text
                      className="font-normal mt-[12px] not-italic text-gray_50 text-left w-[auto]"
                      variant="body2"
                    >
                      model_name
                    </Text>
                    <Text
                      className="font-normal leading-[150.00%] mt-[10px] not-italic text-gray_501 text-left w-[100%]"
                      variant="body2"
                    >
                      Amet minim mollit non deserunt ullamco est sit am...
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[67px] mt-[5px] text-gray_300 text-left w-[auto]"
                      variant="body3"
                    >
                      Read More
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourModelsPage;
