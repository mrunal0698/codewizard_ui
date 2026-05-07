import React from "react";

import { Button, Img } from "components";

const StepsTwentySixCheckmark = (props) => {
  return (
    <>
      {!!props?.checkmark ? (
        <Button className={props.className}>
          <Img src={props?.checkmark} className="" alt="checkmark" />
        </Button>
      ) : null}
    </>
  );
};

StepsTwentySixCheckmark.defaultProps = {};

export default StepsTwentySixCheckmark;
