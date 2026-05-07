import React from "react";

import { Img, Text } from "components";

const SignupOneSocial1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[12px] items-center justify-center self-stretch w-[auto]">
          <Img
            src="images/img_image39.png"
            className="h-[24px] md:h-[auto] object-cover w-[24px]"
            alt="imageThirtyNine"
          />
          <Text
            className="font-inter font-normal not-italic text-gray_300 text-left w-[auto]"
            as="h6"
            variant="h6"
          >
            {props?.text_One}
          </Text>
        </div>
      </div>
    </>
  );
};

SignupOneSocial1.defaultProps = { text_One: "Signup with Linkedin" };

export default SignupOneSocial1;
