import React, { useEffect, useState } from "react";

import SettingsOneSidemenu from "components/SettingsOneSidemenu";
import SettingsOneSidebar from "components/SettingsOneSidebar";
import { Text, Line, Img, Button } from "components";
import ConnectGithubModal from "modals/ConnectGithubModal";
import { useAuth0 } from "@auth0/auth0-react";
import RemoveGtihubAccountModal from "modals/RemoveGithubAccountModal";
import { DeleteGithubCred, GetGitHubCreds } from "shared/services";

const SettingsOnePage = () => {
  const { user } = useAuth0();
  console.log(user)
  const [connectGithubModalToShow,setConnectGithubModalToShow] = useState(false);
  const [confirmRemoveGithubModalToShow,setConfirmRemoveGithubModalToShow] =  useState(false);
  const [githubCredDetails,setGithubCredDetails] = useState(null);
  const [userDetail,setUserDetail] = useState(user);
  useEffect(() => {
    (async _ => {
      const createdGithubCreds = await GetGitHubCreds(userDetail?.email);
      console.log(createdGithubCreds);
      setGithubCredDetails(createdGithubCreds?.data?.value[0]);
    })()
  },[connectGithubModalToShow])
  const updateConnectGithubModalToShow = (value) => {
    console.log(value);
    setConnectGithubModalToShow(value);
  }
  const updateConfirmRemoveGithubModalToShow = (value) => {
    setConfirmRemoveGithubModalToShow(value);
  }
  const removeGithubCredHandler = async (detail) => {
    const deleteGithubCredResponse = await DeleteGithubCred(detail?.GitHubCredId);
    console.log(deleteGithubCredResponse);
    const createdGithubCreds = await GetGitHubCreds(userDetail?.email);
      console.log(createdGithubCreds);
      setGithubCredDetails(createdGithubCreds?.data?.value[0]);
      setConfirmRemoveGithubModalToShow(false);
  }
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-start w-[100%]">
        <ConnectGithubModal
          connectGithubModalToShow={connectGithubModalToShow}
          updateConnectGithubModalToShow={updateConnectGithubModalToShow}
        />
        <RemoveGtihubAccountModal
          confirmRemoveGithubModalToShow={confirmRemoveGithubModalToShow}
          updateConfirmRemoveGithubModalToShow={updateConfirmRemoveGithubModalToShow}
          removeGithubCredHandler={removeGithubCredHandler}
          githubCredDetails={githubCredDetails}
        />
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start max-w-[1256px] md:px-[20px] w-[100%]">
          <SettingsOneSidemenu className="bg-gray_901 border-gray_801 border-r-[1px] border-solid flex flex-col md:hidden justify-start w-[72px]" />
          <SettingsOneSidebar className="bg-gray_901 flex flex-1 flex-col items-center justify-start p-[11px] w-[100%]" />
          <div className="flex flex-1 flex-col items-center justify-start md:ml-[0] ml-[24px] md:mt-[0] mt-[32px] w-[100%] gap-4">
            <div className="flex items-start justify-start max-w-[912px] w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_50 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Github Account
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_501 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Update your photo and personal details here.
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray_801 h-[1px] w-[100%]" />
              </div>
            </div>
            {githubCredDetails ? (
              <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start md:w-[100%]">
                <Img
                  src="images/img_image57.png"
                  className="h-[56px] md:h-[auto] rounded-[50%] w-[56px]"
                  alt="imageFiftySeven"
                />
                <Text
                  className="font-normal sm:ml-[0] ml-[8px] not-italic text-gray_50 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  {githubCredDetails?.UserName}
                </Text>
                <Button 
                 className="border-[1px] border-solid border-teal_A400 cursor-pointer font-medium sm:ml-[0] ml-[225px] sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[161px]"
                 onClick={() => updateConfirmRemoveGithubModalToShow(true)}
                 >
                  Remove Account
                </Button>
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
                      src="images/img_plus_gray_900.svg"
                      className="mr-[8px]"
                      alt="plus"
                    />
                  }
                >
                  <div
                    className="font-medium text-[16px] text-gray_900 text-left"
                    onClick={() => updateConnectGithubModalToShow(true)}
                  >
                    Connect Account
                  </div>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsOnePage;
