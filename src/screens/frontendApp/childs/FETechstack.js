import React, {useState,useEffect} from "react";
import { useDispatch } from "react-redux";

import TechStackList from "components/TechStackList";
import { SET_FE_ACTIVE_STEP, SET_FRONTEND_FETECKSTACK } from "store/slices/frontend.slice";
import { SET_FETECKSTACK } from "store/slices/fullstack.slice";
import { GetFETechstacks } from "shared/services";

const Component = ({selected_techStack}) => {
  const [selectedTech, setSelectedTech]  = useState(selected_techStack);
  const [feTechList,setFeTechList] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    (async _ => {
      const res = await GetFETechstacks();
      setFeTechList(res.values);
    })()
  },[])

   const updateTech = (val) => {
    setSelectedTech(val);
    dispatch(SET_FRONTEND_FETECKSTACK(val));
    dispatch(SET_FE_ACTIVE_STEP(2))
  }

  return (
    <>
      <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
        <TechStackList choosen="Front End" techList={feTechList} updateTech={updateTech} selectedTech={selectedTech} updateItemToState={SET_FETECKSTACK}
          title="Select Front End" description="Step 2:" />
      </div>
    </>
  );
};

Component.defaultProps = {
  path: "/",
  selected_techStack:"", 
};

export default Component;
