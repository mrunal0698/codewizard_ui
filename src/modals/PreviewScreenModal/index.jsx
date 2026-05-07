import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Text, Img} from "components";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
  height: '85%',
  bgcolor: 'blur',
  boxShadow: 24,
};

const PreviewScreenModal = (props) => {
  const { previewIcon,open,previewScreen } = props;
  return (
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="h-[100%] bg-gray_901 sm:w-[100%] md:w-[100%] flex flex-col items-start justify-start p-[16px] md:px-[20px] gap-4">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-between w-[100%]">
            <Text className="font-medium md:mt-[0] text-gray_50 text-left w-[auto]" as="h6" variant="h6">
              {previewScreen?.ScreenLayout}
            </Text>
            <Img src="images/img_close.svg" onClick={props.onRequestClose} alt="close"
              className="common-pointer md:ml-[0] rounded-[50%] w-[24px]"
            />
          </div>
          <div className="flex md:flex-1 items-start justify-start h-[100%] w-[100%] overflow-y-auto">
            <Img src={previewIcon} alt="imageSixtyTwo_Two"
              className="w-full object-cover rounded-[4px]"/>
          </div>              
        </div>
        </Box>
      </Modal>
  );
}

export default PreviewScreenModal;
