import React from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import { Text, Button} from "components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CLEAR_ALL_FRONTENDAPP_DETAIL } from "store/slices/frontend.slice";
import { useSelector } from "react-redux";
import { CLEAR_ALL_BACKENDAPP_DETAIL } from "store/slices/backend.slice";
import { CLEAR_ALL_FULLSTACKAPP_DETAIL } from "store/slices/fullstack.slice";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '35%',
  height: '30%',
  bgcolor: 'blur',
  boxShadow: 24,
};
const ProjectCreatedAlertModal = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const project_type = useSelector(store => store.basicInformation.projectType);
  const navigateToHome = () => {
    if(project_type === "Front End")
     dispatch(CLEAR_ALL_FRONTENDAPP_DETAIL());
  else if(project_type === "Back End")
     dispatch(CLEAR_ALL_BACKENDAPP_DETAIL());
  else
    dispatch(CLEAR_ALL_FULLSTACKAPP_DETAIL());
    props?.updateProjectCreatedAlertModal(false);  
    navigate(`/our-home`);
  }
  return (
    <>
      <Modal
         open={props?.projectCreatedAlertModal}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="sm:!w-[100%] md:!w-[100%]"> 
        <div className="sm:w-[100%] md:w-[100%]">
          <div className="bg-gray_901 flex items-center justify-start p-[30px] md:px-[20px] rounded-[4px] w-[100%]">
            <div className="flex flex-col items-start justify-start mb-[8px] mt-[20px] w-[100%]">
              <Text
                className="font-semibold text-gray_50 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                oops! something went wrong...
              </Text>
              <div className="flex flex-row gap-[16px] items-center justify-center md:ml-[0] mt-[60px] md:w-[100%] w-[100%]">
                <Button 
                 onClick={navigateToHome}
                 className="border-[1px] border-solid border-teal_A400 cursor-pointer font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[161px]">
                  Exit
                </Button>
                <Button 
                  onClick = {() => props?.updateProjectCreatedAlertModal(false)}
                  className= {`bg-gradient cursor-pointer font-medium px-[12px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_900 w-[161px]`}>
                  Retry
                </Button>
              </div>
            </div>
          </div>
        </div>
        </Box>
      </Modal>
    </>
  );
};

export default ProjectCreatedAlertModal;
