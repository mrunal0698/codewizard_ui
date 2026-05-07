import React from "react";

import { Img, Text } from "components";

const SelectModelOneCategory = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_report.svg"
          className="h-[90px] w-[90px]"
          alt="report"
        />
        <Text
          className="font-inter font-semibold text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.productcatalog}
        </Text>
      </div>
    </>
  );
};

SelectModelOneCategory.defaultProps = { productcatalog: "Product Catalog" };

export default SelectModelOneCategory;
