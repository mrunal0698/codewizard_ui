import React, {useState} from "react";
import { Text, Button, Input} from "components";
import { useNavigate } from "react-router-dom";
import session from "shared/session";

const CreateDesignForm = (props) => {
  const { close } = props;
  const [inputValue,setInputValue] = useState({});
  const navigate = useNavigate();
  const short_uuid = require('short-uuid');

  const onChangeInput = (e) => {
    const { name, value } = e.target;
     setInputValue( prev => {
           return { ...prev, [name] : value }
     })
  }

  const onSubmit = async () => {
    session.Store("InputDesign", { DesignName:inputValue.fileName, SessionId:short_uuid.generate() }, true);
    navigate("/input-table");
  }

  return (
    <div className="bg-gray_901 flex flex-col items-start justify-start w-[100%] gap-[20px] p-[30px] md:px-[20px]">
        <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
            <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto] relative">
                <Text
                    className="font-semibold text-gray_300 text-left w-[auto] after:content-['*'] after:ml-0.5 after:text-red-500"
                    variant="body2"
                >
                    Name
                </Text>
                <Input
                    wrapClassName= {`common-pointer bg-gray_902 border-[1px] border-solid p-[12px] rounded-[4px] sm:w-[100%] w-[100%]`}
                    className="font-normal not-italic p-[0] placeholder:text-gray_801 border-[1px] text-[12px] text-gray_300 text-left sm:w-[100%] w-[100%] focus:border-gray_501"
                    name="fileName"
                    placeholder="Enter Design Name"
                    onChangeHandler={onChangeInput}
                />
            </div>
            <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto] relative">
                <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                >
                    <label htmlFor="Description">Description</label>
                </Text>
                <textarea
                    id="Description"
                    rows="4"
                    className={`block p-2 w-full text-sm text-gray_300 bg-gray_902 rounded-lg border-[1px] solid focus:border-gray_501 !font-inter !font-light placeholder:text-gray_801 !text-[12px]`}
                    placeholder="Enter description of this project..."
                    name="Description"
                    onChange={onChangeInput}
                />
            </div>        
            </div>
        <div className="flex flex-row gap-[16px] items-center justify-center mt-[40px] w-[100%]">
        <Button 
            onClick = {() => close(false)}
            className="border-[1px] border-solid border-teal_A400 cursor-pointer font-medium  py-[10px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[161px]">
            Cancel
        </Button>
        <Button 
            onClick={inputValue.fileName ? onSubmit : null}
            className= {`${inputValue.fileName ? "opacity-100" : "opacity-60 cursor-not-allowed"} bg-gradient text-gray_50 cursor-pointer font-medium px-[12px] py-[10px] rounded-[4px] text-[14px] text-center w-[161px]`}>
            Create
        </Button>
        </div>
    </div>
  );
};

export default CreateDesignForm;