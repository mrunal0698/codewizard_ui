import ProfessionalPlanComponent from "../professionalPlanComponent";
import StandardPlanComponent from "../StandardPlanComponent";
function DeveloperProfile1({ togglePlan, updateSubscriptionStatus, stanadardRef, professionalRef  }) {
  return (
    <div className={`flex  relative justify-center items-start flex-row grow-0 shrink basis-auto z-10`}>
      <div className={`sm:gap-[20px] gap-[80px] grid sm:grid-cols-1 grid-cols-2 justify-center items-center w-[100%] h-[100%] px-4 overflow-y-auto`}>
        <div
         className={`bg-[rgba(34,34,34,1)] flex justify-start items-center flex-col max-w-[490px] h-[100%] grow shrink basis-[0.00] box-border pt-2 pb-[20px] px-10 rounded-br-[15px] rounded-t-[15px] rounded-bl-[15px]`}
         >
           <StandardPlanComponent togglePlan={togglePlan} updateSubscriptionStatus={updateSubscriptionStatus} stanadardRef={stanadardRef}/>
        </div>
        <div
          className={`bg-[rgba(34,34,34,1)] flex justify-start items-center flex-col max-w-[490px] grow shrink basis-[0.00] box-border pt-2 pb-[20px] px-10 rounded-br-[15px] rounded-t-[15px] rounded-bl-[15px]`}
        >
          <ProfessionalPlanComponent togglePlan={togglePlan} updateSubscriptionStatus={updateSubscriptionStatus} professionalRef={professionalRef}/>
        </div>
      </div>
    </div>
  );
}

export default DeveloperProfile1;
