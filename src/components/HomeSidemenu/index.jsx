import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Img, Text, Line } from "components";
import UserProfileAside from "./UserProfileAside";
import appConfig from 'config/app.config.json';

const HomeSidemenu = (props) => {
  const { className } = props;
  const [toggleDropdown,setToggleDropdown] = useState(false);
  const { user } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPathname = location.pathname;

  const printString = (str) => {
    if(str?.length > 22){
       return `${str.slice(0,25)}...`;
    }else{
      return str;
    }
  }
  const updateUserProfileDropDown = (value) => {
    setToggleDropdown(value);
  }
  return (
    <>
      <aside className={className}>
        <div className="flex flex-col gap-[32px] justify-between w-[100%] h-[100%] py-2">
         <div className="flex flex-col items-start justify-start w-[100%] py-2">
            <div className="flex items-center justify-start pl-4 w-[100%]">
              <Img
                src="images/CW-logo.png"
                className="h-[40px] object-cover w-[auto]"
                alt="frame529821"
              />
            </div>
            <div className="py-4 w-[100%] flex flex-col gap-2">
              {appConfig?.MenuItems?.map((x) => {
                return(
                  <div className={`flex items-start justify-between w-[100%] gap-2`} key={x?.Path}>
                    <div
                      className={`${currentPathname === x?.Path ? "bg-teal_800" : null} flex flex-row gap-[16px] p-[8px] rounded-[4px] items-center justify-start self-stretch w-[100%]`}
                      onClick={() => navigate(x?.Path)}
                    >
                      <Img
                        src={x?.Icon}
                        className="h-[24px] w-[24px] cursor-pointer"
                        alt="home"
                      />
                      <Text
                        className="cursor-pointer font-inter font-normal text-gray_50 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        {x?.Name}
                      </Text>
                    </div>
                    {currentPathname === x?.Path && <Line className="bg-teal_800 h-[100%] w-[5px] rounded-l-[4px]" />} 
                  </div>
                )
              })}
            </div>
          </div>
          <div className="relative flex flex-col gap-2 items-center justify-center">
            <Line className="bg-gray_801 h-[1px] mt-[24px] w-[85%]" />
            <div className="r flex flex-row gap-[10px] items-center justify-between w-[100%]">
              <div className="flex flex-row items-center justify-evenly w-[100%]">
                <Img
                  src={user?.picture ? user?.picture : "images/img_unsplashwnolnjo7ts8.png"}
                  className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
                  alt="unsplashwnolnjo"
                />
                <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                  <Text
                    className="font-inter font-medium text-center text-gray_50 w-[auto]"
                    variant="body3"
                  >
                    {printString(user?.name)}
                  </Text>
                  <Text
                    className="font-inter font-light text-center text-gray_501 w-[100%]"
                    variant="body3"
                  >
                    {printString(user?.email)}
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_overflowmenu.svg"
                className="cursor-pointer h-[24px] w-[24px]"
                alt="overflowmenu"
                onClick={() => {updateUserProfileDropDown(!toggleDropdown)}}
              />
            </div>
            <UserProfileAside toggleDropdown={toggleDropdown} />
          </div>
        </div>
      </aside>
    </>
  );
};


export default HomeSidemenu;
