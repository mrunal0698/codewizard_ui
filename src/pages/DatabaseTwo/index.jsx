import React from "react";

import DatabaseTwoSidemenu from "components/DatabaseTwoSidemenu";
import { Text, Line, Button } from "components";
import DatabaseDatabase from "components/DatabaseDatabase";
import DatabaseDatabase1 from "components/DatabaseDatabase1";
import DatabaseDatabase2 from "components/DatabaseDatabase2";
import DatabaseDatabase3 from "components/DatabaseDatabase3";
import DatabaseDatabase4 from "components/DatabaseDatabase4";

const DatabaseTwoPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between w-[100%]">
          <DatabaseTwoSidemenu
            className="flex flex-col md:hidden justify-start md:px-[20px] w-[250px]"
            selectamodel="Select A Model"
            selectfrontend="Select Front End"
            selectscreen="Select Screen"
            selectbackend="Select Back End"
            selectdatabase="Select Database"
            selectcapabilit_One="Select Capabilities"
            basicdetails="Basic Details"
            review="Review"
          />
          <div className="flex flex-1 flex-col gap-[32px] items-center justify-start md:mt-[0] mt-[32px] md:px-[20px] w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex items-start justify-start max-w-[982px] w-[100%]">
                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-medium text-gray_50 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Select Database
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_501 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Choose the database you want your project to build in
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray_801 h-[1px] w-[100%]" />
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[24px] items-start justify-start md:mt-[0] mt-[24px] md:w-[100%] w-[48%]">
                  <div className="flex h-[478px] sm:h-[auto] items-center justify-start sm:w-[100%] w-[478px]">
                    <div className="sm:gap-[20px] gap-[24px] grid sm:grid-cols-1 grid-cols-2 h-[478px] justify-center min-h-[auto] w-[478px]">
                      <DatabaseDatabase
                        className="bg-gray_901 flex flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]"
                        mysql="MySQL"
                      />
                      <DatabaseDatabase1
                        className="bg-gray_901 flex flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]"
                        postgresql="PostgreSQL"
                      />
                      <DatabaseDatabase2
                        className="bg-gray_901 flex flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]"
                        jdbc="JDBC"
                      />
                      <DatabaseDatabase3
                        className="bg-gray_901 flex flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]"
                        mongodb="MongoDB"
                      />
                    </div>
                  </div>
                  <DatabaseDatabase4
                    className="bg-gray_901 flex flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] sm:w-[100%] w-[227px]"
                    dynamodb="DynamoDB"
                  />
                </div>
                <div className="bg-gray_901 flex md:flex-1 items-center justify-start mb-[128px] p-[128px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-normal leading-[150.00%] my-[160px] not-italic text-center text-gray_501 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Select a Database to see it’s Features
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray_900 flex flex-col gap-[16px] h-[89px] md:h-[auto] items-start justify-start max-w-[982px] w-[100%]">
              <Line className="bg-gray_801 h-[1px] w-[100%]" />
              <div className="flex items-start justify-start w-[100%]">
                <div className="flex flex-row gap-[12px] items-center justify-end w-[100%]">
                  <Button className="border-[1px] border-solid border-teal_A400 cursor-pointer flex-1 font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[100%]">
                    Previous
                  </Button>
                  <Button className="bg-teal_900 cursor-pointer flex-1 font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_900 w-[100%]">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatabaseTwoPage;
