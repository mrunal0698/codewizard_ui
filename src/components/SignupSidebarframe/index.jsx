import React from "react";

import { Img } from "components";

const SignupSidebarframe = () => {
  return (
    <>
      <aside className="flex flex-col md:hidden items-center justify-center md:w-[100%] w-[auto] h-[10%]">
        <div className="h-[80px] relative w-[100%]">
          <Img
            src="images/Logo.png"
            className="h-[80px] sm:h-[auto] object-cover w-[100%]"
            alt="frame529821_One"
          />
        </div>
      </aside>
    </>
  );
};

export default SignupSidebarframe;
