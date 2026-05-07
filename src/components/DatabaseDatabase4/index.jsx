import React from "react";

import { Img, Text } from "components";

const DatabaseDatabase4 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_user_cyan_901.svg"
          className="h-[90px] w-[auto]"
          alt="user"
        />
        <Text
          className="font-inter font-semibold text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.dynamodb}
        </Text>
      </div>
    </>
  );
};

DatabaseDatabase4.defaultProps = { dynamodb: "DynamoDB" };

export default DatabaseDatabase4;
