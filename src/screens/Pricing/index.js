import { useState, useRef, useEffect } from "react";
import { FeatureList, SelectPlan } from "./childs";
import { Button, Text } from "components";
import { StartSubscription } from "shared/common";
import { IsRolesAssigned, GetPlans, AccessTrail } from "shared/services";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const trialPlanFeatures = [
    "Customizable UI Templates: Tailor UI screens instantly.",
    "Seamless React Code Generation: Code with the latest React version.",
    "Effortless Backend Integration: Auto-connect with code-wizard generated backend APIs.",
    "Reliable Code Quality: Guaranteed compile and build success.",
    "Scalable and Vendor-agnostic: No dependencies or vendor lock-in.",
    "Flexible Business Logic Integration: Easily incorporate your own business logic.",
    "Instant Server-side API Generation: CRUD, sorting, pagination, and search support.",
    "Advanced API Operations: Advanced queries, joins, nested objects, file handling, enums, and complex types.",
    "Efficient Development Environment: Sample data, integration tests, Postman collection, and DB schema management.",
    "Seamless Deployment: Built-in Docker support, GitHub integration, and sandbox deployment."
  ] 

const Pricing = () => {
  const [planType,setPlanType] = useState("Monthly");
  const [trialPlan,setTrialPlan] = useState([]);
  const [totalPlanList,setTotalPlanList] = useState([])
  const [planListToShow,setPlanlistToShow] = useState([]);
  
  const { user } = useAuth0();
  const navigate = useNavigate();
  const stanadardRef = useRef();
  const professionalRef = useRef();

  useEffect(() => {
    (async _ => {
      const res = await GetPlans();
      if(res.status){
        setTotalPlanList(res.values.value)
      }
      const trialplanlist = res.values.value.filter(x => {
        return x.RecurrenceType === "Weekly"
      })
      const [firstTrial] = trialplanlist;
      setTrialPlan(firstTrial);
    })()
  },[])

  useEffect(() => {
    const filteredList = totalPlanList?.filter(x => {
      return x.RecurrenceType === planType
    })
    setPlanlistToShow(filteredList);
  },[planType,totalPlanList])
  
  const TrialPlanHandler = async () => {
    const payload = {
      userId: user?.sub,
      planId:trialPlan?.PlanId
      }
    global.Busy(true);
    const res = await AccessTrail(payload);
    if(res.status){
        const RoleRes = await IsRolesAssigned(user);
        global.Busy(false);
        if(RoleRes.status && RoleRes.values.isRolesAssigned){
          navigate("/our-home");
        }else {
        global.AlertPopup("error",RoleRes?.statusText);
      }
      }else {
        global.Busy(false);
        global.AlertPopup("error",res?.statusText);
      }
  }

  return (
    <div className="flex justify-center items-start flex-col py-8 gap-6 mx-auto w-[100%] md:px-2">
        <div className="flex sm:flex-col justify-evenly gap-6 w-[100%]">
          <div className="flex flex-col items-start gap-6 md:w-auto w-[500px]">
            <Text className="font-medium text-left text-core leading-[150%]"
                variant="h2" as="h2"
              >
                Welcome to CodeWizard <br />
                Early Access
              </Text> 
              <Text className="font-normal text-left leading-[150%] text-core"
                variant="h6"
                as="h6"
              >
              Welcome to Early Access! Enjoy unlimited access to our latest
              features and content. Your insights help us shape the future.
              </Text> 
              <Text className="font-normal text-left leading-[150%] text-subtle"
                variant="body2"
              >
               This program allows you to explore, interact, and provide valuable feedback that directly influences our product's evolution.
               Your participation helps us identify potential improvements, ensuring a polished and user-friendly experience for everyone upon full release.
               We're excited to have you on this journey with us and look forward to your insights. Dive in and enjoy the forefront of our cutting-edge developments.
              </Text> 
          </div>
          <div className="bg-secondary flex justify-start items-center flex-col gap-8 md:w-auto w-[486px] p-10 rounded-md h-[auto]">          
            <div className=" flex justify-start items-center flex-col gap-4 w-[80%]">
              <Text className="font-medium text-left leading-[150%] text-core"
                variant="h3"
                as="h3"
              >
                {trialPlan.Name}
              </Text> 
              <Text className="font-normal text-center text-hint leading-7"
                variant="body2"
              >
                {trialPlan?.PlanDescription}
              </Text> 
              <Button className="bg-primary text-sm font-medium text-core rounded-sm p-4 w-64"
                onClick={TrialPlanHandler}
              >
                Get Early Access
              </Button>
            </div>
            <FeatureList features={trialPlanFeatures}/>
          </div>
        </div>
        {/* <div className="flex gap-4 justify-between w-[100%]">
            <Text className="font-medium text-left text-core"
              variant="h5"
              as="h5"
            >
              All Plans
            </Text>  */}
            {/* <div className="flex gap-3">
              <div className="flex items-center gap-2">
                  <input id="month" type="radio"  name="inline-radio-group" value="Monthly" checked={planType === "Monthly"} 
                    className="w-4 h-4 bg-base border-subtle"
                    onChange={togglePlanHandler}
                    />
                  <label htmlFor="month" className="ms-2 text-sm font-normal text-core dark:text-hint">Monthly</label>
              </div>
              <div className="flex items-center gap-2">
                  <input id="year" type="radio"  name="inline-radio-group" checked={planType === "Yearly"} value="Yearly"
                    className="w-4 h-4 bg-base"
                    onChange={togglePlanHandler}
                    />
                  <label htmlFor="year" className="ms-2 text-sm font-medium text-core dark:text-hint">Annually</label>
              </div>
            </div> */}
         {/* </div>     */}
         {/* <SelectPlan stanadardRef={stanadardRef} professionalRef={professionalRef} planListToShow={planListToShow} /> */}
    </div>
  );
}

export default Pricing;
