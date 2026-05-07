import React from "react";

import { Text, Line, Button, Input, Img, List } from "components";
import { CloseSVG } from "../../assets/images";
import YourModelsTwoCategory from "components/YourModelsCategory";
import YourModelsThreeCategory from "components/YourModelsThreeCategory";

const YourModelsTwoPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
          <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
            <div className="flex items-start justify-start max-w-[982px] w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_50 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Select A Model
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
                  className="font-medium p-[0] placeholder:text-gray_801 text-[16px] text-gray_801 text-left w-[100%]"
                  name="searchbox"
                  placeholder="Search Models"
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer ml-[35px] my-[auto]"
                        onClick={() => setInputvalue("")}
                        color="#4e4e4e"
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
              <YourModelsTwoCategory
                className="bg-bluegray_906 border-[2px] border-solid border-teal_A400 flex flex-col items-center justify-start p-[16px] rounded-[8px] w-[100%]"
                groupThirtyEight="file type"
                ecommerce="E-commerce"
                v10="v1.0"
                modelname="model_name"
                timeZone="Amet minim mollit non deserunt ullamco est sit am..."
                readmore="Read More"
              />
              <YourModelsThreeCategory
                className="bg-gray_901 flex flex-col items-center justify-start p-[16px] rounded-[8px] w-[100%]"
                groupSixtyThree="file type"
                ecommerce="E-commerce"
                v10="v1.0"
                modelname="model_name"
                timeZone="Amet minim mollit non deserunt ullamco est sit am..."
                readmore="Read More"
              />
            </List>
            <div className="flex flex-col gap-[16px] items-start justify-start max-w-[982px] mt-[236px] w-[100%]">
              <Line className="bg-gray_801 h-[1px] w-[100%]" />
              <div className="flex h-[41px] md:h-[auto] items-start justify-between w-[100%]">
                <div className="flex flex-row gap-[12px] items-center justify-between w-[100%]">
                  <div className="flex flex-1 md:flex-1 flex-row gap-[8px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                    <Img
                      src="images/img_download_teal_a400.svg"
                      className="h-[24px] w-[24px]"
                      alt="download"
                    />
                    <Text
                      className="font-medium text-left text-teal_A400 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Download Model
                    </Text>
                  </div>
                  {/* based on codition download model should present */}
                  <Button className="bg-gradient cursor-pointer font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_900 w-[161px]">

                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default YourModelsTwoPage;
