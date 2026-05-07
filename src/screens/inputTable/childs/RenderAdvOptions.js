import React, { useState } from 'react'
import { Button, Input, Text } from 'components';
import helper from "shared/helper";
import CWModal from 'modals/Modal';

const Component = ({ tableId , id, setAdvOption, updateTable, tables }) => {
    const prevState = tables.find(x => x.id === tableId)?.properties.find(x => x.id === id) || {};
    
    const [inputValue,setInputValue] = useState(prevState);
  
    const OnChangeInput = (e) => {
      const { name, value } = e.target;
      setInputValue(prev => ( 
        {...prev,[name] : value}
      ));
     }
    
    const addAdvOptions = () => {
      const updatedTables = tables.map(table => {
        if (table.id === tableId) {
          return {
            ...table,
            properties: table.properties.map(attribute => {
              if (attribute.id === id) {
                return {
                  ...attribute,
                  ...inputValue
                };
              }
              return attribute;
            })
          };
        }
        return table;
      })
      updateTable(updatedTables);
      setInputValue({});
      setAdvOption(null);
    }
  
    return(
      <CWModal 
       open={helper.IsNullValue(id) ? false : true}
       className="md:h-[80%] w-[512px] p-8"
       close={() => setAdvOption(null)}
      >   
          <div className='flex flex-col gap-2 w-[100%]'>
              <Text
                className="font-meduim text-gray_300 text-left w-[auto]"
                variant="h5"
                as="h5"
              >
                Advanced Settings:
              </Text>
              {/* <Text
                className="text-subtle text-left w-[auto]"
                variant="body2"
              >
                  {!helper.IsJSONEmpty(activeTable) && activeTable?.properties?.name + " : " +
                   activeTable?.properties.find(x => (x.id === id))?.name}
              </Text> */}
              <Text
                className="text-gray_300 text-left w-[auto] mt-2"
                variant="body2"
              >
                Minimum
              </Text>
              <Input
                wrapClassName= {`"!border-pink_900 color-pink_900": "border-gray_801"} common-pointer bg-gray_902 border-[1px] border-solid p-[12px] rounded-[4px] sm:w-[100%] w-[auto]`}
                className="font-normal not-italic p-[0] placeholder:text-gray_801 border-[1px] text-[12px] text-gray_300 text-left sm:w-[100%] w-[100%] focus:border-gray_501"
                name="minValue"
                value={inputValue.minValue}
                onChangeHandler={OnChangeInput}
  
              />
               <Text
                className="text-gray_300 text-left w-[auto] mt-2"
                variant="body2"
              >
                Maximum
              </Text>
              <Input
                wrapClassName= {`"!border-pink_900 color-pink_900": "border-gray_801"} common-pointer bg-gray_902 border-[1px] border-solid p-[12px] rounded-[4px] sm:w-[100%] w-[auto]`}
                className="font-normal not-italic p-[0] placeholder:text-gray_801 border-[1px] text-[12px] text-gray_300 text-left sm:w-[100%] w-[100%] focus:border-gray_501"
                name="maxValue"
                value={inputValue.maxValue}
                onChangeHandler={OnChangeInput}
  
              />
               <Text
                className="text-gray_300 text-left w-[auto] mt-2"
                variant="body2"
              >
                Pattern
              </Text>
              <Input
                wrapClassName= {`"!border-pink_900 color-pink_900": "border-gray_801"} common-pointer bg-gray_902 border-[1px] border-solid p-[12px] rounded-[4px] sm:w-[100%] w-[auto]`}
                className="font-normal not-italic p-[0] placeholder:text-gray_801 border-[1px] text-[12px] text-gray_300 text-left sm:w-[100%] w-[100%] focus:border-gray_501"
                name="pattern"
                onChangeHandler={OnChangeInput}
  
              />
              <div className='flex gap-6 justify-center w-auto mt-6'>
                <Button className='p-[10px] border-[1px] border-error text-[14px] text-core rounded-md w-[130px]'
                  onClick={() => { setAdvOption(null); setInputValue({}) }}
                  >
                  Cancel
                </Button>
                <Button 
                  onClick ={addAdvOptions} 
                  className="bg-gradient cursor-pointer p-[10px] rounded-md text-[14px] text-center text-core w-[130px]"
                  >
                  Confirm
                </Button>
              </div>
          </div>
      </CWModal>
    )
  }  

  export default Component;