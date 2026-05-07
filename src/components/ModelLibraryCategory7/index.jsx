import React from "react";

import { Img, Text } from "components";

const ModelLibraryCategory7 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_assignment.svg"
          className="h-[90px] mt-[16px] w-[90px]"
          alt="assignment"
        />
        <Text
          className="font-inter font-semibold mb-[16px] text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.studentassignme_One}
        </Text>
      </div>
    </>
  );
};

ModelLibraryCategory7.defaultProps = {
  studentassignme_One: "Student Assignments",
};

export default ModelLibraryCategory7;
