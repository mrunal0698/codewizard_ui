import React, { useState,useEffect } from "react";
import { Button, Img, Line, Text } from "components";

import AlertBoxModal from "modals/AlertBoxModal";
import { DeleteProject, GetCodewizardAPIs, GetUserProjects } from "shared/services";
import { useAuth0 } from "@auth0/auth0-react";
import helper from 'shared/helper';

const RenderAPIs = ({ rows, updateAppData, selectedAPI, showYourAPIs, setRows }) => {
  const [deletePopup,setDeletePopup] = useState(false);

  const { user } = useAuth0();

  const onClickedDeleteAPI = async () => {
    setDeletePopup(false);
    global.Busy(true);
    await DeleteProject(selectedAPI.ProjectId).then(async (res) => {
     if(res.status){
       await GetUserProjects(user?.email).then(res => {
        global.Busy(false);   
        if(res.status){
          const userAPis = res.values?.value.filter(x => !helper.IsNull(x.ProjectBackendApp));
          setRows(userAPis);
          global.AlertPopup("success", `${selectedAPI?.Name} Model deleted sucessfully`);
        }
      })
     }else {
       global.Busy(false);
       global.AlertPopup("error",`Can't delete ${selectedAPI?.Name} while it is associated with existing project`)
     }
    })
  }
  
  const openURLWindow = (url) => {
    window.open(url,"_blank")
  }
  
  return(
    <>
      <AlertBoxModal
        isOpen={deletePopup}
        onConfirm={onClickedDeleteAPI}
        confirmText="Delete"
        message={`Are you sure you want to delete ${selectedAPI?.ProjectName}?`}
        onClose={() => setDeletePopup(false)}
        className="p-9 gap-4 w-[460px]"
      />
      <div className="flex justify-start flex-wrap md:gap-[20px] gap-[24px] w-[100%] min-h-[115px]">
        {rows.map((x) => {
          return (
            <div className={`${selectedAPI?.ProjectId === x.ProjectId ? " border-teal_A400": "border-secondary"} bg-secondary relative flex flex-col gap-4 p-4 rounded-lg border-2 cursor-pointer w-[185px]`}
              key={x.ProjectId}
              onClick={() => updateAppData(x, "api")}
            >
              <Img 
                src="images/api_icon.svg"
                className="w-10"
              />

              {showYourAPIs && selectedAPI?.ProjectId === x.ProjectId && (
                <Img 
                  src="images/close_icon.svg"
                  className="w-4 absolute top-4 right-4"
                  onClick={() => setDeletePopup(true)}
                />
              )}
              
              <div className="flex justify-between items-center w-[100%]">
                <Button className={`${x.State === "running" ? "bg-[green]" : "bg-[red]" } text-core text-[10px] w-auto py-1 px-3 rounded-3xl text-xs`}>
                  {x.State || "unavailable"}
                </Button>
                <Text
                  className="font-inter font-light text-hint text-left w-[auto]"
                  variant="body3"
                >
                  {x?.Version}
                </Text>
              </div>
                <Text
                  className="font-inter font-medium text-core text-left w-[auto]"
                  variant="body3"
                >
                  {x.ProjectName}
                </Text>
                <Text
                  className="font-inter font-normal leading-[150.00%] not-italic text-hint text-left w-[100%]"
                  variant="body3"
                >
                  {x.Description}
                </Text>
                <a className="text-core text-xs border-b-2 border-core max-w-fit mt-auto mx-auto hover:text-primary hover:border-primary"
                 href={`${x.LiveURL}$metadata`} target="_blank" rel="noreferrer"
                >
                  View API URL
                </a>
            </div>
          )
        })}
      </div>
    </>
  )
} 

const SelectAPI = ({ appData, updateAppData }) => {
  const [inputvalue, setInputvalue] = useState("");
  const [rows,setRows] = useState([]);
  const [showYourAPIs, setShowYourAPIs] = useState(false);
  const [newRow,setNewRow] = useState([]);

  const { user } = useAuth0();

  const fetchData = async () => {
    const res = await GetCodewizardAPIs();
    if(res.status){
      setRows(res.values);
      setShowYourAPIs(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    if (rows?.length > 0) {
      if(helper.IsNullValue(inputvalue)) { setNewRow(rows); return };

      const input = (inputvalue || "").trim().toLowerCase();
      const _rows = rows.filter(x => {
        const name = x?.ProjectName?.toLowerCase();
        return name && (
          name.startsWith(input) || name.includes(input)
        );
      });
      setNewRow(_rows);
    } else {
      setNewRow([]);
    }
  }, [inputvalue, rows]);

  const onClickedYourAPIs = async () => {
    global.Busy(true);
    const res = await GetUserProjects(user?.email);
    global.Busy(false);
    if(res.status){
      const userAPis = res.values.value.filter(x => !helper.IsNull(x.ProjectBackendApp));
      setRows(userAPis);
      setShowYourAPIs(true);
    }else {
      setRows([]);
    }
  }

  return (
    <>
      <div className="flex flex-col items-start justify-start w-[100%] gap-4">
        <div className="flex gap-[4px] items-center justify-start w-[100%]">
            <Text className="font-medium text-core text-left shrink-0 w-[200px]" as="h6" variant="h6">
              <span className="font-normal not-italic text-hint pr-2" as="h6" variant="h6">
                Step 2:
              </span>
              Select API
            </Text>
            <Line className="bg-gray_804 h-[1px] w-full" />
        </div>

        <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
          <div className="flex flex-row gap-[16px] items-end justify-start rounded-[4px] self-stretch w-[auto]">
            <Button
              onClick={fetchData}
              className={`${ !showYourAPIs ? "text-primary border-b-[2px] border-solid border-blue_804" : "text-hint"
              } cursor-pointer font-medium py-[5px] rounded-[2px text-[15px] text-center w-[auto]`}
            >
              Code Wizard APIs
            </Button>
            <Button
              onClick={() =>  onClickedYourAPIs()}
              className={`${ showYourAPIs ? "text-primary border-b-[2px] border-solid border-blue_804" : "text-hint"
              } cursor-pointer font-medium py-[5px] text-[15px] text-center w-[auto]`}
            >
              Your APIs
            </Button>
          </div>
          <div className="bg-transparent flex items-center gap-[8px] border-b-[2px] border-solid border-tex-gray-50 w-[165px] hover:w-[220px] ease-in-out transition-[width]">
            <img src="images/ic_round-search.png" alt="search" className="h-[18px] w-[18px]"/>
            <input type="search" placeholder="Search" 
              className="border-0 bg-gray_900 text-gray-50 w-full bg-transparent text-[14px] p-0" name="searchbox"
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
            />
          </div>
        </div>

        {newRow.length > 0 ? (
          <RenderAPIs rows={newRow} updateAppData={updateAppData} selectedAPI={appData.api} showYourAPIs={showYourAPIs} 
             setRows={x => setRows(x)} />
        ) : (
          <div className="flex items-center justify-center w-[100%] h-[115px]">
            <Text
              className="cursor-pointer font-normal text-left text-subtle w-[auto]"
              variant="body2"
            >
              No API's found!
            </Text>
          </div>
        )}
      </div>
    </>
  );
};

export default SelectAPI;
