import React from "react";

import { Text } from "components";

const StepsThirteenStepper = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-teal_A400 border-[1px] border-solid border-teal_A400 flex h-[32px] md:h-[auto] items-center justify-center px-[16px] py-[8px] rounded-[50%] w-[32px]">
          <Text
            className="font-inter font-semibold text-gray_900 text-left w-[auto]"
            as="h6"
            variant="h6"
          >
            {props?.one}
          </Text>
        </div>
      </div>
    </>
  );
};

StepsThirteenStepper.defaultProps = { one: "1" };

export default StepsThirteenStepper;
