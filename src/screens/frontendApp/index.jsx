import { useEffect, useState } from "react"

import ScreenLibrary from './childs/ScreenLibrary';
import BasicDetail from './childs/BasicDetail';
import { SelectAPI } from "./childs";
import TechStackList from "components/TechStackList";
import { GetFETechstacks, GetUITemplates } from "shared/services";
import Helper from "shared/helper";
import { StepsIndicator } from "components";

const _steps = [
  { id: 1, name: "feTeckstack", label: "Frontend Technology", status: "active", isRequired: true },
  { id: 2, name: "api", label: "Api", status: "upcoming", isRequired: true },
  { id: 3, name: "screen", label: "Screens", status: "upcoming", isRequired: true },
  { id: 4, name: "capabilities", label: "Capabilities", status: "upcoming", isRequired: false },
  { id: 5, name: "basicDetail", label: "Basic Detail", status: "upcoming", isRequired: false },
];

const FrontendApp = () => {
  const [rows, setRows] = useState([]);
  const [appData, setAppData] = useState([]);
  const [steps, setSteps] = useState(_steps);
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [feTechResponse, uiTemplatesResponse] = await Promise.all([
          GetFETechstacks(),
          GetUITemplates()
        ]);
        
        const supported_template = uiTemplatesResponse.values.find(x => x.TemplateId === 2)
        setTemplates(uiTemplatesResponse.values);
        setRows((prev) => ({
          ...prev,
          feTechList: feTechResponse.values,
          capabilities: supported_template.Supported_Capabilities,
          feScreens: supported_template?.AllScreens,
          uiTemplate: supported_template
        }));
        setAppData(prev => ({ ...prev, UITemplate: { TemplateId: supported_template?.TemplateId, MainTechnology: supported_template.MainTechnology } }));
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

  const onClickedTemplate = (template) => {
     setRows((prev) => ({
          ...prev,
          capabilities: template?.Supported_Capabilities,
          feScreens: template?.AllScreens,
          uiTemplate: template
        }));
        setAppData(prev => ({ ...prev, UITemplate: { TemplateId: template?.TemplateId, MainTechnology: template.MainTechnology } }));
  }
  
  return(
      <div className="w-[100%] px-4 app-container mb-[95px]">
        <div className="max-w-[1280px] mx-[auto] w-[100%] flex flex-col items-center gap-[24px] py-[24px]"> 
          <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
            <TechStackList choosen="Front End" techList={rows.feTechList} updateTech={updateAppData} selectedTech={appData.feTeckstack} 
              title="Select Front End" description="Step 1:" techType="feTeckstack" />
          </div>
          {!Helper.IsJSONEmpty(appData.feTeckstack) && <SelectAPI appData={appData} updateAppData={updateAppData} />}

          {!Helper.IsJSONEmpty(appData.api) && <ScreenLibrary rows={rows.uiTemplate} appData={appData} updateAppData={updateAppData}
               feScreens={appData?.feScreens} templates={templates} onClickedTemplate={onClickedTemplate} />}

          {steps.find(x => x.name === "screen").status === "completed" && (
            <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
              <TechStackList techList={rows.uiTemplate?.Supported_Capabilities} updateTech={() => {}} selectedTech={appData.capabilities} addedList={appData.capabilities} multipleSelection={true} addToList={addToList} removeFromList= {removeFromList} techType="capabilities"
                title="Select Capabilities" description="Step 4:" />
            </div>
          )}
          <BasicDetail steps={steps} updateAppData={updateAppData} appData={appData} />

          <StepsIndicator steps={steps} />
        </div>
      </div>
  )
}

export default FrontendApp