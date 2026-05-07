import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {Collapse} from 'react-collapse';

import { Text, Line, Input, Img, SelectBox, Button } from "components";
import CWModal from "modals/Modal";
import AlertBoxModal from "modals/AlertBoxModal";
import ProjectSummary from "./ProjectSummary";
import { GetAppConfigurationsById, GetGitHubCreds } from "shared/services";
import Session from "shared/session";
import Helper from "shared/helper";

const serverOptions = ["Nginx"]
const toolOptions = ["NPM"];
const securityOptions = ["Standard","End to End Encryption"];

const defaultValues = { Server : "Nginx", BuildTool : "NPM", SecurityMode: "Standard" }

const Dropdown = ({ options, label, name, placeholder, value, onDropDownChange, className, valueKey, labelKey }) => {

  const OnDropDownChange = (name, data) => {
   if (onDropDownChange) onDropDownChange(name, data.value);
  }

  return(
    <>
      <div className={`flex flex-1 flex-col gap-[8px] items-start justify-start self-stretch w-[50%] ${className}`}>
        <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
          <Text
            className="font-semibold text-gray_300 text-left w-[auto]"
            variant="body2"
          >
            {label}
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
          name={name}
          placeholder={placeholder}
          isSearchable={false}
          isMulti={false}
          options={options}
          onChange ={OnDropDownChange}
          value = {value}
          valueKey={'GitHubCredId'}
          labelKey={'Name'}
          indicator={
            <Img
              src="images/img_arrowdown_gray_50_24x24.svg"
              className="h-[24px] w-[24px]"
              alt="arrow_down"
            />
          }
        />
      </div>
    </>
  )
}

