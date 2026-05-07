import React from "react";

import { Img, Text } from "components";

const DatabaseDatabase1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_location_black_900_90x90.svg"
          className="h-[90px] w-[90px]"
          alt="location"
        />
        <Text
          className="font-inter font-semibold text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.postgresql}
        </Text>
      </div>
    </>
  );
};

DatabaseDatabase1.defaultProps = { postgresql: "PostgreSQL" };

export default DatabaseDatabase1;
