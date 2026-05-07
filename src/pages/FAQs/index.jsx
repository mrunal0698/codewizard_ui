import React from "react";

import HelpAndSupportOneSidemenu from "components/HelpAndSupportOneSidemenu";
import { Text, Line } from "components";

const FAQsPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-start mx-[auto] pb-[24px] sm:pr-[20px] pr-[24px] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between max-w-[1256px] mb-[11px] mx-[auto] md:px-[20px] w-[100%]">
          <HelpAndSupportOneSidemenu
            className="bg-gray_901 flex md:flex-1 flex-col md:hidden items-end justify-start mb-[780px] pl-[12px] py-[12px] md:w-[100%] w-[auto]"
            ramg="Ram G"
            email="ram@gmail.com"
          />
          <div className="flex md:flex-1 flex-col md:gap-[40px] gap-[64px] items-end justify-start md:mt-[0] mt-[32px] md:w-[100%] w-[79%]">
            <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
              <div className="flex items-start justify-start max-w-[912px] w-[100%]">
                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[100%]">
                    <div className="flex items-start justify-start w-[100%]">
                      <Text
                        className="font-medium text-gray_50 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Frequently Asked Questions{" "}
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray_801 h-[1px] w-[100%]" />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                <div className="flex flex-col items-start justify-start pb-[5px] self-stretch w-[auto]">
                  <Text
                    className="border-b-[1px] border-bluegray_906 border-solid font-semibold pb-[17.59px] sm:pr-[20px] md:pr-[40px] pr-[72.63px] pt-[16px] text-left text-teal_A402 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Title 1
                  </Text>
                  <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="border-b-[1px] border-bluegray_906 border-solid font-normal not-italic pb-[17.59px] pr-[128.63px] sm:pr-[20px] md:pr-[40px] pt-[17px] text-gray_501 text-left w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      Title 2
                    </Text>
                    <Text
                      className="border-b-[1px] border-bluegray_906 border-solid font-normal not-italic pb-[17.59px] pr-[136.63px] sm:pr-[20px] md:pr-[40px] pt-[17px] text-gray_501 text-left w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      Title 3
                    </Text>
                    <Text
                      className="border-b-[1px] border-bluegray_906 border-solid font-normal not-italic pb-[17.59px] sm:pr-[20px] md:pr-[40px] pr-[86.63px] pt-[17px] text-gray_501 text-left w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      Title 4
                    </Text>
                    <div className="flex items-start justify-start pb-[17.59px] sm:pr-[20px] md:pr-[40px] pr-[70.63px] pt-[17px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_501 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Title 5
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[32px] items-start justify-start max-w-[733px] w-[100%]">
                  <Text
                    className="font-semibold text-gray_50 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Title 1
                  </Text>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_300 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Aliqua id fugiat nostrud irure ex duis ea quis id?
                    </Text>
                    <Text
                      className="font-normal leading-[150.00%] not-italic text-gray_501 text-left"
                      as="h6"
                      variant="h6"
                    >
                      <>
                        Nulla Lorem mollit cupidatat irure. Laborum magna nulla
                        duis ullamco cillum dolor. Voluptate exercitation
                        incididunt aliquip deserunt reprehenderit elit laborum.
                        <br />
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis
                        ad et. Sunt qui esse pariatur duis deserunt mollit
                        dolore cillum minim tempor enim. Elit aute irure tempor
                        cupidatat incididunt sint deserunt ut voluptate aute id
                        deserunt nisi.
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Text
                      className="font-medium leading-[150.00%] md:max-w-[100%] max-w-[733px] text-gray_300 text-left"
                      as="h4"
                      variant="h4"
                    >
                      Sunt qui esse pariatur duis deserunt mollit dolore cillum
                      minim temporium oziva enim ?
                    </Text>
                    <Text
                      className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[733px] not-italic text-gray_501 text-left"
                      as="h6"
                      variant="h6"
                    >
                      Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                      et. Sunt qui esse pariatur duis deserunt mollit dolore
                      cillum minim tempor enim. Elit aute irure tempor cupidatat
                      incididunt sint deserunt ut voluptate aute id deserunt
                      nisi.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_300 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Nulla Lorem mollit cupidatat irure?
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_501 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Elit aute irure tempor cupidatat incididunt sint deserunt
                      ut voluptate aute id deserunt nisi.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Text
                      className="font-medium leading-[150.00%] md:max-w-[100%] max-w-[733px] text-gray_300 text-left"
                      as="h4"
                      variant="h4"
                    >
                      Voluptate exercitation incididunt aliquip deserunt
                      reprehenderit elit laborum?
                    </Text>
                    <Text
                      className="font-normal leading-[150.00%] not-italic text-gray_501 text-left"
                      as="h6"
                      variant="h6"
                    ></Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[32px] items-start justify-start max-w-[733px] w-[100%]">
              <Text
                className="font-semibold text-gray_50 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Title 2
              </Text>
              <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                <Text
                  className="font-medium text-gray_300 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Aliqua id fugiat nostrud irure ex duis ea quis id?
                </Text>
                <Text
                  className="font-normal leading-[150.00%] not-italic text-gray_501 text-left"
                  as="h6"
                  variant="h6"
                >
                  <>
                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                    ullamco cillum dolor. Voluptate exercitation incididunt
                    aliquip deserunt reprehenderit elit laborum.
                    <br />
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                    et. Sunt qui esse pariatur duis deserunt mollit dolore
                    cillum minim tempor enim. Elit aute irure tempor cupidatat
                    incididunt sint deserunt ut voluptate aute id deserunt nisi.
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                <Text
                  className="font-medium leading-[150.00%] md:max-w-[100%] max-w-[733px] text-gray_300 text-left"
                  as="h4"
                  variant="h4"
                >
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim temporium oziva enim ?
                </Text>
                <Text
                  className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[733px] not-italic text-gray_501 text-left"
                  as="h6"
                  variant="h6"
                >
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi.
                </Text>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                <Text
                  className="font-medium text-gray_300 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Nulla Lorem mollit cupidatat irure?
                </Text>
                <Text
                  className="font-normal not-italic text-gray_501 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Elit aute irure tempor cupidatat incididunt sint deserunt ut
                  voluptate aute id deserunt nisi.
                </Text>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                <Text
                  className="font-medium leading-[150.00%] md:max-w-[100%] max-w-[733px] text-gray_300 text-left"
                  as="h4"
                  variant="h4"
                >
                  Voluptate exercitation incididunt aliquip deserunt
                  reprehenderit elit laborum?
                </Text>
                <Text
                  className="font-normal leading-[150.00%] not-italic text-gray_501 text-left"
                  as="h6"
                  variant="h6"
                ></Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQsPage;
