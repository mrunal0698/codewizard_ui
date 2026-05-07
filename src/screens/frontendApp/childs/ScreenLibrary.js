import React, { useState, } from "react";

import { Text, Line, Img, Button } from "components";
import PreviewScreen from "components/PreviewScreen";

const Component = ({ rows, appData, updateAppData, templates, onClickedTemplate }) => { 
  const [selectedScreen, setSelectedScreen] = useState({});
  const [previewScreen, setPreviewScreen] = useState({});

  const onAddScreen = (screen) => {
    updateAppData(screen, "feScreens", true);
  };

  const onRemoveScreen = (screen) => {
    updateAppData(screen, "feScreens", true, "TeScreenId");
  };
  const deleteAllScreen = () => {
    // setFeSelectedScreens([]);
  };
  
  const OnClickedTemplate = (template) => {
    if(onClickedTemplate) onClickedTemplate(template);
  }

  return (
    <>
      <div className="flex flex-col items-start justify-start md:px-[20px] w-[100%] overflow-x-auto">
        <div className="flex gap-[4px] items-center justify-start w-[100%]">
            <Text className="font-medium text-gray_50 text-left shrink-0 w-[200px]" as="h6" variant="h6">
              <span className="font-normal not-italic text-gray_501 pr-2" as="h6" variant="h6">
                Step 4:
              </span>
              Select Screen
            </Text>
            <Line className="bg-gray_804 h-[1px] w-full" />
        </div>
        <div className="flex flex-row gap-[16px] items-start justify-start w-[100%] h-[480px] py-2">

          <div className="bg-gray_901 w-[100%] flex flex-col sm:gap-[20px] gap-[24px] justify-start items-start rounded-[14px] h-[100%] py-4 px-3">
            <div className="w-full flex justify-between items-center pr-5">
              <Text className="text-gray_50 text-left w-[100%]" as="h6" variant="h6">
                Screens
              </Text>
              <div className="flex border border-primary border-opacity-50">
                {templates.map(e => (
                    <Button className={`${e.TemplateId === appData.UITemplate.TemplateId ? 'bg-primary' : 'bg-secondary hover:opacity-80'} w-20 p-2 text-core text-xs font-bold`}
                      onClick={() => OnClickedTemplate(e)}
                    >
                      {e.TemplateName}
                    </Button>
                ))}
              </div>
            </div>
            <div className="w-[100%] md:w-[100%] flex sm:gap-[20px] gap-[24px] justify-start items-start flex-wrap rounded-[14px] h-[100%] overflow-y-auto">
              {rows.AllScreens?.map((item, index) => {
                return (
                  <div className="flex flex-col gap-1 items-start justify-between w-[150px] h-[auto] p-1" key={index} >
                    {/* <Text className="font-medium not-italic text-gray_300 text-left w-[auto]" variant="body3">
                      {item?.ScreenLayout}
                    </Text> */}

                    <div 
                      onClick={() => { setPreviewScreen(item); setSelectedScreen(item) }}
                      className={`flex items-center justify-center rounded-[4px] w-[100%] h-[auto] relative cursor-pointer py-1`}
                      >
                        <Img src={item?.IconTempScreen} 
                          className={`${selectedScreen?.TeScreenId === item?.TeScreenId ? "border-[2px] border-solid border-primary" : ""} w-[144px] h-[90px] m-[auto] rounded-[4px] object-fill cursor-pointer`} alt="image"
                        />

                        {appData.feScreens?.find((elem) => elem?.TeScreenId === item?.TeScreenId) && (
                          <div className="w-8 h-8 rounded-full top-[50] bottom-[50] absolute bg-cw_shade flex items-center justify-center">
                            <Img src="images/check_icon.svg" alt="imageSixtyTwo_Two"
                                className="rounded-full w-[19px] bg-cw_shade border-2 m-[auto] border-primary" />
                          </div>
                        )}

                        {previewScreen?.TeScreenId === item?.TeScreenId  && (
                          <div className="w-8 h-8 rounded-full top-[50] bottom-[50] absolute bg-cw_shade flex items-center justify-center">
                            <Img src="images/carbon_view-filled.png" alt="imageSixtyTwo_Two"
                              className="rounded-full w-5 bg-cw_shade" />
                          </div>
                        )}                      
                    </div>
                    
                    <div className="flex w-[100%] justify-between">             
                      {appData.feScreens?.find((elem) => elem?.TeScreenId === item?.TeScreenId) ? (
                        <Button
                            className="bg-primary text-core cursor-pointer font-normal px-5 py-[5px] mx-[auto] rounded-[5px] text-[12px] text-center border-[1px] border-primary w-[auto]"
                            onClick={() => onRemoveScreen(item)}
                        >
                          Selected 
                        </Button>
                      ) : (               
                          <Button
                            className={`${item.Attribute1 === "false" ? "cursor-not-allowed" : "cursor-pointer"} border-core text-core border-[1px] font-normal py-[5px] px-5 mx-[auto] rounded-[5px] text-[12px] text-center w-[auto]`}
                            onClick={item.Attribute1 === "false" ? null   : () => onAddScreen(item)}
                          >
                            Add screen 
                          </Button>
                      )}
                    </div>
                  </div>
                );
                })}
            </div>
          </div>

          <PreviewScreen appData={appData} previewScreen={previewScreen} onAddScreen={onAddScreen} 
            onRemoveScreen={onRemoveScreen} rows={rows} deleteAllScreen={deleteAllScreen} updateAppData={updateAppData} />
        </div>
      </div>
    </>
  );
};

export default Component;