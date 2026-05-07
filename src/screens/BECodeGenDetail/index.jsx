import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";
import { CLEAR_ALL_BACKENDAPP_DETAIL } from "store/slices/backend.slice";
import { SET_DnR_BOOL } from "store/slices/basicInformation.slice";

const BECodeGenDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const codeGenDetail = useSelector((store) => store.backend?.backend_details?.codeGenDetail);

  const viewCodeHandler = () => {
    window.open(codeGenDetail?.gitHubURL, "_blank");
  };

  const runCodeHandler = async () => {
    dispatch(CLEAR_ALL_BACKENDAPP_DETAIL());
    dispatch(SET_DnR_BOOL(true));
    navigate('/our-home');
  };

  const exitProjectHandler = () => {
    dispatch(CLEAR_ALL_BACKENDAPP_DETAIL());
    navigate("/our-home");
  }
  
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-center m-[auto] px-[20px] w-[100%]">
        <div className="flex flex-col items-center justify-start max-w-[780px] w-[100%] gap-[80px]">
          <Img
            src="images/CW-logo.png"
            className="sm:w-[auto] object-cover w-[150px]"
            alt="lottie"
          />
          <Text
            className="font-medium mt-[36px] text-center text-gray_50 w-[auto]"
            as="h2"
            variant="h2"
          >
            Code Generated Successfully!
          </Text>
          <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-center w-[100]">
            <Button
              className="common-pointer border-[1px] border-solid border-teal_A400 cursor-pointer font-medium px-[20px] py-[12px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[252px]"
              onClick={viewCodeHandler}
            >
              View Code
            </Button>
            <Button
              className="bg-gradient  cursor-pointer font-medium p-[12px] rounded-[4px] text-[14px] text-center text-gray_50 w-[252px]"
              onClick={runCodeHandler}
            >
              Deploy & Run
            </Button>
          </div>
            <Button
              className="bg-gradient cursor-pointer font-medium p-[12px] rounded-[4px] text-[14px] text-center text-gray_50 w-[252px]"
              onClick={exitProjectHandler}
            >
              Back To Home
            </Button>
        </div>
      </div>
    </>
  );
};

export default BECodeGenDetail;
