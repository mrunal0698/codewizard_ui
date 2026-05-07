import { useCallback, useState, forwardRef } from "react";
import SvgIcon1 from "./icons/SvgIcon1";

function DeveloperDashboard() {
  const details = [ 
    "Multiple templates - from Seasoned Developers, Following Best Practices in the Industry",   
    "Spring-Odata, Postgres, Maven",   
    "Model Library with multiple models",    
    "Support for Mysql, Gradle, Spring-Security &amp; JBoss",   
    "Support from Dev Team",  
    "Documentation",   
    "Deploy on cloud",   
    "Github integration, download code zip"]
  return (
    <div className={`flex justify-start items-start flex-row self-stretch grow-0 shrink-0 basis-auto pt-[27.5px] border-0 border-[rgba(255,255,255,0.5)] border-solid`}>
      <div className={`flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto w-[100%] gap-3`}>
        {details.map((item) => { 
          return(
        <div className="flex">
        <SvgIcon1 className="w-8 h-8 text-[rgba(244,189,0,1)] flex grow-0 shrink-0 basis-auto" />
        <p className={`[font-family:Poppins] text-xl font-medium text-left leading-[150%] text-[rgba(224,224,224,1)] grow-0 shrink basis-auto ml-2.5`}>
        {item}</p>
        </div>
          )
        })}
      </div>
    </div>
  );
}

export default DeveloperDashboard;
