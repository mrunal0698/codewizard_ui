import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { SET_BASIC_DETAIL } from "store/slices/fullstack.slice";

import { Text, Line, Input, Img, SelectBox, Button } from "components";
import { SET_FRONTEND_BASIC_DETAIL } from "store/slices/frontend.slice";
import { SET_BACKEND_BASIC_DETAIL } from "store/slices/backend.slice";

const BasicDetailsSevenPage = () => {
  const navigate = useNavigate();
  const selected_basicDetails = useSelector(store => store.backend.backend_details?.basicDetail);
  const[basicdetails, setBasicDetails] = useState(selected_basicDetails);
  const[activeInputValue, setActiveInputValue] = useState("");
  const [error,setError] = useState({
    ApplicationName : "",
    Namespace : "",
    DatabaseName : "",
    dropdown : "Select all the dropdowns"
  })
  const [isdisabledSendButton,setIsdisabledSendButton] = useState(false);
  const dispatch = useDispatch();

  const project_type = useSelector(store => store.basicInformation.projectType);
   const updateInputValue = (name) => {
     setActiveInputValue(name)
   }
  const onchangeHandler = (e) => {
    validateForm(e);
    setBasicDetails(curDetails => {
       return {...curDetails,[e.target.name] : e.target.value}
    });
  }
  const onChangeDropdownHandler = (name,value) => {
    setBasicDetails(curDetails => {
       return {...curDetails,[name] : value}
    });
    console.log(basicdetails);        
  }
  useEffect(()=> {
    const keysToRemove = ["ApplicationDescription"];
    const updatedDetail = Object.keys(basicdetails)
    .filter((key) => !keysToRemove.includes(key))
    .reduce((obj, key) => {
      obj[key] = basicdetails[key];
      console.log(obj);
      return obj;
    }, {});
    if (Object.values(updatedDetail).every(el => el != null)) {
      setError((curError) => {
      return {...curError,'dropdown' : ""}
    })
  }
  },[basicdetails])
  const ArchitectureSelectOptions = [
    { value: "MVC Architecture", label: "MVC Architecture" },
    { value: "Micro Services Architecture", label: "Micro Services Architecture" },
    { value: "Event Driven Architecture", label: "Event Driven Architecture" },
  ];
  const serverSelectOptions = [
    { value: "Tomcat", label: "Tomcat" },
    { value: "JBoss", label: "JBoss" },
    { value: "Websphere", label: "Websphere" },
    { value: "Weblogic", label: "Weblogic" },
  ];
  const toolSelectOptions = [
    { value: "Maven", label: "Maven" },
    { value: "Gradle", label: "Gradle" },
    ];
  const projectManagementSelectOptions = [
    { value: "Maven", label: "Maven" },
    { value: "Gradle", label: "Gradle" },
  ];

  const onSubmitHandler = () => {
    if(project_type === "Front End"){
        dispatch(SET_FRONTEND_BASIC_DETAIL(basicdetails));
        navigate("/frontend-review");
    }  
    else if(project_type === "Back End"){
        dispatch(SET_BACKEND_BASIC_DETAIL(basicdetails));
        navigate("/backend-review");
     }     
    else{
      dispatch(SET_BASIC_DETAIL(basicdetails));
    navigate("/both-review");
    }
  }
  const validateForm = (e) => {
    const {name, value} = e.target;
    setError((obj) => {
        const curError= {...obj,[name] : ""};
        const validNameregex = /^[A-Za-z0-9._-]+$/;
        const ValidNameSpaceRegex = /^[A-Za-z0-9._-]+$/;
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
            case "Namespace" :
                if(!value){
                    curError[name] = "Please enter namespace"
                  }else {
                    const NamespaceRegexTest = ValidNameSpaceRegex.test(value);
                    if(!NamespaceRegexTest){
                      curError[name] = "should not enter special character"
                    }
                  }
                  break ;
            case "DatabaseName" :
                if(!value){
                    curError[name] = "please enter database"
                  }else {
                    const DatabaseNameRegexTest = validNameregex.test(value);
                    if(!DatabaseNameRegexTest){
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
  useEffect(() => {
    console.log(error);
    if(error.dropdown || error.ApplicationName || error.Namespace || error.DatabaseName){
      setIsdisabledSendButton(true);
    }
    else{
      setIsdisabledSendButton(false);
    }
  },[error])
  return (
    <>
          <div className="flex flex-1 flex-col items-center justify-start w-[100%] pt-[32px]">
            <div className="flex items-start justify-start max-w-[982px] w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_50 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Basic Details
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray_801 h-[1px] w-[100%]" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[10px] items-center justify-between mt-[8px] w-[100%] relative">
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
                  value={selected_basicDetails?.ApplicationName}
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
                  placeholder="Input value"
                  onChange = {onchangeHandler}
                  activeInputValue = {activeInputValue}
                  updateInputValue = {updateInputValue}
                  value={selected_basicDetails?.Namespace}
                  validateForm={validateForm}
                ></Input>
                 {error.Namespace && 
                   <Text
                      className="font-normal not-italic text-left text-red_400 w-[auto] absolute bottom-[-18px] left-[5px]"
                      variant="body3"
                    >
                      {error.Namespace}
                    </Text>
              }
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-start justify-start max-w-[982px] mt-[20px] w-[100%]">
              <Text
                className="font-semibold text-gray_300 text-left w-[auto]"
                variant="body2"
              >
                Application Description
              </Text>
              {/* <Input
                wrapClassName="bg-gray_902 border-[1px] border-solid px-[12px] py-[15px] rounded-[4px] w-[100%]"
                className="font-normal md:h-[auto] not-italic p-[0] placeholder:text-gray_801 sm:h-[auto] text-[12px] text-gray_300 text-left w-[100%] focus:border-gray_501"
                name="ApplicationDescription"
                placeholder="Enter Description Of Your Application"
                onChange = {onchangeHandler}
                updateInputValue = {updateInputValue}
                activeInputValue = {activeInputValue}
                value={selected_basicDetails?.ApplicationDescription}
              ></Input> */}
              <textarea
                      id="message"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray_300 bg-gray_902 rounded-lg border-[1px] solid border-gray_801 focus:border-gray_501 !font-inter !font-light p-[0] placeholder:text-gray_801 !text-[12px] focus:border-gray_501"
                      placeholder="Enter Description Of Your Application"
                      onChange={onchangeHandler}
                      name="ApplicationDescription"
                      defaultValue={selected_basicDetails?.ApplicationDescription}
                    />
            </div>
            <div className="md:gap-[20px] gap-[24px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[15px] w-[100%]">
              <div className="flex flex-1 flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Architecture
                  </Text>
                  <Img
                    src="images/img_warning.svg"
                    className="h-[12px] w-[12px]"
                    alt="warning"
                  />
                </div>
                <SelectBox
                  className="bg-gray_902 border-[1px] border-solid font-normal not-italic px-[12px] py-[10px] rounded-[4px] text-[12px] text-gray_300 text-left w-[100%]"
                  placeholderClassName="text-gray_300"
                  name="Architecture"
                  placeholder="Select Architecture"
                  isSearchable={false}
                  isMulti={false}
                  options = {ArchitectureSelectOptions}
                  updateInputValue={updateInputValue}
                  activeInputValue={activeInputValue}
                  onChange ={onChangeDropdownHandler}
                  value = {selected_basicDetails?.Architecture}
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_50_24x24.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                {/* custom dropdown for additional purpose */}
                {/* <select 
                  className="! bg-gray_902 border-[1px] border-gray_801 border-solid  text-[12px] text-gray_300 px-[12px] py-[8px] rounded-[4px] sm:w-[100%] w-[100%] focus:border-gray_501"
                >
                  {ArchitectureSelectOptions.map((item) => {
                       return(
                        <option className="text-gray_300 p-[20px] text-[12px] ! h-96" style={{padding:"1rem",border:"2px solid red"}}>{item.label}</option>
                       )
                  })}
                </select> */}
              </div>
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
                  value={selected_basicDetails?.DatabaseName}
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
                  className="bg-gray_902 border-[1px] border-solid font-normal not-italic px-[12px] py-[10px] rounded-[4px] text-[12px] text-gray_300 text-left w-[100%]"
                  placeholderClassName="text-gray_300"
                  name="Server"
                  placeholder="select Server"
                  isSearchable={false}
                  isMulti={false}
                  options = {serverSelectOptions}
                  activeInputValue={activeInputValue}
                  updateInputValue={updateInputValue}
                  onChange ={onChangeDropdownHandler}
                  value = {selected_basicDetails?.Server}
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
                  className="bg-gray_902 border-[1px] border-solid font-normal not-italic px-[12px] py-[10px] rounded-[4px] text-[12px] text-gray_300 text-left w-[100%]"
                  placeholderClassName="text-gray_300"
                  name="BuildTool"
                  placeholder="select tool"
                  isSearchable={false}
                  isMulti={false}
                  options={toolSelectOptions}
                  activeInputValue={activeInputValue}
                  updateInputValue={updateInputValue}
                  onChange ={onChangeDropdownHandler}
                  value = {selected_basicDetails?.BuildTool}
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
                      Package Management
                    </Text>
                    <Img
                      src="images/img_warning.svg"
                      className="h-[12px] w-[12px]"
                      alt="warning"
                    />
                  </div>
                  <SelectBox
                    className="bg-gray_902 border-[1px] border-solid font-normal not-italic px-[12px] py-[10px] rounded-[4px] text-[12px] text-gray_300 text-left w-[100%]"
                    placeholderClassName="text-gray_801"
                    name="PackageManagement"
                    placeholder="Select package management"
                    isSearchable={false}
                    isMulti={false}
                    options={projectManagementSelectOptions}
                    activeInputValue={activeInputValue}
                    updateInputValue={updateInputValue}
                    onChange ={onChangeDropdownHandler}
                    value = {selected_basicDetails?.PackageManagement}
                    // value = {selected_basicDetails?.PackageManagement ? selected_basicDetails?.PackageManagement : null}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_50_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </div>
            </div>
            <div className="flex flex-col gap-[16px] md:h-[auto] items-start justify-start max-w-[982px] mt-[68px] w-[100%]">
              <Line className="bg-gray_801 h-[1px] w-[100%]" />
              <div className="flex items-start justify-start w-[100%]">
                <div className="flex flex-row gap-[12px] items-center justify-end w-[100%]">
                  <Button onClick={() => navigate(-1)} className="border-[1px] border-solid border-teal_A400 cursor-pointer flex-1 font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[100%]">
                    Previous
                  </Button>
                  <Button onClick={!isdisabledSendButton? ()=> onSubmitHandler(): null} className={`${!isdisabledSendButton? "bg-gradient" : "bg-teal_900"}  cursor-pointer flex-1 font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_900 w-[100%]`}>
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default BasicDetailsSevenPage;


// import React from "react";

// import { Text, Line, Input, Img, SelectBox, Button } from "components";
// import { useNavigate } from "react-router-dom";

// const BasicDetailsSevenPage = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       <div className="bg-gray_900 flex font-inter items-center justify-start mx-[auto] w-[100%]">
//         <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between max-w-[1256px] mx-[auto] md:px-[20px] w-[100%]">
          
//           <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
//             <div className="flex items-start justify-start max-w-[982px] w-[100%]">
//               <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
//                 <div className="flex items-start justify-start w-[100%]">
//                   <div className="flex items-start justify-start w-[100%]">
//                     <Text
//                       className="font-medium text-gray_50 text-left w-[auto]"
//                       as="h2"
//                       variant="h2"
//                     >
//                       Basic Details
//                     </Text>
//                   </div>
//                 </div>
//                 <Line className="bg-gray_801 h-[1px] w-[100%]" />
//               </div>
//             </div>
//             <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between mt-[24px] w-[100%]">
//               <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
//                 <Text
//                   className="font-semibold text-gray_300 text-left w-[auto]"
//                   variant="body2"
//                 >
//                   Application Name
//                 </Text>
//                 <Input
//                   wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid px-[12px] py-[15px] rounded-[4px] w-[100%]"
//                   className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
//                   name="textfield"
//                   placeholder="E-commence"
//                 ></Input>
//               </div>
//               <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
//                 <Text
//                   className="font-semibold text-gray_300 text-left w-[auto]"
//                   variant="body2"
//                 >
//                   Namespace
//                 </Text>
//                 <Input
//                   wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid px-[12px] py-[15px] rounded-[4px] w-[100%]"
//                   className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
//                   name="textfield_One"
//                   placeholder="Input value"
//                 ></Input>
//               </div>
//             </div>
//             <div className="flex flex-col gap-[8px] items-start justify-start max-w-[982px] mt-[20px] w-[100%]">
//               <Text
//                 className="font-semibold text-gray_300 text-left w-[auto]"
//                 variant="body2"
//               >
//                 Application Description
//               </Text>
//               <Input
//                 wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid px-[12px] py-[15px] rounded-[4px] w-[100%]"
//                 className="font-normal md:h-[auto] not-italic p-[0] placeholder:text-gray_300 sm:h-[auto] text-[12px] text-gray_300 text-left w-[100%]"
//                 name="textfield_Two"
//                 placeholder="This application is for E-commerce"
//               ></Input>
//             </div>
//             <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between mt-[20px] w-[100%]">
//               <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
//                 <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
//                   <Text
//                     className="font-semibold text-gray_300 text-left w-[auto]"
//                     variant="body2"
//                   >
//                     Architecture
//                   </Text>
//                   <Img
//                     src="images/img_warning.svg"
//                     className="h-[12px] w-[12px]"
//                     alt="warning"
//                   />
//                 </div>
//                 <SelectBox
//                   className="common-pointer bg-gray_902 border-[1px] border-gray_801 border-solid font-normal not-italic px-[12px] py-[15px] rounded-[4px] text-[12px] text-gray_801 text-left w-[100%]"
//                   placeholderClassName="text-gray_801"
//                   name="dropdown"
//                   placeholder="Select architecture"
//                   isSearchable={false}
//                   isMulti={false}
//                   indicator={
//                     <Img
//                       src="images/img_arrowdown_gray_50_24x24.svg"
//                       className="h-[24px] w-[24px]"
//                       alt="arrow_down"
//                     />
//                   }
//                 ></SelectBox>
//               </div>
//               <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
//                 <Text
//                   className="font-semibold text-gray_300 text-left w-[auto]"
//                   variant="body2"
//                 >
//                   Database Name
//                 </Text>
//                 <Input
//                   wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid px-[12px] py-[15px] rounded-[4px] w-[100%]"
//                   className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
//                   type="text"
//                   name="textfield_Three"
//                   placeholder="same as application name"
//                 ></Input>
//               </div>
//             </div>
//             <div className="flex items-center justify-start mt-[20px] w-[100%]">
//               <div className="md:gap-[20px] gap-[24px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
//                 <div className="flex flex-1 flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
//                   <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
//                     <Text
//                       className="font-semibold text-gray_300 text-left w-[auto]"
//                       variant="body2"
//                     >
//                       Server
//                     </Text>
//                     <Img
//                       src="images/img_warning.svg"
//                       className="h-[12px] w-[12px]"
//                       alt="warning"
//                     />
//                   </div>
//                   <SelectBox
//                     className="bg-gray_902 border-[1px] border-gray_801 border-solid font-normal not-italic px-[12px] py-[15px] rounded-[4px] text-[12px] text-gray_801 text-left w-[100%]"
//                     placeholderClassName="text-gray_801"
//                     name="dropdown"
//                     placeholder="Select server"
//                     isSearchable={false}
//                     isMulti={false}
//                     indicator={
//                       <Img
//                         src="images/img_arrowdown_gray_50_24x24.svg"
//                         className="h-[24px] w-[24px]"
//                         alt="arrow_down"
//                       />
//                     }
//                   ></SelectBox>
//                 </div>
//                 <div className="flex flex-1 flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
//                   <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
//                     <Text
//                       className="font-semibold text-gray_300 text-left w-[auto]"
//                       variant="body2"
//                     >
//                       Build Tool
//                     </Text>
//                     <Img
//                       src="images/img_warning.svg"
//                       className="h-[12px] w-[12px]"
//                       alt="warning"
//                     />
//                   </div>
//                   <SelectBox
//                     className="bg-gray_902 border-[1px] border-gray_801 border-solid font-normal not-italic px-[12px] py-[15px] rounded-[4px] text-[12px] text-gray_801 text-left w-[100%]"
//                     placeholderClassName="text-gray_801"
//                     name="dropdown"
//                     placeholder="Select build tool"
//                     isSearchable={false}
//                     isMulti={false}
//                     indicator={
//                       <Img
//                         src="images/img_arrowdown_gray_50_24x24.svg"
//                         className="h-[24px] w-[24px]"
//                         alt="arrow_down"
//                       />
//                     }
//                   ></SelectBox>
//                 </div>
//                 <div className="flex flex-1 flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
//                   <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
//                     <Text
//                       className="font-semibold text-gray_300 text-left w-[auto]"
//                       variant="body2"
//                     >
//                       Package Management
//                     </Text>
//                     <Img
//                       src="images/img_warning.svg"
//                       className="h-[12px] w-[12px]"
//                       alt="warning"
//                     />
//                   </div>
//                   <SelectBox
//                     className="bg-gray_902 border-[1px] border-gray_801 border-solid font-normal not-italic px-[12px] py-[15px] rounded-[4px] text-[12px] text-gray_801 text-left w-[100%]"
//                     placeholderClassName="text-gray_801"
//                     name="dropdown"
//                     placeholder="Select package management"
//                     isSearchable={false}
//                     isMulti={false}
//                     indicator={
//                       <Img
//                         src="images/img_arrowdown_gray_50_24x24.svg"
//                         className="h-[24px] w-[24px]"
//                         alt="arrow_down"
//                       />
//                     }
//                   ></SelectBox>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col gap-[16px] h-[89px] md:h-[auto] items-start justify-start max-w-[982px] mt-[115px] w-[100%]">
//               <Line className="bg-gray_801 h-[1px] w-[100%]" />
//               <div className="flex items-start justify-start w-[100%]">
//                 <div className="flex flex-row gap-[12px] items-center justify-end w-[100%]">
//                   <Button className="border-[1px] border-solid border-teal_A400 cursor-pointer flex-1 font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[100%]">
//                     Previous
//                   </Button>
//                   <Button className="bg-teal_900 cursor-pointer flex-1 font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_900 w-[100%]">
//                     Next
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BasicDetailsSevenPage;
