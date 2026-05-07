import { Button, Img, Text } from 'components';
import React, { useState } from 'react'
import AlertBoxModal from "modals/AlertBoxModal";
import FETemplateselectedModal from "modals/FETemplateselected";
import PreviewScreenModal from 'modals/PreviewScreenModal';
import { GetUserModels, InvokeAppConfigurations } from 'shared/services';
import helper from "shared/helper";
import session from "shared/session";
import CWModal from 'modals/Modal';

const Spinner = ({className}) => (
  <div class={`${className} border-blue-500 border-t-transparent rounded-full animate-spin`}></div>
)

const RenderScreen = ({
  previewScreen, onClickPreviewScreenHandler, feSelectedScreens,
  onRemoveScreen, onAddScreen
}) => {
  const [showInfo, setShowInfo] = useState(false);

  const isScreenSelected = feSelectedScreens?.some(
    (elem) => elem?.TeScreenId === previewScreen?.TeScreenId
  );

  const handleToggleInfo = () => setShowInfo((prev) => !prev);

  return (  
    <div className="flex flex-col items-center gap-3 w-full h-full">
      <div className="flex items-center justify-between w-full sm:gap-10">
        {previewScreen.Attribute1 !== 'false' && (
          <>
            <Img
              src={showInfo ? 'images/img_close.svg' : 'images/info.svg'}
              className="h-[26px] w-[26px] rounded-full cursor-pointer"
              alt="info"
              onClick={handleToggleInfo}
            />
          
            <ActionButton
              isSelected={isScreenSelected}
              onClick={() => (isScreenSelected ? onRemoveScreen(previewScreen) : onAddScreen(previewScreen))}
            />
          </>
        )}
      </div>

      <div className="relative flex flex-col my-auto overflow-hidden">
        <div className="flex flex-col justify-center min-h-auto max-h-[315px] rounded w-full overflow-y-auto">
          <Img src={previewScreen?.IconTempScreen} alt="screen preview"
            className="cursor-pointer w-full" 
            onClick={onClickPreviewScreenHandler}
          />
        </div>

        {previewScreen.Attribute1 === 'false' && (
          <OverlayMessage message="Coming Soon..." />
        )}

        {showInfo && previewScreen.Attribute1 !== 'false' && (
          <DescriptionOverlay description={previewScreen.ScreenDescription} details={previewScreen.Attribute2} />
        )}
      </div>
    </div>
  );
};

const ActionButton = ({ isSelected, onClick }) => (
  <Button
    className={`text-core border-2 cursor-pointer font-medium w-[138px] py-2 rounded text-xs text-center ${
      isSelected ? 'border-error' : 'border-primary px-6'
    }`}
    onClick={onClick}
  >
    {isSelected ? 'Remove Screen' : 'Add Screen'}
  </Button>
);

const OverlayMessage = ({ message }) => (
  <div className="absolute w-auto h-8 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-hint bg-opacity-60">
    <Text className="font-bold text-center text-core rounded-lg px-3 py-1" as="h6" variant="h6">
      {message}
    </Text>
  </div>
);

