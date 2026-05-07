import React from "react";

import { Img, Text } from "components";

const ModelLibraryCategory10 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_download.svg"
          className="h-[90px] mt-[32px] w-[90px]"
          alt="download"
        />
        <Text
          className="font-inter font-semibold leading-[150.00%] mb-[8px] text-center text-gray_50 w-[100%]"
          as="h6"
          variant="h6"
        >
          {props?.trackingtreatme_One}
        </Text>
      </div>
    </>
  );
};

ModelLibraryCategory10.defaultProps = {
  trackingtreatme_One: "Tracking Treatment Results",
};

export default ModelLibraryCategory10;
