import CodeWizard from "../CodeWizard";
import { useAuth0 } from "@auth0/auth0-react";
import { StartSubscription } from "shared/common";

function StandardPlanComponent({ togglePlan, updateSubscriptionStatus,stanadardRef }) {
    const { user } = useAuth0();

    const handleScroll = () => {
      stanadardRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

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
    <>
     <div className={`flex justify-center items-center flex-col h-[99px] self-stretch grow-0 shrink-0 basis-auto box-border border-b-[rgba(255,255,255,0.50)] border-b border-solid`}>
        <p className={`[font-family:Poppins] text-[25px] font-bold text-[rgba(224,224,224,1)] grow-0 shrink-0 basis-auto`}>Standard Plan</p>
      </div>
      <div className={`flex justify-center items-center flex-col h-[119px] self-stretch grow-0 shrink-0 basis-auto box-border`}>
      {togglePlan ? (
      <p className={`[font-family:Poppins] text-3xl font-bold text-[rgba(224,224,224,1)] grow-0 shrink-0 basis-auto`}>
        <span className={`text-[40px]`}>Rs. 6,500</span>
        <span className={`text-xl`}>/month </span>
      </p>
      ) : (
        <p className={`[font-family:Poppins] text-3xl font-bold text-[rgba(224,224,224,1)] grow-0 shrink-0 basis-auto`}>
        <span className={`text-[40px]`}>Rs. 65,000</span>
        <span className={`text-xl`}>/year </span>
      </p>
      )}
      </div>
      <button className={`bg-[rgba(244,189,0,1)] flex justify-center items-stretch flex-col h-[68px] grow-0 shrink-0 basis-auto box-border px-5 rounded-br-[10px] rounded-t-[10px] rounded-bl-[10px]`}
       onClick={subscribeHandler}
      >
         <p className={`[font-family:Poppins] text-[25px] font-medium text-black grow-0 shrink-0 basis-auto cursor-pointer`}>Pay & Subscribe</p>
          </button>
        <div className={`flex justify-center items-center flex-col h-[109px] self-stretch grow-0 shrink-0 basis-auto box-border mt-2.5 border-b-[rgba(255,255,255,0.50)] border-b border-solid`}>
          <p className={`[font-family:Poppins] text-[25px] font-medium text-[rgba(244,189,0,1)] grow-0 shrink-0 basis-auto cursor-pointer`}
           onClick={handleScroll} 
          >Learn More</p>
      </div>
      <CodeWizard />
    </>
  );
}

export default StandardPlanComponent;
