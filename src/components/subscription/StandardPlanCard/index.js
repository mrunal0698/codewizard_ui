import { Button } from "@mui/base";
import { useAuth0 } from "@auth0/auth0-react";
import { StartSubscription } from "shared/common";

function StandardPlanCard({ stanadardRef, togglePlan, updateSubscriptionStatus }) {
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
    <div ref={stanadardRef} className={`flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto mt-[100px] md:px-[20px] px-[202px]`}>
      <p className={`[font-family:Poppins] text-[50px] font-bold text-[rgba(244,189,0,1)] grow-0 shrink-0 basis-auto`}>Standard Plan</p>
      <p className={`[font-family:Poppins] text-[25px] font-medium text-left leading-[150%] text-[rgba(224,224,224,1)] grow-0 shrink-0 basis-auto mt-[50px]`}>
        <span className={`[font-family:Poppins] font-bold`}>Customizable Template</span>
        <span>
          : Dive into development with a template designed for Spring-OData, Postgres, and Maven integration. Streamline your projects with this powerful combination.
          <br />
        </span>
        <span className={`[font-family:Poppins] font-bold`}>
          <br />
          <br />
          Robust Model Library
        </span>
        <span>
          : Access a rich Model Library featuring a minimum of five diverse models. Elevate your application&apos;s structure effortlessly.
          <br />
          <br />
        </span>
        <span className={`[font-family:Poppins] font-bold`}>Community Support on Discord</span>
        <span>
          : Join the vibrant Code Wizard community on Discord for instant support, collaboration, and insights. Connect with fellow developers and tap into a world of shared knowledge.
          <br />
        </span>
        <span className={`[font-family:Poppins] font-bold`}>
          <br />
          Comprehensive Documentation
        </span>
        <span>
          : Navigate your coding journey with ease using our extensive documentation. From setup to advanced features, find answers to your questions at your fingertips.
          <br />
        </span>
        <span className={`[font-family:Poppins] font-bold`}>
          <br />
          Github Integration
        </span>
        <span>
          : Seamlessly integrate with Github to manage your version control and enhance collaboration. Enjoy the convenience of one-click code downloads in a zip file.
          <br />
          <br />
          Embark on your coding adventure with our Standard Plan, where every feature is designed to empower your development experience.
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

export default StandardPlanCard;
