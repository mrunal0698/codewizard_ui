import React from "react";

import { Img, Text } from "components";

const FETechStackColumnglobe = ({item, locked, addToList, removeFromList, updateTech, className, addedList, multipleSelection, selectedTech,name, selectedName, techType }) => {
  const updateAddedList = (item) => {
    const isItemAddedAlready = addedList?.find(elem => elem.Name === (item.Name))
    if(isItemAddedAlready){
        removeFromList(item, techType);
    } 
    else{
    addToList(item, techType);
    updateTech(item);
    }
  }
  return (
    <>
    {!locked ? (
      <div 
        className={`${ multipleSelection ? (addedList?.find(elem => elem['Name'] === name)? "bg-secondary border-[2px] border-solid border-blue_804" : "bg-secondary")
          :
          selectedName === name ? "bg-secondary border-[2px] border-solid border-blue_804": "bg-secondary"} ${className}`}
          onClick = {() => {multipleSelection ? updateAddedList(item) : updateTech(item,techType)}}
          >
        <Img
          src={item.Icon}
          className="h-[35px] w-[35px]"
          alt="globe"
        />
        <Text
          className="font-inter text-gray_50 text-center w-[auto]"
          variant="body3"
        >
          {name}
        </Text>
      </div> 
      ) : (
          <div 
            className={`bg-secondary border-[2px] border-solid border-secondary opacity-[0.40] cursor-not-allowed ${className}`}
              >
            <Img
              src={item.Icon}
              className="h-[35px] w-[35px]"
              alt="globe"
            />
            <Text
              className="font-inter text-gray_50 text-center w-[auto]"
              variant="body3"
            >
              {name}
            </Text>
          </div>
       )
      }
    </>
  );
};

FETechStackColumnglobe.defaultProps = { 
  defaultname: "React",
  src: "images/img_globe_light_blue_300.svg",
  locked: false,
 };

export default FETechStackColumnglobe;
