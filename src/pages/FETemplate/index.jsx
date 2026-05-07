import React from "react";
import { useSelector } from "react-redux";

import FEScreen from "components/FEScreen";

const FETemplatePage = () => {
  const selected_feTemplates = useSelector(store => store.frontend.frontend_details?.feScreens);
  const selected_ScreenIDList = useSelector(store => store.frontend.frontend_details?.feSelectedScreenIDList);
  const selected_UI_Template = useSelector(store => store.frontend.frontend_details?.UITemplate)
  console.log(selected_feTemplates,"fe template")
  return (
    <>
      <FEScreen path="/frontend-select-capabilities" selected_feTemplates={selected_feTemplates} selected_ScreenIDList={selected_ScreenIDList} selected_UI_Template={selected_UI_Template}/> 
    </>
  );
};

export default FETemplatePage;
