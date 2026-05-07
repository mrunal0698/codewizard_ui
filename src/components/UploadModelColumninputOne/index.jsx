import React from "react";

import { Input } from "components";

const UploadModelColumninputOne = (props) => {
  return (
    <>
      <div 
        className= {`${props.className} ${props?.activeInputValue == props?.name ? "border-gray_501": "border-gray_801"}`} onFocus={() => props?.updateInputValue(props?.name)}
      >
        <Input
          wrapClassName="w-[100%]"
          className="font-inter font-light p-[0] placeholder:text-gray_801 text-[12px] text-gray_300 text-left w-[100%]"
          name={props?.name}
          onChange={props?.onChangeInputsHandler}
          onBlur = {props?.validateForm}
          placeholder="Enter the version of model"
        ></Input>
      </div>
    </>
  );
};

UploadModelColumninputOne.defaultProps = {};

export default UploadModelColumninputOne;
