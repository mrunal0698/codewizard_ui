import React from "react";
import ModalProvider from "react-modal";

import { Img, Text } from "components";

const NoInternetModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[38%]"
        overlayClassName="bg-black_900_7f fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-gray_901 flex flex-col items-center justify-start p-[45px] md:px-[20px] rounded-[4px] w-[100%]">
            <Img
              src="images/img_wifi.svg"
              className="h-[177px] w-[177px]"
              alt="wifi"
            />
            <Text
              className="font-semibold mt-[40px] text-gray_50 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              No internet connection
            </Text>
            <Text
              className="font-normal leading-[150.00%] mt-[16px] not-italic text-center text-gray_501"
              as="h6"
              variant="h6"
            >
              <>
                You are not connected to the internet. <br />
                Make sure you are connected to the internet.
              </>
            </Text>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default NoInternetModal;
