import React, {useState} from "react";
import { Text, Button, Input} from "components";
import { useNavigate } from "react-router-dom";
import { SET_PROJECT_BASIC_DETAIL, SET_PROJECT_TYPE } from "store/slices/basicInformation.slice";
import { useDispatch } from "react-redux";
import AlertBoxModal from "modals/AlertBoxModal";
import Session from "shared/session";

const Component = (props) => {
  const { close, ownDesign, appDetails } = props;
  const [activeInputValue, setActiveInputValue] = useState("");
  const [projectDetal,setProjectDetail] = useState({});
  const [githubConnectAlert,setGithubConnectAlert] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateInputValue = (name) => {
    setActiveInputValue(name)
  }
  const onChangeInputHandler = (e) => {
     setProjectDetail( curDetail => {
           return {...curDetail,[e.target.name] : e.target.value}
     })
  }

  const createProject = async () => {
    setProjectDetail( curDetail => {
      return {...curDetail,projectType : appDetails?.value}
     })
    dispatch(SET_PROJECT_TYPE(appDetails.projectType));
    sessionStorage.setItem("project_type", appDetails.projectType);
    Session.Store("projectDetail", projectDetal, true);
    navigate(`/${appDetails.path}`);
  }

  return (
    <> 
      <AlertBoxModal 
        isOpen={githubConnectAlert?.status}
        message={githubConnectAlert?.message}
        onClose={() => setGithubConnectAlert({status:false})}
        onConfirm={() => navigate("/settings")}
        confirmText="Go To Settings"
        className="w-[450px]"
      />
      <div className="bg-gray_901 flex items-center justify-start p-[30px] md:px-[20px] rounded-[4px] w-[100%] ">
        <div className="flex flex-col items-start justify-start w-[100%] gap-[20px]">
          <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
            <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto] relative">
              <Text
                  className="font-semibold text-gray_300 text-left w-[auto] after:content-['*'] after:ml-0.5 after:text-red-500"
                  variant="body2"
              >
                  Project Name
              </Text>
              <Input
                  wrapClassName= {`common-pointer bg-gray_902 border-[1px] border-solid p-[12px] rounded-[4px] sm:w-[100%] w-[100%]`}
                  className="font-normal not-italic p-[0] placeholder:text-gray_801 border-[1px] text-[12px] text-gray_300 text-left sm:w-[100%] w-[100%] focus:border-gray_501"
                  name="ProjectName"
                  placeholder="Enter your Project Name"
                  onChangeHandler={onChangeInputHandler}
                  activeInputValue = {activeInputValue}
                  updateInputValue = {updateInputValue}
              />
            </div>
            <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto] relative">
              <Text
                  className="font-semibold text-gray_300 text-left w-[auto]"
                  variant="body2"
              >
                  <label htmlFor="Description">Description</label>
              </Text>
              <textarea
                  id="Description"
                  rows="4"
                  className={`block p-2.5 w-full text-sm text-gray_300 bg-gray_902 rounded-lg border-[1px] solid focus:border-gray_501 !font-inter !font-light p-[0] placeholder:text-gray_801 !text-[12px]`}
                  placeholder="Enter description of this project..."
                  name="Description"
                  onChange={onChangeInputHandler}
              />
            </div>        
          </div>
          <div className="flex flex-row gap-[16px] items-center justify-center mt-[40px] w-[100%]">
            <Button 
                onClick = {() => close(false)}
                className="border-[1px] border-solid border-teal_A400 cursor-pointer font-medium  py-[10px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[161px]">
                Cancel
            </Button>
            <Button 
                onClick={projectDetal.ProjectName ? createProject : null}
                className= {`${projectDetal.ProjectName ? "opacity-100" : "opacity-60 cursor-not-allowed"} bg-gradient text-gray_50 cursor-pointer font-medium px-[12px] py-[10px] rounded-[4px] text-[14px] text-center w-[161px]`}>
                Create
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component;