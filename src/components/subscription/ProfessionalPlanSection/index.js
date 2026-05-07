import { Button } from "@mui/base";
import { useAuth0 } from "@auth0/auth0-react";
import { StartSubscription } from "shared/common";

function ProfessionalPlanSection({ professionalRef, togglePlan, updateSubscriptionStatus }) {
   const { user } = useAuth0();

  const subscribeHandler = async () => {
    let planInfo = {plan_id: "plan_MsP6aNMl5eieX8"}
     if(togglePlan){
       planInfo = {...planInfo,plan_id : "plan_MsP6aNMl5eieX8"}
     }
   const response =  await StartSubscription(user,updateSubscriptionStatus,planInfo);  
   if(!response.status){
    global.AlertPopup("error",response?.statusText);
   }
   }
  return (
    <div ref={professionalRef} className={`flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto mt-[150px] px-[202px] md:px-[20px]`}>
      <p className={`[font-family:Poppins] text-[50px] font-bold text-[rgba(244,189,0,1)] grow-0 shrink-0 basis-auto`}>Professional Plan</p>
      <p className={`[font-family:Poppins] text-[25px] font-medium text-left leading-[150%] text-[rgba(224,224,224,1)] grow-0 shrink-0 basis-auto mt-[50px]`}>
        <span className={`[font-family:Poppins] font-bold`}>Diverse Templates</span>
        <span>
          : Expertly crafted templates in React, Spring-OData, Postgres, MySQL, Spring Boot, MongoDB, and OpenUI5, developed by seasoned professionals following industry best practices.
          <br />
          <br />
        </span>
        <span className={`[font-family:Poppins] font-bold`}>MySQL Support</span>
        <span>
          : Seamlessly integrate MySQL into your projects with our robust support.
          <br />
          <br />
        </span>
        <span className={`[font-family:Poppins] font-bold`}>Gradle Support</span>
        <span>
          : Easily manage dependencies and build processes with Gradle support.
          <br />
          <br />
        </span>
        <span className={`[font-family:Poppins] font-bold`}>Spring-Security Integration</span>
        <span>
          : Ensure top-notch security for React, Ruby, and Spring-OData applications with built-in Spring-Security support.
          <br />
          <br />
        </span>
        <span className={`[font-family:Poppins] font-bold`}>Comprehensive Spring Security Features</span>
        <span>
          : Enjoy complete authentication, authorization, and user management capabilities.
          <br />
          <br />
        </span>
        <span className={`[font-family:Poppins] font-bold`}>JBoss Compatibility</span>
        <span>
          : Code Wizard offers support for JBoss, expanding your deployment options.
          <br />
          <br />
        </span>
        <span className={`[font-family:Poppins] font-bold`}>Model Library Access</span>
        <span>
          : Access a library of models to accelerate your development process.
          <br />
          <br />
        </span>
        <span className={`[font-family:Poppins] font-bold`}>Dev Team Support</span>
        <span>
          : Experience a dedicated support team ready to fix any issues you encounter.
          <br />
          <br />
        </span>
        <span className={`[font-family:Poppins] font-bold`}>Interactive Forum</span>
        <span>
          : Engage with a vibrant community. Post questions, share insights, and receive responses from both the Code Wizard team and fellow users.
          <br />
          <br />
        </span>
        <span className={`[font-family:Poppins] font-bold`}>Extensive Documentation</span>
        <span>
          : Navigate your coding journey with ease using our detailed and accessible documentation.
          <br />
          Github Integration: Seamlessly integrate with Github, plus enjoy the convenience of one-click code downloads in a zip file.
          <br />
          <br />
        </span>
        <span className={`[font-family:Poppins] font-bold`}>Time-Limited Deployment</span>
        <span>
          : Deploy your application in &apos;run&apos; mode for a maximum of 30 minutes. If needed, restart the application directly from the projects page.
          <br />
          <br />
          Embark on your professional coding journey with confidence, supported by a feature-rich plan that caters to your every development need.&quot;
        </span>
      </p>
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="[border-top-style:none] [border-right-style:none] [border-bottom-style:none] [border-left-style:none] bg-[rgba(244,189,0,1)] [font-family:Poppins] text-[25px] font-medium text-black h-[68px] w-[184px] cursor-pointer block box-border grow-0 shrink-0 basis-auto mt-[50px] rounded-br-[10px] rounded-t-[10px] rounded-bl-[10px]"
       onClick={subscribeHandler}
      >
        Get Started
      </Button>
    </div>
  );
}

export default ProfessionalPlanSection;
