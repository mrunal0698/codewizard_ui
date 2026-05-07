import React, { useEffect, useState } from 'react'
import { Button, Input, SelectBox, Text } from 'components';
import Helper from "shared/helper";
import Functions from "./Functions";

const stereotypes = ["Entity","Enum","Complex","File"];

const Component = ({ tableId, updateTable, tables }) => {
  const [inputValue,setInputValue] = useState({});
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const table = tables?.find(x => x.id === tableId);
    if(!Helper.IsJSONEmpty(table)) {
      setInputValue({...(table?.config || {}),
       ...{name:table?.name, stereotype:Functions.ToPascalCase(table.stereotype) }} || {});
    }
  },[tableId])

  const OnChangeInput = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setInputValue((prev) => {
      const updated = { ...prev, [name]: newValue };
      setIsDirty(JSON.stringify(updated) !== JSON.stringify(inputValue));
      return updated;
    });
    }

  const onDropDownChange = (name,data) => {
    setInputValue((prev) => {
      const updated = { ...prev, [name]: data.value };
      setIsDirty(JSON.stringify(updated) !== JSON.stringify(inputValue));
      return updated;
    });
  }

  const addProperties = () => {
      if (Helper.IsNullValue(inputValue.name)) 
        return global.AlertPopup("error","Name should not be Empty"); 
      const name = Functions.ToPascalCase(inputValue.name);
      const tableExists = tables.some(table => table?.properties.name === name);
      if (tableExists) 
        return global.AlertPopup("error","Name already exists, please enter unique name"); 
      const updatedTables = tables.map(table => {
        if (table.id === tableId) {
          return {
            ...table,
            stereotype: inputValue.stereotype,
            name: name,
            config: { ...table.config, ...inputValue }
            }
          };
          return table;
        }
      )
      updateTable(updatedTables);
      setIsDirty(false);
      global.AlertPopup("success",`Properties saved successfully`)
  }
  
    return(
          <div className='flex flex-col gap-2 w-[100%] max-w-[750px]'>
             <div className='flex justify-items-stretch gap-2 mt-2 w-[100%]'>
               <div className='flex flex-col gap-2 w-[100%]'>
                  <Text
                    className="text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Name
                  </Text>
                  <Input
                    wrapClassName= {`"!border-pink_900 color-pink_900": "border-gray_801"} common-pointer bg-gray_902 border-[1px] border-solid p-2 rounded-[4px] sm:w-[100%] w-[auto]`}
                    className="font-normal not-italic p-[0] placeholder:text-hint border-[1px] text-[12px] text-gray_300 text-left sm:w-[100%] w-[100%] focus:border-gray_501"
                    name="name"
                    placeholder="Enter table name"
                    value={inputValue.name}
                    onChangeHandler={OnChangeInput}  
                  />
               </div>
               <div className='flex flex-col gap-2 w-[100%]'>
                  <Text
                    className="text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Type
                  </Text>
                  <SelectBox
                    className="bg-gray_902 font-normal not-italic rounded-[4px] text-[12px] text-gray_300 text-left w-[100%]"
                    placeholderClassName="text-hint"
                    placeholder={'Select type'}
                    name="stereotype"
                    options={stereotypes}
                    onChange ={onDropDownChange}
                    value={inputValue.stereotype || ""}
                  />
               </div>
               {/* <div className='flex flex-col gap-2 w-[100%]'>
                  <Text
                    className="text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Visibility
                  </Text>
                  <SelectBox
                    className="bg-gray_902 font-normal not-italic rounded-[4px] text-[12px] text-gray_300 text-left w-[100%]"
                    placeholderClassName="text-hint"
                    placeholder={'Select Visibility'}
                    name="visibility"
                    options={[{label: "private",value:"private"},{label:"public",value:"public"}]}
                    onChange ={onDropDownChange}
                    value={inputValue.visibility || ""}
                  />
               </div> */}
             </div>  
            <Button 
              onClick ={addProperties} 
              className={`${!isDirty && 'invisible'} bg-primary cursor-pointer px-4 py-2 ml-auto rounded-md text-[14px] text-center text-core w-auto`}
              disabled={!isDirty}
             >
              Save
            </Button>
  
          </div>
    )
  }

  export default Component;