import { useEffect } from "react";
import { Button } from "@mui/base";
import PricingDetails from "../PricingDetails";
import DeveloperProfile1 from "../DeveloperProfile1";
import { useNavigate } from "react-router-dom";
import { ReadUserPermission } from "shared/common";
import { useAuth0 } from "@auth0/auth0-react";
import { PREM_ROLE, STAND_ROLE } from "utils/constants";

function PlanSelection({ stanadardRef, professionalRef, togglePlan, togglePlanHandler, subsciptionStatus, updateSubscriptionStatus }) {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
   (async _ => {
      if(subsciptionStatus?.status === "active" && isAuthenticated){
        global.Busy(true);
        const userPermision = await ReadUserPermission(user);
        global.Busy(false);
       if(userPermision.data.find((role) => role?.id === STAND_ROLE || role?.id === PREM_ROLE)){
         navigate("/our-home");
       }
      }else if(subsciptionStatus.status && subsciptionStatus?.status !== 200) {
        global.AlertPopup("error",subsciptionStatus?.statusText);
      }
     })()
  },[subsciptionStatus]);
  return (
    <div className={`flex justify-start items-center flex-col grow-0 shrink-0 basis-auto`}>
      <div className={`flex justify-center items-center flex-col gap-[50px] grow-0 shrink-0 basis-auto`}>
        <p className={`[font-family:Poppins] text-[50px] font-bold text-[rgba(244,189,0,1)] self-stretch grow-0 shrink-0 basis-auto text-center`}>Choose a plan that’s right for you</p>
        <PricingDetails />
        <div className={`bg-[rgba(34,34,34,1)] flex justify-center items-center flex-row grow-0 shrink-0 basis-auto rounded-br-[30px] rounded-t-[30px] rounded-bl-[30px] w-[300px]`}>
          {/* <p className={`[font-family:Poppins] text-[25px] font-medium text-[rgba(224,224,224,1)] grow-0 shrink-0 basis-auto mr-[23px]`}>Monthly</p> */}
          {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
          <Button className={`${togglePlan ? "bg-[rgba(244,189,0,1)]": "bg-[rgba(34,34,34,1)] text-gray-300"} [font-family:Poppins] text-[25px] font-medium h-[50px] w-[150px] cursor-pointer block box-border grow-0 shrink-0 basis-auto rounded-br-[30px] rounded-t-[30px] rounded-bl-[30px]`}
           onClick={togglePlanHandler}
          >
            Monthly
          </Button>
          <Button className={`${!togglePlan ? "bg-[rgba(244,189,0,1)] text-black": "bg-[rgba(34,34,34,1)] text-gray-300"} [font-family:Poppins] text-[25px] font-medium h-[50px] w-[150px] cursor-pointer block box-border grow-0 shrink-0 basis-auto rounded-br-[30px] rounded-t-[30px] rounded-bl-[30px]`}
           onClick={togglePlanHandler}
           >
            Yearly
          </Button>
        </div>
      </div>
      <div className={`flex relative justify-center items-start flex-row gap-2 self-stretch grow-0 shrink-0 basis-auto mt-[19.5px]`}>
        <div className={`grow-0 shrink-0 basis-auto pt-[706px] absolute bottom-0 left-0`}>
          <img
            className={`w-[200px] h-[311px] max-w-[initial] block box-border rotate-180`}
            src="images/Elemenr3.png"
          />
        </div>
        <DeveloperProfile1 togglePlan={togglePlan} updateSubscriptionStatus={updateSubscriptionStatus} stanadardRef={stanadardRef} professionalRef={professionalRef}/>
        <div className={`grow-0 shrink-0 basis-auto pb-[709px] absolute top-1 right-0 z-0`}>
          <img
            className={`w-[258px] h-[389px] max-w-[initial] block box-border`}
            src="images/pattern1.png"
          />
        </div>
      </div>
    </div>
  );
}

export default PlanSelection;
