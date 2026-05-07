import React from "react";

import { Img, Text } from "components";

const DatabaseDatabase = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_reply.svg"
          className="h-[90px] w-[90px]"
          alt="reply"
        />
        <Text
          className="font-inter font-semibold text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.mysql}
        </Text>
      </div>
    </>
  );
};

DatabaseDatabase.defaultProps = { mysql: "MySQL" };

export default DatabaseDatabase;
