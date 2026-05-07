import React from "react";
import { useSelector } from "react-redux";

import BackEndComponent from "components/BackEndComponent";

const BackEndOnePage = () => {
  const selected_backend = useSelector(store => store.fullstack.fullstack_details?.backend);
  
  return (
    <>
      <BackEndComponent path="/both-select-db" selected_backend={selected_backend}/>
    </>
  );
};

export default BackEndOnePage;
