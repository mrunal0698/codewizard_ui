import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import templateData from "jsonFiles/template.data.json";

import { Text, Line, Img } from "components";
import { ADD_FRONTEND_SCREENS, SET_FE_ACTIVE_STEP, SET_FRONTEND_SELECTED_SCREEN_ID_LIST, SET_FRONTEND_UITEMPLATE } from "store/slices/frontend.slice";
import CommonAlertBoxModal from "modals/AlertBoxModal";
import TemplateSidebar from "components/TemplateSidebar";
import PreviewScreen from "components/PreviewScreen";

const FEScreen = () => {
  const selected_FEScreens = useSelector(store => store.frontend.frontend_details?.feScreens);
  const selected_UI_Template = useSelector(store => store.frontend.frontend_details?.UITemplate)
  const [selectedScreen, setSelectedScreen] = useState("");
  const [feSelectedScreens, setFeSelectedScreens] = useState(selected_FEScreens);
  const [feScreenList, setFescreenList] = useState([]);
  const [UITemplateList, setUiTemplateList] = useState([]);
  const [SelectedUITemplate, SetSelectedUITemplate] = useState(selected_UI_Template);
  const [screenConfigurationStatusModal, setScreenConfigurationStatusModal] = useState(false);
  const [toggleSidebar,setToggleSidebar] = useState(false);
  const [previewScreen,setPreviewScreen] = useState({});
  const dispatch = useDispatch();

  const selected_FeTechnology = useSelector((store) => store.frontend.frontend_details?.feTeckstack);
  useEffect(() => {
    const filteredTemplate = templateData?.FETemplate_list.filter((item) => {
      return item.UITemplateMainTechnology === selected_FeTechnology?.FeTechId;
    })
      setUiTemplateList(filteredTemplate);
  }, [selected_FeTechnology]);
  useEffect(() => {
    (async (_) => {
      if (Object.keys(SelectedUITemplate).length > 0) {
          const filteredTemplateScreens = templateData?.FETemplate_list.filter((item) => {
          return item.TemplateId === SelectedUITemplate?.TemplateId;
        })
        setFescreenList(filteredTemplateScreens[0]?.AllScreens);
      }
    })();
  }, [SelectedUITemplate]);
  const addToSelectedScreen = (screen) => {
     setFeSelectedScreens((curList) => {
      return [...curList, screen?.TeScreenId];
    });
    dispatch(ADD_FRONTEND_SCREENS(screen));
    dispatch(SET_FRONTEND_SELECTED_SCREEN_ID_LIST(screen?.TeScreenId));
    dispatch(SET_FE_ACTIVE_STEP(3));
  };
  const removeScreenFromList = (screen) => {
    const filteredFeScreens = feSelectedScreens.filter(
      (elem) => elem !== screen?.TeScreenId
    );
    setFeSelectedScreens(filteredFeScreens);
  };
  const deleteAllScreen = () => {
    setFeSelectedScreens([]);
  };
  const updateSelectedUITemplate = async (item) => {
    SetSelectedUITemplate(item);
    setFeSelectedScreens([]);
    setPreviewScreen({});
    dispatch(SET_FRONTEND_UITEMPLATE(item));
  };

  const updateScreenConfigurationStatusModal = (value) => {
    setScreenConfigurationStatusModal(value);
  }
  const updateSelectedScreen = (value) => {
    setSelectedScreen(value)
  }
  useEffect(() => {
    if(Object.keys(previewScreen).length > 0){
    setToggleSidebar(true);
    }
  },[previewScreen]);
  useEffect(() => {
    if(!toggleSidebar){
      setPreviewScreen({});
    }
  },[toggleSidebar])

  return (
    <>
      <CommonAlertBoxModal
        openAlertBox={screenConfigurationStatusModal}
        alertMessage="Please configure the selected screens to proceed further."
        exitButton={false}
        retryNavigation={() => updateScreenConfigurationStatusModal(false)}
      />
      <div className="flex flex-1 flex-col items-start justify-start md:px-[20px] w-[100%] pt-[32px] h-[100vh] overflow-x-[auto]">
        <div className="flex gap-[4px] items-center justify-start w-[100%]">
            <Text className="font-medium text-gray_50 text-left w-[auto] shrink-0 w-[300px]" as="h4" variant="h4">
              <span className="font-normal not-italic text-gray_501 pr-2" as="h4" variant="h4">
                Step 4:
              </span>
              Select Screen
            </Text>
            <Line className="bg-gray_804 h-[1px] w-full" />
        </div>
        <div className="flex flex-row gap-[17px] items-start justify-between w-[100%] h-[95%] p-2 overflow-y-auto">
          {/* <TemplateSidebar UITemplateList={UITemplateList} SelectedUITemplate={SelectedUITemplate} toggleSidebar={toggleSidebar} 
            updateSelectedUITemplate={updateSelectedUITemplate} triggerSideBar={() => setToggleSidebar(!toggleSidebar)}
          />            */}
          {Object.keys(SelectedUITemplate).length === 0 ? (
            <div className="bg-gray_901 flex-1 flex items-center justify-center w-[unset] float-0 h-[100%]">
              <Text
                className="font-normal leading-[150.00%] my-[112px] not-italic text-center text-gray_501 w-[100%]"
                as="h6"
                variant="h6"
              >
                Select a Template to see it’s capable Screens
              </Text>
            </div>
          ) : Object.keys(SelectedUITemplate).length > 0 ? (
          <div className={`bg-gray_901 flex-1 w-[unset] md:w-[100%] float-0 flex sm:gap-[20px] gap-[24px] justify-start items-start flex-wrap h-[100%] p-4 overflow-y-[auto]`}>
            {feScreenList?.length > 0 && feScreenList?.map((item, index) => {
              return (
                <div className="flex flex-col gap-[20px] items-center justify-start w-[200px] h-[200px]" key={index} >
                  <div onClick={() => { setPreviewScreen(item); setSelectedScreen(item) }}
                    className={`${selectedScreen?.TeScreenId === item?.TeScreenId ? "bg-bluegray_906 border-[2px] border-solid border-blue_804" : "bg-gray_901"
                    } flex items-center justify-center h-[140px] rounded-[4px] w-[100%] relative cursor-pointer`}
                    >
                    <Img src={item?.IconTempScreen} className="h-[100%] m-[auto] rounded-[4px] w-[100%]" alt="imageSixtyTwo_Two" />
                    {previewScreen?.TeScreenId === item?.TeScreenId  && (
                      <Img src="images/carbon_view-filled.png" alt="imageSixtyTwo_Two"
                        className="h-[24px] top-[50] bottom-[50] absolute rounded-[4px] w-[24px]" />
                    )}
                  </div>
                  <div className="flex w-[100%] justify-between">
                    <Text className="font-normal not-italic text-gray_300 text-left w-[auto]" as="h5" variant="h5">
                      {item?.ScreenName}
                    </Text>
                    {feSelectedScreens?.find((elem) => elem === item?.TeScreenId) ? (
                      <Img onClick={() => removeScreenFromList(item)} src="images/charm_tick.png" alt="remove screen"
                        className="h-[24px] rounded-[50%] w-[24px] p-1 bg-[red] cursor-pointer" />
                    ) : (
                      <Img onClick={() => addToSelectedScreen(item)} src="images/charm_tick.png" alt="add screen"
                        className="h-[24px] rounded-[50%] w-[24px] p-1 bg-[green] cursor-pointer" />
                    )}
                  </div>
                </div>
              );
              })}
            </div>
            ) : (
              null
            )}
            {Object.keys(previewScreen).length > 0 && (
              <PreviewScreen feSelectedScreens={feSelectedScreens} previewScreen={previewScreen} addToSelectedScreen={addToSelectedScreen} 
                removeScreenFromList={removeScreenFromList} selectedScreen={selectedScreen} SelectedUITemplate={SelectedUITemplate} 
                updateSelectedScreen={updateSelectedScreen} deleteAllScreen={deleteAllScreen} />
            )}
        </div>
      </div>
    </>
  );
};

export default FEScreen;