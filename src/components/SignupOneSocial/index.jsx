import React from "react";

import { Img, Text } from "components";

const SignupOneSocial = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[12px] items-center justify-center self-stretch w-[auto]">
          <Img
            src="images/img_image38.png"
            className="h-[24px] md:h-[auto] object-cover w-[24px]"
            alt="imageThirtyEight"
          />
          <Text
            className="font-inter font-normal not-italic text-gray_300 text-left w-[auto]"
            as="h6"
            variant="h6"
          >
            {props?.text}
          </Text>
        </div>
      </div>
    </>
  );
};

SignupOneSocial.defaultProps = { text: "Signup with Google" };

export default SignupOneSocial;
