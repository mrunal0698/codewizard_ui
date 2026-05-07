import React from "react";
import ModalProvider from "react-modal";

import { Img, Text, Button } from "components";
import UploadModelColumnenterapplicatioOne from "components/UploadModelColumnenterapplicatioOne";
import UploadModelColumninputOne from "components/UploadModelColumninputOne";

const UploadmodelTwoModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[75%]"
        overlayClassName="bg-black_900_7f fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-gray_901 flex items-center justify-start max-w-[960px] mx-[auto] my-[8px] p-[48px] md:px-[20px] w-[100%]">
            <div className="flex flex-col gap-[40px] items-center justify-start w-[100%]">
              <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between w-[100%]">
                <div className="border-[2px] border-gray_801 border-solid flex md:flex-1 flex-col gap-[23px] items-center justify-start p-[36px] sm:px-[20px] rounded-[4px] md:w-[100%] w-[49%]">
                  <div className="h-[195px] relative w-[52%]">
                    <div className="absolute bottom-[0] flex h-[183px] md:h-[195px] inset-x-[0] justify-end mx-[auto] w-[100%]">
                      <div className="bg-gray_902 h-[195px] mt-[auto] mx-[auto] rounded-[4px] w-[100%]"></div>
                      <div className="absolute bottom-[5%] flex flex-col gap-[19px] inset-x-[0] items-center justify-start mx-[auto] w-[78%]">
                        <div
                          className="bg-cover bg-no-repeat flex h-[96px] items-center justify-end p-[12px] md:w-[100%] w-[56%]"
                          style={{
                            backgroundImage: "url('images/img_group25.svg')",
                          }}
                        >
                          <Img
                            src="images/img_close_red_400.svg"
                            className="h-[34px] mt-[38px] rounded-[50%] w-[34px]"
                            alt="close"
                          />
                        </div>
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_50 text-left w-[auto]"
                            variant="body2"
                          >
                            model_name.filetype
                          </Text>
                          <Text
                            className="font-light text-gray_501 text-left w-[auto]"
                            variant="body3"
                          >
                            13 MB
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_close_gray_801.svg"
                      className="common-pointer absolute h-[24px] right-[0] rounded-[6px] top-[0] w-[auto]"
                      onClick={props.onRequestClose}
                      alt="close_One"
                    />
                  </div>
                  <Text
                    className="font-normal mb-[11px] not-italic text-center text-gray_300 w-[auto]"
                    variant="body2"
                  >
                    Couldn’t upload the file. Please try again
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-[20px] items-center justify-start md:w-[100%] w-[49%]">
                  <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                      <Text
                        className="font-semibold text-gray_300 text-left w-[auto]"
                        variant="body2"
                      >
                        Description
                      </Text>
                      <UploadModelColumnenterapplicatioOne className="bg-gray_902 border-[1px] border-gray_801 border-solid flex flex-col h-[96px] md:h-[auto] items-start justify-start px-[12px] py-[15px] rounded-[4px] sm:w-[100%] w-[420px]" />
                    </div>
                    <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                      <Text
                        className="font-semibold text-gray_300 text-left w-[auto]"
                        variant="body2"
                      >
                        Version
                      </Text>
                      <UploadModelColumninputOne className="bg-gray_902 border-[1px] border-gray_801 border-solid flex flex-col items-start justify-start px-[12px] py-[15px] rounded-[4px] sm:w-[100%] w-[420px]" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-gray_300 text-left w-[auto]"
                      variant="body2"
                    >
                      Industry
                    </Text>
                    <UploadModelColumninputOne className="bg-gray_902 border-[1px] border-gray_801 border-solid flex flex-col items-start justify-start px-[12px] py-[15px] rounded-[4px] sm:w-[100%] w-[420px]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[26px] items-center justify-center md:w-[100%] w-[41%]">
                <Button className="border-[1px] border-solid border-teal_A400 cursor-pointer font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[161px]">
                  Cancel
                </Button>
                <Button className="bg-teal_900 cursor-pointer font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_900 w-[161px]">
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default UploadmodelTwoModal;
