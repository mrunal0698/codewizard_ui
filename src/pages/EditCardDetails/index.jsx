import React from "react";

import Sidebar from "components/Sidebar";
import { Text, Line, Input, Img, SelectBox, Button } from "components";
import PaymentDetailsElevenStackcreatefromframe from "components/PaymentDetailsElevenStackcreatefromframe";
import { useNavigate } from "react-router-dom";

const EditCardDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-start mx-[auto] pb-[24px] sm:pr-[20px] pr-[24px] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between max-w-[1256px] mx-[auto] md:px-[20px] w-[100%]">
          <Sidebar className="flex flex-col md:hidden justify-start w-[320px]" />
          <div className="flex flex-1 flex-col md:gap-[40px] gap-[64px] items-center justify-start md:mt-[0] mt-[32px] w-[100%]">
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div className="flex items-start justify-start max-w-[912px] w-[100%]">
                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[100%]">
                    <div className="flex items-start justify-start w-[100%]">
                      <Text
                        className="font-medium text-gray_50 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Billing Details
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray_801 h-[1px] w-[100%]" />
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start max-w-[763px] mt-[24px] w-[100%]">
                <Text
                  className="font-medium text-gray_50 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Card details
                </Text>
                <div className="flex flex-col gap-[16px] items-end justify-start max-w-[763px] w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_300 text-left w-[auto]"
                      variant="body2"
                    >
                      Name on card
                    </Text>
                    <Input
                      wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid px-[12px] py-[15px] rounded-[4px] w-[100%]"
                      className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                      name="textfield"
                      placeholder="Ram G"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_300 text-left w-[auto]"
                      variant="body2"
                    >
                      Card number
                    </Text>
                    <Input
                      wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid flex px-[12px] py-[15px] rounded-[4px] sm:w-[100%] w-[512px]"
                      className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                      name="textfield_One"
                      placeholder="1234 1234 1234 1234"
                      suffix={
                        <Img
                          src="images/img_payment_method_icon.svg"
                          className="ml-[35px] my-[auto]"
                          alt="Payment method icon"
                        />
                      }
                    ></Input>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[16px] items-start justify-start max-w-[763px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start">
                      <Text
                        className="font-semibold text-gray_300 text-left w-[auto]"
                        variant="body2"
                      >
                        Expiry Date
                      </Text>
                      <Input
                        wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid flex p-[12px] rounded-[4px] w-[248px]"
                        className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                        name="textfield_Two"
                        placeholder="6/2024"
                        suffix={
                          <Img
                            src="images/img_calendar.svg"
                            className="ml-[35px] my-[auto]"
                            alt="calendar"
                          />
                        }
                      ></Input>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[499px]">
                      <Text
                        className="font-medium text-gray_300 text-left w-[auto]"
                        variant="body2"
                      >
                        CVV
                      </Text>
                      <PaymentDetailsElevenStackcreatefromframe
                        className="h-[48px] px-[12px] py-[15px] relative sm:w-[100%] w-[499px]"
                        one="•••"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="font-medium mt-[34px] text-gray_50 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Billing Address
              </Text>
              <div className="flex flex-col gap-[12px] items-start justify-start mt-[13px] self-stretch sm:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Country
                  </Text>
                  <SelectBox
                    className="bg-gray_902 border-[1px] border-gray_801 border-solid font-normal not-italic p-[12px] rounded-[4px] text-[12px] text-gray_300 text-left w-[100%]"
                    placeholderClassName="text-gray_300"
                    name="country_One"
                    placeholder="India"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_50_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Address Line 1
                  </Text>
                  <Input
                    wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid p-[12px] rounded-[4px] w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                    name="textfield_Three"
                    placeholder="F Block 121 Ground Floor"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Address Line 2
                  </Text>
                  <Input
                    wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid p-[12px] rounded-[4px] w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                    name="textfield_Four"
                    placeholder="Punjabi Bagh"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    City
                  </Text>
                  <Input
                    wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid p-[12px] rounded-[4px] w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                    name="textfield_Five"
                    placeholder="New Delhi"
                  ></Input>
                </div>
                <div className="flex sm:flex-col flex-row gap-[17px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-semibold text-gray_300 text-left w-[auto]"
                      variant="body2"
                    >
                      State
                    </Text>
                    <Input
                      wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid p-[12px] rounded-[4px] w-[100%]"
                      className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                      name="textfield_Six"
                      placeholder="Delhi"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-semibold text-gray_300 text-left w-[auto]"
                      variant="body2"
                    >
                      Pincode
                    </Text>
                    <Input
                      wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid p-[12px] rounded-[4px] w-[100%]"
                      className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                      name="zipcode"
                      placeholder="110025"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-start justify-start max-w-[912px] w-[100%]">
              <Line className="bg-gray_801 h-[1px] w-[100%]" />
              <div className="flex items-start justify-start w-[100%]">
                <div className="flex flex-row gap-[12px] items-center justify-end w-[100%]">
                  <Button className="border-[1px] border-solid border-teal_A400 cursor-pointer flex-1 font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[100%]">
                    Cancel
                  </Button>
                  <Button
                    className="common-pointer bg-teal_900 cursor-pointer flex-1 font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_900 w-[100%]"
                    onClick={() => navigate("/myaccountbillingone")}
                  >
                    Save
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

export default EditCardDetailsPage;
