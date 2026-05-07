import React from "react";

import { Text, Button } from "components";
import { DeleteGithubCred, GetGitHubCreds } from "shared/services";
import { useAuth0 } from "@auth0/auth0-react";

const Component = (props) => {
  const { selectedGithubCred, close, setGithubCredDetails } = props;
  const { user } = useAuth0();

  const removeGithubCredHandler = async () => {
    close(false);
    global.Busy(true);
    await DeleteGithubCred(selectedGithubCred?.GitHubCredId).then(async (res) => {
      if(res.status){
        await GetGitHubCreds(user?.email).then(async (res) => {
          global.Busy(false)
          setGithubCredDetails(res?.values?.value);
        })
        close()
        global.AlertPopup("success","GitHub credential removed successfully")
      }else {
        global.Busy(false);
        global.AlertPopup("error",res?.statusText)
      }
    })
  }

  return (
    <div className="bg-gray_901 flex items-center justify-start p-[40px] md:px-[20px] rounded-[4px] w-[100%]">
      <div className="flex flex-col items-center justify-start w-[100%]">
        <Text
          className="font-semibold leading-[125.00%] text-center text-gray_50 w-[100%]"
          as="h3"
          variant="h3"
        >
          Are you sure you want to remove the account?
        </Text>
        <Text
          className="font-normal leading-[150.00%] mt-[16px] not-italic text-center text-gray_501 sm:w-[100%] w-[78%]"
          as="h6"
          variant="h6"
        >
          You’ll need to add an account before creating a new project.
        </Text>
        <div className="flex flex-row gap-[16px] items-center justify-center mt-[48px] md:w-[100%] w-[90%]">
          <Button 
            className="border-[1px] border-solid border-teal_A400 cursor-pointer font-medium py-[10px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[161px]"
            onClick={removeGithubCredHandler}
            >
            Confirm
          </Button>
          <Button 
            className="bg-gradient cursor-pointer font-medium px-[12px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_50 w-[161px]"
            onClick={close}
            >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Component;
