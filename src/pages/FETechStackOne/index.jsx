import React from "react";
import { useSelector } from "react-redux";

import FETechStackComponent from "components/FETechStackComponent";

const FETechStackOnePage = () => { 
  const selected_techStack = useSelector(store => store.fullstack.fullstack_details?.feTeckstack);

  return (
    <>
       <FETechStackComponent path="/both-select-template" selected_techStack={selected_techStack}/> 
    </>
  );
};

export default FETechStackOnePage;
