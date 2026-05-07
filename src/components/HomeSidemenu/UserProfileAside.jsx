import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { Text, Line, Img } from 'components';

const UserProfileAside = (props) => {
  const { toggleDropdown, className } = props;
  const { logout } = useAuth0();
  const logoutHandler = () => {
    logout();
    sessionStorage.clear("bearer_token");
  }
  return (
    <>
       {toggleDropdown ? (
             <div className={`absolute bg-bluegray_906 flex flex-col gap-[20px] items-start justify-start p-[8px] rounded-[4px] w-[200px] ${className}`}>
               <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[4px] mt-[10px] self-stretch w-[auto]">
                 <Img
                   src="images/img_user.svg"
                   className="cursor-pointer h-[24px] rounded-[50%] w-[24px]"
                   alt="user"
                 />
                 <Text
                   className="cursor-pointer font-normal not-italic text-gray_50 text-left w-[auto]"
                   as="h6"
                   variant="h6"
                 >
                   My Account
                 </Text>
               </div>
               <Line className="bg-gray_801 h-[1px] rounded-[1px] w-[100%]" />
               <div
                 className="flex flex-row gap-[8px] items-center justify-start mb-[8px] md:ml-[0] ml-[8px] self-stretch w-[auto]"
                 onClick={logoutHandler}
               >
                 <Img
                   src="images/img_arrowright.svg"
                   className="cursor-pointer h-[20px] w-[20px]"
                   alt="arrowright"
                 />
                 <Text
                   className="cursor-pointer font-normal not-italic text-gray_50 text-left w-[auto]"
                   variant="body2"
                 >
                   Logout
                 </Text>
               </div>
             </div>
           ) : (
             false
           )}
    </>
  )
}

export default UserProfileAside