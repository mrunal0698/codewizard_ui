import React from "react";

import { Text, Line, List, Button, SelectBox, Img } from "components";

const WhatsNewPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-start mx-[auto] pb-[24px] sm:pr-[20px] pr-[24px] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between max-w-[1256px] mb-[10px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex md:flex-1 flex-col gap-[32px] items-start justify-start md:mt-[0] mt-[32px] md:w-[100%] w-[79%]">
            <div className="flex items-start justify-start max-w-[982px] w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_300 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      What’s New?
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_501 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      View our roadmap to know the new features.
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray_801 h-[1px] w-[100%]" />
              </div>
            </div>
            <List
              className="flex-col gap-[112px] md:gap-[40px] grid items-center w-[100%]"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row md:gap-[48px] items-start justify-between w-[100%]">
                <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[auto]">
                  <Button className="bg-gray_906 cursor-pointer font-normal min-w-[86px] not-italic px-[16px] py-[6px] rounded-[6px] text-[16px] text-center text-teal_A402 w-[auto]">
                    v1.46.0
                  </Button>
                  <Text
                    className="font-normal not-italic text-gray_801 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    January 25, 2023
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-[20px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-gray_50 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    New Feature 1
                  </Text>
                  <Text
                    className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[801px] not-italic text-gray_501 text-left"
                    as="h5"
                    variant="h5"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                    et. Sunt qui esse pariatur duis deserunt mollit dolore
                    cillum minim tempor enim. Elit aute irure tempor cupidatat
                    incididunt sint deserunt ut voluptate aute id deserunt nisi.
                  </Text>
                  <div className="bg-gray_300 flex items-center justify-end p-[112px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[100%]">
                    <Text
                      className="font-normal mt-[3px] not-italic text-gray_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      An image/video of new feature
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[16px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-gray_50 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Improvements
                    </Text>
                    <div className="flex flex-col gap-[12px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                      <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start self-stretch md:w-[100%] w-[auto]">
                        <div className="bg-gray_501 h-[1px] w-[2%]"></div>
                        <Text
                          className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[769px] not-italic text-gray_501 text-left"
                          as="h5"
                          variant="h5"
                        >
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia consequat duis enim
                          velit mollit. Exercitation veniam consequat sunt
                          nostrud amet.
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start self-stretch md:w-[100%] w-[auto]">
                        <div className="bg-gray_501 h-[1px] w-[2%]"></div>
                        <Text
                          className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[769px] not-italic text-gray_501 text-left"
                          as="h5"
                          variant="h5"
                        >
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia consequat duis enim
                          velit mollit. Exercitation veniam consequat sunt
                          nostrud amet.
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start self-stretch md:w-[100%] w-[auto]">
                        <div className="bg-gray_501 h-[1px] w-[2%]"></div>
                        <Text
                          className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[769px] not-italic text-gray_501 text-left"
                          as="h5"
                          variant="h5"
                        >
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia consequat duis enim
                          velit mollit. Exercitation veniam consequat sunt
                          nostrud amet.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row md:gap-[48px] items-start justify-between w-[100%]">
                <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[auto]">
                  <Button className="bg-gray_906 cursor-pointer font-normal min-w-[86px] not-italic px-[16px] py-[6px] rounded-[6px] text-[16px] text-center text-teal_A402 w-[auto]">
                    v1.45.0
                  </Button>
                  <Text
                    className="font-normal not-italic text-gray_801 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    January \`5, 2023
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-[20px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-gray_50 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    New Feature 1
                  </Text>
                  <Text
                    className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[801px] not-italic text-gray_501 text-left"
                    as="h5"
                    variant="h5"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                    et. Sunt qui esse pariatur duis deserunt mollit dolore
                    cillum minim tempor enim. Elit aute irure tempor cupidatat
                    incididunt sint deserunt ut voluptate aute id deserunt nisi.
                  </Text>
                  <div className="bg-gray_300 flex items-center justify-end p-[112px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[100%]">
                    <Text
                      className="font-normal mt-[3px] not-italic text-gray_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      An image/video of new feature
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[16px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-gray_50 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Improvements
                    </Text>
                    <div className="flex flex-col gap-[12px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                      <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start self-stretch md:w-[100%] w-[auto]">
                        <div className="bg-gray_501 h-[1px] w-[2%]"></div>
                        <Text
                          className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[769px] not-italic text-gray_501 text-left"
                          as="h5"
                          variant="h5"
                        >
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia consequat duis enim
                          velit mollit. Exercitation veniam consequat sunt
                          nostrud amet.
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start self-stretch md:w-[100%] w-[auto]">
                        <div className="bg-gray_501 h-[1px] w-[2%]"></div>
                        <Text
                          className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[769px] not-italic text-gray_501 text-left"
                          as="h5"
                          variant="h5"
                        >
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia consequat duis enim
                          velit mollit. Exercitation veniam consequat sunt
                          nostrud amet.
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start self-stretch md:w-[100%] w-[auto]">
                        <div className="bg-gray_501 h-[1px] w-[2%]"></div>
                        <Text
                          className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[769px] not-italic text-gray_501 text-left"
                          as="h5"
                          variant="h5"
                        >
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia consequat duis enim
                          velit mollit. Exercitation veniam consequat sunt
                          nostrud amet.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row md:gap-[48px] items-start justify-between w-[100%]">
                <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[auto]">
                  <Button className="bg-gray_906 cursor-pointer font-normal min-w-[87px] not-italic px-[16px] py-[6px] rounded-[6px] text-[16px] text-center text-teal_A402 w-[auto]">
                    v1.44.0
                  </Button>
                  <Text
                    className="font-normal not-italic text-gray_801 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    January 05, 2023
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-[20px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-gray_50 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    New Feature 1
                  </Text>
                  <Text
                    className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[801px] not-italic text-gray_501 text-left"
                    as="h5"
                    variant="h5"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                    et. Sunt qui esse pariatur duis deserunt mollit dolore
                    cillum minim tempor enim. Elit aute irure tempor cupidatat
                    incididunt sint deserunt ut voluptate aute id deserunt nisi.
                  </Text>
                  <div className="bg-gray_300 flex items-center justify-end p-[112px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[100%]">
                    <Text
                      className="font-normal mt-[3px] not-italic text-gray_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      An image/video of new feature
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[16px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-gray_50 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Improvements
                    </Text>
                    <div className="flex flex-col gap-[12px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                      <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start self-stretch md:w-[100%] w-[auto]">
                        <div className="bg-gray_501 h-[1px] w-[2%]"></div>
                        <Text
                          className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[769px] not-italic text-gray_501 text-left"
                          as="h5"
                          variant="h5"
                        >
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia consequat duis enim
                          velit mollit. Exercitation veniam consequat sunt
                          nostrud amet.
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start self-stretch md:w-[100%] w-[auto]">
                        <div className="bg-gray_501 h-[1px] w-[2%]"></div>
                        <Text
                          className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[769px] not-italic text-gray_501 text-left"
                          as="h5"
                          variant="h5"
                        >
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia consequat duis enim
                          velit mollit. Exercitation veniam consequat sunt
                          nostrud amet.
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start self-stretch md:w-[100%] w-[auto]">
                        <div className="bg-gray_501 h-[1px] w-[2%]"></div>
                        <Text
                          className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[769px] not-italic text-gray_501 text-left"
                          as="h5"
                          variant="h5"
                        >
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia consequat duis enim
                          velit mollit. Exercitation veniam consequat sunt
                          nostrud amet.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <SelectBox
              className="font-medium md:ml-[0] ml-[304px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-left text-teal_A400 sm:w-[100%] w-[57%]"
              placeholderClassName="text-teal_A400"
              name="button"
              placeholder="Show Previous Updates"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown_teal_a400.svg"
                  className="h-[24px] w-[24px]"
                  alt="arrow_down"
                />
              }
            ></SelectBox>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsNewPage;
