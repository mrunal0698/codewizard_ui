import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {Collapse} from 'react-collapse';
import Helper from "shared/helper";

import { Text, Line, Input, Img, SelectBox, Button } from "components";
import CWModal from "modals/Modal";
import ProjectSummary from "./ProjectSummary";
import { GetGitHubCreds } from "shared/services";
import Session from "shared/session";
import AlertBoxModal from "modals/AlertBoxModal";

const serverOptions = ["Tomcat","JBoss","Websphere","Weblogic"];
const toolOptions = ["Maven","Gradle"];
const securityOptions = ["Standard","End to End Encryption"];

const defaultValues = { Server : "Tomcat", BuildTool : "Maven", SecurityMode: "Standard" };

const BEBasicDetail = ({ steps, updateAppData, appData }) => {
  const [basicdetails, setBasicDetails] = useState({});
  const [activeInputValue, setActiveInputValue] = useState("");
  const [error,setError] = useState({});
  const [reviewModel,setReviewModel] = useState(false);
  const [githubCredList,setGithubCredList] = useState([]);
  const [toggleBasicDetails,setToggleBasicDetails] = useState(false);
  const [logs, setLogs] = useState([]);

  const projectDetail = Session.Retrieve("projectDetail",true);
  
  const navigate = useNavigate();
  const { user } = useAuth0();
   const updateInputValue = (name) => {
    setActiveInputValue(name)
   }
  const onchangeHandler = (e) => {
    validateForm(e);
    setBasicDetails(curDetails => {
       return {...curDetails,[e.target.name] : e.target.value}
    });
  }
  const onChangeDropdownHandler = (name,data) => {
    setBasicDetails(curDetails => {
       return {...curDetails,[name] : data.value}
    });
  }
  const removeSpecialCharacters = (str,regex) => {
      return str.replace(regex, '');
  }

  useEffect(() => {
    (async _ => {
     await GetGitHubCreds(user?.email).then(async res => {
       const CWCreds = await GetGitHubCreds('Codewizard');
       const totalCreds = [...res?.values?.value,...CWCreds.values?.value];

        setGithubCredList(totalCreds);
        
        const AppName = removeSpecialCharacters(projectDetail?.ProjectName,/[^a-zA-Z0-9.\_]/g);
        const Namespace = "com.app." + removeSpecialCharacters(projectDetail?.ProjectName,/[^a-zA-Z0-9\_]/g);
        const timestamp = Date.now().toString().slice(-3);
        const shemaName = `${AppName.toLowerCase()}_${timestamp}`;
        setBasicDetails((prevState) => {
         const curState = { 
           ApplicationName : AppName,
           DatabaseName : shemaName,
           GithubCred: totalCreds.at(0).GitHubCredId,
           Namespace,
           ...defaultValues
         }
         return { ...prevState, ...curState }
        })     
      })
    })()
  },[])

  const onSubmitHandler = () => {
    const stps = steps.filter(x =>  x.status !== "completed" && x.isRequired === true);

    const errorEntries = Object.entries(error);
    const errorsWithValue = errorEntries.filter(([key, value]) => (value && `${key} : ${value}`));

    if(!Helper.IsArrayEmpty(stps) || errorsWithValue.length > 0) {
      if(!Helper.IsArrayEmpty(stps)) setLogs(prev => ( [...prev, stps.map(x => ( {[x.label] : ""} ))] ));

      if( errorsWithValue.length > 0) setLogs((prev) => [ ...prev, { basicDetail: errorsWithValue } ]);
      return;
    }  
    updateAppData(basicdetails, "basicDetail");
    setReviewModel(true);
  }
  const validateForm = (e) => {
    const {name, value} = e.target;
    setError((obj) => {
        const curError= {...obj,[name] : ""};
        const validNameregex = /^[A-Za-z0-9._]+$/;
        const namespaceRegex =  /^([^\.]+\.[^\.]+)\.[^\.]+$/;
        const schemaRegex = /^[a-z0-9._]+$/;
        
        switch(name){
            case "ApplicationName" :
              if(!value){
                curError[name] = "Please enter application name"
              }
              else{
                const fullNameregexTest = validNameregex.test(value);
                if(!fullNameregexTest){
                  curError[name] = "Should not enter special characters"
                }
              }
              break;
            case "Namespace" :
                if(!value){
                  curError[name] = "Please enter namespace"
                }else if (!validNameregex.test(value)){
                  curError[name] = "Should not enter special characters"
                }else if(!namespaceRegex.test(value)){
                 curError[name] = "Please enter correct nampspace with exactly two dots (e.g., app.com.appname)"
                }                 
                break ;
            case "DatabaseName" :
                if(!value){
                    curError[name] = "Please enter database"
                  }else {
                    const DatabaseNameRegexTest = schemaRegex.test(value);
                    if(!DatabaseNameRegexTest){
                      curError[name] = "Should not enter special characters and upper case letter"
                    }
                  }
              break; 
              case "GithubCred" :
                if(!value){
                    curError[name] = "Please Select GitHub PAT"
                  }
              break;
            default :
              break;              
           }         
           return curError;
    })   
  }

  const cancelProject = () => {
    navigate("/our-home")
  }
  return (
    <>
      <CWModal open={reviewModel} close={() => setReviewModel(false)}
        className="md:h-[80%] w-[60%]"
      >
        <ProjectSummary closeModal={() => setReviewModel(false)} reviewDetail={appData} />
      </CWModal>
      {steps[2].status === "completed" && (
        <div className="w-full">
          <div className="flex items-start justify-start w-[100%]">
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex items-center gap-[12px] shrink-0 justify-start w-[auto]">
                  <Text
                    className="font-normal not-italic text-gray_501 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                  Step 5:
                  </Text>
                  <Text
                    className="font-medium text-gray_50 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Basic Details
                  </Text>
                  <Img src="images/img_arrowdown_gray_50_24x24.svg" 
                    className={`${toggleBasicDetails ? "rotate-180" : "rotate-0"} bg-secondary w-6 h-6 ease-in-out transition-[all] duration-500 cursor-pointer rounded-full`}
                    onClick={() => setToggleBasicDetails(!toggleBasicDetails)}
                  />
                </div>
              {/* <Line className="bg-gray_804 h-[1px] w-full" /> */}
              </div>
            </div>
          </div>
          <Collapse isOpened={toggleBasicDetails} theme={{ collapse: 'ReactCollapse--collapse' }}>
            <div className="flex flex-col gap-[16px] mt-6">
              <div className="flex md:flex-col flex-row gap-[10px] items-center justify-between w-[100%] relative">
                <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto] after:content-['*'] after:ml-0.5 after:text-red-500"
                    variant="body2"
                  >
                    Application Name
                  </Text>
                  <Input
                    wrapClassName={`${error.ApplicationName ? "!border-pink_900 color-pink_900" : ""} bg-gray_902 border-[1px] border-solid px-[12px] py-[10px] rounded-[4px] w-[100%]`}
                    className="font-normal not-italic p-[0] placeholder:text-gray_801 text-[12px] text-gray_300 text-left w-[100%]"
                    name="ApplicationName"
                    placeholder="Enter Application Name"
                    activeInputValue = {activeInputValue}
                    updateInputValue = {updateInputValue}
                    onChange = {onchangeHandler}
                    value={basicdetails?.ApplicationName}
                    validateForm={validateForm}
                  ></Input>
                  {error.ApplicationName && 
                      <Text
                        className="font-normal not-italic text-left text-red_400 w-[auto] absolute bottom-[-18px] left-[5px]"
                        variant="body3"
                      >
                        {error.ApplicationName}
                      </Text>
                }
                </div>
                <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] md:w-[100%] w-[48%] relative">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto] after:content-['*'] after:ml-0.5 after:text-red-500"
                    variant="body2"
                  >
                    Namespace
                  </Text>
                  <Input
                    wrapClassName={`${error.Namespace ? "!border-pink_900 color-pink_900" : ""} bg-gray_902 border-[1px] border-solid px-[12px] py-[10px] rounded-[4px] w-[100%]`}
                    className="font-normal not-italic p-[0] placeholder:text-gray_801 text-[12px] text-gray_300 text-left w-[100%]"
                    name="Namespace"
                    placeholder="Enter namespace (e.g., app.com.appname)"
                    onChange = {onchangeHandler}
                    value={basicdetails?.Namespace}
                    validateForm={validateForm}
                  ></Input>
                    {error.Namespace && 
                      <Text
                        className="font-medium not-italic text-left text-red_400 w-[auto] absolute bottom-[-18px] left-[5px]"
                        variant="body3"
                      >
                        {error.Namespace}
                      </Text>
                }
                </div>
              </div>
            <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between w-[100%] relative">
              <div className="flex flex-col gap-[8px] items-start justify-start w-[50%] md:w-[100%]">
                <Text
                  className="font-semibold text-gray_300 text-left w-[auto]"
                  variant="body2"
                >
                  Application Description
                </Text>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray_300 bg-gray_902 rounded-lg border-[1px] solid border-gray_801 focus:border-gray_501 !font-inter !font-light p-[0] placeholder:text-gray_801 !text-[12px] focus:border-gray_501"
                  placeholder="Enter Description Of Your Application"
                  onChange={onchangeHandler}
                  name="ApplicationDescription"
                  defaultValue={basicdetails?.ApplicationDescription}
                />
              </div>
                <div className="flex flex-1 flex-col gap-[8px] items-start justify-start self-stretch w-[48%] md:w-[100%]">
                  <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
                    <Text
                      className="font-semibold text-gray_300 text-left w-[auto] after:content-['*'] after:ml-0.5 after:text-red-500"
                      variant="body2"
                    >
                      GitHub PAT
                    </Text>
                  </div>
                  <SelectBox
                    className="bg-gray_902 font-normal not-italic rounded-[4px] text-[12px] text-gray_300 text-left w-[100%]"
                    placeholderClassName="text-gray_300"
                    name="GithubCred"
                    placeholder="Select GitHub PAT"
                    isSearchable={false}
                    isMulti={false}
                    options = {githubCredList}
                    onChange ={onChangeDropdownHandler}
                    value = {basicdetails?.GithubCred}
                    valueKey={'GitHubCredId'}
                    labelKey={'Name'}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_50_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  {githubCredList.length <= 1 && (
                    <div className="bg-gray_901 flex items-start justify-between w-[auto]">
                      <Line className="bg-teal_800 h-[100%] w-[3px] rounded-l-[5px]" />
                      <div className="flex flex-row gap-[12px] p-[12px] rounded-[4px] items-center justify-start self-stretch w-[100%]">
                        <Img
                          src="images/about.png"
                          className="h-[17px] w-[17px] cursor-pointer"
                          alt="home"
                        />
                        <Text
                        className="cursor-pointer font-inter font-normal text-gray_50 text-left w-[100%]"
                        variant="body3"
                        >
                          By default, the app selects public repository. You can easily create one in settings. 
                        </Text>
                      </div>
                    </div>
                  )}
                </div>
            </div>
            <div className="md:gap-[20px] gap-[24px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
              <div className="flex flex-1 flex-col gap-[8px] items-start justify-start self-stretch w-[100%] relative">
                <Text
                  className="font-semibold text-gray_300 text-left w-[auto] after:content-['*'] after:ml-0.5 after:text-red-500"
                  variant="body2"
                >
                  Database Name
                </Text>
                <Input
                  wrapClassName={`${error.DatabaseName ? "!border-pink_900 color-pink_900" : ""} bg-gray_902 border-[1px] border-solid px-[12px] py-[10px] rounded-[4px] w-[100%]`}
                  className="font-normal not-italic p-[0] placeholder:text-gray_801 text-[12px] text-gray_300 text-left w-[100%] focus:border-gray_501"
                  name="DatabaseName"
                  placeholder="Enter Database Name"
                  activeInputValue = {activeInputValue}
                  updateInputValue = {updateInputValue}
                  onChange = {onchangeHandler}
                  value={basicdetails?.DatabaseName}
                ></Input>
                  {error.DatabaseName && 
                  <Text
                    className="font-normal not-italic text-left text-red_400 w-[auto] absolute bottom-[-18px] left-[5px]"
                    variant="body3"
                  >
                    {error.DatabaseName}
                  </Text>
                  }
              </div>
              <div className="flex flex-1 flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Server
                  </Text>
                  <Img
                    src="images/img_warning.svg"
                    className="h-[12px] w-[12px]"
                    alt="warning"
                  />
                </div>
                <SelectBox
                  className="bg-gray_902 font-normal not-italic rounded-[4px] text-[12px] text-gray_300 text-left w-[100%]"
                  placeholderClassName="text-gray_300"
                  name="Server"
                  placeholder="select Server"
                  isSearchable={false}
                  isMulti={false}
                  options = {serverOptions}
                  onChange ={onChangeDropdownHandler}
                  value = {basicdetails?.Server}
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_50_24x24.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </div>
              <div className="flex flex-1 flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Build Tool
                  </Text>
                  <Img
                    src="images/img_warning.svg"
                    className="h-[12px] w-[12px]"
                    alt="warning"
                  />
                </div>
                <SelectBox
                  className="bg-gray_902 font-normal not-italic rounded-[4px] text-[12px] text-gray_300 text-left w-[100%]"
                  placeholderClassName="text-gray_300"
                  name="BuildTool"
                  placeholder="select tool"
                  isSearchable={false}
                  isMulti={false}
                  options={toolOptions}
                  activeInputValue={activeInputValue}
                  updateInputValue={updateInputValue}
                  onChange ={onChangeDropdownHandler}
                  value = {basicdetails?.BuildTool}
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_50_24x24.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </div>
              {appData?.capabilities?.some(e => e.Name === "Authentication & Authorization [Spring]") && (
                <div className="flex flex-1 flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                  <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
                    <Text
                      className="font-semibold text-gray_300 text-left w-[auto]"
                      variant="body2"
                    >
                      Security Mode
                    </Text>
                    <Img
                      src="images/img_warning.svg"
                      className="h-[12px] w-[12px]"
                      alt="warning"
                    />
                  </div>
                  <SelectBox
                    className="bg-gray_902 font-normal not-italic rounded-[4px] text-[12px] text-gray_300 text-left w-[100%]"
                    placeholderClassName="text-gray_300"
                    name="SecurityMode"
                    placeholder="Select security mode"
                    isSearchable={false}
                    isMulti={false}
                    options={securityOptions}
                    activeInputValue={activeInputValue}
                    updateInputValue={updateInputValue}
                    onChange ={onChangeDropdownHandler}
                    value = {basicdetails?.SecurityMode}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_50_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </div>
              )}
            </div>
            </div>
          </Collapse>
        </div>
      )}
   
          <div className="bg-base fixed bottom-0 right-3 flex flex-col gap-[16px] md:h-[auto] items-start justify-start w-[100%] p-5 pt-0">
            <Line className="bg-gray_801 h-[1px] w-[100%]" />
            <div className="flex items-start justify-start w-[100%]">
              <div className="flex flex-row gap-[12px] items-center justify-end w-[100%]">
                <Button onClick={cancelProject} className="border-[1px] border-solid border-red_400 cursor-pointer flex-1 font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-red_400 sm:w-[auto] shrink-0 grow-0 w-[200px]">
                  Cancel
                </Button>
                <Button onClick={onSubmitHandler} className={`bg-blue-gradient cursor-pointer flex-1 font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] shrink-0 grow-0 text-center text-gray-50 sm:w-[auto] w-[200px]`}>
                  Confirm
                </Button>
              </div>
            </div>
          </div>

        
      <AlertBoxModal
        isOpen={!Helper.IsArrayEmpty(logs)}
        onConfirm={() => setLogs([])}
        message={logs}
        title={'Please complete the below steps'}
        alertType={'error'}
        className={`bg-base min-h-auto max-h-[400px] w-[650px] px-12 py-8 rounded-lg border-[1px] border-hint overflow-y-auto`}
      />
    </>
  );
};

export default BEBasicDetail;