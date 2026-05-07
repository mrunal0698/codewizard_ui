import React from "react";

import Sidebar from "components/Sidebar";
import { Text, Line, Img, List, Button } from "components";
import MyAccountBillingOneButton from "components/MyAccountBillingOneButton";
import MyAccountBillingOneButtonbase from "components/MyAccountBillingOneButtonbase";
import { useNavigate } from "react-router-dom";

const MyAccountbillingOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-start mx-[auto] pb-[24px] sm:pr-[20px] pr-[24px] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between max-w-[1256px] mb-[23px] mx-[auto] md:px-[20px] w-[100%]">
          <Sidebar className="flex flex-col md:hidden justify-start w-[320px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:mt-[0] mt-[32px] w-[100%]">
            <div className="flex items-start justify-start max-w-[912px] w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_50 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Billing
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_501 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Manage your billing and payment details.
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray_801 h-[1px] w-[100%]" />
              </div>
            </div>
            <div className="flex items-start justify-start max-w-[912px] mt-[24px] w-[100%]">
              <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                <Text
                  className="flex-1 font-medium text-gray_50 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  All Plans
                </Text>
                <div className="flex flex-row items-start justify-center w-[9%]">
                  <Img
                    src="images/img_contrast.svg"
                    className="h-[20px] w-[20px]"
                    alt="contrast"
                  />
                  <Text
                    className="font-normal ml-[4px] mt-[2px] not-italic text-gray_50 text-left w-[auto]"
                    variant="body2"
                  >
                    Monthly
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-evenly w-[9%]">
                  <Img
                    src="images/img_settings_gray_300_20x20.svg"
                    className="h-[20px] w-[20px]"
                    alt="settings_One"
                  />
                  <div className="flex items-center justify-start mt-[2px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_50 text-left w-[auto]"
                      variant="body2"
                    >
                      Annually
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[912px] mt-[16px] w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-gray_901 md:h-[351px] h-[413px] relative rounded-[4px] w-[100%]">
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] self-stretch top-[0] w-[auto]">
                  <div className="flex flex-col gap-[12px] items-center justify-start pt-[32px] sm:px-[20px] px-[32px] w-[282px]">
                    <div className="flex flex-row gap-[4px] items-start justify-center w-[100%]">
                      <Text
                        className="font-semibold text-center text-gray_50 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        ₹0
                      </Text>
                      <div className="flex items-start justify-start pb-[7px] self-stretch w-[auto]">
                        <Text
                          className="font-light text-gray_300 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          per month
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                      <Text
                        className="font-medium text-center text-teal_A400 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Basic plan
                      </Text>
                      <Text
                        className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[218px] not-italic text-center text-gray_501"
                        variant="body2"
                      >
                        Perfect for passion projects & simple websites.
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start pb-[40px] pt-[32px] sm:px-[20px] px-[32px] w-[282px]">
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[12px] items-start justify-start w-[100%]">
                        <Img
                          src="images/img_checkmark_teal_a402.svg"
                          className="h-[24px] rounded-[50%] w-[24px]"
                          alt="checkmark"
                        />
                        <div className="flex flex-1 items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_300 text-left w-[auto]"
                            variant="body2"
                          >
                            Amet minim mollit non{" "}
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[12px] items-start justify-start w-[100%]">
                        <Img
                          src="images/img_checkmark_teal_a402.svg"
                          className="h-[24px] rounded-[50%] w-[24px]"
                          alt="checkmark_One"
                        />
                        <div className="flex flex-1 items-start justify-start w-[100%]">
                          <Text
                            className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[182px] not-italic text-gray_300 text-left"
                            variant="body2"
                          >
                            Deserunt ullamco est sit aliqua dolor do amet sint.{" "}
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[12px] items-start justify-start w-[100%]">
                        <Img
                          src="images/img_checkmark_teal_a402.svg"
                          className="h-[24px] rounded-[50%] w-[24px]"
                          alt="checkmark_Two"
                        />
                        <div className="flex flex-1 items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_300 text-left w-[auto]"
                            variant="body2"
                          >
                            and More
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[0] flex flex-1 inset-x-[0] items-center justify-start mx-[auto] pb-[32px] sm:px-[20px] px-[32px] w-[100%]">
                  <MyAccountBillingOneButton
                    className="flex flex-col items-start justify-start rounded-[8px] sm:w-[100%] w-[252px]"
                    text_One="Current Plan"
                  />
                </div>
              </div>
              <div className="bg-gray_901 md:h-[351px] h-[413px] relative rounded-[4px] w-[100%]">
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] self-stretch top-[0] w-[auto]">
                  <div className="flex flex-col gap-[12px] items-center justify-start pt-[32px] sm:px-[20px] px-[32px] w-[282px]">
                    <div className="flex flex-row gap-[4px] items-start justify-center w-[100%]">
                      <Text
                        className="font-semibold text-center text-gray_50 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        ₹499
                      </Text>
                      <div className="flex items-start justify-start pb-[7px] self-stretch w-[auto]">
                        <Text
                          className="font-light text-gray_300 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          per month
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                      <Text
                        className="font-medium text-center text-teal_A400 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Business plan
                      </Text>
                      <Text
                        className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[218px] not-italic text-center text-gray_501"
                        variant="body2"
                      >
                        4 production applications with the option to scale
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start pb-[40px] pt-[32px] sm:px-[20px] px-[32px] self-stretch w-[auto]">
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[218px]">
                      <div className="flex flex-row gap-[12px] items-start justify-start w-[100%]">
                        <Img
                          src="images/img_checkmark_teal_a402.svg"
                          className="h-[24px] rounded-[50%] w-[24px]"
                          alt="checkmark"
                        />
                        <div className="flex flex-1 items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_300 text-left w-[auto]"
                            variant="body2"
                          >
                            Everything in Basic Plan
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[12px] items-start justify-start w-[100%]">
                        <Img
                          src="images/img_checkmark_teal_a402.svg"
                          className="h-[24px] rounded-[50%] w-[24px]"
                          alt="checkmark_One"
                        />
                        <div className="flex flex-1 items-start justify-start w-[100%]">
                          <Text
                            className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[182px] not-italic text-gray_300 text-left"
                            variant="body2"
                          >
                            Deserunt ullamco est sit aliqua dolor do amet sint.{" "}
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[12px] items-start justify-start w-[100%]">
                        <Img
                          src="images/img_checkmark_teal_a402.svg"
                          className="h-[24px] rounded-[50%] w-[24px]"
                          alt="checkmark_Two"
                        />
                        <div className="flex flex-1 items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_300 text-left w-[auto]"
                            variant="body2"
                          >
                            and More
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[0] flex flex-1 inset-x-[0] items-center justify-center mx-[auto] pb-[32px] sm:px-[20px] px-[32px] w-[100%]">
                  <Button className="bg-gradient  cursor-pointer font-medium p-[12px] rounded-[4px] text-[14px] text-center text-gray_900 w-[252px]">
                    Upgrade Now
                  </Button>
                </div>
              </div>
              <div className="bg-gray_901 flex flex-1 flex-col items-center justify-center rounded-[4px] w-[100%]">
                <div className="flex flex-col gap-[12px] items-center justify-start pt-[32px] sm:px-[20px] px-[32px] w-[100%]">
                  <div className="flex flex-row gap-[4px] items-start justify-center w-[100%]">
                    <Text
                      className="font-semibold text-center text-gray_50 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      ₹699
                    </Text>
                    <div className="flex items-start justify-start pb-[7px] self-stretch w-[auto]">
                      <Text
                        className="font-light text-gray_300 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        per month
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-center text-teal_A400 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Enterprise plan
                    </Text>
                    <Text
                      className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[226px] not-italic text-center text-gray_501"
                      variant="body2"
                    >
                      For large-scale applications managing serious workloads.
                    </Text>
                  </div>
                </div>
                <div className="flex items-start justify-start pb-[40px] pt-[32px] sm:px-[20px] px-[32px] w-[100%]">
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                    <div className="flex flex-row gap-[12px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_checkmark_teal_a402.svg"
                        className="h-[24px] rounded-[50%] w-[24px]"
                        alt="checkmark"
                      />
                      <div className="flex flex-1 items-start justify-start w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Everything in Advanced Plan
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[12px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_checkmark_teal_a402.svg"
                        className="h-[24px] rounded-[50%] w-[24px]"
                        alt="checkmark_One"
                      />
                      <div className="flex flex-1 items-start justify-start w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Amet minim mollit non{" "}
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[12px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_checkmark_teal_a402.svg"
                        className="h-[24px] rounded-[50%] w-[24px]"
                        alt="checkmark_Two"
                      />
                      <div className="flex flex-1 items-start justify-start w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          and More
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start pb-[32px] sm:px-[20px] px-[32px] w-[100%]">
                  <Button className="bg-gradient  cursor-pointer font-medium p-[12px] rounded-[4px] text-[14px] text-center text-gray_900 w-[252px]">
                    Upgrade Now
                  </Button>
                </div>
              </div>
            </List>
            <Text
              className="border-b-[1px] border-solid border-teal_A400 font-medium mt-[12px] self-stretch text-left text-teal_A400 w-[auto]"
              variant="body2"
            >
              See All Features and Benefits
            </Text>
            <div className="flex flex-col gap-[16px] items-start justify-start mt-[30px] self-stretch md:w-[100%] w-[auto]">
              <div className="flex items-start justify-start self-stretch w-[auto]">
                <Text
                  className="font-medium text-gray_50 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Billing Details
                </Text>
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                <div className="flex items-start justify-start max-w-[912px] w-[100%]">
                  <div className="bg-gray_901 border-[1px] border-gray_801 border-solid flex sm:flex-col flex-row gap-[4px] items-start justify-start p-[16px] rounded-[4px] sm:w-[100%] w-[450px]">
                    <div className="flex sm:flex-col flex-row gap-[12px] items-start justify-start w-[100%]">
                      <div className="bg-white_A700 border-[1px] border-gray_100 border-solid flex sm:flex-1 items-center justify-start p-[6px] rounded-[6px] sm:w-[100%] w-[12%]">
                        <Img
                          src="images/img_file.svg"
                          className="h-[10px] my-[4px] w-[auto]"
                          alt="file"
                        />
                      </div>
                      <div className="flex flex-1 items-start justify-start w-[100%]">
                        <div className="flex flex-col items-start justify-start w-[100%]">
                          <Text
                            className="font-medium text-gray_50 text-left w-[auto]"
                            variant="body2"
                          >
                            Visa ending in 1234
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_501 text-left w-[auto]"
                            variant="body2"
                          >
                            Expiry 06/2024
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[4px] h-[68px] md:h-[auto] items-center justify-between self-stretch w-[auto]">
                      <div className="bg-teal_A400 flex h-[16px] items-center justify-start p-[4px] rounded-[50%] w-[16px]">
                        <Img
                          src="images/img_icon.svg"
                          className="h-[4px] w-[auto]"
                          alt="icon"
                        />
                      </div>
                      <Text
                        className="common-pointer font-medium text-left text-teal_A400 w-[auto]"
                        variant="body2"
                        onClick={() => navigate("/editcarddetails")}
                      >
                        Edit
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex items-start justify-start self-stretch w-[auto]">
                    <MyAccountBillingOneButtonbase
                      className="flex flex-row items-center justify-center self-stretch sm:w-[100%] w-[auto]"
                      text_Eight="Add new payment method"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-start justify-start max-w-[912px] mt-[29px] w-[100%]">
              <div className="flex items-start justify-start w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <Text
                    className="font-medium text-gray_50 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Billing history
                  </Text>
                </div>
              </div>
              <div className="border-[1px] border-gray_901 border-solid flex items-start justify-start rounded-[4px] w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start rounded-[4px] w-[100%]">
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-[1px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:w-[100%] w-[83%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-start justify-start sm:w-[100%] w-[429px]">
                      <div className="bg-gray_901 flex h-[44px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[12px] w-[100%]">
                        <div className="flex items-center justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-gray_50 text-left w-[auto]"
                            variant="body3"
                          >
                            Invoice
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-gray_901 h-[1px] w-[100%]" />
                      <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                        <Text
                          className="font-medium text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Basic Plan – Jan 2023
                        </Text>
                      </div>
                      <Line className="bg-gray_901 h-[1px] w-[100%]" />
                      <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                        <Text
                          className="font-medium text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Basic Plan – Jan 2023
                        </Text>
                      </div>
                      <Line className="bg-gray_901 h-[1px] w-[100%]" />
                      <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                        <Text
                          className="font-medium text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Basic Plan – Jan 2023
                        </Text>
                      </div>
                      <Line className="bg-gray_901 h-[1px] w-[100%]" />
                      <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                        <Text
                          className="font-medium text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Basic Plan – Jan 2023
                        </Text>
                      </div>
                      <Line className="bg-gray_901 h-[1px] w-[100%]" />
                      <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                        <Text
                          className="font-medium text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Basic Plan – Jan 2023
                        </Text>
                      </div>
                      <Line className="bg-gray_901 h-[1px] w-[100%]" />
                      <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                        <Text
                          className="font-medium text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Basic Plan – Jan 2023
                        </Text>
                      </div>
                      <Line className="bg-gray_901 h-[1px] w-[100%]" />
                      <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                        <Text
                          className="font-medium text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Basic Plan – Jan 2023
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <div className="bg-gray_901 flex h-[44px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[12px] w-[100%]">
                        <div className="flex items-center justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-gray_50 text-left w-[auto]"
                            variant="body3"
                          >
                            Amount
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-gray_901 h-[1px] w-[100%]" />
                      <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          ₹499
                        </Text>
                      </div>
                      <Line className="bg-gray_901 h-[1px] w-[100%]" />
                      <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          ₹499
                        </Text>
                      </div>
                      <Line className="bg-gray_901 h-[1px] w-[100%]" />
                      <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          ₹499
                        </Text>
                      </div>
                      <Line className="bg-gray_901 h-[1px] w-[100%]" />
                      <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          ₹499
                        </Text>
                      </div>
                      <Line className="bg-gray_901 h-[1px] w-[100%]" />
                      <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          ₹499
                        </Text>
                      </div>
                      <Line className="bg-gray_901 h-[1px] w-[100%]" />
                      <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          ₹499
                        </Text>
                      </div>
                      <Line className="bg-gray_901 h-[1px] w-[100%]" />
                      <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          ₹499
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <div className="bg-gray_901 flex h-[44px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[12px] w-[100%]">
                        <div className="flex items-center justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-gray_50 text-left w-[auto]"
                            variant="body3"
                          >
                            Date
                          </Text>
                        </div>
                      </div>
                      <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Jan 1, 2023
                        </Text>
                      </div>
                      <Line className="bg-gray_901 h-[1px] w-[100%]" />
                      <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Jan 1, 2023
                        </Text>
                      </div>
                      <Line className="bg-gray_901 h-[1px] w-[100%]" />
                      <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Jan 1, 2023
                        </Text>
                      </div>
                      <Line className="bg-gray_901 h-[1px] w-[100%]" />
                      <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Jan 1, 2023
                        </Text>
                      </div>
                      <Line className="bg-gray_901 h-[1px] w-[100%]" />
                      <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Jan 1, 2023
                        </Text>
                      </div>
                      <Line className="bg-gray_901 h-[1px] w-[100%]" />
                      <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Jan 1, 2023
                        </Text>
                      </div>
                      <Line className="bg-gray_901 h-[1px] w-[100%]" />
                      <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-[auto]"
                          variant="body2"
                        >
                          Jan 1, 2023
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                    <div className="bg-gray_901 flex h-[44px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[12px] w-[100%]">
                      <div className="flex items-center justify-start self-stretch w-[auto]">
                        <Text
                          className="font-medium text-gray_50 text-left w-[auto]"
                          variant="body3"
                        >
                          Status
                        </Text>
                      </div>
                    </div>
                    <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                      <div className="flex items-start justify-start self-stretch w-[auto]">
                        <Button
                          className="bg-gray_906 cursor-pointer flex items-center justify-center min-w-[55px] px-[7px] py-[2px] rounded-[11px] w-[auto]"
                          leftIcon={
                            <Img
                              src="images/img_checkmark_teal_a402_12x12.svg"
                              className="mr-[4px] my-[1px]"
                              alt="checkmark"
                            />
                          }
                        >
                          <div className="font-medium text-[12px] text-center text-teal_A402">
                            Paid
                          </div>
                        </Button>
                      </div>
                    </div>
                    <Line className="bg-gray_901 h-[1px] w-[100%]" />
                    <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                      <div className="flex items-start justify-start self-stretch w-[auto]">
                        <Button
                          className="bg-gray_906 cursor-pointer flex items-center justify-center min-w-[55px] px-[7px] py-[2px] rounded-[11px] w-[auto]"
                          leftIcon={
                            <Img
                              src="images/img_checkmark_teal_a402_12x12.svg"
                              className="mr-[4px] my-[1px]"
                              alt="checkmark"
                            />
                          }
                        >
                          <div className="font-medium text-[12px] text-center text-teal_A402">
                            Paid
                          </div>
                        </Button>
                      </div>
                    </div>
                    <Line className="bg-gray_901 h-[1px] w-[100%]" />
                    <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                      <div className="flex items-start justify-start self-stretch w-[auto]">
                        <Button
                          className="bg-gray_906 cursor-pointer flex items-center justify-center min-w-[55px] px-[7px] py-[2px] rounded-[11px] w-[auto]"
                          leftIcon={
                            <Img
                              src="images/img_checkmark_teal_a402_12x12.svg"
                              className="mr-[4px] my-[1px]"
                              alt="checkmark"
                            />
                          }
                        >
                          <div className="font-medium text-[12px] text-center text-teal_A402">
                            Paid
                          </div>
                        </Button>
                      </div>
                    </div>
                    <Line className="bg-gray_901 h-[1px] w-[100%]" />
                    <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                      <div className="flex items-start justify-start self-stretch w-[auto]">
                        <Button
                          className="bg-gray_906 cursor-pointer flex items-center justify-center min-w-[55px] px-[7px] py-[2px] rounded-[11px] w-[auto]"
                          leftIcon={
                            <Img
                              src="images/img_checkmark_teal_a402_12x12.svg"
                              className="mr-[4px] my-[1px]"
                              alt="checkmark"
                            />
                          }
                        >
                          <div className="font-medium text-[12px] text-center text-teal_A402">
                            Paid
                          </div>
                        </Button>
                      </div>
                    </div>
                    <Line className="bg-gray_901 h-[1px] w-[100%]" />
                    <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                      <div className="flex items-start justify-start self-stretch w-[auto]">
                        <Button
                          className="bg-gray_906 cursor-pointer flex items-center justify-center min-w-[55px] px-[7px] py-[2px] rounded-[11px] w-[auto]"
                          leftIcon={
                            <Img
                              src="images/img_checkmark_teal_a402_12x12.svg"
                              className="mr-[4px] my-[1px]"
                              alt="checkmark"
                            />
                          }
                        >
                          <div className="font-medium text-[12px] text-center text-teal_A402">
                            Paid
                          </div>
                        </Button>
                      </div>
                    </div>
                    <Line className="bg-gray_901 h-[1px] w-[100%]" />
                    <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                      <div className="flex items-start justify-start self-stretch w-[auto]">
                        <Button
                          className="bg-gray_906 cursor-pointer flex items-center justify-center min-w-[55px] px-[7px] py-[2px] rounded-[11px] w-[auto]"
                          leftIcon={
                            <Img
                              src="images/img_checkmark_teal_a402_12x12.svg"
                              className="mr-[4px] my-[1px]"
                              alt="checkmark"
                            />
                          }
                        >
                          <div className="font-medium text-[12px] text-center text-teal_A402">
                            Paid
                          </div>
                        </Button>
                      </div>
                    </div>
                    <Line className="bg-gray_901 h-[1px] w-[100%]" />
                    <div className="flex h-[72px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] py-[16px] w-[100%]">
                      <div className="flex items-start justify-start self-stretch w-[auto]">
                        <Button
                          className="bg-gray_906 cursor-pointer flex items-center justify-center min-w-[55px] px-[7px] py-[2px] rounded-[11px] w-[auto]"
                          leftIcon={
                            <Img
                              src="images/img_checkmark_teal_a402_12x12.svg"
                              className="mr-[4px] my-[1px]"
                              alt="checkmark"
                            />
                          }
                        >
                          <div className="font-medium text-[12px] text-center text-teal_A402">
                            Paid
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccountbillingOnePage;
