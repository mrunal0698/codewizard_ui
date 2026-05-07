import React from "react";

import { Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { CLEAR_ALL_FRONTENDAPP_DETAIL } from "store/slices/frontend.slice";
import { SET_DnR_BOOL } from "store/slices/basicInformation.slice";

const FECodeGenDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const codeGenDetail = useSelector(store => store.frontend.frontend_details?.codeGenDetail);

  const viewCodeHandler = () => {
    window.open(codeGenDetail?.gitHubURL,"_blank");
  }
  const runCodeHandler = async () => {
    dispatch(CLEAR_ALL_FRONTENDAPP_DETAIL());
    dispatch(SET_DnR_BOOL(true));
    navigate('/our-home');
  };

  const exitProjectHandler = () => {
    dispatch(CLEAR_ALL_FRONTENDAPP_DETAIL());
    navigate("/our-home");
  }
  
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-center m-[auto] p-[20px] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%] gap-[80px]">
          <Img
            src="images/CW-logo.png"
            className="object-cover w-[150px] sm:w-[auto]"
            alt="code-wizard"
          />
          <Text
            className="font-medium mt-[36px] text-center text-gray_50 w-[auto]"
            as="h2"
            variant="h2"
          >
            Code Generated Successfully!
          </Text>
          <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-center w-[100%]">
            <Button
              className="border-[1px] border-solid border-teal_A400 cursor-pointer font-medium px-[20px] py-[12px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[252px]"
              onClick={viewCodeHandler}
            >
              View Code
            </Button>
            <Button 
             className="bg-gradient cursor-pointer font-medium p-[12px] rounded-[4px] text-[14px] text-center text-gray_50 w-[252px]"
             onClick = {runCodeHandler}
            >
              Deploy & Run
            </Button>
          </div>
          <div 
           className="flex sm:flex-col flex-row gap-[24px] items-center justify-center w-[100%]"
           >
            <Button 
             className="bg-gradient cursor-pointer font-medium p-[12px] rounded-[4px] text-[14px] text-center text-gray_50 w-[252px]"
             onClick={exitProjectHandler}
            >
              Back To Home
            </Button> 
          </div>
        </div>
      </div>
    </>
  );
};

export default FECodeGenDetail;