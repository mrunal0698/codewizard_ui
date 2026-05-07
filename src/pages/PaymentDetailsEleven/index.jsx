import React from "react";

import SignupOneSidebarframe529821 from "components/SignupOneSidebarframe529821";
import { Text, Input, Img, Button } from "components";
import PaymentDetailsElevenStackcreatefromframe from "components/PaymentDetailsElevenStackcreatefromframe";

const PaymentDetailsElevenPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-inter justify-start mx-[auto] p-[24px] sm:px-[20px] w-[100%]">
        <SignupOneSidebarframe529821 className="flex flex-col md:hidden justify-start md:px-[20px] w-[9%]" />
        <div className="flex items-center mr-[110px] mt-[152px] md:px-[20px] px-[381px] md:w-[100%] w-[auto]">
          <Text
            className="font-semibold text-center text-gray_50 w-[auto]"
            as="h2"
            variant="h2"
          >
            Payment Details
          </Text>
        </div>
        <div className="flex items-end mb-[181px] mr-[110px] mt-[29px] sm:pl-[20px] pl-[338px] md:px-[20px] md:w-[100%] w-[92%]">
          <div className="flex flex-col gap-[32px] items-start justify-start w-[100%]">
            <div className="flex items-start justify-start self-stretch md:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[16px] items-end justify-start self-stretch md:w-[100%] w-[auto]">
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
                    wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid flex px-[12px] py-[15px] rounded-[4px] sm:w-[100%] w-[555px]"
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
                <div className="flex md:flex-col flex-row gap-[16px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start">
                    <Text
                      className="font-semibold text-gray_300 text-left w-[auto]"
                      variant="body2"
                    >
                      Expiry Date
                    </Text>
                    <Input
                      wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid flex p-[12px] rounded-[4px] w-[269px]"
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
                  <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_300 text-left w-[auto]"
                      variant="body2"
                    >
                      CVV
                    </Text>
                    <PaymentDetailsElevenStackcreatefromframe
                      className="h-[48px] px-[12px] py-[15px] relative w-[100%] sm:w-[100%]"
                      one="•••"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Button className="bg-gradient  cursor-pointer font-medium px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[555px]">
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentDetailsElevenPage;
