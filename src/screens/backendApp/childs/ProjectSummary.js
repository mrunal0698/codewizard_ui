import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Text, Line, List, Button } from "components";
import { useAuth0 } from "@auth0/auth0-react";
import { SET_CODE_GEN_DETAIL } from "store/slices/backend.slice";
import { useDispatch } from "react-redux";
import CodeGenProcess from "modals/CodeGenProcess/CodeGenProcess";
import { CreateBackendPoject } from "shared/common";
import Session from "shared/session";

const ProjectSummary = ( { closeModal, reviewDetail }) => {
  const [codeGenerationModal,setCodeGenerationModal] = useState(false);
  const [activecodeGenStep,setActiveCodeGenStep] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth0();
  const dispatch = useDispatch();

  const projectDetail = Session.Retrieve("projectDetail",true);
  
  const updateActivStep = (step) => {
      setActiveCodeGenStep(step);
   }
  const generateBackendApp = async () => {
    setCodeGenerationModal(true);
    setActiveCodeGenStep(0)
    const res = await CreateBackendPoject(reviewDetail,projectDetail,user,updateActivStep);
      if(res?.status){
        setActiveCodeGenStep(5);
        setCodeGenerationModal(false);
        dispatch(SET_CODE_GEN_DETAIL(res?.values));
        navigate('/backend-codegen-detail');
      } else {
        setCodeGenerationModal(false);
        global.AlertPopup("error",res?.statusText);
    }
  }
   const updateCodeGenerationModal = (value) => {
    setCodeGenerationModal(value);
  }

  return (
    <>    
      <CodeGenProcess activeStep={activecodeGenStep} projectType="Back End" codeGenerationModal={codeGenerationModal} updateCodeGenerationModal={updateCodeGenerationModal} />  
      <div className="flex flex-1 flex-col items-start justify-start w-[100%] pt-[32px]">
        <div className="flex items-start justify-start max-w-[982px] w-[100%]">
          <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
            <div className="flex items-start justify-start w-[100%]">
              <div className="flex items-start justify-start w-[100%]">
                <Text
                  className="font-medium text-gray_50 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Review
                </Text>
              </div>
            </div>
            <Line className="bg-gray_804 h-[1px] w-[100%]" />
          </div>
        </div>
        <div className="h-[400px] md:h-auto w-[100%] overflow-y-auto">
        <Text
          className="font-medium mt-[24px] text-gray_50 text-left w-[auto]"
          as="h4"
          variant="h4"
        >
          Tech Stack Details
        </Text>
        <List
          className="flex-col gap-[20px] grid items-center mt-[15px] w-[98%]"
          orientation="vertical"
        >
          <div className="flex md:flex-col flex-row md:gap-[48px] items-center justify-between w-[100%]">
            <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
              <Text
                className="font-semibold text-gray_300 text-left w-[auto]"
                variant="body2"
              >
                  Back End Tech Stack
              </Text>
              <div className="flex items-center justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_501 text-left w-[auto]"
                  variant="body3"
                >
                    {reviewDetail?.backend?.TechName}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[48px] items-center justify-between w-[67%]">
            <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
              <Text
                className="font-semibold text-gray_300 text-left w-[auto]"
                variant="body2"
              >
                Capabilities
              </Text>
              <div className="flex items-center justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_501 text-left w-[auto]"
                  variant="body3"
                >
                  {reviewDetail?.capabilities?.map((item,idx) => {
                    return(
                        <span key={idx}>
                          {item?.Name}{reviewDetail?.capabilities.length === 1 ? `` : idx === reviewDetail?.capabilities.length-1 ? `.` : `, `}

                        </span>
                    )
                  })}
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
              <div className="flex items-center justify-start self-stretch w-[auto]">
                <Text
                  className="font-semibold text-gray_300 text-left w-[auto]"
                  variant="body2"
                >
                  Database
                </Text>
              </div>
              <div className="flex items-center justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_501 text-left w-[auto]"
                  variant="body3"
                >
                  {reviewDetail?.database?.Dbname}
                </Text>
              </div>
            </div>
          </div>
        </List>
        <Text
          className="font-medium mt-[32px] text-gray_50 text-left w-[auto]"
          as="h4"
          variant="h4"
        >
          Basic Details
        </Text>
        <div className="flex md:flex-col flex-row md:gap-[48px] items-center justify-between mt-[15px] md:w-[100%] w-[98%]">
          <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
            <Text
              className="font-semibold text-gray_300 text-left w-[auto]"
              variant="body2"
            >
              Application Name
            </Text>
            <div className="flex items-center justify-start w-[100%]">
              <Text
                className="font-normal not-italic text-gray_501 text-left w-[auto]"
                variant="body3"
              >
                {reviewDetail?.basicDetail?.ApplicationName}
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[40%]">
            <Text
              className="font-semibold text-gray_300 text-left w-[auto]"
              variant="body2"
            >
              Namespace
            </Text>
            <div className="flex items-center justify-start w-[100%]">
              <Text
                className="font-normal not-italic text-gray_501 text-left w-[auto]"
                variant="body3"
              >
                {reviewDetail?.basicDetail?.Namespace}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[8px] items-start justify-start max-w-[958px] mt-[20px] w-[100%]">
          <Text
            className="font-semibold text-gray_300 text-left w-[auto]"
            variant="body2"
          >
            Application Description
          </Text>
          <div className="flex items-center justify-start w-[100%]">
            <Text
              className="font-normal not-italic text-gray_501 text-left w-[auto]"
              variant="body3"
            >
              {reviewDetail?.basicDetail?.ApplicationDescription}
            </Text>
          </div>
        </div>
        <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mt-[20px] md:w-[100%] w-[98%]">
          <div className="flex flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[40%]">
            <Text
              className="font-semibold text-gray_300 text-left w-[auto]"
              variant="body2"
            >
              Database Name
            </Text>
            <div className="flex items-center justify-start w-[100%]">
              <Text
                className="font-normal not-italic text-gray_501 text-left w-[auto]"
                variant="body3"
              >
                {reviewDetail?.basicDetail?.DatabaseName}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] items-start justify-start mt-[20px] md:w-[100%] w-[71%]">
          <List
            className="sm:flex-col flex-row md:gap-[40px] gap-[456px] grid sm:grid-cols-1 grid-cols-2 justify-center w-[100%]"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-[8px] items-start justify-start sm:ml-[0] w-[100%]">
              <div className="flex items-center justify-start self-stretch w-[auto]">
                <Text
                  className="font-semibold text-gray_300 text-left w-[auto]"
                  variant="body2"
                >
                  Server
                </Text>
              </div>
              <div className="flex items-center justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_501 text-left w-[auto]"
                  variant="body3"
                >
                  {reviewDetail?.basicDetail?.Server}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-start justify-start sm:ml-[0] self-stretch w-[auto]">
              <div className="flex items-center justify-start self-stretch w-[auto]">
                <Text
                  className="font-semibold text-gray_300 text-left w-[auto]"
                  variant="body2"
                >
                  Build Tool
                </Text>
              </div>
              <div className="flex items-center justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_501 text-left w-[auto]"
                  variant="body3"
                >
                  {reviewDetail?.basicDetail?.BuildTool}
                </Text>
              </div>
            </div>
          </List>
        </div>
        </div>
        <div className="flex flex-col gap-[16px] items-start justify-start mt-3 w-[100%]">
          <Line className="bg-gray_804 h-[1px] w-[100%]" />
          <div className="flex items-start justify-end gap-2 w-[100%]">
            <Button onClick={closeModal} className="bg-bluegray_906 border-[1px] border-solid border-blue_804 cursor-pointer flex-1 font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_50 sm:w-[auto] shrink-0 grow-0 w-[200px]">
              Back
            </Button>
            <Button onClick={generateBackendApp} className="bg-blue-gradient cursor-pointer font-medium sm:px-[20px] md:px-[10px] px-[14px] py-[10px] rounded-[4px] text-[14px] shrink-0 grow-0 text-center text-gray_50 sm:w-[auto] w-[200px]">
              Generate App
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSummary;
