import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Button, Line } from "components";

const MyAccountbillingModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[75%]"
        overlayClassName="bg-black_900_7f fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-gray_901 flex items-center justify-start max-w-[960px] mx-[auto] my-[45px] p-[24px] md:px-[20px] w-[100%]">
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                <div className="flex md:flex-1 items-start justify-start md:w-[100%] w-[612px]">
                  <Text
                    className="font-medium text-gray_50 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Checkout
                  </Text>
                </div>
                <Img
                  src="images/img_close.svg"
                  className="common-pointer h-[24px] rounded-[50%] w-[24px]"
                  onClick={props.onRequestClose}
                  alt="close"
                />
              </div>
              <div className="flex flex-row sm:gap-[40px] items-center justify-between mt-[35px] md:w-[100%] w-[69%]">
                <Text
                  className="font-medium text-gray_50 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Billing Frequency
                </Text>
                <Text
                  className="font-medium text-gray_50 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Order Summary
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[28px] items-center justify-between mt-[12px] w-[100%]">
                <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[49%]">
                  <div className="bg-gray_901 border-[1px] border-gray_801 border-solid md:h-[37px] sm:h-[53px] h-[68px] px-[16px] py-[12px] relative rounded-[4px] sm:w-[100%] w-[442px]">
                    <div className="absolute flex sm:flex-col flex-row gap-[12px] h-[max-content] inset-y-[0] items-center justify-start left-[4%] my-[auto] w-[100%]">
                      <div className="bg-teal_A400 flex h-[16px] items-center justify-start p-[4px] rounded-[50%] w-[16px]">
                        <Img
                          src="images/img_icon.svg"
                          className="h-[4px] w-[auto]"
                          alt="icon"
                        />
                      </div>
                      <div className="flex flex-1 flex-row gap-[8px] items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-gray_50 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Yearly
                        </Text>
                        <div className="flex items-start justify-start self-stretch w-[auto]">
                          <Button className="bg-gray_906 cursor-pointer font-normal min-w-[85px] not-italic px-[10px] py-[2px] rounded-[12px] text-[14px] text-center text-teal_A402 w-[auto]">
                            Save 20%
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-col gap-[2px] h-[max-content] inset-y-[0] items-end justify-center my-[auto] right-[4%] w-[100%]">
                      <Text
                        className="font-medium text-gray_50 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      ></Text>
                      <Text
                        className="font-normal not-italic text-gray_501 text-left w-[auto]"
                        variant="body3"
                      >
                        ₹5400 billed yearly
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_901 border-[1px] border-gray_801 border-solid md:h-[47px] sm:h-[62px] h-[68px] mt-[10px] px-[16px] py-[12px] relative rounded-[4px] sm:w-[100%] w-[442px]">
                    <div className="absolute flex sm:flex-col flex-row gap-[12px] h-[max-content] inset-y-[0] items-center justify-start left-[4%] my-[auto] w-[100%]">
                      <div className="border-[1px] border-gray_501 border-solid h-[16px] rounded-[50%] w-[16px]"></div>
                      <div className="flex flex-1 items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-gray_50 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Monthly
                        </Text>
                      </div>
                    </div>
                    <div className="absolute flex flex-col gap-[2px] h-[max-content] inset-y-[0] items-end justify-center my-[auto] right-[4%] w-[100%]">
                      <Text
                        className="font-medium text-gray_50 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      ></Text>
                      <Text
                        className="font-normal not-italic text-gray_501 text-left w-[auto]"
                        variant="body3"
                      >
                        ₹499 billed monthly
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-medium mt-[25px] text-gray_50 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Billing Details
                  </Text>
                  <div className="bg-gray_901 border-[1px] border-gray_801 border-solid flex sm:flex-col flex-row gap-[4px] items-center justify-start mt-[10px] p-[16px] rounded-[4px] sm:w-[100%] w-[442px]">
                    <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
                      <div className="bg-white_A700 border-[1px] border-gray_100 border-solid flex items-center justify-start p-[6px] rounded-[6px] w-[20%]">
                        <Img
                          src="images/img_file_indigo_900.svg"
                          className="h-[10px] my-[4px] w-[auto]"
                          alt="file"
                        />
                      </div>
                      <div className="flex items-start justify-start w-[182px]">
                        <Text
                          className="font-medium text-gray_50 text-left w-[auto]"
                          variant="body2"
                        >
                          Visa ending in 1234
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-end justify-center w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_501 text-left w-[auto]"
                        variant="body3"
                      >
                        Edit credit card
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_901 border-[1px] border-gray_801 border-solid flex md:flex-1 items-center justify-end py-[24px] rounded-[4px] md:w-[100%] w-[49%]">
                  <div className="flex flex-col items-center justify-start mt-[2px] w-[100%]">
                    <div className="flex flex-col items-start justify-start md:w-[100%] w-[92%]">
                      <div className="flex flex-row items-center justify-between md:w-[100%] w-[97%]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          variant="body2"
                        >
                          Business Plan
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          variant="body2"
                        >
                          ₹5400
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[12px] md:w-[100%] w-[94%]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          variant="body2"
                        >
                          GST{" "}
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          variant="body2"
                        >
                          ₹100
                        </Text>
                      </div>
                      <Line className="bg-gray_801 h-[1px] mt-[17px] w-[100%]" />
                      <div className="flex flex-row items-start justify-between mt-[16px] w-[100%]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Total Due Today
                        </Text>
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          ₹5500
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-gray_801 h-[1px] mt-[16px] w-[100%]" />
                    <Text
                      className="font-light mt-[21px] text-gray_501 text-left w-[auto]"
                      variant="body3"
                    >
                      We will bill you every year on August 7th, unless you
                      cancel
                    </Text>
                    <Button className="bg-gradient  cursor-pointer font-medium sm:min-w-[100%] min-w-[395px] mt-[16px] px-[168px] sm:px-[20px] md:px-[40px] py-[12px] rounded-[4px] text-[14px] text-center text-gray_900 w-[auto]">
                      Pay Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default MyAccountbillingModal;
