import React from "react";

import ModelLibrarySidemenu from "components/ModelLibrarySidemenu";
import { Text, Line, Button, Input, Img } from "components";
import { CloseSVG } from "../../assets/images";
import ModelLibraryCategory4 from "components/ModelLibraryCategory4";
import { useNavigate } from "react-router-dom";

const ModelLibrarysearchresultPage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between max-w-[1256px] mx-[auto] md:px-[20px] w-[100%]">
          <ModelLibrarySidemenu
            className="bg-gray_901 flex flex-col md:hidden justify-start w-[250px]"
            ramg="Ram G"
            email="ram@gmail.com"
          />
          <div className="flex flex-1 flex-col gap-[24px] items-start justify-start md:mt-[0] mt-[32px] w-[100%]">
            <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
              <div className="flex items-start justify-start max-w-[982px] w-[100%]">
                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-medium text-gray_50 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Model Library
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_501 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Choose Models from the existing library or add your own
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray_801 h-[1px] w-[100%]" />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <div className="border-[1px] border-gray_801 border-solid flex flex-row gap-[8px] items-center justify-start p-[6px] rounded-[4px] self-stretch w-[auto]">
                  <Button className="bg-gray_300 cursor-pointer font-medium min-w-[149px] px-[14px] py-[10px] rounded-[2px] text-[16px] text-center text-gray_900 w-[auto]">
                    Existing Models
                  </Button>
                  <div
                    className="common-pointer flex items-center justify-center px-[14px] py-[10px] rounded-[6px] self-stretch w-[auto]"
                    onClick={() => navigate("/modellibrarynotfoundone")}
                  >
                    <Text
                      className="font-normal not-italic text-gray_50 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Your Models
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-[16px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid flex p-[16px] rounded-[4px] sm:w-[100%] w-[53%]"
                    className="font-medium p-[0] placeholder:text-gray_300 text-[16px] text-gray_300 text-left w-[100%]"
                    name="searchbox"
                    placeholder="Customer Accounts"
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer ml-[35px] my-[auto]"
                          onClick={() => setInputvalue("")}
                          color="#dddddd"
                        />
                      ) : (
                        <Img
                          src="images/img_search.svg"
                          className="cursor-pointer ml-[35px] my-[auto]"
                          alt="search"
                        />
                      )
                    }
                  ></Input>
                  <Button
                    className="bg-teal_A400 cursor-pointer flex items-center justify-center min-w-[217px] px-[20px] py-[16px] rounded-[4px] w-[auto]"
                    leftIcon={
                      <Img
                        src="images/img_plus_gray_900.svg"
                        className="mr-[8px]"
                        alt="plus"
                      />
                    }
                  >
                    <div className="font-medium text-[16px] text-gray_900 text-left">
                      Upload New Model
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <ModelLibraryCategory4
              className="bg-gray_901 flex flex-col h-[227px] items-center justify-center p-[36px] sm:px-[20px] rounded-[8px] sm:w-[100%] w-[227px]"
              customeraccount_One="Customer Accounts"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelLibrarysearchresultPage;
