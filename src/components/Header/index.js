import { Img, Input, Text } from 'components'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react'
import { useAuth0 } from '@auth0/auth0-react';

import appConfig from 'config/app.config.json';
import { useSelector } from 'react-redux';
import UserProfileAside from 'components/HomeSidemenu/UserProfileAside';

const Header = (props) => {
  const { OnDrawerClicked, open, drawer } = props;
  const [inputvalue,setInputvalue] = useState();
  const [screenTitle,setScreenTitle] = useState("");
  const [toggleDropdown,setToggleDropdown] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const projectDetail = useSelector(store => store.basicInformation?.projectBasicDetail);
  
  const { user } = useAuth0();

  useEffect(() => {
    const currentScreen = appConfig?.MenuItems.find(x => x.Path === location.pathname);
    setScreenTitle(currentScreen?.Name)
  },[location])
  
  const updateUserProfileDropDown = (value) => {
    setToggleDropdown(value);
  }

  return (
    <div className='flex justify-between items-center bg-gray_901 h-header'>
      <div className='flex gap-[24px] items-center'>
        <div className='flex items-center sm:w-[auto] justify-between gap-2'>
          {drawer ? (
            <>           
              <Hamburger toggled={open} toggle={OnDrawerClicked} color="#fff" size={20}/>
              <Img 
                src='images/CW-logo.png'
                className="w-[64px] h-[30px]"
              />
            </>
          ) : (
            <Img 
              src='images/CW-logo.png'
              className="w-[64px] h-[30px] ml-4"
            />
          )}
        </div>
        <Text
            className="font-medium text-gray_50 text-left w-[auto]"
            as="h5"
            variant="h5"
        >
        {screenTitle || projectDetail?.ProjectName}
        </Text>
      </div>
      <div className="relative flex items-center justify-end px-[12px] gap-2">
        <div className='flex gap-4 items-center sm:hidden'>
          {drawer && (
            <>
              <Img 
                src="images/img_question.svg"
                className="h-[20px] w-[20px] cursor-pointer"
                alt="home"
                onClick={() => navigate("/help-and-support")}
              />
              <Text
                className="font-medium text-gray_300 text-left w-[auto] shrink-0 sm:hidden cursor-pointer"
                variant="body3"
                onClick={() => navigate("/help-and-support")}
              >
                Help and Support
              </Text>
            </>
          )}
        </div>
          {!drawer && (
             <>
              <Img
                src={user?.picture ? user?.picture : "images/img_unsplashwnolnjo7ts8.png"}
                className="w-7 h-7 md:h-[auto] rounded-[50%]"
                alt="profile"
              />
              <Img
                src="images/img_overflowmenu.svg"
                className="cursor-pointer h-[24px] w-[24px]"
                alt="overflowmenu"
                onClick={() => {updateUserProfileDropDown(!toggleDropdown)}}
              />
              <UserProfileAside toggleDropdown={toggleDropdown} className="top-8 right-8" /> 
             </>
          )}
      </div>
    </div>
  )
}

Header.defaultProps = { 
  OnDrawerClicked : () => {},
  open : false,
  drawer : true 
};

export default Header;