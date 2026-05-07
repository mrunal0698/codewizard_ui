import React,{useEffect, useState} from "react";

import { Text, Button, List, Img, Input } from "components";
import { PopupWidget } from "react-calendly";
import { CALENDER_URL } from "utils/constants";
import { useAuth0 } from "@auth0/auth0-react";
import posthog from "posthog-js";
import { PostQA } from "shared/services";
import AlertBoxModal from "modals/AlertBoxModal";

const list = [
  {
    "Name" : "Email Us",
    "Description" : "Send an email for any support.",
    "Contact" : "support@code-wizard.ai",
    "Link" : "",
    "src" : "images/msg-icon.png"
  },
  {
    "Name" : "Call Us",
    "Description" : "Mon-Fri 8am to 8pm.",
    "Contact" : "+91-6364 94 2931",
    "Link" : "",
    "src" : "images/call-icon.png"
  },
  {
    "Name" : "FAQS",
    "Description" : "Find the answer you need",
    "Contact" : "",
    "Link" : "https://replicacia-technologies-pvt-ltd.gitbook.io/code-wizard-documentation",
    "LinkName": "Go To FAQs",
    "src" : "images/help-icon.png"
  },
  {
    "Name" : "Schedule a Video Call",
    "Description" : "Mon-Fri 8am to 8pm.",
    "Contact" : "Click the below button ⬇",
    "LinkName" : "Book A Call",
    "src" : "images/video-icon.png"
  },
]

const inputInitialState = {
    fullName : "",
    email : "",
    message : "",
}

