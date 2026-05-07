import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Button } from "components";

const StartProjectTwoModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[38%]"
        overlayClassName="bg-black_900_7f fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-gray_901 flex items-center justify-start p-[48px] md:px-[20px] rounded-[4px] w-[100%]">
            <div className="flex flex-col items-start justify-start mb-[17px] mt-[20px] w-[100%]">
              <Text
                className="font-semibold text-gray_50 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                What do you want to build today?
              </Text>
              <div className="flex flex-row gap-[8px] items-start justify-start mt-[25px] md:w-[100%] w-[40%]">
                <Img
                  src="images/img_settings_gray_300_20x20.svg"
                  className="h-[20px] w-[20px]"
                  alt="settings"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Front End Only
                </Text>
              </div>
              <div className="flex flex-row gap-[8px] items-start justify-start mt-[20px] md:w-[100%] w-[39%]">
                <Img
                  src="images/img_settings_gray_300_20x20.svg"
                  className="h-[20px] w-[20px]"
                  alt="settings_One"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Back End Only
                </Text>
              </div>
              <div className="flex flex-row gap-[8px] items-center justify-start mt-[19px] md:w-[100%] w-[72%]">
                <Img
                  src="images/img_settings_gray_300_20x20.svg"
                  className="h-[20px] w-[20px]"
                  alt="settings_Two"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Both Front End and Back End
                </Text>
              </div>
              <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[25px] mt-[74px] md:w-[100%] w-[88%]">
                <Button className="border-[1px] border-solid border-teal_A400 cursor-pointer font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[161px]">
                  Cancel
                </Button>
                <Button className="bg-gradient  cursor-pointer font-medium px-[12px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_900 w-[161px]">
                  Proceed
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default StartProjectTwoModal;
