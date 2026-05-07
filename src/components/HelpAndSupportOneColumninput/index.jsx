import React from "react";

import { Input } from "components";

const HelpAndSupportOneColumninput = (props) => {
  return (
    <>
      <div className={props.className}>
        <Input
          wrapClassName="w-[100%]"
          className="font-inter font-light p-[0] placeholder:text-gray_801 text-[12px] text-gray_300 text-left w-[100%]"
          name={props?.name}
          onChange={props?.onChangeHandler}
          onBlur = {props?.validateForm}
          placeholder="Enter your full name"
        ></Input>
      </div>
    </>
  );
};

HelpAndSupportOneColumninput.defaultProps = {};

export default HelpAndSupportOneColumninput;
