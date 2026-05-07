import React, { useState } from "react";
import { Text, Img, Button } from "components";
import helper from '../../shared/helper'

const ProjectMiniCard = ({ index, projectDetail, updateModelUploader, updateSelectedProject, selectedProject }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <div
        className={`${
          selectedProject?.ProjectId === projectDetail?.ProjectId
            ? "bg-bluegray_906 border-teal_A400"
            : "bg-gray_901 border-none"
        } flex items-center justify-start md:w-[100%] w-[227px] mt-[24px] rounded cursor-pointer border-[2px] border-solid`}
        key={index}
        onClick={() => updateSelectedProject(projectDetail)}
      >
        <div className="flex flex-col items-start justify-start md:w-[100%] w-[227px] p-4">
              <Img
                src="images/img_globe_light_blue_300.svg"
                className="h-[56px] w-[56px] mx-auto"
                alt="springioiconOne"
              />
          <Text
            className="font-medium mt-[15px] text-center text-gray_50 w-[auto] mx-auto"
            as="h6"
            variant="h6"
          >
            {projectDetail?.ProjectName}
          </Text>
          <div className="flex flex-row items-start justify-between mt-[5px] md:w-[100%] w-[100%] gap-2">
            {/* <Img
              src="images/img_clock_gray_501.svg"
              className="h-[16px] w-[16px]"
              alt="clock"
            /> */}
            <Text
              className="font-light text-center text-gray_501 w-[auto]"
              variant="body3"
            >
              {helper.IsNullValue(projectDetail.Version) ? "v1" : projectDetail?.Version}
            </Text>
            {selectedProject?.ProjectId === projectDetail?.ProjectId && (
              <Button
                className="bg-teal_900 cursor-pointer font-inter font-normal not-italic px-[5px] py-[4px] rounded-[13px] text-[12px] text-center text-teal_A400 w-[auto] hover:bg-gradient hover:text-gray-900"
                onClick={() => updateModelUploader(true)}
              >
                Generate new version
              </Button>
            )}
          </div>
          <Text
            className="font-inter font-normal leading-[150.00%] mt-[10px] not-italic text-gray_501 text-left w-[100%]"
            variant="body2"
          >
            {!isReadMore && selectedProject?.ProjectId === projectDetail?.ProjectId ? (
              <>
                 ID : {projectDetail?.ProjectId}
                {projectDetail?.Description && (<span>{projectDetail?.Description} <br/> </span>)}
              </>
            ) : (
              projectDetail?.Description && (<span>{projectDetail?.Description?.slice(0, 10)}...</span>)
            )}
          </Text>
          {selectedProject?.ProjectId === projectDetail?.ProjectId &&
          <Text
            className="font-medium md:ml-[0] ml-[67px] mt-[5px] text-gray_300 text-left w-[auto]"
            variant="body3"
            onClick={toggleReadMore}
          >
            {isReadMore ? "Read More " : "Read Less"}
          </Text>}
        </div>
      </div>
    </>
  );
};

export default ProjectMiniCard;
