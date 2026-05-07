import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Routes from "./Routes";
import AlertMesssage from "components/AlertMessage";
import { Img } from "components";
import Header from "components/Header";
import Drawer from "components/Drawer";
import Helper from "shared/helper";

function App() {
  const [open,setOpen] = useState(true);

  const location = useLocation();
  const currentUrl = Helper.GetScreenPath(location.pathname);

  global.Busy = (bBool) => {
    var x = document.getElementById("busyloader");
    if (x) x.className = bBool ? "loader display-block" : "loader display-none";
  };
  global.AlertPopup = (type, msg) => {
    sessionStorage.setItem('alert', JSON.stringify({ msg, type }));
  };
 
  const OnDrawerClicked = () => {
    setOpen(!open);
  }
  
  const validateUrl = (param) => {
    switch(param) {
      case '/our-home':
      case '/design-library':
      case '/help-and-support':
      case '/whats-new':
      case '/settings':
      case '/pre-built-apps':
      case '/backend-app':
      case '/frontend-app':
      case '/plugins':
      case '/arch-blue-prints':
      case '/templates':
      case "/input-table":
      case "/wizard-GPT":
      case "/design/edit":
        return (
          <div className="bg-gray_900 font-inter mx-[auto] w-[100%]">
            <Header OnDrawerClicked={OnDrawerClicked} open={open} />
            <div className="relative flex justify-start">
              <Drawer className= {`${open ? "w-[230px]": "w-[60px]"} bg-gray_901 insest-[0] z-10 border-r-[1px] border-solid border-gray_800 flex flex-col justify-start shrink-0 pl-2 pb-[12px] ease-in-out duration-500 transition-[width] h-main`}
               open={open} close={() => setOpen(false)}/>
              <div className="px-8 md:px-2 sm:ml-0 w-[100%] overflow-y-auto h-main">
                <Routes />           
              </div>
            </div>
          </div>
          )
      case '/pricing': 
      case '/contact-sales':
        return(
          <div className="bg-gray_900 font-inter mx-[auto] w-[100%]">
            <Header drawer={false} />
            <div className="h-main overflow-y-auto">
              <Routes />           
            </div>
          </div>
        )
      default:
        return (
          <div className="bg-gray_900 flex font-inter items-start justify-start mx-[auto] w-[100%] min-h-screen">
            <Routes />               
          </div>
        );
    }
  }

  return (
    <>
      {validateUrl(currentUrl)}
      <div id="busyloader" className="loader display-none">
        <div className="loader-modal">
          <Img src="/images/loaderGif.gif" className="w-[50px]" alt="loading..."/>
        </div>
      </div>
      <AlertMesssage />
    </>
  )
}

export default App;
