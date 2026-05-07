import React, { useState, useEffect } from "react";

import { Text, Img } from "components";
import TemplateSidebar from "components/TemplateSidebar";
import helper from "shared/helper";
import { GetUITemplates } from "shared/services";
import PreviewScreenModal from "modals/PreviewScreenModal";

const FETemplate = () => { 
  const [feScreenList, setFescreenList] = useState([]);
  const [UITemplateList, setUiTemplateList] = useState([]);
  const [SelectedUITemplate, SetSelectedUITemplate] = useState({});
  const [previewScreen,setPreviewScreen] = useState({});
  const [previewScreenmodal,setPreviewScreenModal] = useState(false);
  const [selectedScreen,setSelectedScreen] = useState({});

  useEffect(() => {
    (async _ => {
      const res = await GetUITemplates();
      setUiTemplateList(res.values);
      SetSelectedUITemplate(res.values[1]);
    })()
  }, []);

  useEffect(() => {
    (async (_) => {
      if (Object.keys(SelectedUITemplate).length > 0) {
          const filteredTemplateScreens = UITemplateList.filter((item) => {
          return item.TemplateId === SelectedUITemplate?.TemplateId;
        })
        setFescreenList(filteredTemplateScreens[0]?.AllScreens);
      }
    })();
  }, [SelectedUITemplate]);

  const updateSelectedUITemplate = async (item) => {
    SetSelectedUITemplate(item);
    setPreviewScreen({});
  };

  return (
    <>
       <PreviewScreenModal open={previewScreenmodal} onRequestClose={() => setPreviewScreenModal(false)} 
          previewIcon={previewScreen?.IconTempScreen} previewScreen={previewScreen}/>
      <div className="flex flex-col items-start justify-start md:px-[20px] w-[100%] h-[100%] gap-3 overflow-x-auto pt-6">
        <Text 
         className="font-normal text-hint text-left shrink-0 w-[200px]"
         as="h6" variant="h6"
         >
          Explore Our Templates
        </Text>
        <div className="flex flex-row gap-[16px] items-start justify-start w-[100%] h-[90%] py-2">

          {/* <TemplateSidebar UITemplateList={UITemplateList} SelectedUITemplate={SelectedUITemplate}
            updateSelectedUITemplate={updateSelectedUITemplate} />     */}

           { !helper.IsJSONEmpty(SelectedUITemplate) && UITemplateList.length > 0 ? (
            <div className="bg-gray_901 w-[100%] flex flex-col sm:gap-[20px] gap-[24px] justify-start items-start rounded-[14px] h-[100%] py-4 px-3">
              <Text className="text-gray_50 text-left w-[100%]" as="h6" variant="h6">
                Screens
              </Text>
              <div className="w-[100%] md:w-[100%] flex sm:gap-[20px] gap-[24px] justify-start items-start flex-wrap rounded-[14px] h-[100%] overflow-y-auto">
                {UITemplateList.length > 0 && feScreenList?.map((item, index) => {
                  return (
                    <div className="flex flex-col gap-1 items-start justify-between w-[150px] h-[auto] p-1" key={index} >
                      <Text className="font-medium not-italic text-gray_300 text-left w-[auto]" variant="body3">
                        {item?.ScreenLayout}
                      </Text>

                      <div 
                        onClick={() => { setPreviewScreen(item); setSelectedScreen(item) }}
                        className={`flex items-center justify-center rounded-[4px] w-[100%] h-[auto] relative cursor-pointer py-1`}
                        >
                          <Img src={item?.IconTempScreen} 
                            className={`${selectedScreen?.TeScreenId === item?.TeScreenId ? "border-[2px] border-solid border-primary" : ""} w-[144px] h-[90px] m-[auto] rounded-[4px] object-fill cursor-pointer`} alt="image"
                            />
                          {previewScreen?.TeScreenId === item?.TeScreenId  && (
                            <div className="w-8 h-8 rounded-full top-[50] bottom-[50] absolute bg-cw_shade flex items-center justify-center">
                              <Img src="images/carbon_view-filled.png" alt="imageSixtyTwo_Two"
                                className="rounded-full w-5 bg-cw_shade" />
                            </div>
                          )}                      
                      </div>
                    </div>
                  );
                  })}
              </div>
            </div>
            ) : (
              <div className="bg-gray_901 flex-1 flex items-center justify-center w-[unset] float-0 h-[100%] rounded-[14px]">
                <Text
                  className="font-normal leading-[150.00%] not-italic text-center text-gray_501 w-[100%]"
                  as="h6"
                  variant="h6"
                >
                  Select Theme To View Screens
                </Text>
              </div>
            )}
          <div className="flex flex-col md:w-[100%] w-[600px] h-[100%] shrink-0">
            {!helper.IsJSONEmpty(previewScreen) ? (
              <div className='bg-gray_901 flex flex-col md:gap-[40px] gap-[12px] items-center justify-start p-[14px] rounded-[14px] h-[100%]'>
                  <div className="flex sm:gap-[40px] items-center justify-between w-[100%]">
                    <Text className="text-gray_50 text-left w-[auto]" as="h6" variant="h6">
                    {previewScreen?.ScreenLayout}
                    </Text>
                  </div>
                    <div className="bg-gray_901 flex items-center h-[auto] m-auto rounded-[4px] w-[100%]">
                      <Img src={previewScreen?.IconTempScreen} alt="imageSixtyTwo_Two"
                        className="h-[100%] m-[auto] object-cover cursor-pointer rounded-[4px] w-[100%]" 
                        onClick={() => setPreviewScreenModal(true)}
                      />
                    </div>
                </div>
            ) : (
              <div className='bg-gray_901 flex items-center justify-center p-[14px] rounded-[14px] h-[100%]'>
                <Text
                    className="font-normal leading-[150.00%] my-[112px] not-italic text-center text-gray_501 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Select Screen To View Preview
                  </Text>           
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FETemplate;