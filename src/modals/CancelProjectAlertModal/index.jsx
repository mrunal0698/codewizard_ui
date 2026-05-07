import React from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import { Text, Button} from "components";

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
const CancelProjectAlertModal = (props) => {
  return (
    <>
      <Modal
         open={props?.openCancelProjectModal}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="sm:!w-[100%] md:!w-[100%]"> 
        <div className="sm:w-[100%] md:w-[100%]">
          <div className="bg-gray_901 flex items-center justify-start p-[30px] md:px-[20px] rounded-[4px] w-[100%]">
            <div className="flex flex-col items-start justify-start mb-[8px] mt-[20px] w-[100%]">
              <Text
                className="font-semibold text-gray_50 text-center w-[100%]"
                as="h5"
                variant="h3"
              >
                Click YES to cancel your progress
              </Text>
              <div className="flex flex-row gap-[16px] items-center justify-center md:ml-[0] mt-[60px] md:w-[100%] w-[100%]">
                <Button 
                 onClick = {() => props?.updateOpenCancelProjectModal(false)}
                 className="border-[1px] border-solid border-teal_A400 cursor-pointer font-medium sm:px-[20px] md:px-[40px] px-[12px] py-[10px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[161px]">
                  Go Back
                </Button>
                <Button 
                  onClick={props?.cancelCreatingProject}
                  className="border-[2px] border-solid border-red_400 cursor-pointer font-medium sm:px-[20px] md:px-[40px] px-[60px] py-[10px] rounded-[4px] text-[14px] text-center text-red_400 w-[161px] hover:border-red_A700 hover:text-red_A700"
                 >
                  Yes
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

export default CancelProjectAlertModal;