const DescriptionOverlay = ({ description, details }) => (
  <div
    className="absolute inset-0 flex flex-col items-start justify-end rounded px-3 pb-6 bg-gradient-to-b from-black/50 via-black/70 to-black/80"
  >
    <Text variant="body2" className="text-core font-bold leading-4 pb-4">
      {description}
    </Text>
    <ul className="list-inside list-disc">
      {details?.split('\n').map((item, index) => (
        <li key={index} className="text-core text-xs leading-6">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Configurator = ({ configuratorUrl, setConfiguratorUrl, updateAppData }) => {
  const [isLoading, setIsLoading] = useState(true);
  return(
    <CWModal
         open={configuratorUrl ? true : false}
         className="w-[100%] bg-[#3F3F3F] rounded-lg"
        > 
          <div className='flex flex-col w-[100%] h-[100vh] gap-4 py-4'>
            <div className='flex justify-end gap-3'>
               <a
                className='bg-[#000000] hover:bg-secondary text-core flex items-center rounded px-2.5 py-1 text-sm gap-2.5 cursor-pointer'
                href={configuratorUrl}
                target='_blank'
                rel='noreferrer'
              > 
                Open in new tab
              </a>
              <Button
                className='bg-primary text-core flex items-center rounded px-2.5 py-1 text-sm gap-2.5 hover:opacity-95' 
                onClick={_ => { setConfiguratorUrl(""); updateAppData("done", "screen")}}
              > 
                close 
              </Button>
            </div>
            {isLoading && (
              <div className="flex justify-center items-center w-full h-full">
                <div className='w-full h-full bg-[#3F3F3F] flex justify-center items-center rounded-xl border border-[#6D6D6D]'>
                  <Spinner className="w-5 h-5 border-2"/> 
                  <Text variant="body2" className="text-core ml-2">Loading</Text> 
                </div>
              </div>
            )}
            <iframe
              src={configuratorUrl}
              className={`w-full h-full border-0 rounded-md ${isLoading ? "hidden" : ""}`}
              title="Preview"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </CWModal>
  )
}

const PreviewScreen = (props) => {
    const { previewScreen, onAddScreen, onRemoveScreen,
            deleteAllScreen, appData, updateAppData, rows } = props;
    const [configureModelReviewStatus,setConfigureModelReviewStatus] = useState({status:false,reviewMessage:""});
    const [feSelectedScreenToRender, SetFeSelectedScreenToRender] = useState(false);
    const [previewScreenmodal,setPreviewScreenModal] = useState(false);
    const [configuratorUrl, setConfiguratorUrl] = useState("");

    const short_uuid = require('short-uuid');
    const uuid = short_uuid.generate();

    const onClickPreviewScreenHandler = () => {
        setPreviewScreenModal(true);
      };
    const invokeConfigurator = async () => {
      try{
          global.Busy(true);
          const rslt = await GetUserModels(appData?.api?.BackendApp);
          if(rslt.status){
            const res = await InvokeAppConfigurations(rslt.values,uuid);
            global.Busy(false);
            if(res?.status ){
              var configuratorURL = rows?.Attribute1;
              const cAppId = res?.values?.value;
              var selectedScreenId = appData.feScreens?.map(x => x.TeScreenId);
              var templateId = rows?.TemplateId;
              const token = session.Retrieve("bearer_token");
              const url = configuratorURL + "?selectedScreenIds=" + [selectedScreenId] + "&templateId=" + templateId +"&cAppId=" + cAppId + "&auth="+token;
              updateAppData(res.values, "configuratorDetail");
              setConfiguratorUrl(url);
          } else {
            global.Busy(false);
            setConfigureModelReviewStatus(prevState => {
              return {...prevState,...{status:true,reviewMessage:"The chosen API is invalid. Please select a different API or deploy a new one."}}
              })
            } 
          }
          global.Busy(false);
      }catch(e){
        console.log(e);
        global.Busy(false);
        setConfigureModelReviewStatus(prevState => {
          return {...prevState,...{status:true,reviewMessage:"The chosen API is invalid. Please select a different API or deploy a new one."}}
        })
        }  
      }
    const updateConfigureModelReviewStatus = (value) => {
      setConfigureModelReviewStatus(prevState => {
        return {...prevState,...{status:value,reviewMessage:""}}
      })
    }
    const onRequestClose = () => {
    SetFeSelectedScreenToRender(false);
    }
  return (
    <>  
      <div className="flex flex-col md:w-[100%] w-[600px] h-[100%] shrink-0">
        <FETemplateselectedModal
          addedList={appData?.feScreens || []}
          feSelectedScreens={appData?.feScreens || []}
          selectedScreen={previewScreen}
          onRemoveScreen={onRemoveScreen}
          deleteAllScreen={deleteAllScreen}
          onRequestClose={onRequestClose}
          feSelectedScreenToRender={feSelectedScreenToRender}
        />
        <AlertBoxModal 
          isOpen={configureModelReviewStatus?.status}
          message={configureModelReviewStatus?.reviewMessage}
          onConfirm={() => updateConfigureModelReviewStatus(false)}
          confirmText="Try Again"
          className="w-[460px] sm:w-[95%]"
        />
        <PreviewScreenModal open={previewScreenmodal} onRequestClose={() => setPreviewScreenModal(false)} 
          previewIcon={previewScreen?.IconTempScreen} previewScreen={previewScreen}/>
        {!helper.IsJSONEmpty(previewScreen) ? (
           <div className='bg-gray_901 flex flex-col md:gap-[40px] gap-[12px] items-start justify-start p-[14px] rounded-[14px] h-[85%]'>
              {/* <div className="flex sm:gap-[40px] items-center justify-between w-[100%]">
                <Text className="text-gray_50 text-left w-[auto]" as="h6" variant="h6">
                {previewScreen?.ScreenLayout}
                </Text>
                {previewScreen?.Attribute1 !== "false" && (feSelectedScreens?.find((elem) => elem?.TeScreenId === previewScreen?.TeScreenId) ? ( 
                <Button
                className="border-[2px] border-solid border-red_400 cursor-pointer font-medium w-[138px] py-[8px] rounded-[4px] text-[12px] text-center text-gray-50"
                onClick={() => onRemoveScreen(previewScreen)}
                >
                  Remove Screen
                </Button>
                ) : (
                  <Button
                className="border-[2px] border-solid border-primary cursor-pointer font-medium w-[138px] px-[24px] py-[8px] rounded-[4px] text-[12px] text-center text-gray-50"
                onClick={() => onAddScreen(previewScreen)}
                >
                  Add Screen
                </Button>
                )
               )}
              </div> */}
              <RenderScreen previewScreen={previewScreen} onClickPreviewScreenHandler={onClickPreviewScreenHandler} 
                onAddScreen={onAddScreen} onRemoveScreen={onRemoveScreen} feSelectedScreens={appData?.feScreens}/>               
            </div>
        ) : (
          <div className='bg-gray_901 flex items-center justify-center p-[14px] rounded-[14px] h-[85%]'>
            <Text
                className="font-normal leading-[150.00%] my-[112px] not-italic text-center text-gray_501 w-[100%]"
                as="h6"
                variant="h6"
              >
                Select Screen To View Preview
              </Text>           
          </div>
        )}
       
        <div className="flex flex-row sm:gap-[40px] items-end justify-between md:w-[100%] w-[100%] h-[15%] pt-3">
          <Button
              className="border-primary text-gray-50 border-2 cursor-pointer font-semibold py-[10px] rounded-[7px] text-[15px] text-center w-[200px]"
              onClick={() => SetFeSelectedScreenToRender(true)}
          >
            Selected Screens 
          </Button>
          {appData?.feScreens?.length > 0 ? (
              <Button
              onClick={invokeConfigurator}
              className="bg-primary text-gray-50 cursor-pointer font-semibold sm:px-[20px] py-[10px] rounded-[7px] text-[15px] text-center w-[200px]"
              >
               Configure Screens
              </Button>
          ) : (
              <Button className="bg-primary text-[#83A9F3] font-semibold py-[10px] rounded-[7px] text-[15px] cursor-not-allowed text-center w-[200px]">
                Configure Screens
              </Button>
          )}
        </div>

        <Configurator configuratorUrl={configuratorUrl} setConfiguratorUrl={setConfiguratorUrl} updateAppData={updateAppData} />
      </div>
    </>
  )
}

export default PreviewScreen