import React from "react";
import { useSelector } from "react-redux";

import FEScreen from "components/FEScreen";

const FETemplateOnePage = () => {
  const selected_feTemplates = useSelector(store => store.fullstack.fullstack_details?.FeTemplate);
  
  return (
    <>
       <FEScreen path="/both-select-backend" selected_feTemplates={selected_feTemplates}/>  
    </>
  );
};

export default FETemplateOnePage;
