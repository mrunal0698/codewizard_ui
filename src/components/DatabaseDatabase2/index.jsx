import React from "react";

import { Img, Text } from "components";

const DatabaseDatabase2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_fire.svg"
          className="h-[90px] w-[90px]"
          alt="fire"
        />
        <Text
          className="font-inter font-semibold text-gray_50 text-left w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.jdbc}
        </Text>
      </div>
    </>
  );
};

DatabaseDatabase2.defaultProps = { jdbc: "JDBC" };

export default DatabaseDatabase2;
