import React, { useEffect, useState } from "react";

import { Text, Img, Button, Input } from "components";
import { useAuth0 } from "@auth0/auth0-react";
import { GetGitHubCreds, UpdateGitHubCred } from "shared/services";
import { AddGithubAccount, RemoveGithubAccount } from "./childs";
import CWModal from "modals/Modal";

const Settings = () => {
  const [connectGithubModal,setConnectGithubModal] = useState(false);
  const [removeGithubModal,setRemoveGithubModal] =  useState(false);
  const [githubCredDetails,setGithubCredDetails] = useState([]);
  const [selectedGithubCred,setSelectedGithubCred] = useState({});
  const [renameGithubCredDetail,setRenameGithubCredDetail] = useState({});
  const [editedValue,setEditedValue] = useState();
  const { user } = useAuth0();

  useEffect(() => {
    (async _ => {
       global.Busy(true);
       await GetGitHubCreds(user?.email).then(res => {
        global.Busy(false);
        setGithubCredDetails(res?.values?.value);
       })
    })()
  },[])

  const updateConfirmRemoveGithubModalToShow = (flag,value) => {
    setRemoveGithubModal(flag);
    setSelectedGithubCred(value)
  }

  const onChangeInputHandler = (e) => {
    const { name, value } = e.target;
    setEditedValue( curDetail => {
      return {...curDetail,[name] : value}
   })
 }

  const renameGithubCred = async () => {
    global.Busy(true);
    const payload = {
      Name : editedValue?.PATName
    }
    const res = await UpdateGitHubCred(renameGithubCredDetail?.GitHubCredId,payload);
    setRenameGithubCredDetail({});
    if(res.status){
      global.AlertPopup("success","PAT Name updated successfully");
      await GetGitHubCreds(user?.email).then(res => {
        global.Busy(false);
        setGithubCredDetails(res?.values?.value);
      })
    }else {
      global.AlertPopup("error",res?.statusText);
    }
    global.Busy(false);
  }
  return (
    <>
        <CWModal open={connectGithubModal} className="w-[670px]">
          <AddGithubAccount close={() => setConnectGithubModal(false)} setGithubCredDetails={(x) => setGithubCredDetails(x)} />
        </CWModal>
        <CWModal open={removeGithubModal}>
          <RemoveGithubAccount selectedGithubCred={selectedGithubCred} close={() => setRemoveGithubModal(false)}
           setGithubCredDetails={(x) => setGithubCredDetails(x)}/>
        </CWModal>
        <div className="flex flex-1 flex-col items-center justify-start w-[100%] gap-4 py-[24px] overflow-x-auto">
          <div className="flex items-center justify-between sm:flex-col gap-2 w-[100%]">
            <Text
              className="font-normal not-italic text-gray_501 text-left w-[auto]"
              as="h6"
              variant="h6"
            >
              Manage Your Github Accounts Here
            </Text>
            <Button
              className="bg-teal_A400 cursor-pointer flex items-center justify-center font-medium text-[16px] text-gray_50 text-left w-[170px] px-[8px] py-[10px] rounded-[4px] w-[auto]"
              leftIcon={
                <Img
                  src="images/add.png"
                  className="mr-[8px]"
                  alt="plus"
                />
              }
              onClick={() => setConnectGithubModal(true)}
            >
                Add Account
            </Button>
          </div>
          {githubCredDetails.length > 0 ? (
            <div className="gap-[16px] grid md:grid-cols-1 grid-cols-2 justify-center w-[100%]">
              {githubCredDetails.map(x => {
                return(
                  <div className=" bg-gray_901 flex sm:flex-col flex-row sm:gap-[20px] px-3 py-5 items-center justify-between w-[100%] rounded-md" key={x.GitHubCredId}>
                    <div className="flex items-center justify-start w-[auto] gap-2">
                      <Img
                        src="images/img_image57.png"
                        className="h-[56px] md:h-[auto] rounded-[50%] w-[56px]"
                        alt="imageFiftySeven"
                      />
                      {renameGithubCredDetail?.GitHubCredId === x?.GitHubCredId ? (
                        <Input
                          wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid flex px-[12px] py-1 rounded-[4px] w-[100%] mr-3"
                          className="font-normal not-italic p-[0] placeholder:text-gray_801 text-[12px] text-gray_300 text-left w-[100%]"
                          name="PATName"
                          placeholder="Github PAT name"
                          defaultValue = {x?.Name}
                          onChangeHandler= {onChangeInputHandler}
                          suffix={
                              <Img
                                src='images/close.png'
                                className="cursor-pointer w-[16px] my-[auto] h-[16px]"
                                onClick={() => setRenameGithubCredDetail({})}
                              />
                          }
                        />
                      ) : (
                        <Text
                          className="font-normal not-italic text-gray_50 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          {x?.Name || x?.UserName}
                        </Text>
                      )}
                    </div>
                    <div className="flex gap-2 justify-end sm:justify-center items-center flex-wrap">
                      {renameGithubCredDetail?.GitHubCredId === x?.GitHubCredId ? (
                        <Button
                          className="bg-teal_A400 cursor-pointer flex items-center justify-center text-gray_50 py-2 rounded-[4px] w-[100px]"
                          onClick={() => renameGithubCred(x)}
                        >
                          Confirm
                        </Button>
                      ) : (
                        <Button
                        className="bg-teal_A400 cursor-pointer flex items-center justify-center text-gray_50 py-2 rounded-[4px] w-[100px]"
                        onClick={() => setRenameGithubCredDetail(x)}
                      >
                        Rename
                      </Button>
                      )}
                      <Button 
                        className="border-[1px] border-solid border-teal_A400 cursor-pointer font-medium py-[8px] rounded-[4px] text-[14px] text-center text-gray_50 w-[161px]"
                        onClick={() => updateConfirmRemoveGithubModalToShow(true,x)}
                      >
                        Remove Account
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <>
              <Img
                src="images/img_githubmark1.svg"
                className="h-[132px] mt-[149px] w-[auto]"
                alt="githubmarkOne"
              />
              <Text
                className="font-normal mt-[26px] not-italic text-gray_300 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                No Github Account Connected
              </Text>
              <Text
                className="font-normal mt-[9px] not-italic text-gray_501 text-left w-[auto]"
                variant="body2"
              >
                Connect a github account to commit a project
              </Text>
              <Button
                className="bg-teal_A400 cursor-pointer flex items-center justify-center min-w-[206px] mt-[32px] px-[20px] py-[16px] rounded-[4px] w-[auto]"
                leftIcon={
                  <Img
                    src="images/add.png"
                    className="mr-[8px]"
                    alt="plus"
                  />
                }
              >
                <div
                  className="font-medium text-[16px] text-gray_50 text-left"
                  onClick={() => setConnectGithubModal(true)}
                >
                  Connect Account
                </div>
              </Button>
            </>
          )}
        </div>
    </>
  );
};

export default Settings;
