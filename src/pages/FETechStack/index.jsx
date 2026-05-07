import React from "react";
import { useSelector } from "react-redux";

import FETechStackComponent from "components/FETechStackComponent";

const FETechStackPage = () => {
  const selected_techStack = useSelector(store => store.frontend.frontend_details?.feTeckstack);

  return (
    <>
       <FETechStackComponent path="/frontend-select-template" selected_techStack={selected_techStack} />
    </>
  );
};

export default FETechStackPage;
