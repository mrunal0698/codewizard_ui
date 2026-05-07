import React from "react";

import { Img, Text } from "components";

const DatabaseDatabase3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_location_light_green_601.svg"
          className="h-[90px] w-[90px]"
          alt="location"
        />
        <Text
          className="font-inter font-semibold text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.mongodb}
        </Text>
      </div>
    </>
  );
};

DatabaseDatabase3.defaultProps = { mongodb: "MongoDB" };

export default DatabaseDatabase3;
