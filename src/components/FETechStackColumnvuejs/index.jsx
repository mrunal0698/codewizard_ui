import React from "react";

import { Img, Text } from "components";

const FETechStackColumnvuejs = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_arrowdown_teal_400.svg"
          className="h-[90px] w-[90px]"
          alt="arrowdown"
        />
        <Text
          className="font-inter font-semibold text-gray_50 text-left w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.vuejs}
        </Text>
      </div>
    </>
  );
};

FETechStackColumnvuejs.defaultProps = { vuejs: "Vue JS" };

export default FETechStackColumnvuejs;
