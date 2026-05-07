import SvgIcon1 from "./icons/SvgIcon1";

function CodeWizard() {
 const details = [ 
  "Single template",
  "Spring-Odata, Postgres, Maven",
  "Model Library with few models",
  "Documentation",
  "Github integration, download code zip",
  "Discord code-wizard community support"]
return (
  <div className={`flex justify-start items-start flex-row self-stretch grow-0 shrink-0 basis-auto pt-[27.5px] pb-[150px] border-0 border-[rgba(255,255,255,0.5)] border-solid`}>
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

export default CodeWizard;
