import React from "react";

import { Img, List, Line, Text } from "components";

const WhatSNewSidemenu = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[32px] justify-start my-[12px] w-[100%]">
          <div className="flex items-center justify-start md:ml-[0] ml-[12px] md:w-[100%] w-[56%]">
            <Img
              src="images/img_frame529821.png"
              className="h-[40px] md:h-[auto] object-cover w-[100%]"
              alt="frame529821"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-[100%]">
            <List
              className="flex-col gap-[4px] grid w-[95%]"
              orientation="vertical"
            >
              <div className="flex items-start justify-start my-[0] p-[12px] rounded-[4px] w-[100%]">
                <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                  <Img
                    src="images/img_home.svg"
                    className="h-[24px] w-[24px]"
                    alt="home"
                  />
                  <Text
                    className="font-inter font-medium text-gray_300 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    {props?.label}
                  </Text>
                </div>
              </div>
              <Line className="self-center h-[1px] bg-gray_801 w-[90%]" />
              <div className="flex items-start justify-start my-[0] p-[12px] rounded-[4px] w-[100%]">
                <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                  <Img
                    src="images/img_map.svg"
                    className="h-[24px] w-[24px]"
                    alt="map"
                  />
                  <Text
                    className="font-inter font-medium text-gray_300 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    {props?.label}
                  </Text>
                </div>
              </div>
              <Line className="self-center h-[1px] bg-gray_801 w-[90%]" />
              <div className="flex items-start justify-start my-[0] p-[12px] rounded-[4px] w-[100%]">
                <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                  <Img
                    src="images/img_settings_gray_300.svg"
                    className="h-[24px] w-[24px]"
                    alt="settings"
                  />
                  <Text
                    className="font-inter font-medium text-gray_300 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    {props?.label}
                  </Text>
                </div>
              </div>
            </List>
            <div className="flex flex-row gap-[8px] items-center justify-between mt-[360px] w-[100%]">
              <div className="bg-teal_800 flex items-start justify-start p-[12px] rounded-[4px] w-[auto]">
                <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                  <Img
                    src="images/img_star_gray_50.svg"
                    className="h-[24px] w-[24px]"
                    alt="star"
                  />
                  <Text
                    className="font-inter font-medium text-gray_50 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    {props?.label}
                  </Text>
                </div>
              </div>
              <Line className="bg-teal_800 h-[48px] w-[4px]" />
            </div>
            <div className="flex items-start justify-start mt-[8px] p-[12px] rounded-[4px] md:w-[100%] w-[95%]">
              <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                <Img
                  src="images/img_question.svg"
                  className="h-[24px] w-[24px]"
                  alt="question"
                />
                <Text
                  className="font-inter font-medium text-gray_300 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  {props?.label_One}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-[44px] items-center justify-start md:ml-[0] ml-[12px] mt-[49px] md:w-[100%] w-[85%]">
              <div className="flex items-center justify-start w-[67%]">
                <div className="flex flex-row items-center justify-evenly w-[100%]">
                  <div className="flex h-[40px] items-center justify-start rounded-[50%] w-[40px]">
                    <Img
                      src="images/img_unsplashwnolnjo7ts8.png"
                      className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
                      alt="unsplashwnolnjo"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                    <Text
                      className="font-inter font-medium text-center text-gray_50 w-[auto]"
                      variant="body3"
                    >
                      {props?.ramg}
                    </Text>
                    <Text
                      className="font-inter font-light text-center text-gray_501 w-[auto]"
                      variant="body3"
                    >
                      {props?.email}
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_overflowmenu.svg"
                className="h-[24px] w-[24px]"
                alt="overflowmenu"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

WhatSNewSidemenu.defaultProps = {
  label: "Home",
  label: "Model Library",
  label: "Settings",
  label: "What’s New?",
  label_One: "Help and Support",
  ramg: "Ram G",
  email: "ram@gmail.com",
};

export default WhatSNewSidemenu;
