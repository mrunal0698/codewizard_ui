import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


import { Line } from "components";
import TechStackList from "components/TechStackList";
import  ButtonNew  from 'components/ButtonNew';
import { SET_DATABASE } from "store/slices/fullstack.slice";

const DatabaseThreePage = () => {
  const selected_database = useSelector(store => store.fullstack.fullstack_details?.database);
  const navigate = useNavigate();
  const [selectedTech, setSelectedTech]  = useState(selected_database);
  const dispatch = useDispatch();

  const techList = [
    { name: "MySQL", src: "images/img_reply.svg" , 
      description1: `Pharetra morbi libero id aliquam elit massa integer
      tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar
      ullamcorper sit dictumst ut eget a, elementum eu. Maecenas
      est morbi mattis id in ac pellentesque ac.`, 
      description2: `Lectus id duis vitae porttitor enim gravida morbi.
      Eu turpis posuere semper feugiat volutpat elit, ultrices
      suspendisse. Auctor vel in vitae placerat.
     
      Suspendisse maecenas ac donec scelerisque diam sed est
      duis purus.
    
      Elit nisi in eleifend sed nisi. Pulvinar at orci, proin
      imperdiet commodo consectetur convallis risus. Sed
      condimentum enim dignissim adipiscing faucibus consequat,
      urna. Viverra purus et erat auctor aliquam.`, 
      description3: `Lectus id duis vitae porttitor enim gravida morbi.
      Eu turpis posuere semper feugiat volutpat elit, ultrices
      suspendisse. Auctor vel in vitae placerat.
      Suspendisse maecenas ac donec scelerisque diam sed est
      duis purus.`},
      { name: "Open UI5", src: "images/img_group.png" , 
      description1: `Open UI5 morbi libero id aliquam elit massa integer
      tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar
      ullamcorper sit dictumst ut eget a, elementum eu. Maecenas
      est morbi mattis id in ac pellentesque ac.`, description2: `Open UI5 morbi libero id aliquam elit massa integer
      tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar
      ullamcorper sit dictumst ut eget a, elementum eu. Maecenas
      est morbi mattis id in ac pellentesque ac.`},
    { name: "PostgreSQL", src: "images/img_location_black_900_90x90.svg", description1: 'PostgreSQL description' },
    { name: "JDBC", src: "images/img_fire.svg", description1: 'We are working on it,it will be available soon', locked: true },
    { name: "MongoDB", src: "images/img_location_light_green_601.svg", description1: 'MongoDB description' },
    { name: "DynamoDB",  src: "images/img_user_cyan_901.svg", description1: 'DynamoDB description' }
  ];
  const updateTech = (val) => {
    setSelectedTech(val);
  }
  const onSubmitHandler = () => {      
      dispatch(SET_DATABASE(selectedTech));
    navigate("/both-select-capabilities");
  }
  return (
    <>    
          <div className="flex flex-1 flex-col gap-[41px] items-center justify-start md:mt-[0] mt-[32px] md:px-[20px] w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <TechStackList choosen="Database" techList={techList} updateTech={updateTech} selectedTech={selectedTech} 
                title="Select Database" 
                description="Choose the database you want your project to build in"
                rhsDescription = "Select a Database to see it’s Features" />
            </div>
            <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
              <Line className="bg-gray_801 h-[1px] w-[100%]" />
              <div className="flex items-start justify-end w-[100%]">
                <div className="flex flex-row gap-[12px] items-center justify-center pr-2">
                  <ButtonNew
                   onClick={() => navigate(-1)}
                   children="Previous"
                  >
                  </ButtonNew>
                  <ButtonNew
                    isActive={Object.keys(selectedTech).length > 0}
                    onClick={() =>
                      Object.keys(selectedTech).length > 0 ?
                     onSubmitHandler() : null}
                    children="Next"
                    isSubmit
                  >
                  </ButtonNew>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default DatabaseThreePage;
