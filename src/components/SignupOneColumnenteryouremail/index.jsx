import React from "react";

import { Text,Input } from "components";

const SignupOneColumnenteryouremail = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex items-center justify-start self-stretch sm:w-[100%] w-[auto]">
          {/* {!!props?.enteryouremail ? (
            <Text
              className="font-inter font-light text-gray_801 text-left w-[auto]"
              variant="body3"
            >
              {props?.enteryouremail}
            </Text>
          ) : null} */}
           <Input
          wrapClassName="w-[100%]"
          className="font-inter font-light p-[0] placeholder:text-gray_801 text-[12px] text-gray_300 text-left w-[100%]"
          name={props?.name}
          onChange={props?.onChangeHandler}
          onBlur = {props?.validateForm}
          placeholder={`Enter your ${props?.name}`}
        ></Input>
        </div>
      </div>
    </>
  );
};

SignupOneColumnenteryouremail.defaultProps = {};

export default SignupOneColumnenteryouremail;
