import React from "react";

import { Img, Text } from "components";

const ModelLibraryCategory2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_user_teal_a400.svg"
          className="h-[90px] mt-[4px] w-[90px]"
          alt="user"
        />
        <Text
          className="font-inter font-semibold mb-[4px] text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.usermanagement}
        </Text>
      </div>
    </>
  );
};

ModelLibraryCategory2.defaultProps = { usermanagement: "User Management" };

export default ModelLibraryCategory2;
