import { Button } from "components";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomeMain = () => {
  const navigate = useNavigate();
  return (
    <div className="ml-4 mt-3">
      <h2>sign up</h2>
      <div className="flex flex-row gap-4">
      <Button
          onClick={() => navigate("/")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          Signup One
        </Button>
      
        <Button
          onClick={() => navigate("/signupeleven")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          signup eleven
        </Button>
      </div>
      <h2 className="mt-5">fe techstack</h2>
      <div className="flex flex-row gap-4">
      <Button
          onClick={() => navigate("/both-select-techstack")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          fetechstackone
        </Button>
        <Button
          onClick={() => navigate("/frontend-select-techstack")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          select frotend tool
        </Button>
        <Button
          onClick={() => navigate("/fetechstackselectedone")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          frontend-select-techstack selected one
        </Button>
      </div>
      <h3 className="mt-5">Backend</h3>
      <div className="flex flex-row gap-4">
        <Button
          onClick={() => navigate("/backend-select-techstack")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
           backend
        </Button>
        <Button
          onClick={() => navigate("/both-select-backend")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          backend one
        </Button>
       </div>
      <h3>select model</h3>
      <div className="flex flex-row gap-4">
        <Button
          onClick={() => navigate("/frontend-select-model")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          selectmodel
        </Button>
        <Button
          onClick={() => navigate("/backend-select-model")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          Select Model for backend
        </Button>
        <Button
          onClick={() => navigate("/both-select-model")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          selectmodel four
        </Button>
      </div>
      <h3>fe template</h3>
      <div className="flex flex-row gap-4">
        <Button
          onClick={() => navigate("/frontend-select-template")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          select screen
        </Button>
        <Button
          onClick={() => navigate("/fetemplateopen")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          fetemplate open
        </Button>
        <Button
          onClick={() => navigate("/fetemplatehover")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          fetemplate hover
        </Button>
        <Button
          onClick={() => navigate("/fetemplateadded")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          fetemplate added
        </Button>
        <Button
          onClick={() => navigate("/fetemplateopenone")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          fetemplate open one
        </Button>
        <Button
          onClick={() => navigate("/both-select-template")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          fetemplate one
        </Button>
        <Button
          onClick={() => navigate("/fetemplateaddedone")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          fetemplate addedone
        </Button>
        <Button
          onClick={() => navigate("/fetemplatehoverone")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          fetemplate hover one
        </Button>
      </div>
      <h2 className="mt-5">database</h2>
      <div className="flex flex-row gap-4">
        <Button
          onClick={() => navigate("/backend-select-db")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          select Database
        </Button>
        <Button
          onClick={() => navigate("/databaselockedthree")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          database locked three
        </Button>
        <Button
          onClick={() => navigate("/databaselockedtwo")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          database lockedtwo
        </Button>
        <Button
          onClick={() => navigate("/databaselocked")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          database locked
        </Button>
        <Button
          onClick={() => navigate("/databasetwo")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          databasetwo
        </Button>
        <Button
          onClick={() => navigate("/both-select-db")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          both-select-db
        </Button>
      </div>
      <h3>capabilities</h3>
      <div className="flex flex-row  flex-wrap gap-4">
       <Button
          onClick={() => navigate("/frontend-select-capabilities")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          select capablities
        </Button>
        <Button
          onClick={() => navigate("/backend-select-capabilities")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          capabilities one
        </Button>
        <Button
          onClick={() => navigate("/both-select-capabilities")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          select capablities two
        </Button>
        <Button
          onClick={() => navigate("/capabilitiesselectedone")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          capabilities selectedone
        </Button>
        <Button
          onClick={() => navigate("/capabilitiesselectedtwo")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          capabilities selectedtwo
        </Button>
        <Button
          onClick={() => navigate("/capabilitiesselected")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          capabilities selected
        </Button>
      </div>
      <div className="flex flex-row  flex-wrap gap-4">
        <Button
          onClick={() => navigate("/frontend-basic-details")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          basicdetails four
        </Button>
        <Button
          onClick={() => navigate("/backend-basic-details")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          basicdetails seven
        </Button>
      </div>
      <h3 className="mt-5">review</h3>
      <div className="flex flex-row gap-4">
        <Button
          onClick={() => navigate("/both-review")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          review
        </Button>
      </div>
      <h3 className="mt-5">your models</h3>
      <div className="flex flex-row gap-4">
        <Button
          onClick={() => navigate("/yourmodels")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          yourmodels
        </Button>
        <Button
          onClick={() => navigate("/yourmodelstwo")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
        yourmodelstwo
        </Button>
      </div>
      <h3 className="mt-5">After review</h3>
      <div className="flex flex-row gap-4">
        <Button
          onClick={() => navigate("/code")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          code
        </Button>
        
        <Button
          onClick={() => navigate("/codegenerated")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          code generated
        </Button>
        <Button
          onClick={() => navigate("/codegeneratedtwo")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          code generatedtwo
        </Button>
        <Button
          onClick={() => navigate("/codegeneratedone")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          code generatedone
        </Button>
      </div>
      <h3 className="mt-5">code generation</h3>
      <div className="flex flex-row  flex-wrap gap-4 w-screen">
        <Button
          onClick={() => navigate("/generating-frontend-code")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepone
        </Button>
        <Button
          onClick={() => navigate("/stepstwo")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepstwo
        </Button>
        <Button
          onClick={() => navigate("/stepsthree")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepsthree
        </Button>
        <Button
          onClick={() => navigate("/stepsfour")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepsfour
        </Button>
        <Button
          onClick={() => navigate("/stepsfive")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepsfive
        </Button>
        <Button
          onClick={() => navigate("/stepsseven")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepsseven
        </Button>
        <Button
          onClick={() => navigate("/stepseight")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepseight
        </Button>
        <Button
          onClick={() => navigate("/stepsnine")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepsnine
        </Button>
        <Button
          onClick={() => navigate("/stepsten")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepsten
        </Button>
        <Button
          onClick={() => navigate("/stepseleven")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepseleven
        </Button>
        <Button
          onClick={() => navigate("/stepstwelve")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepstwelve
        </Button>
        <Button
          onClick={() => navigate("/stepssix")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepssix
        </Button>
        <Button
          onClick={() => navigate("/stepsthirteen")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepsthirteen
        </Button>
        <Button
          onClick={() => navigate("/stepstwentysix")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepstwentysix
        </Button>
        <Button
          onClick={() => navigate("/stepstwentyseven")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepstwentyseven
        </Button>
        <Button
          onClick={() => navigate("/stepstwentyeight")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepstwentyeight
        </Button>
        <Button
          onClick={() => navigate("/stepstwentynine")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepstwentynine
        </Button>
        <Button
          onClick={() => navigate("/stepsthirty")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepsthirty
        </Button>
        <Button
          onClick={() => navigate("/stepsthirtyone")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepsthirtyone
        </Button>
        <Button
          onClick={() => navigate("/stepsfortythree")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepsfortythree
        </Button>
        <Button
          onClick={() => navigate("/stepsfortyfour")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepsfortyfour
        </Button>
        <Button
          onClick={() => navigate("/stepsfortyfive")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepsfortyfive
        </Button>
        <Button
          onClick={() => navigate("/stepsfortysix")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepsfortysix
        </Button>
        <Button
          onClick={() => navigate("/stepsfortyseven")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepsfortyseven
        </Button>
        <Button
          onClick={() => navigate("/stepsfortyeight")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepsfortyeight
        </Button>
        <Button
          onClick={() => navigate("/stepsfortynine")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          stepsfortynine
        </Button>
      </div>
      <h3 className="mt- 4">Password section</h3>
      <div className="flex flex-row  flex-wrap gap-4 w-screen">
        <Button
          onClick={() => navigate("/myaccountpassword")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          reset password
        </Button>
        <Button
          onClick={() => navigate("/resetpasswordone")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          reset password one
        </Button>
        <Button
          onClick={() => navigate("/resetpasswordtwo")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          reset password two
        </Button>
        <Button
          onClick={() => navigate("/resetpasswordthree")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          reset password three
        </Button>
        <Button
          onClick={() => navigate("/resetpasswordfour")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          reset password four
        </Button>
        <Button
          onClick={() => navigate("/resetpasswordfive")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          reset password five
        </Button>
        <Button
          onClick={() => navigate("/resetpasswordeight")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          reset password eight
        </Button>
        <Button
          onClick={() => navigate("/resetpasswordeight")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          reset password nine
        </Button>
        <Button
          onClick={() => navigate("/resetpasswordten")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          reset password ten
        </Button>
        <Button
          onClick={() => navigate("/forgotpasswordone")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          forgot password one
        </Button>
        <Button
          onClick={() => navigate("/forgotpasswordtwo")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          forgot password two
        </Button>
        <Button
          onClick={() => navigate("/forgotpasswordthree")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          forgot password three
        </Button>
        <Button
          onClick={() => navigate("/forgotpasswordfour")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          forgot password four
        </Button>
        <Button
          onClick={() => navigate("/forgotpasswordfive")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          forgot password five
        </Button>
      </div>
      <h3 className="mt-5">payment section</h3>
      <div className="flex flex-row gap-4">
      <Button
          onClick={() => navigate("/paymentdetailseleven")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          payment detail seleven
        </Button>
        <Button
          onClick={() => navigate("/addcarddetailsnineteen")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          add card details nineteen
        </Button>
        <Button
          onClick={() => navigate("/editcarddetails")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          edit card details
        </Button>
        <Button
          onClick={() => navigate("/billingaddressten")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          billingaddressten
        </Button>
        <Button
          onClick={() => navigate("/myaccountbillingtwo")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          myaccount billing two
        </Button>
        <Button
          onClick={() => navigate("/myaccountbillingone")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          myaccount billing one
        </Button>
        <Button
          onClick={() => navigate("/myaccountmydetailsnine")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          myaccount mydetails nine
        </Button>
         
      </div>
      <h3 className="mt-5">otp section</h3>
      <div className="flex flex-row  flex-wrap gap-4">
        <Button
            onClick={() => navigate("/otpone")}
            className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          otp one
        </Button>
        <Button
          onClick={() => navigate("/otpfour")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          otp four
        </Button>
        <Button
            onClick={() => navigate("/otptwo")}
            className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          otp two
        </Button>
      </div>
      <h3 className="mt-5">Others</h3>
      <div className="flex flex-row  flex-wrap gap-4 w-screen">
        <Button
          onClick={() => navigate("/modellibrary")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          Model library
        </Button>
        <Button
          onClick={() => navigate("/modellibrarysearchactive")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          model library searchactive
        </Button>
        <Button
          onClick={() => navigate("/modellibrarysearchresult")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          modellibrary searchresult
        </Button>
        <Button
          onClick={() => navigate("/modellibrarynotfound")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          modellibrary not found
        </Button>
        <Button
          onClick={() => navigate("/modellibrarynotfoundone")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          model librarynot foundone
        </Button>
        <Button
          onClick={() => navigate("/modellibraryone")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          model library one
        </Button>
        <Button
          onClick={() => navigate("/allfeaturesandbenefitsone")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          allfeatures and benefitsone 
        </Button>
        <Button
          onClick={() => navigate("/allfeaturesandbenefits")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          all features and benefits
        </Button>
        <Button
          onClick={() => navigate("/loginfour")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          loginfour
        </Button>
        <Button
          onClick={() => navigate("/loginsix")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          loginsix
        </Button>
        <Button
          onClick={() => navigate("/logineight")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          logineight
        </Button>
        <Button
          onClick={() => navigate("/selectplans")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          selectplans 
        </Button>
        <Button
          onClick={() => navigate("/selectplansone")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          select plans one 
        </Button>
        <Button
          onClick={() => navigate("/databaselocked")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          database locked
        </Button>
        <Button
          onClick={() => navigate("/dhiwise-dashboard")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          dhiwise-dashboard
        </Button>
      </div>
      <h3 className="mt-3">features</h3>
      <div className="flex flex-row  flex-wrap gap-4 w-screen">
        <Button
          onClick={() => navigate("/settings")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          settings
        </Button>
        <Button
          onClick={() => navigate("/settingsthree")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          settings three
        </Button>
        <Button
          onClick={() => navigate("/whats-new")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          whatsnew
        </Button>
        <Button
          onClick={() => navigate("/faqs")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          faqs
        </Button>
        
        <Button
          onClick={() => navigate("/error")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          error
        </Button>
        <Button
          onClick={() => navigate("/error1")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          error1
        </Button>
        <Button
          onClick={() => navigate("/*")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          not found
        </Button>
      </div>
      <h3 className="mt-3">help and support</h3>
      <div className="flex flex-row gap-4 mb-3">
        <Button
          onClick={() => navigate("/help-and-support")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          help and support one
        </Button>
      </div>
      <h3 className="mt-3">extras</h3>
      <div className="flex flex-row gap-4 mb-3">
        <Button
          onClick={() => navigate("/our-home")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          home1
        </Button>
        <Button
          onClick={() => navigate("/codeone")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          codeone
        </Button>
        <Button
          onClick={() => navigate("/codetwo")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          codetwo
        </Button>
        <Button
          onClick={() => navigate("/frame53226")}
          className="bg-light_blue_300 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[150px]"
        >
          frame53226
        </Button>
      </div>
    </div>
  );
};

export default HomeMain;
