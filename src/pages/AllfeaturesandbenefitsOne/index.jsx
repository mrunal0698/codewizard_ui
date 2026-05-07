import React from "react";

import { Text, Button, List, Line, Img, Input } from "components";
import MyAccountBillingOneButton from "components/MyAccountBillingOneButton";
import { useNavigate } from "react-router-dom";

const AllfeaturesandbenefitsOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-inter items-center justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="bg-gray_900 flex items-center justify-start py-[72px] w-[100%]">
          <div className="flex items-center justify-start max-w-[1280px] sm:px-[20px] px-[32px] w-[100%]">
            <div className="flex flex-col gap-[40px] items-center justify-start max-w-[1216px] mx-[auto] md:px-[20px] w-[100%]">
              <div className="flex flex-col gap-[24px] items-center justify-start max-w-[960px] w-[100%]">
                <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                  <Text
                    className="font-semibold text-center text-gray_501 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Pricing
                  </Text>
                  <Text
                    className="font-semibold text-center text-gray_50 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Compare our plans and find yours
                  </Text>
                </div>
                <Text
                  className="font-normal not-italic text-center text-gray_501 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Simple, transparent pricing that grows with you.
                </Text>
              </div>
              <div className="flex items-center justify-start self-stretch w-[auto]">
                <div className="border-[1px] border-gray_801 border-solid flex flex-row gap-[8px] items-center justify-start p-[6px] rounded-[4px] self-stretch w-[auto]">
                  <Button className="bg-gray_300 cursor-pointer font-medium min-w-[140px] px-[14px] py-[10px] rounded-[2px] text-[16px] text-center text-gray_900 w-[auto]">
                    Monthly billing
                  </Button>
                  <div className="flex items-center justify-center px-[14px] py-[10px] rounded-[6px] self-stretch w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_50 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Annual billing
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1574px] md:px-[20px] px-[24px] relative md:w-[100%] w-[1280px]">
          <div className="bg-gray_900 h-[1574px] m-[auto] sm:px-[20px] px-[24px] w-[100%]"></div>
          <div className="absolute flex h-[100%] inset-[0] items-center justify-start m-[auto] max-w-[1280px] sm:px-[20px] px-[40px] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
              <div className="flex flex-1 items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[100%]">
                    <List
                      className="flex-col gap-[0.5px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 items-center justify-start pb-[12px] sm:px-[20px] px-[24px] w-[100%]">
                        <Text
                          className="font-medium text-gray_50 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Heading
                        </Text>
                      </div>
                      <Line className="self-center h-[1px] bg-gray_902 w-[100%]" />
                      <div className="flex flex-1 h-[64px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] w-[100%]">
                        <div className="flex flex-row gap-[4px] items-center justify-between w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_300 text-left w-[auto]"
                            variant="body2"
                          >
                            Lorem
                          </Text>
                          <div className="flex h-[16px] items-center justify-start w-[16px]">
                            <Img
                              src="images/img_question_gray_501.svg"
                              className="h-[16px] w-[16px]"
                              alt="question"
                            />
                          </div>
                        </div>
                      </div>
                      <Line className="self-center h-[1px] bg-gray_902 w-[100%]" />
                      <div className="bg-gray_902 flex flex-1 h-[64px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] w-[100%]">
                        <div className="flex flex-row gap-[4px] items-center justify-between w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_300 text-left w-[auto]"
                            variant="body2"
                          >
                            Amet minim molli
                          </Text>
                          <div className="flex h-[16px] items-center justify-start w-[16px]">
                            <Img
                              src="images/img_question_gray_501.svg"
                              className="h-[16px] w-[16px]"
                              alt="question"
                            />
                          </div>
                        </div>
                      </div>
                      <Line className="self-center h-[1px] bg-gray_902 w-[100%]" />
                      <div className="flex flex-1 h-[64px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] w-[100%]">
                        <div className="flex flex-row gap-[4px] items-center justify-between w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_300 text-left w-[auto]"
                            variant="body2"
                          >
                            Lorem Ipsum
                          </Text>
                          <div className="flex h-[16px] items-center justify-start w-[16px]">
                            <Img
                              src="images/img_question_gray_501.svg"
                              className="h-[16px] w-[16px]"
                              alt="question"
                            />
                          </div>
                        </div>
                      </div>
                      <Line className="self-center h-[1px] bg-gray_902 w-[100%]" />
                      <div className="bg-gray_902 flex flex-1 h-[64px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] w-[100%]">
                        <div className="flex flex-row gap-[4px] items-center justify-between w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_300 text-left w-[auto]"
                            variant="body2"
                          >
                            Deserunt ullamco est sit aliqua{" "}
                          </Text>
                          <div className="flex h-[16px] items-center justify-start w-[16px]">
                            <Img
                              src="images/img_question_gray_501.svg"
                              className="common-pointer h-[16px] w-[16px]"
                              onClick={() =>
                                navigate("/allfeaturesandbenefits")
                              }
                              alt="question"
                            />
                          </div>
                        </div>
                      </div>
                      <Line className="self-center h-[1px] bg-gray_902 w-[100%]" />
                      <div className="flex flex-1 h-[64px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] w-[100%]">
                        <div className="flex flex-row gap-[4px] items-center justify-between w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_300 text-left w-[auto]"
                            variant="body2"
                          >
                            Amet minim molli
                          </Text>
                          <div className="flex h-[16px] items-center justify-start w-[16px]">
                            <Img
                              src="images/img_question_gray_501.svg"
                              className="h-[16px] w-[16px]"
                              alt="question"
                            />
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex items-center justify-start pb-[12px] sm:px-[20px] px-[24px] w-[100%]">
                      <Text
                        className="font-medium text-gray_50 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Heading
                      </Text>
                    </div>
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] w-[100%]">
                      <div className="flex flex-row gap-[4px] items-center justify-between w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Lorem
                        </Text>
                        <div className="flex h-[16px] items-center justify-start w-[16px]">
                          <Img
                            src="images/img_question_gray_501.svg"
                            className="h-[16px] w-[16px]"
                            alt="question"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex h-[64px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] w-[100%]">
                      <div className="flex flex-row gap-[4px] items-center justify-between w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Deserunt ullamco est sit aliqua{" "}
                        </Text>
                        <div className="flex h-[16px] items-center justify-start w-[16px]">
                          <Img
                            src="images/img_question_gray_501.svg"
                            className="h-[16px] w-[16px]"
                            alt="question_One"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] w-[100%]">
                      <div className="flex flex-row gap-[4px] items-center justify-between w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Lorem Ipsum
                        </Text>
                        <div className="flex h-[16px] items-center justify-start w-[16px]">
                          <Img
                            src="images/img_question_gray_501.svg"
                            className="h-[16px] w-[16px]"
                            alt="question_Two"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex h-[64px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] w-[100%]">
                      <div className="flex flex-row gap-[4px] items-center justify-between w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Amet minim molli
                        </Text>
                        <div className="flex h-[16px] items-center justify-start w-[16px]">
                          <Img
                            src="images/img_question_gray_501.svg"
                            className="h-[16px] w-[16px]"
                            alt="question_Three"
                          />
                        </div>
                      </div>
                    </div>
                    <Input
                      wrapClassName="bg-gray_902 flex md:h-[auto] px-[24px] w-[100%]"
                      className="font-normal not-italic p-[0] placeholder:text-gray_300 sm:px-[20px] text-[14px] text-gray_300 text-left w-[100%]"
                      name="timeZone_One"
                      placeholder="Deserunt ullamco est sit aliqua "
                      suffix={
                        <Img
                          src="images/img_question_gray_501.svg"
                          className="mt-[auto] mb-[2px] ml-[33px]"
                          alt="question"
                        />
                      }
                    ></Input>
                    <div className="flex h-[64px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] w-[100%]">
                      <div className="flex flex-row gap-[4px] items-center justify-between w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Lorem Ipsum
                        </Text>
                        <div className="flex h-[16px] items-center justify-start w-[16px]">
                          <Img
                            src="images/img_question_gray_501.svg"
                            className="h-[16px] w-[16px]"
                            alt="question_Four"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] w-[100%]">
                      <div className="flex flex-row gap-[4px] items-center justify-between w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Amet minim molli
                        </Text>
                        <div className="flex h-[16px] items-center justify-start w-[16px]">
                          <Img
                            src="images/img_question_gray_501.svg"
                            className="h-[16px] w-[16px]"
                            alt="question_Five"
                          />
                        </div>
                      </div>
                    </div>
                    <Line className="bg-gray_902 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex items-center justify-start pb-[12px] sm:px-[20px] px-[24px] w-[100%]">
                      <Text
                        className="font-medium text-gray_50 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Heading
                      </Text>
                    </div>
                    <div className="flex h-[64px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] w-[100%]">
                      <div className="flex flex-row gap-[4px] items-center justify-between w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Amet minim molli
                        </Text>
                        <div className="flex h-[16px] items-center justify-start w-[16px]">
                          <Img
                            src="images/img_question_gray_501.svg"
                            className="h-[16px] w-[16px]"
                            alt="question_Six"
                          />
                        </div>
                      </div>
                    </div>
                    <Input
                      wrapClassName="bg-gray_902 flex md:h-[auto] px-[24px] w-[100%]"
                      className="font-normal not-italic p-[0] placeholder:text-gray_300 sm:px-[20px] text-[14px] text-gray_300 text-left w-[100%]"
                      name="pricingtablecel"
                      placeholder="Lorem Ipsum"
                      suffix={
                        <Img
                          src="images/img_question_gray_501.svg"
                          className="mt-[auto] mb-[2px] ml-[35px]"
                          alt="question"
                        />
                      }
                    ></Input>
                    <div className="flex h-[64px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] w-[100%]">
                      <div className="flex flex-row gap-[4px] items-center justify-between w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Lorem
                        </Text>
                        <div className="flex h-[16px] items-center justify-start w-[16px]">
                          <Img
                            src="images/img_question_gray_501.svg"
                            className="h-[16px] w-[16px]"
                            alt="question_Eight"
                          />
                        </div>
                      </div>
                    </div>
                    <Line className="bg-gray_902 h-[1px] w-[100%]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                <div className="flex flex-col h-[306px] md:h-[auto] items-start justify-start pb-[48px] w-[100%]">
                  <div className="flex items-center justify-start pb-[16px] sm:px-[20px] px-[24px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_50 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Basic Plan
                    </Text>
                  </div>
                  <Line className="bg-gray_801 h-[1px] w-[100%]" />
                  <div className="flex flex-col gap-[24px] items-start justify-start pt-[32px] sm:px-[20px] px-[24px] w-[100%]">
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[4px] items-end justify-start w-[100%]">
                        <Text
                          className="font-semibold text-gray_50 text-left w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          ₹0
                        </Text>
                        <div className="flex items-start justify-start pb-[7px] self-stretch w-[auto]">
                          <Text
                            className="font-medium text-gray_300 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            per month
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[252px] not-italic text-gray_501 text-left"
                        variant="body2"
                      >
                        Perfect for passion projects & simple websites.
                      </Text>
                    </div>
                    <MyAccountBillingOneButton
                      className="flex flex-col items-start justify-start rounded-[8px] sm:w-[100%] w-[252px]"
                      text_One="Current Plan"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_501 text-left w-[auto]"
                        variant="body2"
                      >
                        10
                      </Text>
                    </div>
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_501 text-left w-[auto]"
                        variant="body2"
                      >
                        20GB
                      </Text>
                    </div>
                    <Img
                      src="images/img_pricingtablecell.svg"
                      className="h-[64px] w-[100%]"
                      alt="pricingtablecel_One"
                    />
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Img
                        src="images/img_menu_gray_501.svg"
                        className="h-[20px] w-[20px]"
                        alt="menu"
                      />
                    </div>
                    <div className="flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Img
                        src="images/img_menu_gray_501.svg"
                        className="h-[20px] w-[20px]"
                        alt="menu_One"
                      />
                    </div>
                    <Line className="bg-gray_902 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_501 text-left w-[auto]"
                        variant="body2"
                      >
                        Basic
                      </Text>
                    </div>
                    <Img
                      src="images/img_pricingtablecell.svg"
                      className="h-[64px] w-[100%]"
                      alt="pricingtablecel_Two"
                    />
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Img
                        src="images/img_checkmark_teal_a402.svg"
                        className="h-[24px] rounded-[50%] w-[24px]"
                        alt="checkmark"
                      />
                    </div>
                    <div className="flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Img
                        src="images/img_menu_gray_501.svg"
                        className="h-[20px] w-[20px]"
                        alt="menu_Two"
                      />
                    </div>
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Img
                        src="images/img_menu_gray_501.svg"
                        className="h-[20px] w-[20px]"
                        alt="menu_Three"
                      />
                    </div>
                    <div className="flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Img
                        src="images/img_menu_gray_501.svg"
                        className="h-[20px] w-[20px]"
                        alt="menu_Four"
                      />
                    </div>
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Img
                        src="images/img_menu_gray_501.svg"
                        className="h-[20px] w-[20px]"
                        alt="menu_Five"
                      />
                    </div>
                    <Line className="bg-gray_902 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Img
                        src="images/img_menu_gray_501.svg"
                        className="h-[20px] w-[20px]"
                        alt="menu_Six"
                      />
                    </div>
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Img
                        src="images/img_menu_gray_501.svg"
                        className="h-[20px] w-[20px]"
                        alt="menu_Seven"
                      />
                    </div>
                    <div className="flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Img
                        src="images/img_menu_gray_501.svg"
                        className="h-[20px] w-[20px]"
                        alt="menu_Eight"
                      />
                    </div>
                    <Line className="bg-gray_902 h-[1px] w-[100%]" />
                  </div>
                </div>
                <div className="flex items-start justify-start pb-[32px] pt-[40px] sm:px-[20px] px-[24px] w-[100%]">
                  <MyAccountBillingOneButton
                    className="flex flex-col items-start justify-start rounded-[8px] sm:w-[100%] w-[252px]"
                    text_One="Current Plan"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                <div className="flex flex-col h-[306px] md:h-[auto] items-start justify-start pb-[48px] w-[100%]">
                  <div className="flex flex-row gap-[8px] items-center justify-start pb-[16px] sm:px-[20px] px-[24px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_50 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    ></Text>
                    <div className="flex items-start justify-start self-stretch w-[auto]">
                      <Text
                        className="bg-gray_906 font-normal justify-center not-italic px-[10px] py-[2px] rounded-[12px] self-stretch text-center text-teal_A402 w-[auto]"
                        variant="body2"
                      >
                        Popular
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray_801 h-[1px] w-[100%]" />
                  <div className="flex flex-col gap-[24px] items-start justify-start pt-[32px] sm:px-[20px] px-[24px] w-[100%]">
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[4px] items-end justify-start w-[100%]">
                        <Text
                          className="font-semibold text-gray_50 text-left w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          ₹499
                        </Text>
                        <div className="flex items-start justify-start pb-[7px] self-stretch w-[auto]">
                          <Text
                            className="font-medium text-gray_300 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            per month
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[252px] not-italic text-gray_501 text-left"
                        variant="body2"
                      >
                        4 production applications with the option to scale
                      </Text>
                    </div>
                    <Button className="bg-gradient  cursor-pointer font-medium p-[12px] rounded-[4px] text-[14px] text-center text-gray_900 w-[252px]">
                      Upgrade Now
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_501 text-left w-[auto]"
                        variant="body2"
                      >
                        20
                      </Text>
                    </div>
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_501 text-left w-[auto]"
                        variant="body2"
                      >
                        40GB
                      </Text>
                    </div>
                    <Img
                      src="images/img_pricingtablecell.svg"
                      className="h-[64px] w-[100%]"
                      alt="pricingtablecel_Three"
                    />
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Img
                        src="images/img_checkmark_teal_a402.svg"
                        className="h-[24px] rounded-[50%] w-[24px]"
                        alt="checkmark_One"
                      />
                    </div>
                    <Img
                      src="images/img_pricingtablecell.svg"
                      className="h-[64px] w-[100%]"
                      alt="pricingtablecel_Four"
                    />
                    <Line className="bg-gray_902 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_501 text-left w-[auto]"
                        variant="body2"
                      >
                        Advanced
                      </Text>
                    </div>
                    <Img
                      src="images/img_pricingtablecell.svg"
                      className="h-[64px] w-[100%]"
                      alt="pricingtablecel_Five"
                    />
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Img
                        src="images/img_checkmark_teal_a402.svg"
                        className="h-[24px] rounded-[50%] w-[24px]"
                        alt="checkmark_Two"
                      />
                    </div>
                    <Img
                      src="images/img_pricingtablecell.svg"
                      className="h-[64px] w-[100%]"
                      alt="pricingtablecel_Six"
                    />
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Img
                        src="images/img_checkmark_teal_a402.svg"
                        className="h-[24px] rounded-[50%] w-[24px]"
                        alt="checkmark_Three"
                      />
                    </div>
                    <Img
                      src="images/img_pricingtablecell.svg"
                      className="h-[64px] w-[100%]"
                      alt="pricingtablecel_Seven"
                    />
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Img
                        src="images/img_menu_gray_501.svg"
                        className="h-[20px] w-[20px]"
                        alt="menu_Nine"
                      />
                    </div>
                    <Line className="bg-gray_902 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Img
                      src="images/img_pricingtablecell.svg"
                      className="h-[64px] w-[100%]"
                      alt="pricingtablecel_Eight"
                    />
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Img
                        src="images/img_menu_gray_501.svg"
                        className="h-[20px] w-[20px]"
                        alt="menu_Ten"
                      />
                    </div>
                    <div className="flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Img
                        src="images/img_menu_gray_501.svg"
                        className="h-[20px] w-[20px]"
                        alt="menu_Eleven"
                      />
                    </div>
                    <Line className="bg-gray_902 h-[1px] w-[100%]" />
                  </div>
                </div>
                <div className="flex items-start justify-start pb-[32px] pt-[40px] sm:px-[20px] px-[24px] w-[100%]">
                  <Button className="bg-gradient  cursor-pointer font-medium p-[12px] rounded-[4px] text-[14px] text-center text-gray_900 w-[252px]">
                    Upgrade Now
                  </Button>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                <div className="flex flex-col h-[306px] md:h-[auto] items-start justify-start pb-[48px] w-[100%]">
                  <div className="flex items-center justify-start pb-[16px] sm:px-[20px] px-[24px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_50 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    ></Text>
                  </div>
                  <Line className="bg-gray_801 h-[1px] w-[100%]" />
                  <div className="flex flex-col gap-[24px] items-start justify-start pt-[32px] sm:px-[20px] px-[24px] w-[100%]">
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[4px] items-end justify-start w-[100%]">
                        <Text
                          className="font-semibold text-gray_50 text-left w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          ₹699
                        </Text>
                        <div className="flex items-start justify-start pb-[7px] self-stretch w-[auto]">
                          <Text
                            className="font-medium text-gray_300 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            per month
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[252px] not-italic text-gray_501 text-left"
                        variant="body2"
                      >
                        For large-scale applications managing serious workloads.
                      </Text>
                    </div>
                    <Button className="bg-gradient  cursor-pointer font-medium p-[12px] rounded-[4px] text-[14px] text-center text-gray_900 w-[252px]">
                      Upgrade Now
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_501 text-left w-[auto]"
                        variant="body2"
                      >
                        Unlimited
                      </Text>
                    </div>
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_501 text-left w-[auto]"
                        variant="body2"
                      >
                        Unlimited
                      </Text>
                    </div>
                    <Img
                      src="images/img_pricingtablecell.svg"
                      className="h-[64px] w-[100%]"
                      alt="pricingtablecel_Nine"
                    />
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Img
                        src="images/img_checkmark_teal_a402.svg"
                        className="h-[24px] rounded-[50%] w-[24px]"
                        alt="checkmark_Four"
                      />
                    </div>
                    <Img
                      src="images/img_pricingtablecell.svg"
                      className="h-[64px] w-[100%]"
                      alt="pricingtablecel_Ten"
                    />
                    <Line className="bg-gray_902 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_501 text-left w-[auto]"
                        variant="body2"
                      >
                        Advanced
                      </Text>
                    </div>
                    <Img
                      src="images/img_pricingtablecell.svg"
                      className="h-[64px] w-[100%]"
                      alt="pricingtablecel_Eleven"
                    />
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Img
                        src="images/img_checkmark_teal_a402.svg"
                        className="h-[24px] rounded-[50%] w-[24px]"
                        alt="checkmark_Five"
                      />
                    </div>
                    <Img
                      src="images/img_pricingtablecell.svg"
                      className="h-[64px] w-[100%]"
                      alt="pricingtablecel_Twelve"
                    />
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Img
                        src="images/img_checkmark_teal_a402.svg"
                        className="h-[24px] rounded-[50%] w-[24px]"
                        alt="checkmark_Six"
                      />
                    </div>
                    <Img
                      src="images/img_pricingtablecell.svg"
                      className="h-[64px] w-[100%]"
                      alt="pricingtablecel_Thirteen"
                    />
                    <div className="bg-gray_902 flex h-[64px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] w-[100%]">
                      <Img
                        src="images/img_checkmark_teal_a402.svg"
                        className="h-[24px] rounded-[50%] w-[24px]"
                        alt="checkmark_Seven"
                      />
                    </div>
                    <Line className="bg-gray_902 h-[1px] w-[100%]" />
                  </div>
                  <Img
                    src="images/img_section.svg"
                    className="h-[229px] w-[100%]"
                    alt="section"
                  />
                </div>
                <div className="flex items-start justify-start pb-[32px] pt-[40px] sm:px-[20px] px-[24px] w-[100%]">
                  <Button className="bg-gradient  cursor-pointer font-medium p-[12px] rounded-[4px] text-[14px] text-center text-gray_900 w-[252px]">
                    Upgrade Now
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

export default AllfeaturesandbenefitsOnePage;
