import React from "react";

import { Img, Text } from "components";

const ModelLibraryCategory5 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_car.svg"
          className="h-[90px] mt-[32px] w-[90px]"
          alt="car"
        />
        <Text
          className="font-inter font-semibold mb-[32px] text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.customersandpay_One}
        </Text>
      </div>
    </>
  );
};

ModelLibraryCategory5.defaultProps = {
  customersandpay_One: "Customers and Payments",
};

export default ModelLibraryCategory5;
