import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import TechStackList from "components/TechStackList";
import { ADD_BACKEND_CAPABLITIES, SET_BACKEND_BACKEND, SET_BACKEND_DATABASE, SET_BE_ACTIVE_STEP } from "store/slices/backend.slice";
import techstack from "jsonFiles/techstack.data.json";

const BackEndComponent = ({path,selected_backend}) => {
  const [selectedTech, setSelectedTech]  = useState(selected_backend);
  const [backendTechList,setBackendTechList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    ( async _ => {
      setBackendTechList(techstack.BETeckstack_list);
    })()
  },[])
  const updateTech = (val) => {    
    if(selectedTech.TechName !== val.TechName){
      SET_BACKEND_DATABASE({});
      ADD_BACKEND_CAPABLITIES([]);
     }       
      setSelectedTech(val);
      dispatch(SET_BACKEND_BACKEND(val));
      dispatch(SET_BE_ACTIVE_STEP(2))
  }

  return (
    <>   
          <div className="flex flex-1 flex-col gap-[41px] items-center justify-start md:mt-[0] py-[32px] md:px-[20px] w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <TechStackList techList={backendTechList} updateTech={updateTech} selectedTech={selectedTech} techType="backend"
              title="Select Back End" description="Step 2:"
              rhsDescription = "Select a Tech Stack to see it’s Features"/>
            </div>
          </div>
    </>
  );
};

export default BackEndComponent;
