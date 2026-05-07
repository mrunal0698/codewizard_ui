import React, { useState } from "react";

import { Img, Text } from "components";
import ComponentNavigator from "components/ComponentNavigator";

  const list = [{
    title : "Generate Code Instantly",
    src:"images/img_frame.svg",
    description : "End-to-end application code is generated in a few minutes. It’s not just skeleton code, it is a fully functional code. The platform takes care of code build, executing pre-generated unit test cases, checking-in to Github. Supports adding toolchain for code review, deployment, so on."
  },
  { 
    title : "Choice of Technologies",
    src:"images/img_frame_teal_801.svg",
    description : "Freedom to choose your own technology stack based on project needs. Select any framework or library in the layers and tiers to create your own tech stack, e.g. Angular, Spring MVC, JPA, Oracle DB. The domain model is automatically knitted with the application code. The layers and tiers are smoothly integrated, irrespective of the underlying frameworks"
  },
  { title : "Numerous Tech Stacks and Capabilities",
    src : "images/img_frame_gray_802.svg",
    description : "For increased value addition, multiple tech stacks are being added.Commonly needed capabilities like Login, User Management, Parsers, Email Sending, API Integrations, and many more. We help continuous Application Modernization with our ever-evolving tech stacks."
  }]

const SignupBenefits = () => {

  const [indexToShow, setIndexToShow] = useState(0);

  const updateIndexToShow = (index) => {
    if(index){
    setTimeout(index);
    } else {
      const count = list.length;
      setIndexToShow((prevIndex) => {
        if(prevIndex < count-1){
          return prevIndex+1;
        }
        else if(prevIndex === count-1)
        return 0;
      })
    }
  }

  return (
    <>
      {list.map((x,idx) => {
        return(
          <>
            {indexToShow === idx && 
             <div key={idx} className={`bg-gray_901 flex flex-col items-center justify-evenly h-[100%] p-[32px] sm:px-[20px] rounded-bl-[0] rounded-br-[24px] rounded-tl-[0] rounded-tr-[24px] md:w-[100%] w-[auto]`}>
              <div className="flex flex-col gap-[30px] items-center justify-start self-stretch sm:w-[100%] w-[100%] h-[95%] slide-container">
                <Img
                  src={x?.src}
                  className="h-[350px] w-[400px]"
                  alt="frame"
                />
                <div className="flex flex-col gap-[20px] items-center justify-start sm:w-[100%] w-[557px]">
                  <Text
                    className="font-inter font-semibold text-center text-gray_50 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    {x?.title}
                  </Text>
                  <Text
                    className="font-inter font-normal leading-[150.00%] md:max-w-[100%] max-w-[557px] not-italic text-center text-gray_501"
                    variant="body2"
                  >
                    {x?.description}
                  </Text>
                </div>
              </div>
              <ComponentNavigator count={list.length} updateIndexToShow={updateIndexToShow} indexToShow={indexToShow}/>
            </div>
           }    
          </>
        )
      })}
    </>
  );
};

export default SignupBenefits;
