import React from "react";

import MyAccountMyDetailsNineSidemenu from "components/MyAccountMyDetailsNineSidemenu";
import MyAccountMyDetailsNineSidebar from "components/MyAccountMyDetailsNineSidebar";
import { Text, Line, Img, Button, Input, SelectBox, List } from "components";

const MyAccountMyDetailsNinePage = () => {
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-start mx-[auto] pb-[24px] sm:pr-[20px] pr-[24px] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between max-w-[1256px] mx-[auto] md:px-[20px] w-[100%]">
          <aside className="flex flex-col md:hidden justify-start w-[320px]">
            <MyAccountMyDetailsNineSidemenu className="bg-gray_901 border-gray_801 border-r-[1px] border-solid flex flex-col items-center justify-start p-[8px] sm:w-[100%] w-[auto]" />
            <MyAccountMyDetailsNineSidebar
              className="bg-gray_901 flex flex-col items-center justify-start py-[24px] sm:w-[100%] w-[auto]"
              text="My Details"
              text_One="Password"
              text_Two="Billing"
              ramg="Ram G"
              email="ram@gmail.com"
            />
          </aside>
          <div className="flex flex-1 flex-col md:gap-[40px] gap-[64px] items-center justify-start md:mt-[0] mt-[32px] w-[100%]">
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div className="flex items-start justify-start max-w-[912px] w-[100%]">
                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-medium text-gray_50 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        My Details
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_501 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Update your photo and personal details here.
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray_801 h-[1px] w-[100%]" />
                </div>
              </div>
              <div className="flex items-start justify-start max-w-[912px] mt-[24px] w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_50 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Basic Information
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex h-[144px] items-center justify-start mt-[16px] rounded-[50%] w-[144px]">
                <Img
                  src="images/img_unsplashwnolnjo7ts8_144x144.png"
                  className="h-[144px] md:h-[auto] rounded-[50%] w-[144px]"
                  alt="unsplashwnolnjo_One"
                />
              </div>
              <div className="flex flex-col items-start justify-start mt-[12px] self-stretch w-[auto]">
                <Button className="border-[1px] border-gray_501 border-solid cursor-pointer font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_501 w-[144px]">
                  Upload
                </Button>
                <div className="flex items-center justify-center sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] w-[144px]">
                  <Text
                    className="font-medium text-gray_501 text-left w-[auto]"
                    variant="body2"
                  >
                    Remove
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-start mt-[20px] self-stretch sm:w-[100%] w-[auto]">
                <Text
                  className="font-semibold text-gray_300 text-left w-[auto]"
                  variant="body2"
                >
                  Full Name
                </Text>
                <Input
                  wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid px-[12px] py-[15px] rounded-[4px] w-[100%]"
                  className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                  name="textfield"
                  placeholder="Ram G"
                ></Input>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-start mt-[16px] self-stretch sm:w-[100%] w-[auto]">
                <Text
                  className="font-semibold text-gray_300 text-left w-[auto]"
                  variant="body2"
                >
                  Email ID
                </Text>
                <Input
                  wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid px-[12px] py-[15px] rounded-[4px] w-[100%]"
                  className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                  type="email"
                  name="email_One"
                  placeholder="ram@gmail.com"
                ></Input>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-start mt-[16px] self-stretch sm:w-[100%] w-[auto]">
                <Text
                  className="font-semibold text-gray_300 text-left w-[auto]"
                  variant="body2"
                >
                  Date of Birth
                </Text>
                <div className="flex sm:flex-col flex-row gap-[13px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <SelectBox
                    className="bg-gray_902 border-[1px] border-gray_801 border-solid font-normal not-italic px-[12px] py-[15px] rounded-[4px] text-[12px] text-gray_300 text-left sm:w-[100%] w-[32%]"
                    placeholderClassName="text-gray_300"
                    name="dropdown"
                    placeholder="01"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_50.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <SelectBox
                    className="bg-gray_902 border-[1px] border-gray_801 border-solid font-normal not-italic px-[12px] py-[15px] rounded-[4px] text-[12px] text-gray_300 text-left sm:w-[100%] w-[32%]"
                    placeholderClassName="text-gray_300"
                    name="month"
                    placeholder="January"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_50.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <SelectBox
                    className="bg-gray_902 border-[1px] border-gray_801 border-solid font-normal not-italic px-[12px] py-[15px] rounded-[4px] text-[12px] text-gray_300 text-left sm:w-[100%] w-[32%]"
                    placeholderClassName="text-gray_300"
                    name="zipcode"
                    placeholder="1999"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_50.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-start mt-[10px] self-stretch sm:w-[100%] w-[auto]">
                <div className="flex items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Gender
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[66px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <div className="flex flex-row items-center justify-evenly sm:w-[100%] w-[11%]">
                    <Img
                      src="images/img_contrast.svg"
                      className="h-[20px] w-[20px]"
                      alt="contrast"
                    />
                    <Text
                      className="font-normal not-italic text-gray_50 text-left w-[auto]"
                      variant="body2"
                    >
                      Male
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row md:gap-[40px] gap-[66px] grid grid-cols-2 sm:w-[100%] w-[40%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-row items-center justify-evenly w-[100%]">
                      <Img
                        src="images/img_settings_gray_300_20x20.svg"
                        className="h-[20px] w-[20px]"
                        alt="settings"
                      />
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_50 text-left w-[auto]"
                          variant="body2"
                        >
                          Female
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-[100%]">
                      <Img
                        src="images/img_settings_gray_300_20x20.svg"
                        className="h-[20px] w-[20px]"
                        alt="settings"
                      />
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_50 text-left w-[auto]"
                          variant="body2"
                        >
                          Other
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-row items-start justify-evenly sm:w-[100%] w-[25%]">
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
                        Rather Not Say
                      </Text>
                    </div>
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
                  <Button className="bg-gradient  cursor-pointer flex-1 font-medium px-[12px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_900 w-[100%]">
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

export default MyAccountMyDetailsNinePage;
