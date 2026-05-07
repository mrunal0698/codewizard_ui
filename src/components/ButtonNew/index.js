import React from "react";

const ButtonNew = ({ children, onClick, isActive, isSubmit }) => {
  const button = "cursor-pointer font-medium px-4 py-2 rounded-md text-sm w-40"
  const activeButton = `${button} bg-gradient`;
  const inActiveButton = `${button} bg-teal_900`;
  const previousButton = `${button} text-teal_400 !py-1.6 text-[#17FFA6] border-[2px] border-[#17FFA6] bg-gray_900`;
  return (
    <button 
    className={isSubmit ? (isActive ? activeButton : inActiveButton) : previousButton} 
    onClick={(event) => {
      onClick()}}>
      {children} 
    </button>
  );
};

ButtonNew.defaultProps = { isActive: false };

export default ButtonNew;
