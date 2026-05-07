import React from "react";

import { Img, Text } from "components";

const ModelLibraryCategory6 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_car_gray_50.svg"
          className="h-[90px] w-[90px]"
          alt="car"
        />
        <Text
          className="font-inter font-semibold text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.travelertrips}
        </Text>
      </div>
    </>
  );
};

ModelLibraryCategory6.defaultProps = { travelertrips: "Traveler Trips" };

export default ModelLibraryCategory6;
