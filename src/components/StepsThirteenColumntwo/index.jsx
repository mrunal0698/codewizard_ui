import React from "react";

import { Text } from "components";

const StepsThirteenColumntwo = (props) => {
  return (
    <>
      <div className={props.className}>
        {!!props?.two ? (
          <Text
            className="font-inter font-normal not-italic text-gray_501 text-left w-[auto]"
            as="h6"
            variant="h6"
          >
            {props?.two}
          </Text>
        ) : null}
      </div>
    </>
  );
};

StepsThirteenColumntwo.defaultProps = {};

export default StepsThirteenColumntwo;
