import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import SignupBenefits from "components/SignupBenefits";
import SignupSidebarframe from "components/SignupSidebarframe";
import { Button, Img, Input, Line, Text } from "components";
import { AccessTrail, ExclusiveAccess, GetPlans, IsRolesAssigned } from "shared/services";
import posthog from "posthog-js";
import Session from "shared/session";
import Helper from "shared/helper";
import { StartSubscription } from "shared/common";

const Signup = () => {
  const { loginWithRedirect, isAuthenticated, isLoading, getIdTokenClaims, user } = useAuth0();
  const [loader,setLoader] = useState(true);
  const [inputValue,setInputValue] = useState();
  const [initialize,setInitialize] = useState(false);

  const urlParams = new URLSearchParams(window.location.search);

  const navigate = useNavigate();
  
  const onchangeInput = (e) => {
      setInputValue(e.target.value);
  }

  const updateSubscriptionStatus = async (status, response) => {
    if(status) {
      const token = await getIdTokenClaims();
      sessionStorage.setItem("bearer_token",token?.__raw);
        const res = await IsRolesAssigned();
        if(res.status && res.values.isRolesAssigned){
          sessionStorage.removeItem("subscription")
          navigate("/our-home");
        }
        else{
          window.open("https://code-wizard.ai/pricing.html", "_self");
      }
    }
    setLoader(false);
  }

  useEffect(() => { setInitialize(true) }, [])

  useEffect(() => {
    if (isLoading) { setLoader(true); return } else { setLoader(false);}

    (async _ => {
      if(isAuthenticated){
        posthog.identify(user.email, {
          email: user.email,
          name: user.name
        });
        // Track login event
        posthog.capture('user_logged_in', {
          email: user.email
        });

        setLoader(true);
        const subscription = Session.Retrieve("subscription",true);
        const token = await getIdTokenClaims();
        sessionStorage.setItem("bearer_token",token?.__raw);

        if(!Helper.IsJSONEmpty(subscription)){
          const plans = await FetchPanInfos();

          if(subscription.plan === 'Enterprise') { navigate("/contact-sales"); return; };

          if(subscription.plan === 'Free') {
            const freeplan = plans.find(x => x.RecurrenceType === "Weekly");
            const payload = {
              userId: user?.sub,
              planId:freeplan?.PlanId
            }
            const res = await AccessTrail(payload);
            if(res.status) navigate("/our-home");
            return;
          }

          const PlanId = plans.find(x => 
            x.Name === subscription.plan && x.RecurrenceType === subscription.type
          )?.PlanId;
          StartSubscription(user,updateSubscriptionStatus,{ PlanId }); 
        } else {        
          const res = await IsRolesAssigned();          
          if(res.status && res.values.isRolesAssigned){
            navigate("/our-home");
          }
          else{
            window.open("https://code-wizard.ai/pricing.html", "_self");
          }
        }
      }
    })()
  },[isLoading, isAuthenticated])

  const FetchPanInfos = async () => {
    const res = await GetPlans();
    return res.values.value;
  }

  const SubscribeUser = () => {
    const plan = urlParams.get("plan");
    if(!Helper.IsJSONEmpty(plan) ){
      const type = urlParams.get("type");
      Session.Store("subscription",{ plan, type }, true);  
      loginWithRedirect();
    }
  }

  if(initialize) { setInitialize(false); SubscribeUser(); }

  if (loader) {
    return(
      <div id="busyloader" className="preloader">
        <div className="loader-modal">
          <img src="./images/logo-footer.png" alt="preloader" className="w-[140px]"/>
        </div>
      </div> 
    )
  }

  const onSubmit = async () => {
    if(!inputValue) {
      global.AlertPopup("error","Please enter the code");
      return;
    }
    const res = await ExclusiveAccess(inputValue);
    if(res.status && res.values){
      loginWithRedirect();
    }else {
      global.AlertPopup("error","login failed");
    }
 }
  
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-start justify-start w-[100%] relative">
         <div className="absolute flex right-10 top-10 md:right-4 md:top-4 items-center justify-center m-[auto] w-[120px]">
            <Img
              src="images/img_frame529821.png"
              className="h-[32px] sm:h-[auto] object-cover w-[100%]"
              alt="frame529821_One"
            />
        </div>
        <div className="flex md:flex-col flex-row gap-[48px] items-start justify-start md:px-[20px] md:w-[100%] w-[100%] h-[100vh] md:h-[100%] sm:h-[100%] md:py-14">
          <SignupBenefits  />
          <div className="flex flex-col md:gap-[40px] h-[100%] pt-[24px] items-center justify-center md:w-[100%] w-[46%]">
            <SignupSidebarframe />
            <div className="flex flex-col items-center justify-center w-[100%] h-[40%] p-[16px]">
            <div className="flex flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[90%]">
                <Text
                  className="font-semibold text-gray_300 text-left w-[100%]"
                  variant="body2"
                >
                  Exclusive Access Code
                </Text>
                <Input
                  wrapClassName="bg-gray_902 border-[1px] border-hint border-solid flex p-[12px] rounded-[4px] sm:w-[100%] w-[100%]"
                  className="font-normal not-italic p-[0] placeholder:text-hint text-[12px] text-gray_300 text-left w-[100%]"
                  type="password"
                  name="AccessCode"
                  placeholder="Enter your code"
                  onChangeHandler={onchangeInput}
                />
              </div>
              <Button
                onClick={onSubmit}
                className={`bg-teal_800 hover:bg-gradient cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] sm:w-[100%] text-center text-gray_50 w-[90%]`}
              >
                Get Started
              </Button>
            </div>
            <div className="flex gap-2">
              <a href="https://code-wizard.ai/terms&conditions.html" target="_blank" rel="noreferrer" className="text-hint text-xs"
              >
                Terms & Conditions
              </a>
              <Line className="w-[1px] bg-core"/>
              <a href="https://code-wizard.ai/refund-policy.html" target="_blank" rel="noreferrer" className="text-hint text-xs" >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
