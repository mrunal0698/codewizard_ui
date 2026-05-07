import React from "react";

import { Img, Text } from "components";

const ModelLibraryCategory4 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_group52991.svg"
          className="h-[90px] mt-[10px] w-[auto]"
          alt="group52991"
        />
        <Text
          className="font-inter font-semibold mb-[11px] text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.customeraccount_One}
        </Text>
      </div>
    </>
  );
};

ModelLibraryCategory4.defaultProps = {
  customeraccount_One: "Customer Accounts",
};

export default ModelLibraryCategory4;
