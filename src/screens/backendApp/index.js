import { useState, useEffect } from "react";

import SelectModel from "components/selectModel";
import { BasicDetail,  } from "./childs";
import { Line, StepsIndicator, Text } from "components";
import { GetBETechstacks, GetBETemplates, GetDatabases } from "shared/services";
import TechStackList from "components/TechStackList";
import Helper from "shared/helper";

const _steps = [
  { id: 1, name: "model", label: "Design", status: "active", isRequired: true },
  { id: 2, name: "backend", label: "Backend Technology", status: "upcoming", isRequired: true },
  { id: 3, name: "database", label: "Database", status: "upcoming", isRequired: true },
  { id: 4, name: "capabilities", label: "Capabilities", status: "upcoming", isRequired: false },
  { id: 5, name: "basicDetail", label: "Basic Detail", status: "upcoming", isRequired: false },
];

const BackendApp = () => {
  const [rows, setRows] = useState([]);
  const [appData, setAppData] = useState([]);
  const [steps, setSteps] = useState(_steps);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [BETechRes, DBRes, BETemplatesRes] = await Promise.all([
          GetBETechstacks(),
          GetDatabases(),
          GetBETemplates()
        ]);
        
        const [supported_template] = BETemplatesRes.values;
        setRows((prev) => ({
          ...prev,
          BETechList: BETechRes.values,
          capabilities: supported_template.Supported_Capabilities,
          databases: DBRes.values
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  const updateAppData = (val, name, isArray, deleteId) => { 
    const current = steps.find(x => x.name === name);
    if(isArray) {
      if(deleteId) {
        setAppData(prev => (
          { ...prev, [name] : [ ...prev[name].filter(x => x[deleteId] !== val[deleteId]) ] }
        ))
      } else {
        setAppData(prev => (
          { ...prev, [name] : [...(prev[name] || []), val] }
        ))
      }
    } else {
      setAppData(prev => (
        {...prev, [name] : val}
      ))
    }
    if(!Helper.IsJSONEmpty(current)) {
      const next = steps.find(x => x.id === current.id+1);
        setSteps(prev => (
          prev.map(x => (        
              (x.id < current.id) &&  Helper.IsJSONEmpty(appData[x.name]) ?  { ...x, status: "pending" } :
              x.name === name && ( Helper.IsJSONEmpty(val) || Helper.IsArrayEmpty(val)) ? { ...x, status: "pending" } : 
              (x.id === next?.id) &&  Helper.IsJSONEmpty(appData[next.name]) ?  { ...x, status: "active" }:
              x.name === name ? { ...x, status: "completed" } : x
        ))
      ))
    }
  }

  const addToList = (item, name) => {
    updateAppData(item, name, true);
  }

  const removeFromList = (item, name) => {
    updateAppData(item, name, true, "CapId" );
  }

    return (
      <div className="w-[100%] app-container px-6 mb-[95px]">
        <div className="max-w-[1280px] relative mx-[auto] w-[100%] flex flex-col items-center gap-[24px] py-[24px]">
          <div className="flex flex-1 flex-col gap-[12px] items-start justify-start w-[100%]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="flex gap-[4px] items-center justify-start w-[300px]">
                <Text
                  className="font-medium text-gray_50 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                <span
                  className="font-normal not-italic text-gray_501 pr-2"
                >
                  Step 1:  
                </span>
                Select Design
                </Text>
              </div>
              <Line className="bg-gray_804 h-[1px] w-full" />
            </div>           
            <SelectModel ownDesign={false} updateAppData={updateAppData} />
          </div>
          {steps[0].status === "completed" && (
            <div className="flex flex-1 flex-col items-center justify-start w-[100%] gap-[24px]">
              <TechStackList techList={rows?.BETechList} updateTech={updateAppData} techType="backend" selectedTech={appData?.backend}
                title="Select Back End" description="Step 2:" />
            </div>
          )}

          {steps[1].status === "completed" && ( 
            <div className="flex flex-1 flex-col items-start justify-start w-[100%] gap-[24px]">
              <TechStackList choosen="Database" techList={rows.databases} updateTech={updateAppData} selectedTech={appData?.database} techType="database"
                title="Select Database" description="Step 3:" />
            </div>
          )}

          {steps[2].status === "completed" && ( 
            <>
              <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                <TechStackList techList={rows.capabilities} updateTech={() => {}} selectedTech={appData.capabilities} addedList={appData.capabilities} 
                  multipleSelection={true} addToList={addToList} removeFromList= {removeFromList} techType="capabilities"
                  title="Select Capabilities" description="Step 4:" />
              </div>
            </>
          )}
          <BasicDetail steps={steps} updateAppData={updateAppData} appData={appData} />
        </div>
       
        <StepsIndicator steps={steps}  />
      </div>
    )
}

export default BackendApp