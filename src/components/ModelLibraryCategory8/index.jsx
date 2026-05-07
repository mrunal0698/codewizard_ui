import React from "react";

import { Img, Text } from "components";

const ModelLibraryCategory8 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_drone.svg"
          className="h-[90px] mt-[24px] w-[90px]"
          alt="drone"
        />
        <Text
          className="font-inter font-semibold leading-[150.00%] text-center text-gray_50"
          as="h6"
          variant="h6"
        >
          {props?.dronesitesurvei_One}
        </Text>
      </div>
    </>
  );
};

ModelLibraryCategory8.defaultProps = {
  dronesitesurvei_One: (
    <>
      Drone Site <br />
      Surveillance
    </>
  ),
};

export default ModelLibraryCategory8;
