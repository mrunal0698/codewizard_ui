import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Text, Img,Button } from "components";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '65%',
  height: '75%',
  bgcolor: 'blur',
  boxShadow: 24,
};

const FETemplateselectedModal = (props) => {

  return (
    <div>
      <Modal
        open={props?.feSelectedScreenToRender}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="h-[100%] bg-gray_901 overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="flex items-start justify-start p-[16px] md:px-[20px] w-[100%]">
            <div className="flex flex-col items-start justify-start md:w-[100%] w-[100%]">
              <div className="flex sm:flex-col flex-row md:gap-[20px] items-start justify-between w-[100%]">
                <div className='flex items-center justify-between gap-2'>
                <Text
                  className="font-medium md:mt-[0] text-gray_50 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Selected Screens
                </Text>
                <Text
                  className="font-normal not-italic text-gray_501 text-left w-[auto]"
                  variant="body2"
                >
                  ({props?.addedList.length})
                </Text>
                </div>
                <div className='flex items-center justify-between gap-4'>
                {/* <Button 
                 onClick = {props?.deleteAllScreen}
                 className="border-[1px] border-solid border-teal_A400 cursor-pointer font-medium min-w-[162px] sm:px-[20px] px-[24px] py-[8px] rounded-[4px] text-[12px] text-center text-teal_A400 w-[auto]">
                  Remove All Screens
                </Button> */}
                <Img
                  src="images/img_close.svg"
                  className="common-pointer md:ml-[0] rounded-[50%] w-[24px]"
                  onClick={props.onRequestClose}
                  alt="close"
                />
                </div>
              </div>
              <div className="flex md:flex-1 items-center justify-start md:mt-[0] mt-[24px] md:w-[100%] w-[100%] ">
            <div className="sm:gap-[20px] gap-[24px] grid sm:grid-cols-1 grid-cols-4 justify-center min-h-[auto] w-[100%] ">
              {props?.addedList.map((item, index) => {
                return (
                  <>
                    <div className="flex flex-col items-center w-[100%]" key={index}>
                      <div
                        className={
                          props?.addedList?.find(elem => elem?.FeScreenId === item?.FeScreenId)  ||
                          props?.selectedScreen.FeScreenId === item?.FeScreenId
                          ? "bg-gray_901 flex items-center justify-center h-[108px] relative rounded-[4px] w-[175px]"
                          : "bg-gray_901 flex h-[108px] items-center justify-start p-[8px] rounded-[4px] w-[175px]"
                        }
                        key={index}
                      >
                        <Img
                          src={item?.IconTempScreen}
                          className="h-[91px] m-[auto] object-cover rounded-[4px] w-[92%]"
                          alt="imageSixtyTwo_Two"
                        />
                        
                        {props?.addedList?.find(elem => elem?.FeScreenId === item?.FeScreenId)  ? (
                          <div className="absolute bg-gray_900_66 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[44px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[181px]">
                            <Img
                              src="images/img_close_teal_a400.svg"
                              className="cursor-pointer h-[32px] w-[32px]"
                              alt="close"
                              onClick={() =>
                                props?.onRemoveScreen(item)
                              }
                            />
                          </div>)
                         : (
                          false
                        )}
                      </div>
                      <Text
                        className="font-normal not-italic text-gray_300 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        {item.ScreenLayout}
                      </Text>
                    </div>
                  </>
                );
              })}
            </div>
          </div>              
            </div>
          </div>
        </div>
        </Box>
      </Modal>
    </div>
  );
}

export default FETemplateselectedModal;