const Component = ({ steps, appData, updateAppData }) => {
  const [basicdetails, setBasicDetails] = useState(appData?.basicDetail);
  const [FRDReviewModel,setFRDReviewModel] = useState(false);
  const [githubCredList,setGithubCredList] = useState([]);
  const [error,setError] = useState({})
  const [screenConfigurationStatusModal, setScreenConfigurationStatusModal] = useState(false);
  const [toggleBasicDetails,setToggleBasicDetails] = useState(false);
  const [logs, setLogs] = useState([]);

  const navigate = useNavigate();
  const { user } = useAuth0();
  const projectDetail = Session.Retrieve("projectDetail",true);

  const onInputChange = (e) => {
    validateForm(e);
    setBasicDetails(curDetails => {
       return {...curDetails,[e.target.name] : e.target.value}
    });
  }
  const onDropDownChange = (name,value) => {
    setBasicDetails(curDetails => {
       return {...curDetails,[name] : value}
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
        const ApplicationName = removeSpecialCharacters(projectDetail?.ProjectName,/[^a-zA-Z0-9.\_]/g);
         setBasicDetails((prevState) => {
          return { ...prevState, ...{ApplicationName, GithubCred:  totalCreds.at(0).GitHubCredId}, ...defaultValues}
         })
      })
    })()
  },[])

  const onSubmitHandler = async () => {
    const stps = steps.filter(x =>  x.status !== "completed" && x.isRequired === true);
    const errorEntries = Object.entries(error);
    const errorsWithValue = errorEntries.filter(([key, value]) => (value && `${key} : ${value}`));

    if(!Helper.IsArrayEmpty(stps) || errorsWithValue.length > 0) {
      if(!Helper.IsArrayEmpty(stps)) setLogs(prev => ( [...prev, stps.map(x => ( {[x.label] : ""} ))] ));

      if( errorsWithValue.length > 0) setLogs((prev) => [ ...prev, { basicDetail: errorsWithValue } ]);
      return;
    }  
    try {
      global.Busy(true);
      const res = await GetAppConfigurationsById(appData?.configuratorDetail?.value);
      global.Busy(false);
      if (res?.values?.AppConfigurationFrontendApp) {
        let Namespace = appData?.api?.LiveURL;
        if(appData?.capabilities?.some(e => e.Name === "Authentication & Authorization [Spring]")) {
          const url = new URL(appData?.api?.LiveURL);
          Namespace = url.origin;
        }
        updateAppData({...basicdetails, Namespace}, "basicDetail");
        setFRDReviewModel(true);
      } else {    
        setScreenConfigurationStatusModal(true);
      }
    }catch (error) {
      console.log("error",error);
       setScreenConfigurationStatusModal(true);
    }
  }  
  
  const validateForm = (e) => {
    const {name, value} = e.target;
    setError((obj) => {
      const curError= {...obj,[name] : ""};
      const validNameregex = /^[A-Za-z0-9._-]+$/;
      switch(name){
        case "ApplicationName" :
          if(!value){
            curError[name] = "Please enter application name"
          }
          else{
            const fullNameregexTest = validNameregex.test(value);
            if(!fullNameregexTest){
              curError[name] = "should not enter special character"
            }
          }
          break;
        default :
          break;              
        }         
      return curError;
    })   
  }

  const cancelProject = () => {
    navigate("/our-home");
  }

  return (
    <>    
        {steps[2].status === "completed" && (
            <div className="w-full">
              <div className="flex items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex items-center justify-between w-[100%]">
                    <div className="flex gap-[12px] items-center justify-start shrink-0 w-[auto]">
                      <Text
                        className="font-medium text-gray_50 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                      <span
                        className="font-normal not-italic text-gray_501 text-left w-[auto] pr-2"
                        as="h6"
                        variant="h6"
                      >
                        Step 5:  
                      </span>
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
                <div className="flex flex-col gap-4 items-start justify-start w-[100%] pt-6">
                  <div className="flex md:flex-col flex-row gap-[10px] items-center justify-between w-[100%] relative">
                    <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[49%]">
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
                        onChange = {onInputChange}
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
                  </div>
                  <div className="flex md:flex-col flex-row gap-[24px] items-center w-[100%] relative">
                    <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[49%] md:w-[100%]">
                      <Text
                        className="font-semibold text-gray_300 text-left w-[auto]"
                        variant="body2"
                      >
                        Application Description
                      </Text>
                      <textarea
                        id="message"
                        rows="4"
                        className="p-2 w-[100%] text-sm text-gray_300 bg-gray_902 rounded-lg border-[1px] solid border-gray_801 !font-inter !font-light placeholder:text-gray_801 !text-[12px] focus:border-gray_501"
                        placeholder="Enter Description Of Your Application"
                        onChange={onInputChange}
                        name="ApplicationDescription"
                        defaultValue={basicdetails?.ApplicationDescription}
                      />
                    </div>
                      <div className="flex flex-1 flex-col gap-[8px] items-start justify-start self-stretch w-[50%] md:w-[100%]">
                        <Dropdown options={githubCredList} onDropDownChange ={onDropDownChange}
                          value = {basicdetails?.GithubCred}  name="GithubCred" label="GitHub PAT" valueKey={'GitHubCredId'}
                          labelKey={'Name'} placeholder="Select GitHub PAT" className="!w-[100%]" />

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
                  <div className="flex md:flex-col flex-row gap-[24px] justify-center min-h-[auto] w-[100%]">
                    <Dropdown options={serverOptions} onDropDownChange ={onDropDownChange}
                      value = {basicdetails?.Server}  name="Server" label="Server" placeholder="select Server" />
                    
                    <Dropdown options={toolOptions} onDropDownChange ={onDropDownChange}
                      value = {basicdetails?.BuildTool}  name="BuildTool" label="Build Tool" placeholder="select tool" />
                    
                  </div>
                  {appData?.capabilities?.some(e => e.Name === "Authentication & Authorization [Spring]") && (
                    <div className="flex md:flex-col flex-row gap-[24px] justify-center min-h-[auto] sm:w-[100%] w-[49%]">
                      <Dropdown options={securityOptions} onDropDownChange ={onDropDownChange}
                        value = {basicdetails?.SecurityMode}  name="SecurityMode" label="Security Mode" placeholder="select Security Mode" />                  
                    </div>
                  )}
                </div>
              </Collapse>
            </div>
        )}

        <div className="bg-base fixed bottom-0 right-3 flex flex-col gap-[16px] md:h-[auto] items-start justify-start p-5 pt-0 w-[100%]">
          <Line className="bg-gray_801 h-[1px] w-[100%]" />
          <div className="flex items-start justify-start w-[100%]">
            <div className="flex gap-[12px] items-center justify-end w-[100%]">
              <Button onClick={cancelProject} className="border-[1px] grow-0  border-solid border-red_400 cursor-pointer font-medium sm:px-[20px] md:px-[40px] py-[10px] rounded-[4px] text-[14px] text-center text-red_400 sm:w-[auto] w-[200px]">
                cancel
              </Button>
              <Button onClick={ onSubmitHandler } className={`bg-blue-gradient cursor-pointer font-medium grow-0 shrink-0 sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-[#fff] sm:w-[auto] w-[200px]`}>
                Confirm
              </Button>
            </div>
          </div>
        </div>

       <CWModal open={FRDReviewModel} className="md:h-[80%] w-[60%]" >
        <ProjectSummary closeModel={() => setFRDReviewModel(false)} appData={appData} />
       </CWModal>
       
       <AlertBoxModal
          isOpen={screenConfigurationStatusModal}
          message="Please configure the selected screens to proceed further."
          onConfirm={() => setScreenConfigurationStatusModal(false)}
          className="w-[450px]"
        />
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

export default Component;