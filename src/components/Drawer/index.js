import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Img, Text, Line } from "components";
import UserProfileAside from "components/HomeSidemenu/UserProfileAside";
import appConfig from 'config/app.config.json';
import Helper from "shared/helper";

const fixedscreens = ['/input-table', '/wizard-GPT', "/backend-app", "/frontend-app", "/design/edit"];

const Drawer = (props) => {
  const { className, open, close } = props;
  const [toggleDropdown,setToggleDropdown] = useState(false);
  const { user } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPathname = Helper.GetScreenPath(location.pathname);

  const printString = (str) => {
    if(str?.length > 20){
       return `${str.slice(0,19)}...`;
    }else{
      return str;
    }
  }
  const updateUserProfileDropDown = (value) => {
    setToggleDropdown(value);
  }
  const handleNavigate = (x) => {
    // close()
    if(x.Path){
      navigate(x?.Path);
    }else if(x.URL) {
      window.open(x?.URL,"_blank")
    }
  }
  useEffect(() => {
    if(fixedscreens.includes(currentPathname)){
      close()
    }
  },[currentPathname])
  
  return (
    <>
      <aside className={`${className} ${!open ? "sm:hidden": null} sm:absolute`}>
        <div className="flex flex-col gap-[32px] justify-between w-[100%] h-[100%] py-2">
            <div className="w-[100%] flex flex-col gap-2 mb-[auto]">
              {appConfig?.MenuItems?.map((x,idx) => {
                return(
                  <div className={`flex items-start justify-between w-[100%] gap-2 `} key={idx}>
                    <div
                      className={`${currentPathname === x?.Path ? "bg-teal_800" : "hover:bg-[#2F2F2F]"} flex flex-row gap-[16px] p-[8px] rounded-[4px] items-center justify-start self-stretch w-[100%] ${!open && "data-label-right"}`}
                      onClick={() => handleNavigate(x)}  data-label={x?.Name}
                    > 
                      <Img
                        src={x?.Icon}
                        className={`h-[20px] w-[20px] cursor-pointer`}
                        alt={x?.Name} 
                      />
                      {open && (
                        <Text
                        className="cursor-pointer font-inter font-normal text-gray_50 text-left w-[auto] fadeIn"
                        variant="body2"
                        >
                         {x?.Name}
                        </Text>
                      )}
                    </div>
                    {currentPathname === x?.Path && <Line className="bg-teal_800 h-[100%] w-[5px] rounded-l-[4px]" />} 
                  </div>
                )
              })}

              <div className="flex items-center gap-3">
              {open && (
                  <Text
                    className="cursor-pointer font-normal text-hint text-xs text-left w-[auto] fadeIn"
                    variant="body2"
                  >
                    Coming Soon 
                  </Text>
                )}
                <Line className="h-[1px] bg-hint w-full" />
              </div>
              {appConfig?.comingSoonMenus?.map((x,idx) => {
                return(
                  <div className={`flex items-start justify-between w-[100%] gap-2`} key={idx}>
                    <div
                      className={`${currentPathname === x?.Path ? "bg-teal_800" : null} flex flex-row gap-[16px] p-[8px] rounded-[4px] items-center justify-start self-stretch w-[100%] cursor-not-allowed`}
                      data-label={x?.Name}
                    >
                      <Img
                        src={x?.Icon}
                        className="h-[20px] w-[20px]"
                        alt="home"
                      />
                      {open && (
                        <Text
                        className="font-inter font-normal text-hint text-left w-[auto] fadeIn"
                        variant="body2"
                        >
                         {x?.Name}
                        </Text>
                      )}
                    </div>
                    {currentPathname === x?.Path && <Line className="bg-teal_800 h-[100%] w-[5px] rounded-l-[4px]" />} 
                  </div>
                )
              })}
            </div>
          </div>
        <div className="relative flex flex-col gap-2 items-center justify-center">
        <div className="w-[100%] flex flex-col gap-2 mb-[auto]">
              {appConfig?.SecondaryMenuItems?.map((x,idx) => {
                return(
                  <div className={`flex items-start justify-between w-[100%] gap-2`} key={idx}>
                    <div
                      className={`${currentPathname === x?.Path ? "bg-teal_800" : "hover:bg-[#2F2F2F]"} flex flex-row gap-[16px] p-[8px] rounded-[4px] items-center justify-start self-stretch w-[100%] ${!open && "data-label-right"}`}
                      onClick={() => handleNavigate(x)}
                      data-label={x?.Name}
                    >
                      <Img
                        src={x?.Icon}
                        className="h-[20px] w-[20px] cursor-pointer"
                        alt="home"
                      />
                      {open && (
                        <Text
                        className="cursor-pointer font-inter font-normal text-gray_50 text-left w-[auto] fadeIn"
                        variant="body2"
                        >
                         {x?.Name}
                        </Text>
                      )}
                    </div>
                    {currentPathname === x?.Path && <Line className="bg-teal_800 h-[100%] w-[5px] rounded-l-[4px]" />} 
                  </div>
                )
              })}
            </div>
          <Line className="bg-gray_801 h-[1px] w-[85%]" />
          {open && (
            <div className="r flex flex-row gap-[10px] items-center justify-between w-[100%] fadeIn">
              <div className="flex flex-row items-center justify-evenly w-[100%]">
                {!!user?.picture && (
                  <Img
                    src={user?.picture}
                    className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
                    alt="profile"
                  />
                 )}
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
          )}
          {!open && (
              <Img
              src={user?.picture ? user?.picture : "images/img_unsplashwnolnjo7ts8.png"}
              className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
              alt="profile"
            />
          )}
          {!!open && <UserProfileAside toggleDropdown={toggleDropdown} className="right-6 bottom-3" /> }
        </div>
      </aside>
    </>
  );
};


export default Drawer;
