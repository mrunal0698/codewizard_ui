import React from "react";

import ModelLibrarySidemenu from "components/ModelLibrarySidemenu";
import { Text, Line, Button, Input, Img } from "components";
import { CloseSVG } from "../../assets/images";
import ModelLibraryCategory from "components/ModelLibraryCategory";
import ModelLibraryCategory1 from "components/ModelLibraryCategory1";
import ModelLibraryOneCategory from "components/ModelLibraryOneCategory";
import ModelLibraryCategory3 from "components/ModelLibraryCategory3";
import ModelLibraryCategory4 from "components/ModelLibraryCategory4";
import ModelLibraryCategory5 from "components/ModelLibraryCategory5";
import ModelLibraryCategory6 from "components/ModelLibraryCategory6";
import ModelLibraryCategory7 from "components/ModelLibraryCategory7";
import ModelLibraryCategory8 from "components/ModelLibraryCategory8";
import ModelLibraryCategory9 from "components/ModelLibraryCategory9";
import ModelLibraryCategory10 from "components/ModelLibraryCategory10";

const ModelLibraryOnePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-start mx-[auto] pb-[24px] sm:pr-[20px] pr-[24px] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between max-w-[1256px] mb-[5px] mx-[auto] md:px-[20px] w-[100%]">
          <ModelLibrarySidemenu
            className="flex flex-col md:hidden justify-start w-[250px]"
            ramg="Ram G"
            email="ram@gmail.com"
          />
          <div className="flex flex-1 flex-col items-start justify-start md:mt-[0] mt-[32px] w-[100%]">
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
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between mt-[32px] w-[100%]">
              <div className="border-[1px] border-gray_801 border-solid flex flex-row gap-[8px] items-center justify-start p-[6px] rounded-[4px] self-stretch w-[auto]">
                <Button className="bg-gray_300 cursor-pointer font-medium min-w-[149px] px-[14px] py-[10px] rounded-[2px] text-[16px] text-center text-gray_900 w-[auto]">
                  Existing Models
                </Button>
                <div className="flex items-center justify-center px-[14px] py-[10px] rounded-[6px] self-stretch w-[auto]">
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
                  className="font-medium p-[0] placeholder:text-gray_801 text-[16px] text-gray_801 text-left w-[100%]"
                  name="searchbox"
                  placeholder="Search Models"
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer ml-[35px] my-[auto]"
                        onClick={() => setInputvalue("")}
                        color="#4e4e4e"
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
            <div className="md:gap-[20px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] mt-[24px] w-[100%]">
              <ModelLibraryCategory
                className="bg-gray_901 flex flex-1 flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]"
                productcatalog="Product Catalog"
              />
              <ModelLibraryCategory1
                className="bg-gray_901 flex flex-1 flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]"
                onlineteacher="Online Teacher"
              />
              <ModelLibraryOneCategory
                className="bg-bluegray_906 border-[2px] border-solid border-teal_A400 flex flex-1 flex-col h-[227px] items-center justify-center p-[42px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]"
                usermanagement="User Management"
              />
              <ModelLibraryCategory3
                className="bg-gray_901 flex flex-1 flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]"
                ecommerce="E-commerce"
              />
              <ModelLibraryCategory4
                className="bg-gray_901 flex flex-1 flex-col h-[227px] items-center justify-center p-[36px] sm:px-[20px] rounded-[8px] w-[100%]"
                customeraccount_One="Customer Accounts"
              />
              <ModelLibraryCategory5
                className="bg-gray_901 flex flex-1 flex-col h-[227px] items-center justify-center p-[13px] rounded-[8px] w-[100%]"
                customersandpay_One="Customers and Payments"
              />
              <ModelLibraryCategory6
                className="bg-gray_901 flex flex-1 flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]"
                travelertrips="Traveler Trips"
              />
              <ModelLibraryCategory7
                className="bg-gray_901 flex flex-1 flex-col h-[227px] items-center justify-center p-[30px] sm:px-[20px] rounded-[8px] w-[100%]"
                studentassignme_One="Student Assignments"
              />
            </div>
            <div className="gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start mt-[24px] md:w-[100%] w-[75%]">
              <ModelLibraryCategory8
                className="bg-gray_901 flex flex-col h-[227px] items-center justify-end py-[22px] rounded-[8px] sm:w-[100%] w-[227px]"
                dronesitesurvei_One={
                  <>
                    Drone Site <br />
                    Surveillance
                  </>
                }
              />
              <ModelLibraryCategory9
                className="bg-gray_901 flex flex-col h-[227px] items-center justify-center p-[31px] sm:px-[20px] rounded-[8px] sm:w-[100%] w-[227px]"
                logistics="Logistics"
              />
              <ModelLibraryCategory10
                className="bg-gray_901 flex flex-col h-[227px] items-center justify-center p-[14px] rounded-[8px] sm:w-[100%] w-[227px]"
                trackingtreatme_One="Tracking Treatment Results"
              />
            </div>
            <div className="flex flex-col gap-[16px] items-start justify-start max-w-[982px] mt-[40px] w-[100%]">
              <Line className="bg-gray_801 h-[1px] w-[100%]" />
              <div className="flex items-start justify-start w-[100%]">
                <div className="flex items-center justify-end w-[100%]">
                  <div className="flex flex-row gap-[8px] items-start justify-start self-stretch w-[auto]">
                    <Img
                      src="images/img_download_teal_a400.svg"
                      className="h-[24px] w-[24px]"
                      alt="download_One"
                    />
                    <Text
                      className="font-medium text-left text-teal_A400 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Download Model
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelLibraryOnePage;
