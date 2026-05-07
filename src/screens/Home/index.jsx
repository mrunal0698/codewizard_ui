import React, { useEffect } from "react";
import { useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { GetQA } from "shared/services";
import RenderProjectList from "./childs/RenderProjectList";
import CWModal from "modals/Modal";
import { ExperienceForm, GridSection } from "./childs";
import helper from 'shared/helper';

const Home = () => {
  const [experienceForm,setExperienceForm] = useState(false);
  
  const { user } = useAuth0();

    useEffect(() => {
      const hasSeenModal = sessionStorage.getItem('hasSeenModal');
      if (!hasSeenModal) {
        (async _ => {
          const res = await GetQA(user.email);
          const QAList = res.values.value.find(x => x.Question === "Experience");
          if(helper.IsNull(QAList)){
            setExperienceForm(true);
          }
        })()
        sessionStorage.setItem('hasSeenModal', 'true');
      }
    }, []);

     return (
       <>
          <CWModal open={experienceForm} className="border-[1px] border-[#FFFFFF4D] bg-gray_900 rounded-md">
            <ExperienceForm close={() => setExperienceForm(false)} />
          </CWModal>
         <div className={`flex flex-1 flex-col items-center justify-start md:pt-[0] pt-[32px] gap-6 w-[100%] max-w-[1130px] h-[100%] mx-[auto]`}>
           <GridSection/>
           <RenderProjectList />
         </div>
       </>
     );
};

export default Home;
