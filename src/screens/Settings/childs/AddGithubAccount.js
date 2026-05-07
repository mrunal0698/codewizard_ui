import React, { useState } from "react";
import { Text, Input, Button } from "components";
import { useAuth0 } from "@auth0/auth0-react";
import { GetGitHubCreds, UploadGithubCreds } from "shared/services";

const Component = (props) => {
  const { close, setGithubCredDetails } = props;
  const [activeInputValue, setActiveInputValue] = useState("");
  const [userGithubDetail,setUserGithubDetail] = useState({});
  const [error,setError] = useState("");
  const { user } = useAuth0();

  const updateInputValue = (name) => {
    setActiveInputValue(name)
  }
  const onChangeInputHandler = (e) => {
    const { name, value } = e.target;
    setError("");
    setUserGithubDetail( curDetail => {
      return {...curDetail,[name] : value}
   })
 }
  const onSubmitGithubDetail = async () => {
    if(userGithubDetail.AccessToken && userGithubDetail.PATName){
      const payload = {
        UserName: user?.email,
        Pat: userGithubDetail?.AccessToken,
        Name: userGithubDetail?.PATName
      };
      global.Busy(true);
      await UploadGithubCreds(payload).then(async (res) => {
        if(res.status){
          await GetGitHubCreds(user?.email).then(async (res) => {
            global.Busy(false)
            setGithubCredDetails(res?.values?.value);
          })
          close();
        }
        global.Busy(false);
      })
    }else {
      setError("Kindly ensure all fields are completed before proceeding")
    }
  }
  return (
     <div className="flex flex-col items-start justify-start px-[39px] py-[20px] md:p-[20px] rounded-[4px] w-[100%] gap-[32px]">
        <div className="flex flex-col gap-[32px] items-center justify-start md:w-[100%] w-[92%]">
        <Text
            className="font-medium text-gray_50 text-left w-[auto]"
            as="h4"
            variant="h4"
        >
            Connect With Github Account
        </Text>
        </div>
        <div className="flex flex-col gap-[8px] items-start justify-start mt-[20px] self-stretch sm:w-[100%] w-[auto]">
        <Text
            className="font-medium text-gray_300 text-left w-[auto]"
            variant="body2"
        >
            Personal Access Token
        </Text>
        <Input
            wrapClassName="bg-gray_902 border-[1px] border-solid px-[12px] py-[15px] rounded-[4px] w-[100%]"
            className="font-normal not-italic p-[0] placeholder:text-gray_801 text-[12px] text-gray_300 text-left w-[100%]"
            type="password"
            name="AccessToken"
            placeholder="Access token"
            onChangeHandler= {onChangeInputHandler}
            activeInputValue = {activeInputValue}
            updateInputValue = {updateInputValue}
            />
        </div>
        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
            <Text
            className="font-medium text-gray_300 text-left w-[auto]"
            variant="body2"
            >
            Name For PAT 
            </Text>
            <Input
            wrapClassName="bg-gray_902 border-[1px] border-solid px-[12px] py-[15px] rounded-[4px] w-[100%]"
            className="font-normal not-italic p-[0] placeholder:text-gray_801 text-[12px] text-gray_300 text-left w-[100%]"
            name="PATName"
            placeholder="Github PAT name"
            onChangeHandler= {onChangeInputHandler}
            activeInputValue = {activeInputValue}
            updateInputValue = {updateInputValue}
            />
        </div>
        <div className="flex flex-row gap-[16px] items-center justify-center w-[100%] relative">
            <Button 
              className="border-[1px] border-solid border-teal_A400 cursor-pointer font-medium py-[10px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[161px]"
              onClick={close}
            >
                Cancel
            </Button>
            <Button
              className="bg-gradient cursor-pointer font-medium px-[12px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_50 w-[161px]"
              onClick={onSubmitGithubDetail}
             >
               Proceed
            </Button>
            {error && 
              <Text
                className="font-normal not-italic text-left text-red_400 w-[auto] absolute top-[-20px] left-[auto] right-[auto]"
                variant="body3"
              >
                {error}
              </Text>}
        </div>
     </div>
   );
};

export default Component;
