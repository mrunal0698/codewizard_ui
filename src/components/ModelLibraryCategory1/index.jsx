import React from "react";

import { Img, Text } from "components";

const ModelLibraryCategory1 = (props) => {
  return (
    <>
      <div className={`${props.className}`} 
        // onClick={() => props?.setModelName(props?.onlineTeacher)}
        >
        <Img src="images/img_cut.svg" className="h-[90px] w-[90px]" alt="cut" />
        <Text
          className="font-inter font-semibold mb-[2px] text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.onlineteacher}
        </Text>
      </div>
    </>
  );
};

ModelLibraryCategory1.defaultProps = { onlineteacher: "Online Teacher" };

export default ModelLibraryCategory1;
