import React from "react";

import CapabilitiesSidemenu from "components/CapabilitiesSidemenu";
import { Text, Line, List, Button } from "components";
import CapabilitiesOneCapabilites from "components/CapabilitiesOneCapabilites";
import CapabilitiesOneColumnlocation from "components/CapabilitiesOneColumnlocation";
import CapabilitiesSelectedColumnclose from "components/CapabilitiesSelectedColumnclose";
import CapabilitiesOneColumnclose1 from "components/CapabilitiesOneColumnclose1";
import CapabilitiesColumnlock from "components/CapabilitiesColumnlock";
import CapabilitiesOneColumnsettings from "components/CapabilitiesOneColumnsettings";
import CapabilitiesOneColumnlocation1 from "components/CapabilitiesOneColumnlocation1";
import CapabilitiesOneColumnlightbulb from "components/CapabilitiesOneColumnlightbulb";
import CapabilitiesOneColumngroup from "components/CapabilitiesOneColumngroup";
import CapabilitiesOneColumngroup52986 from "components/CapabilitiesOneColumngroup52986";
import CapabilitiesOneColumncursor from "components/CapabilitiesOneColumncursor";

const CapabilitiesselectedOnePage = () => {
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between w-[100%]">
          <CapabilitiesSidemenu
            className="flex flex-col md:hidden justify-start md:px-[20px] w-[250px]"
            selectamodel="Select A Model"
            selectbackend="Select Back End"
            selectdatabase="Select Database"
            selectcapabilit_One="Select Capabilities"
            basicdetails="Basic Details"
            review="Review"
          />
          <div className="flex flex-1 flex-col items-start justify-start md:mt-[0] mt-[32px] md:px-[20px] w-[100%]">
            <div className="flex items-start justify-start max-w-[982px] w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_50 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Select Capabilities
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_501 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Choose the capabilities you want your project to have. You
                      can choose multiple capabilities.
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray_801 h-[1px] w-[100%]" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between w-[100%]">
              <List
                className="md:flex-1 flex-col gap-[24px] grid md:mt-[0] mt-[24px] md:w-[100%] w-[48%]"
                orientation="vertical"
              >
                <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-between w-[100%]">
                  <CapabilitiesOneCapabilites
                    className="bg-gray_901 flex sm:flex-1 flex-col h-[227px] items-center justify-center p-[41px] sm:px-[20px] md:px-[40px] rounded-[8px] sm:w-[100%] w-[227px]"
                    usermanagement="User Management"
                  />
                  <CapabilitiesOneColumnlocation
                    className="bg-gray_901 flex sm:flex-1 flex-col h-[227px] items-center justify-end py-[24px] rounded-[8px] sm:w-[100%] w-[227px]"
                    authentication="Authentication & Authorization [OAuth]"
                  />
                </div>
                <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-between w-[100%]">
                  <CapabilitiesSelectedColumnclose
                    className="bg-bluegray_906 border-[2px] border-solid border-teal_A400 flex sm:flex-1 flex-col h-[227px] items-center justify-end py-[24px] rounded-[8px] sm:w-[100%] w-[227px]"
                    authentication="Authentication & Authorization [Spring]"
                  />
                  <CapabilitiesOneColumnclose1
                    className="bg-gray_901 flex sm:flex-1 flex-col h-[227px] items-center justify-end py-[24px] rounded-[8px] sm:w-[100%] w-[227px]"
                    authentication="Authentication & Authorization [Auth0]"
                  />
                </div>
                <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-between w-[100%]">
                  <CapabilitiesColumnlock
                    className="bg-gray_901 flex sm:flex-1 flex-col h-[227px] items-center justify-end py-[24px] rounded-[8px] sm:w-[100%] w-[227px]"
                    authentication="Authentication & Authorization [Basic]"
                  />
                  <CapabilitiesOneColumnsettings
                    className="bg-gray_901 flex sm:flex-1 flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] sm:w-[100%] w-[227px]"
                    hazelcast="Hazelcast"
                  />
                </div>
                <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-between w-[100%]">
                  <CapabilitiesOneColumnlocation1
                    className="bg-gray_901 flex sm:flex-1 flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] sm:w-[100%] w-[227px]"
                    redis="Redis"
                  />
                  <CapabilitiesOneColumnlightbulb
                    className="bg-gray_901 flex sm:flex-1 flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] sm:w-[100%] w-[227px]"
                    dockercompose="Docker Compose"
                  />
                </div>
              </List>
              <div className="bg-gray_901 flex md:flex-1 items-center justify-start mb-[379px] p-[128px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[auto]">
                <Text
                  className="font-normal leading-[150.00%] my-[160px] not-italic text-center text-gray_501 w-[100%]"
                  as="h6"
                  variant="h6"
                >
                  Select a Capability to see it’s Features
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[24px] h-[478px] sm:h-[auto] items-start justify-start mt-[24px] sm:w-[100%] w-[478px]">
              <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-between w-[100%]">
                <CapabilitiesOneColumngroup
                  className="bg-gray_901 flex sm:flex-1 flex-col h-[227px] items-center justify-center p-[34px] sm:px-[20px] rounded-[8px] sm:w-[100%] w-[227px]"
                  dockerfile="Dockerfile"
                />
                <CapabilitiesOneColumngroup52986
                  className="bg-gray_901 flex sm:flex-1 flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] sm:w-[100%] w-[227px]"
                  iacforaws="IaC for AWS"
                />
              </div>
              <CapabilitiesOneColumncursor
                className="bg-gray_901 flex flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] sm:w-[100%] w-[227px]"
                razorpay="Razorpay"
              />
            </div>
            <div className="bg-gray_900 flex flex-col gap-[16px] h-[89px] md:h-[auto] items-start justify-start max-w-[982px] mt-[32px] w-[100%]">
              <Line className="bg-gray_801 h-[1px] w-[100%]" />
              <div className="flex items-start justify-start w-[100%]">
                <div className="flex flex-row gap-[12px] items-center justify-end w-[100%]">
                  <Button className="border-[1px] border-solid border-teal_A400 cursor-pointer flex-1 font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[100%]">
                    Previous
                  </Button>
                  <Button className="bg-gradient  cursor-pointer flex-1 font-medium px-[12px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_900 w-[100%]">
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

export default CapabilitiesselectedOnePage;
