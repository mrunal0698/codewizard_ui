// import React, {useState,useEffect} from "react";
// import { useDispatch } from "react-redux";

// import TechStackList from "components/TechStackList";
// import { SET_FE_ACTIVE_STEP, SET_FRONTEND_FETECKSTACK } from "store/slices/frontend.slice";
// import { SET_FETECKSTACK } from "store/slices/fullstack.slice";
// import techstackData from "jsonFiles/techstack.data.json";

// const FETechStackComponent = ({path,selected_techStack}) => {
//   const [selectedTech, setSelectedTech]  = useState(selected_techStack);
//   const [feTechList,setFeTechList] = useState([]);
//   const dispatch = useDispatch();
  
//   useEffect(() => {
//     setFeTechList(techstackData?.FETectstack_list);
//   },[])
//    const updateTech = (val) => {
//     setSelectedTech(val);
//     dispatch(SET_FRONTEND_FETECKSTACK(val));
//     dispatch(SET_FE_ACTIVE_STEP(2))
//   }

//   return (
//     <>
//       <div className="flex flex-1 flex-col gap-[41px] items-center justify-start md:mt-[0] pt-[32px] md:px-[20px] w-[100%]">
//         <div className="flex flex-col items-center justify-start w-[100%]">
//           <TechStackList choosen="Front End" techList={feTechList} updateTech={updateTech} selectedTech={selectedTech} updateItemToState={SET_FETECKSTACK}
//             title="Select Front End" description="Step 2:"
//             rhsDescription = "Select a Tech Stack to see it’s Features"/>
//         </div>
//       </div>
//     </>
//   );
// };

// FETechStackComponent.defaultProps = {
//   path: "/",
//   selected_techStack:"", 
// };

// export default FETechStackComponent;
