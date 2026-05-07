import React from "react";

import { Text } from "components";

const UploadModelColumnenterapplicatioOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex items-center justify-start w-[100%]">
          {!!props?.enterapplicatio_One ? (
            <Text
              className="font-inter font-light text-gray_801 text-left w-[auto]"
              variant="body3"
            >
              {props?.enterapplicatio_One}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

UploadModelColumnenterapplicatioOne.defaultProps = {};

export default UploadModelColumnenterapplicatioOne;