const ContactSales = () => {
  const [rows,setRows] = useState({})
  const [error,setError] = useState(inputInitialState)
  const [activeInput,setActiveInput] = useState(false);
  const [showSuccessNote, setShowSuccessNote] = useState();

  const { user, isLoading } = useAuth0();

  useEffect(() => {
    if(!isLoading){
        setRows({
            fullName : user?.name,
            email : user?.email,
            message : ""
        })
    }
  },[user, isLoading])

  useEffect(() => {
    if(rows.status === true){
      setTimeout(() => {
        setRows(inputInitialState);
      },5000)
    }
  },[rows])

  const onSubmitHandler = async () => {
    if(!rows.fullName || !rows.email || !rows.message){
        global.AlertPopup("error","Please enter all the details")    
    }else{
        const payload =  {
            Question : "ContactSales",
            Answer : rows?.message,
            Attribute4 :  `${rows?.fullName} - ${rows?.mobileNumber} - ${rows.companyName} - ${rows.jobTitle}}`,
            Attribute5 :  user?.email
        }
      global.Busy(true);
        // Track signup event
        posthog.capture('ContactSales', {
          email: user.email
        });
       const res= await PostQA(payload);
       if(res.status){
        setShowSuccessNote(true);
       }

      global.Busy(false);
    }
  }

 const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setRows(prev => ({
          ...prev,[name] : value
      }))
      if(error[name])
      validateForm(event);
    }

  const validateForm = (e) => {
    const {name, value} = e.target;
    setError((obj) => {
    const curError= {...obj,[name] : ""}
    switch(name){
        case "fullName" :
            if(!value){
            curError[name] = "Please enter your name"
            }
            else{
            const fullNameregex = /^[a-zA-Z ]*$/;
            const fullNameregexTest = fullNameregex.test(value);
            if(!fullNameregexTest){
                curError[name] = "Name should contain only alpabets"
            }
            }
            break;
        case "email" :
            if(!value){
                curError[name] = "Please enter your email"
                }else {
                const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
                const emailRegexTest = emailRegex.test(value);
                if(!emailRegexTest){
                    curError[name] = "Please enter valid email"
                }
                }
                break ;
        case "message" :
            if(!value){
                curError[name] = "Please the message"
                }
            break;
        case "companyName" :
            if(!value){
                curError[name] = "Please the Company Name"
                }
            break;
        case "jobTitle" :
            if(!value){
                curError[name] = "Please the Job Title"
                }
            break;
        case "mobileNumber" :
            if(!value){
                curError[name] = "Please the Mobile Number"
                }
            break;
        default :
            break;            
        }       
        return curError;
    }) 
  }
  const updateActiveInput = (name) => {
    setActiveInput(name);
  };
 
  const handleNavigation = () => {
    setShowSuccessNote(false)
    window.open("https://code-wizard.ai/product-feature.html")
  }

  return (
    <>
       <PopupWidget
        url={CALENDER_URL}
        rootElement={document.getElementById("root")}
        text="Click here to Book a Call"
        textColor="var(--core)"
        color="var(--primary)"
      />
      <div className="bg-gray_900 flex lg:flex-col items-start justify-start w-[100%] p-10 ">
        <div className="pl-12 flex flex-col gap-[24px] items-start justify-start w-[50%] sm:w-[100%] max-w-[512px] pr-4">
         <Text
          className="font-medium not-italic text-core text-left -ml-4 w-[auto]"
          as="h2"
          variant="h2"
          >
            Contact our Sales team
          </Text>
          <Text
          className="font-normal not-italic text-gray_501 text-left w-[auto]"
          as="h6"
          variant="h6"
          >
            Tell us how we can help, and a member of our team will be in touch soon.
          </Text>
          <div className="flex flex-col gap-[8px] items-start justify-between self-stretch sm:w-[100%] relative w-[auto]">
            <Text
              className="font-semibold text-gray_300 text-left w-[auto]"
              variant="body2"
            >
              Full Name
            </Text>
            <Input
              wrapClassName= {`${error.fullName ?"!border-pink_900 color-pink_900": "border-gray_801"} common-pointer bg-gray_902 border-[1px] border-solid p-[12px] rounded-[4px] sm:w-[100%] w-full`}
              className="font-normal not-italic p-[0] placeholder:text-gray_801 border-[1px] text-[12px] text-gray_300 text-left sm:w-[100%] focus:border-gray_501 w-full"
              name="fullName"
              placeholder="Enter your name"
              onChangeHandler={onChangeHandler} validateForm={validateForm}
              value={rows?.fullName}
              updateInputValue={updateActiveInput}
              activeInputValue={activeInput}
            />
            {error.fullName && 
              <Text
                className="absolute -bottom-5 font-normal not-italic text-left text-red_400 w-[auto]"
                variant="body3"
              >
                {error.fullName}
              </Text>
            }
          </div>
          <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] relative w-[auto]">
              <Text
                className="font-semibold text-gray_300 text-left w-[auto]"
                variant="body2"
              >
                Email ID
              </Text>
              
              <Input
                wrapClassName= {`${error.email ?"!border-pink_900 color-pink_900": "border-gray_801"} common-pointer bg-gray_902 border-[1px] border-solid p-[12px] rounded-[4px] sm:w-[100%] w-full`}
                className="font-normal not-italic p-[0] placeholder:text-gray_801 border-[1px] text-[12px] text-gray_300 text-left sm:w-[100%] focus:border-gray_501 w-full"
                name="email"
                placeholder="Enter your email"
                onChangeHandler={onChangeHandler} validateForm={validateForm}
                value={rows?.email}
                updateInputValue={updateActiveInput}
                activeInputValue={activeInput}
              />
              {error.email && 
                <Text
                  className="absolute -bottom-5 font-normal not-italic text-left text-red_400 w-[auto]"
                  variant="body3"
                >
                  {error.email}
                </Text>
              }
            </div>
            <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] relative w-[auto]">
              <Text
                className="font-semibold text-gray_300 text-left w-[auto]"
                variant="body2"
              >
                Company Name
              </Text>
              
              <Input
                wrapClassName= {`${error.companyName ?"!border-pink_900 color-pink_900": "border-gray_801"} common-pointer bg-gray_902 border-[1px] border-solid p-[12px] rounded-[4px] sm:w-[100%] w-full`}
                className="font-normal not-italic p-[0] placeholder:text-gray_801 border-[1px] text-[12px] text-gray_300 text-left sm:w-[100%] focus:border-gray_501 w-full"
                name="companyName"
                placeholder="Enter your companyName"
                onChangeHandler={onChangeHandler} validateForm={validateForm}
                value={rows?.companyName}
                updateInputValue={updateActiveInput}
                activeInputValue={activeInput}
              />
              {error.companyName && 
                <Text
                  className="absolute -bottom-5 font-normal not-italic text-left text-red_400 w-[auto]"
                  variant="body3"
                >
                  {error.companyName}
                </Text>
              }
            </div>
            <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] relative w-[auto]">
              <Text
                className="font-semibold text-gray_300 text-left w-[auto]"
                variant="body2"
              >
                Job Title
              </Text>
              
              <Input
                wrapClassName= {`${error.jobTitle ?"!border-pink_900 color-pink_900": "border-gray_801"} common-pointer bg-gray_902 border-[1px] border-solid p-[12px] rounded-[4px] sm:w-[100%] w-full`}
                className="font-normal not-italic p-[0] placeholder:text-gray_801 border-[1px] text-[12px] text-gray_300 text-left sm:w-[100%] focus:border-gray_501 w-full"
                name="jobTitle"
                placeholder="Enter your Job Title"
                onChangeHandler={onChangeHandler} validateForm={validateForm}
                value={rows?.jobTitle}
                updateInputValue={updateActiveInput}
                activeInputValue={activeInput}
              />
              {error.jobTitle && 
                <Text
                  className="absolute -bottom-5 font-normal not-italic text-left text-red_400 w-[auto]"
                  variant="body3"
                >
                  {error.jobTitle}
                </Text>
              }
            </div>
            <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] relative w-[auto]">
              <Text
                className="font-semibold text-gray_300 text-left w-[auto]"
                variant="body2"
              >
                Mobile Number
              </Text>
              
              <Input
                wrapClassName= {`${error.mobileNumber ?"!border-pink_900 color-pink_900": "border-gray_801"} common-pointer bg-gray_902 border-[1px] border-solid p-[12px] rounded-[4px] sm:w-[100%] w-full`}
                className="font-normal not-italic p-[0] placeholder:text-gray_801 border-[1px] text-[12px] text-gray_300 text-left sm:w-[100%] focus:border-gray_501 w-full"
                name="mobileNumber"
                placeholder="Enter your Mobile Number"
                onChangeHandler={onChangeHandler} validateForm={validateForm}
                value={rows?.mobileNumber}
                updateInputValue={updateActiveInput}
                activeInputValue={activeInput}
              />
              {error.mobileNumber && 
                <Text
                  className="absolute -bottom-5 font-normal not-italic text-left text-red_400 w-[auto]"
                  variant="body3"
                >
                  {error.mobileNumber}
                </Text>
              }
            </div>
            <div className="common-pointer flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] relative w-full">
              <Text
                className="font-semibold text-gray_300 text-left w-[auto]"
                variant="body2"
              >
                Message
              </Text>
              <textarea
                  id="message"
                  rows="4"
                  className="block w-[100%] text-sm text-gray_300 bg-gray_902 rounded-lg p-[10px] border-[1px] solid focus:border-gray_501 !font-inter !font-light placeholder:text-gray_801 !text-[12px]"
                  placeholder="How can we help you"
                  onChange={onChangeHandler}
                  onBlur={validateForm}
                  name="message"
                  value={rows?.message}
                />
                {error.message && 
                  <Text
                    className="absolute -bottom-5 font-normal not-italic text-left text-red_400 w-[auto]"
                    variant="body3"
                  >
                    {error.message}
                  </Text>
                }
            </div>

          <Button onClick ={onSubmitHandler} className="bg-gradient cursor-pointer font-medium mt-[32px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_50 sm:w-[100%] w-full">
            Submit
          </Button>

        </div>
        <List
          className="gap-[12px] grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-2 justify-center items-center py-4 md:mt-0 md:mx-[auto] w-[auto] mx-auto"
          orientation="horizontal"
        >
          {list.map((x,idx) => {
            return(
            <div key={idx} className="bg-gray_901 flex flex-1 flex-col gap-[8px] h-[215px] items-start justify-between p-[24px] rounded-[8px] sm:w-[100%] w-60">
                <Img
                  src={x?.src}
                  alt="image"
                />
                <div className="flex flex-col gap-[12px] h-[auto] items-start justify-start">
                  <Text
                      className="font-medium text-gray_50 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      {x?.Name}
                    </Text>
                    <Text
                      className="font-normal leading-[150.00%] md:max-w-[100%] not-italic mb-[12px] text-gray_501 text-left"
                      variant="body2"
                    >
                      {x?.Description}
                    </Text>
                    {x.Contact ? (
                      <Text
                          className="font-medium text-gray_501 text-left w-[auto]"
                          variant="body2"
                        >
                          {x?.Contact}
                      </Text>
                    ) : (
                        <a
                          className="border-b border-primary font-medium text-primary"
                          href={x?.Link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {x?.LinkName}
                        </a>
                    )}                   
                </div>
            </div>
            )
          })}
        </List>
        <AlertBoxModal 
           title={`Let's Create the Perfect Plan for You`}
           isOpen={showSuccessNote}
           confirmText="Eplore More"
           message={`We appreciate your interest in our Enterprise plans. A member of our Sales team will review your request and get in touch shortly to discuss how we can best assist you. In the meantime, feel free to explore our services and let us know if you have any additional questions. We're here to help make your experience seamless and tailored to your needs!`}
           onConfirm={() => handleNavigation()}
        />
      </div>
    </>
  );
};

export default ContactSales;