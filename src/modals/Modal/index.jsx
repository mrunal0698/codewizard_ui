import React from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'blur',
  boxShadow: 24,
};
const CWModal = (props) => {
  const {close, open, className, children } = props;
  return (
    <>
      <Modal
         open={open}
         onClose={close}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={`${className} bg-gray_901 overflow-y-auto sm:!w-[100%]`}> 
          <div className="flex items-center justify-start w-[100%] p-[20px]">
           {children}
         </div>
        </Box>
      </Modal>
    </>
  );
};

export default CWModal;

CWModal.defaultProps = {
 className : "",
 close : () => {}
}