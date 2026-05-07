import React from "react";

import { Text } from "components";

const FETemplateButton = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="cursor-pointer font-inter font-medium text-gray_300 text-left w-[auto]"
          variant="body2"
          onClick={props?.onClick}
        >
          {props?.text_One}
          
        </Text>
      </div>
    </>
  );
};

FETemplateButton.defaultProps = { text_One: "Selected Screens (0)" };

export default FETemplateButton;
