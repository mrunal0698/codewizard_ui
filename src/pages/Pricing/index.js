import { useState, useRef } from "react";
import { Button } from "@mui/base";
import PlanSelection from "../../components/subscription/PlanSelection";
import StandardPlanCard from "../../components/subscription/StandardPlanCard";
import ProfessionalPlanSection from "../../components/subscription/ProfessionalPlanSection";

function Pricing() {
  const [togglePlan,setTogglePlan] = useState(false);
  const [subsciptionStatus,setSubsciptionStatus] = useState(null);
  const stanadardRef = useRef();
  const professionalRef = useRef();
  const togglePlanHandler = () => {
    setTogglePlan(!togglePlan);
  }
  const updateSubscriptionStatus = (value) => {
    setSubsciptionStatus(value);
  }
  return (
    <div className={`bg-[rgba(2,2,0,1)] flex justify-start items-stretch flex-col w-[100%] box-border pt-[131px] pb-[140px]`}>
      <PlanSelection stanadardRef={stanadardRef} professionalRef={professionalRef} togglePlan={togglePlan} togglePlanHandler={togglePlanHandler} updateSubscriptionStatus={updateSubscriptionStatus} subsciptionStatus={subsciptionStatus}/>
      <div className={`flex justify-start items-center flex-col gap-[50px] grow-0 shrink-0 basis-auto mt-[34px]`}>
        <p className={`[font-family:Poppins] text-[50px] font-bold text-[rgba(244,189,0,1)] grow-0 shrink-0 basis-auto`}>Student Plan</p>
        <p className={`[font-family:Poppins] text-[25px] font-medium text-[rgba(224,224,224,1)] grow-0 shrink-0 basis-auto`}>
          Code Wizard provides bigger offers to current students through a quick verification process
        </p>
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="[border-top-style:none] [border-right-style:none] [border-bottom-style:none] [border-left-style:none] bg-[rgba(244,189,0,1)] [font-family:Poppins] text-[25px] font-medium text-black h-[68px] w-[187px] cursor-not-allowed block box-border grow-0 shrink-0 basis-auto rounded-br-[10px] rounded-t-[10px] rounded-bl-[10px]">
          Coming Soon...
        </Button>
      </div>
      <StandardPlanCard stanadardRef={stanadardRef} togglePlan={togglePlan} updateSubscriptionStatus={updateSubscriptionStatus} subsciptionStatus={subsciptionStatus} />
      <ProfessionalPlanSection professionalRef={professionalRef} togglePlan={togglePlan} updateSubscriptionStatus={updateSubscriptionStatus} subsciptionStatus={subsciptionStatus} />
    </div>
  );
}

export default Pricing;
