import { Img, Text, Button } from 'components'
import React from 'react';
import { Turn as Hamburger } from 'hamburger-react'

import { CLEAR_ALL_BACKENDAPP_DETAIL } from 'store/slices/backend.slice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_ALL_FRONTENDAPP_DETAIL } from 'store/slices/frontend.slice';

const AppBar = (props) => {
  const { OnDrawerClicked, open } = props;
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const projectDetail = useSelector(store => store.basicInformation?.projectBasicDetail);

   const cancelProject = () => {
    if(projectDetail?.project_type === "Front End"){
       dispatch(CLEAR_ALL_FRONTENDAPP_DETAIL);
    } else {
      dispatch(CLEAR_ALL_BACKENDAPP_DETAIL());
    }
    navigate("/our-home")
    }

  return (
    <div className='flex justify-between items-center bg-[#272727] h-[60px] border-b-[1px] border-solid border-gray_800'>
        <div className='flex gap-[40px] items-center'>
           <Hamburger toggled={open} toggle={OnDrawerClicked} color="#fff" size={20}/>
            <Img 
                src='images/CW-logo.png'
                className="w-[74px] h-[35px]"
            />
        </div>
        <Text
          className="text-gray_50 text-center my-[auto]"
          as="h6"
          variant="h6"
         >
         {projectDetail?.ProjectName}
        </Text>
        <div className="flex items-start justify-end gap-2 sm:hidden px-[12px]">
            <Button onClick={cancelProject} className="border-[1px] border-solid border-red_400 cursor-pointer flex-1 p-[8px] rounded-[4px] text-[12px] text-center text-red_400 w-[auto]">
              Cancel
            </Button>
        </div>
    </div>
  )
}

export default AppBar