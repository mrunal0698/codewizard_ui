import React from "react";

import FETechStackColumnglobe from "components/FETechStackColumnglobe";
import { Text, Line } from "components";

const TechStackList = (props) => {
  const { title, description, techList, updateTech, selectedTech,multipleSelection,addToList,addedList, removeFromList , techType } = props;
  return (
    <>  
      <div className="flex items-start justify-start w-[100%]">
        <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
            <div className="flex items-center justify-start w-[100%]">
            <div className="flex items-center justify-between w-[100%]">
              <div className="flex gap-[4px] items-center justify-start shrink-0 w-[230px]">
                <Text
                  className="font-medium text-gray_50 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                <span
                  className="font-normal not-italic text-gray_501 text-left w-[auto] pr-2"
                  as="h4"
                  variant="h4"
                >
                  {description}
                </span>
                {title}
                </Text>
              </div>
            <Line className="bg-gray_804 h-[1px] w-full" />
            </div>
            <Line className="bg-gray_804 h-[1px] w-full" />
            </div>
        </div>
      </div>
      <div className="flex md:flex-col flex-row gap-[17px] items-start justify-between w-[100%]">
        <div className="flex md:flex-1 items-center justify-start md:mt-[0] md:w-[100%] w-[100%]">
            <div className="sm:gap-[20px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-7 justify-center w-[100%]">
            {techType === "backend" ?
            techList?.map((item, index) => {
                return(
                <FETechStackColumnglobe
                className="cursor-pointer flex flex-1 flex-col h-[91px] items-center justify-center p-[8px] gap-[12px] rounded-[7px] w-[145px]"
                item={item}
                updateTech={updateTech}
                selectedTech={selectedTech}
                key={item.BeTechId}
                locked={!item?.Attribute1}
                addToList = {addToList}
                removeFromList={removeFromList}
                multipleSelection = {multipleSelection}
                addedList = {addedList}
                name={item.TechName}
                selectedName={selectedTech?.TechName}
                techType={techType}
                />
                );
            }) 

            : techType === "database" ? 
                  techList?.map((item, index) => {
                return(
                <FETechStackColumnglobe
                className="cursor-pointer flex flex-1 flex-col h-[91px] items-center justify-center p-[8px] gap-[12px] rounded-[7px] w-[145px]"
                item={item}
                updateTech={updateTech}
                selectedTech={selectedTech}
                key={item.DbId}
                addToList = {addToList}
                removeFromList={removeFromList}
                multipleSelection = {multipleSelection}
                addedList = {addedList}
                name={item.Dbname}
                selectedName={selectedTech?.Dbname}
                techType={techType}
                />
                );
            })
            :
            techList?.map((item, index) => {
                return(
                <FETechStackColumnglobe
                className="cursor-pointer flex flex-1 flex-col h-[91px] items-center justify-center px-[8px] gap-[12px] rounded-[7px] w-[145px]"
                item={item}
                updateTech={updateTech}
                selectedTech={selectedTech}
                key={techType ==="capabilities" ? item.CapId : item.TeScreenId}
                locked={!item?.Attribute1}
                addToList = {addToList}
                removeFromList={removeFromList}
                multipleSelection = {multipleSelection}
                addedList = {addedList}
                name={item.Name}
                selectedName={selectedTech?.Name}
                techType={techType}
                />
                );
            })
          }
            </div>
        </div>
      </div>
    </>
  );
};

 TechStackList.defaultProps = {
    multipleSelection:false,
 };
export default TechStackList;
