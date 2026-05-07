import React from "react";

import { Img, Line, Text } from "components";

const Sidebar = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="bg-gray_901 border-gray_801 border-r-[1px] border-solid flex flex-col gap-[24px] items-center justify-start p-[8px] w-[23%]">
          <div className="flex flex-col gap-[32px] items-center justify-start mt-[16px] md:w-[100%] w-[86%]">
            <Img
              src="images/img_frame529821_40x32.png"
              className="h-[40px] md:h-[auto] object-cover w-[67%]"
              alt="frame529821"
            />
            <div className="flex flex-col items-center justify-start w-[100%]">
              <Img
                src="images/img_home.svg"
                className="h-[48px] rounded-[4px] w-[48px]"
                alt="home"
              />
              <Img
                src="images/img_map.svg"
                className="h-[48px] mt-[8px] rounded-[4px] w-[48px]"
                alt="map"
              />
              <Img
                src="images/img_settings_gray_300.svg"
                className="h-[48px] mt-[8px] rounded-[4px] w-[48px]"
                alt="settings"
              />
              <Img
                src="images/img_star.svg"
                className="h-[48px] mt-[360px] rounded-[4px] w-[48px]"
                alt="star"
              />
              <Img
                src="images/img_question.svg"
                className="h-[48px] mt-[8px] rounded-[4px] w-[48px]"
                alt="question"
              />
            </div>
          </div>
          <Line className="bg-gray_801 h-[1px] w-[100%]" />
          <div className="flex h-[40px] items-center justify-start mb-[16px] w-[40px]">
            <div className="flex h-[40px] items-center justify-start outline outline-[2px] outline-teal_A400 rounded-[50%] w-[40px]">
              <Img
                src="images/img_unsplashwnolnjo7ts8.png"
                className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
                alt="unsplashwnolnjo"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray_901 flex flex-col items-center justify-start py-[24px] w-[78%]">
          <div className="flex items-center justify-start sm:pl-[20px] pl-[24px] py-[12px] rounded-[6px] w-[248px]">
            <div className="flex flex-row gap-[12px] items-center justify-start self-stretch w-[auto]">
              <Img
                src="images/img_user_gray_300.svg"
                className="h-[24px] w-[24px]"
                alt="user"
              />
              <Text
                className="font-inter font-normal not-italic text-gray_300 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                My details
              </Text>
            </div>
          </div>
          <div className="flex items-center justify-start mt-[8px] sm:pl-[20px] pl-[24px] py-[12px] rounded-[6px] w-[248px]">
            <div className="flex flex-row gap-[12px] items-center justify-start self-stretch w-[auto]">
              <Img
                src="images/img_clock.svg"
                className="h-[24px] w-[24px]"
                alt="clock"
              />
              <Text
                className="font-inter font-normal not-italic text-gray_300 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Password
              </Text>
            </div>
          </div>
          <div className="bg-gray_801 flex items-start justify-start mt-[8px] p-[12px] rounded-[4px] md:w-[100%] w-[92%]">
            <div className="flex items-center justify-start md:ml-[0] ml-[4px] self-stretch w-[auto]">
              <div className="flex flex-row gap-[12px] items-center justify-start self-stretch w-[auto]">
                <Img
                  src="images/img_menu_gray_50.svg"
                  className="h-[24px] w-[24px]"
                  alt="menu"
                />
                <Text
                  className="font-inter font-medium text-gray_50 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Billing
                </Text>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start mt-[586px] md:w-[100%] w-[81%]">
            <div className="flex flex-row items-center justify-between w-[100%]">
              <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                <Text
                  className="font-inter font-medium text-center text-gray_50 w-[auto]"
                  variant="body3"
                >
                  Ram G
                </Text>
                <Text
                  className="font-inter font-light text-center text-gray_50 w-[auto]"
                  variant="body3"
                >
                  ram@gmail.com
                </Text>
              </div>
              <Img
                src="images/img_arrowright.svg"
                className="h-[24px] w-[24px]"
                alt="arrowright"
              />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;
