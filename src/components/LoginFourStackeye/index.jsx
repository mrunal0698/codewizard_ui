import React from "react";

import { Img, Input } from "components";

const LoginFourStackeye = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_eye.svg"
          className="absolute h-[34px] inset-y-[0] my-[auto] right-[25%] rounded-[50%] w-[34px]"
          alt="eye"
        />
        <div className="absolute flex sm:flex-col flex-row gap-[8px] h-[max-content] inset-[0] items-center justify-start m-[auto] self-stretch w-[auto]">
          <Img
            src="images/img_lock.svg"
            className="h-[24px] w-[24px]"
            alt="lock"
          />
          <Input
            wrapClassName="sm:w-[100%] w-[86%]"
            className="font-inter font-light p-[0] placeholder:text-gray_801 text-[12px] text-gray_801 text-left w-[100%]"
            name="group244"
            placeholder="Enter your password"
          ></Input>
        </div>
      </div>
    </>
  );
};

LoginFourStackeye.defaultProps = {};

export default LoginFourStackeye;
