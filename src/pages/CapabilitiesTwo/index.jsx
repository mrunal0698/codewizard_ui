import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_CAPABLITIES } from "store/slices/fullstack.slice";

import { Line } from "components";

import TechStackList from "components/TechStackList";
import ButtonNew from "components/ButtonNew";
import { ADD_FRONTEND_CAPABLITIES } from "store/slices/frontend.slice";
import { ADD_BACKEND_CAPABLITIES } from "store/slices/backend.slice";

const CapabilitiesTwoPage = () => {
  const added_capabilities = useSelector(store => store.fullstack.fullstack_details?.capablities);
  const [selectedTech, setSelectedTech]  = useState('');
  const[addedList,setAddedList] = useState(added_capabilities);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const project_type = useSelector(store => store.basicInformation.projectType);
  const capabilitiesList = [
    {name: 'User Management', src: "images/img_group52988.svg", description1: `Pharetra morbi libero id aliquam elit massa integer
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
    {name: 'Authentication & Authorization [OAuth]', src: "images/img_location_black_900.svg", description1: `Pharetra morbi libero id aliquam elit massa integer
    tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar
    ullamcorper sit dictumst ut eget a, elementum eu. Maecenas
    est morbi mattis id in ac pellentesque ac.`},
    {name: 'Authentication & Authorization [Spring]', src: "images/img_close_light_green_700.svg", description1: 'spirng description', },
    {name: 'Authentication & Authorization [Auth0]', src: "images/img_close_deep_orange_600.svg", description1: 'Auth0 description'},
    {name: 'Authentication & Authorization [Basic]', src: "images/img_settings_gray_50.svg", description1: 'Basic description'},
    {name: 'Hazelcast', src: "images/img_settings_cyan_a400.svg", description1: 'Hazlecast description'},
    {name: 'Redis', src: "images/img_location_red_903.svg", description1: 'Redis description'},
    {name: 'Docker Compose', src: "images/img_lightbulb.svg", description1: 'Docker Compose description'},
    {name: 'Dockerfile', src: "images/img_group_bluegray_801.svg", description1: 'Dockerfile description'},
    {name: 'IaC for AWS', src: "images/img_group52986.svg", description1: 'Ias for AWS description'},
    {name: 'Razorpay', src: "images/img_cursor.svg", description1: 'RazorPay description'},
  
  ];
  const addToList = (item) => {
      setAddedList((curList) => {
         return [...curList,item]
      });
  }
  const removeFromList = (item) => {  
     setAddedList( curList => {
      const removedList = curList.filter(elem => elem.name !== item.name);
      return removedList;
     })
  }
 
 const updateTech = (val) => {
  setSelectedTech(val);
 }

 const onSubmitHandler = () => {
    if(project_type === "Front End")
       dispatch(ADD_FRONTEND_CAPABLITIES(addedList));
    else if(project_type === "Back End")
       dispatch(ADD_BACKEND_CAPABLITIES(addedList));
    else
      dispatch(ADD_CAPABLITIES(addedList));
    navigate("/both-basic-details");
 }
  return (
    <>
        
          <div className="flex flex-1 flex-col gap-[41px] items-center justify-start md:mt-[0] mt-[32px] md:px-[20px] w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
            <TechStackList techList={capabilitiesList} updateTech={updateTech} selectedTech={selectedTech} addedList={addedList} multipleSelection={true} addToList={addToList} removeFromList= {removeFromList} typeName="capabilities"
            title="Select Capabilities" description="Choose the capabilities you want your project to have. You can choose multiple capabilities."
            rhsDescription = "Select a Capability to see it’s Features"/>
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
                    isActive={addedList.length > 0}
                    onClick={() => addedList.length > 0 ? onSubmitHandler() : null}
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

export default CapabilitiesTwoPage;
