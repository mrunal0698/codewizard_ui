import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, List, Button } from "components";
import MyAccountBillingOneButton from "components/MyAccountBillingOneButton";

const UpgradeOneModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[75%]"
        overlayClassName="bg-black_900_7f fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-gray_901 flex items-center justify-start max-w-[960px] mx-[auto] p-[24px] md:px-[20px] w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                <div className="flex md:flex-1 items-start justify-start md:w-[100%] w-[612px]">
                  <div className="flex items-start justify-start w-[100%]">
                    <div className="flex items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-gray_50 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Need to build more projects?
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_501 text-left w-[auto]"
                          variant="body2"
                        >
                          Basic plan comes only with 1 project. Upgrade now to
                          keep building
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_close.svg"
                  className="common-pointer h-[24px] rounded-[50%] w-[24px]"
                  onClick={props.onRequestClose}
                  alt="close"
                />
              </div>
              <List
                className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[912px] mt-[24px] w-[100%]"
                orientation="horizontal"
              >
                <div className="bg-gray_901 border-[1px] border-gray_801 border-solid md:h-[351px] h-[413px] relative rounded-[4px] w-[100%]">
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
                              1 project
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
                              Deserunt ullamco est sit aliqua dolor do amet
                              sint.{" "}
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
                <div className="bg-gray_901 border-[1px] border-gray_801 border-solid flex flex-1 flex-col h-[413px] md:h-[auto] items-center justify-between rounded-[4px] w-[100%]">
                  <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
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
                              className="font-normal not-italic text-gray_300 text-left w-[auto]"
                              variant="body2"
                            >
                              Unlimited Projects
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
                  <div className="flex items-center justify-center pb-[32px] sm:px-[20px] px-[32px] w-[100%]">
                    <Button className="bg-gradient  cursor-pointer font-medium p-[12px] rounded-[4px] text-[14px] text-center text-gray_900 w-[252px]">
                      Upgrade Now
                    </Button>
                  </div>
                </div>
                <div className="bg-gray_901 border-[1px] border-gray_801 border-solid flex flex-1 flex-col items-center justify-center rounded-[4px] w-[100%]">
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
                            Unlimited Projects
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
              <a
                className="font-medium mt-[22px] text-[14px] text-left text-teal_A400 underline w-[auto]"
                href="javascript:"
              >
                See All Features and Benefits
              </a>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default UpgradeOneModal;
