import React from "react";

import { Text, Line, Button } from "components";
import FETechStackSelectedColumnglobe from "components/FETechStackSelectedColumnglobe";
import FETechStackColumngroup from "components/FETechStackColumngroup";
import FETechStackColumnarrowdown from "components/FETechStackColumnarrowdown";
import FETechStackColumngoogle from "components/FETechStackColumngoogle";
import FETechStackFe from "components/FETechStackFe";
import FETechStackColumnvuejs from "components/FETechStackColumnvuejs";

const FETechStackselectedOnePage = () => {
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-start mx-[auto] pb-[24px] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between w-[100%]">
          
          <div className="flex flex-1 flex-col gap-[41px] items-center justify-start md:mt-[0] mt-[32px] md:px-[20px] w-[100%]">
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
                        Select Front End Technology
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_501 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Choose the tech stack you want your project to build in
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray_801 h-[1px] w-[100%]" />
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[17px] items-start justify-between w-[100%]">
                <div className="flex md:flex-1 items-center justify-start md:mt-[0] mt-[24px] md:w-[100%] w-[48%]">
                  <div className="sm:gap-[20px] gap-[24px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                    <FETechStackSelectedColumnglobe
                      className="bg-bluegray_906 border-[2px] border-solid border-teal_A400 flex flex-1 flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]"
                      react="React"
                    />
                    <FETechStackColumngroup
                      className="bg-gray_901 flex flex-1 flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]"
                      openuiFive="Open UI5"
                    />
                    <FETechStackColumnarrowdown
                      className="bg-gray_901 flex flex-1 flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]"
                      htmlFive="HTML5"
                    />
                    <FETechStackColumngoogle
                      className="bg-gray_901 flex flex-1 flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]"
                      flutter="Flutter"
                    />
                    <FETechStackFe
                      className="bg-gray_901 flex flex-1 flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]"
                      angular="Angular"
                    />
                    <FETechStackColumnvuejs
                      className="bg-gray_901 flex flex-1 flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]"
                      vuejs="Vue JS"
                    />
                  </div>
                </div>
                <div className="bg-gray_901 flex md:flex-1 flex-col items-start justify-center mb-[128px] p-[24px] sm:px-[20px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold mt-[6px] text-gray_50 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    React
                  </Text>
                  <Text
                    className="font-normal leading-[150.00%] mt-[19px] not-italic text-gray_300 text-left"
                    as="h6"
                    variant="h6"
                  >
                    <>
                      Pharetra morbi libero id aliquam elit massa integer
                      tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar
                      ullamcorper sit dictumst ut eget a, elementum eu. Maecenas
                      est morbi mattis id in ac pellentesque ac.
                      <br />
                      Lectus id duis vitae porttitor enim gravida morbi.
                      <br />
                      Eu turpis posuere semper feugiat volutpat elit, ultrices
                      suspendisse. Auctor vel in vitae placerat.
                      <br />
                      Suspendisse maecenas ac donec scelerisque diam sed est
                      duis purus.
                    </>
                  </Text>
                  <Text
                    className="font-normal leading-[150.00%] mt-[12px] not-italic text-gray_300 text-left w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Elit nisi in eleifend sed nisi. Pulvinar at orci, proin
                    imperdiet commodo consectetur convallis risus. Sed
                    condimentum enim dignissim adipiscing faucibus consequat,
                    urna. Viverra purus et erat auctor aliquam.
                  </Text>
                  <Text
                    className="font-normal leading-[150.00%] mb-[46px] mt-[12px] not-italic text-gray_300 text-left"
                    as="h6"
                    variant="h6"
                  >
                    <>
                      Lectus id duis vitae porttitor enim gravida morbi.
                      <br />
                      Eu turpis posuere semper feugiat volutpat elit, ultrices
                      suspendisse. Auctor vel in vitae placerat.
                      <br />
                      Suspendisse maecenas ac donec scelerisque diam sed est
                      duis purus.
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-start justify-start max-w-[982px] w-[100%]">
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

export default FETechStackselectedOnePage;
