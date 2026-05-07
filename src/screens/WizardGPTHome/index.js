import { Button, Img, Input, Line, Text } from 'components';
import React, { useEffect, useRef, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Session from "shared/session";
import { WIZARD_GPT } from 'utils/constants';
import helper from "shared/helper";
import { useNavigate } from 'react-router-dom';
import { AppRunnerService, DakshService, GenerateFeatures, GetUserProjects, UpdateCapp } from 'shared/services';
import { CreateFrontendProject, OnUploadmodel } from 'shared/common';
import Functions from "./childs/Functions";
import PreviewApp from './childs/PreviewApp';
import session from "shared/session";

const tags = ["Create an Entity", "Create a Relationship", "Create Fields","Create a Model"];
const steps = ["Starting Code Generation","Pushing Code","Deploying Code","Running URL"];

const frdConfig = {
    "feTeckstack": { "FeTechId": 1, "Name": "React", "Icon": "images/img_globe_light_blue_300.svg" },
    "FrontendAppTheme": {},
    "feSelectedScreenIDList": [ 3, 4, 6 ],
    "feScreens": [{ "TeScreenId" : 3 }, { "TeScreenId" : 4 }, { "TeScreenId" : 6 }],
    "basicDetail": { "ApplicationDescription": null, "Server": "Nginx", "BuildTool": "NPM", "GithubCred": 64 },
    "UITemplate": { "TemplateId": 5 },
    "capabilities": [
      {"Name":"Mirage for API Mocking","CapFeatures":["Simulate API calls"],"Icon":"images/img_group52988.svg","Attribute1":null,"Description":"Mirage JS is an API mocking library that lets you build, test and share a complete working JavaScript application without having to rely on any backend services","Attribute3":null,"Attribute2":null,"CapId": 31}
    ]
}

const Spinner = ({className}) => (
  <div class={`${className} border-blue-500 border-t-transparent rounded-full animate-spin`}></div>
)

const AnimatedText = ({ text, entities, prompt }) => {
  return (
    <div className="relative p-2 rounded-[4px] flex flex-wrap w-auto">
      <Img src="images/CW-logo-light.png" alt="code wizard" className=" absolute w-8 -top-5 -left-5" />
      {text && prompt ? text.split(' ').map((x, index) => (
        <span
          key={index}
          className="opacity-0 text-core text-[14px] fadeIn"
          style={{
            animationDelay: `${index * 0.2}s`, 
          }}
        >
          {x}&nbsp; 
        </span>
      )) : (
        <Text
          variant="body2" 
          className="text-core text-left w-auto"
        >
         {text}
        </Text>
      )}
        {entities && entities.length > 0 && (
            <>
             <div className="w-full my-2"></div>
              {entities.map((entity, index) => (
                  <span
                    key={index}
                    className="opacity-0 text-core text-[14px] fadeIn"
                    style={{
                      animationDelay: `${(text.split(' ').length + index) * 0.03}s`,
                    }}
                  >
                    {entity}{index !== entities.length - 1 && ','}&nbsp;
                  </span>
              ))}
            </>
        )}
    </div>
  )
}

const ChatControls = ({ chats, updateChat, fetchStreamingData, isStreaming, activeStep, appData, expandAI, showPreview }) => {
  const [prompt, setPrompt] = useState('');
  const [textRow, setTextRow] = useState(3);
  const [files, setFiles] = useState([]);

  const { user } = useAuth0();
  const messagesEndRef = useRef(null);
  const { SessionId } = Session.Retrieve('WizardDesign',true) || {};

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  useEffect(() => {
    if(!expandAI) setTextRow(1);
    else setTextRow(3)
  },[expandAI])

  const onchange = (e) => {
    const textareaLineHeight = 23;
    const { scrollHeight } = e.target;

    const currentRow = Math.floor(scrollHeight / textareaLineHeight);

    if (currentRow >= 3) {
        setTextRow(3);
    } else {
        setTextRow(currentRow);
    }
    setPrompt(e.target.value);
  }

  const handleSend = async (prompt) => {
    if (!prompt) return;
 
    const newRow = [...chats, { q: prompt }];
    updateChat(newRow); 
  
    const raw = {
      sessionId: SessionId,
      email: user?.email,
      userPrompt: prompt,
      queryId: appData.queryId,
      language: "Java",
      model: "openai",
    };
    const formdata = new FormData();
    const blob = new Blob([JSON.stringify(raw)], { type: "application/json" });

    formdata.append("payload", blob, "payload.json");
    files.forEach(file => {
      formdata.append("files", file);  
    })
    setPrompt(''); 
    setFiles([]);
    fetchStreamingData(raw,formdata,newRow);
  };

  const onUploadFile = (e) => {
    const newFile = e.target.files?.[0]; 
    if (newFile && !files.some(file => file.name === newFile.name)) {
      setFiles(prev => [...prev, newFile]); 
    }
  }

  const onRemoveFile = (file) => {
    setFiles(prev => prev.filter(x => x.name !== file.name));
  }

  return (
    <>
      <div className='w-full h-[calc(100%-225px)] px-4 overflow-y-auto'>
        {chats.length < 1 && (
          <div  className='flex flex-col h-full' >
            <div className={`flex flex-col justify-center items-center gap-3 w-auto my-auto h-40`}>
              <Text
                variant="h2" as="h2"
                className={`${showPreview && "text-xl"} text-core`}
              > 
                <Img src="images/CW-logo-light.png" alt="code wizard" className="w-[83px] font-medium mx-auto mb-6" />
                Welcome to Code Wizard AI
              </Text>
              <Text
                variant="body2"
                className="text-hint text-center text-[12px]"
              >
                Describe Your Application
              </Text>
            </div>
            {/* <div className='p-2 grid sm:grid-cols-1 grid-cols-2 gap-4 max-w-[534px] mx-auto pb-6'>
              {tags.map((tag,idx) => {
                  return(
                    <Button className="bg-base border-[1px] border-solid border-core border-opacity-50 text-core text-xs p-2 rounded-lg fadeIn w-[260px] sm:w-[auto]"
                      key={idx}
                      onClick={() => setPrompt(tag)}
                    >
                      {tag} 
                    </Button>
                  )
                })}
            </div> */}
          </div>
        )}
        {chats.length > 0 && (
          <div className="flex flex-col gap-4 md:w-[100%] max-w-[760px] py-4 pl-10 md:px-4 mx-auto">
            {chats.map((x,idx) => (
              <div key={idx} className='w-auto'>
                <Text
                    variant="h6" as="h6"
                    className="bg-[#121212] p-2 mb-2 text-core text-left ml-auto rounded-[4px] w-max max-w-[70%]"
                >
                    {x.q}
                </Text>

                <AnimatedText text={x.rslt?.responseMessage} entities={x.rslt?.listOfEntities}
                    prompt={isStreaming && chats.length === idx+1} /> 

                {activeStep && chats.length-1 === idx && (
                  activeStep === -1 ? 
                    <Button className="relative bg-base border text-left border-error border-opacity-50 text-error text-xs p-2 rounded-lg fadeIn w-[260px] sm:w-[auto] mt-4 float-right">
                      Failed
                    </Button>
                    :
                    activeStep === 4 ? 
                      <a className="relative bg-base border-[1px] border-solid border-hint border-opacity-50 text-primary text-xs font-bold p-2 rounded-lg fadeIn w-[260px] sm:w-[auto] mt-4 float-right cursor-pointer hover:bg-secondary"
                        href={appData.LiveURL} target='_blank' without rel="noreferrer"
                      >
                        Open App
                        <Img class="w-5 h-5 absolute top-1.5 right-2 rounded-full border-2 p-[2px] border-primary" src="images/check_icon.svg" alt="Done" />
                      </a>
                      :
                      <Button className="relative bg-base border text-left border-hint border-opacity-50 text-hint text-xs p-2 rounded-lg fadeIn w-[260px] sm:w-[auto] mt-4 float-right">
                        {steps[activeStep-1]} 
                        <Spinner className="w-5 h-5 absolute top-1.5 right-2 border-2"/>
                      </Button>              
                  )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      <div className='bg-base w-[100%] flex flex-col items-center p-4'>
        <div className='relative bg-[#2F2F2F] flex flex-col gap-2 w-full max-w-[760px] px-5 py-2 rounded-3xl mx-auto'>
            <div className='flex gap-4 flex-wrap'>
              {files.map(file => (
                <div className='relative border border-hint rounded-md py-4 px-5'>
                    <Text
                      variant="body2"
                      className="text-hint text-center text-[12px]"
                    >
                      {file.name}
                    </Text>
                      <Img
                        src="images/add.png"
                        className="absolute right-1 top-1 h-4 w-4 rotate-45 hover:bg-error rounded-full cursor-pointer"
                        alt="image"
                        onClick={() => onRemoveFile(file)}
                      />
                </div>
              ))}
            </div>

            <div className='flex justify-between items-end gap-2'>
              <textarea
                id="promt"
                rows={textRow}
                className={`block p-2 w-[95%] leading-6 text-sm text-core bg-[#2F2F2F] !font-inter border-none placeholder:text-hint resize-none rounded-3xl`}
                placeholder="Chat with Code Wizard"
                name="prompt"
                onChange={onchange}
                value={prompt}
                onKeyDown={(e) => {
                  if ((!activeStep || activeStep ===-1 || activeStep === 4) && e.key === 'Enter' && !e.shiftKey && !isStreaming) {
                    e.preventDefault();
                    handleSend(prompt);
                  }
                }}
              /> 
            </div>

            <div className="flex justify-between items-center mt-2 w-full">
              <div>
                <input
                  id="fileInput"
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={onUploadFile}
                  className="absolute inset-0 w-full h-full hidden cursor-pointer"
                />
      
                <label htmlFor="fileInput" className="data-label-right" data-label="Upload files">
                  <Img
                    src="images/add.png"
                    className="cursor-pointer hover:bg-hint rounded-full p-1 border border-hint w-7"
                    alt="clock"
                  />
                </label>
              </div>

                {!isStreaming && (!activeStep || activeStep ===-1 || activeStep === 4) && 
                  <Img
                    src="images/send_icon.svg"
                    className="cursor-pointer w-7 pb-1"
                    alt="question"
                    onClick={() => handleSend(prompt)}
                  />
                }
            </div>
        </div>
        <Text
          variant="body2"
          className="text-hint text-center text-[10px] mt-3"
        >
          AI outputs can be misleading or wrong
        </Text>
      </div>
    </>
  );
};

const RenderHistory = ({ setAppData, expandAI, setExpandAI, showPreview, setShowPreview }) => {
  const [rows, setRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const { user } = useAuth0();

  const fetchData = async () => {
    global.Busy(true);
    const projectRes = await GetUserProjects(user?.email);
    global.Busy(false);
    if (projectRes.status) {
      const bkndapps = projectRes.values.value.filter(x => x.ProjectFrontendApp);
      setRows(bkndapps);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  const totalPages = Math.ceil(rows.length / itemsPerPage);

  const handlePageChange = (direction) => {
    setCurrentPage((prev) => Math.max(1, Math.min(totalPages, prev + direction)));
  };
  const onSelectApp = (item) => {
    if(expandAI) setExpandAI(false);
    setShowPreview(true);
    setAppData(item);
  }

  return(
    <>
      {helper.IsArrayEmpty(rows) ?
        <Text variant="h6" as="h6" className="text-core m-auto"> No Previous Projects </Text>
        : 
        <>
           <div className={`${!showPreview ? "grid-cols-3 md:grid-cols-2 sm:grid-cols-1" : "grid-cols-1"} grid gap-6 h-full px-4 py-2 overflow-y-auto`}>
            {rows.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
             ?.map((item) => (
              <div
                key={item.ProjectId}
                className="relative bg-core shadow-md rounded-lg overflow-hidden transition-transform transform min-h-[200px] max-h-[250px] cursor-pointer"
                onClick={() => onSelectApp(item)}
              >
                  {item.LiveURL ? (
                    <div className="relative h-48"
                      style={{ transform: 'scale(0.5)', transformOrigin: 'top left', 
                         width: '250%',  height: '250%' }}
                    >
                      <iframe
                        src={item?.LiveURL}
                        className="w-full h-full border-none overflow-hidden"
                        title={item?.ProjectName}
                        loading="lazy"
                      ></iframe>
                      <div
                        className="absolute h-full inset-0 z-10 flex items-end justify-start"
                        title="Static Preview"
                      >
                        {/* {item.ProjectName === appData?.ProjectName && (
                          <div className="w-8 h-8 rounded-full top-[50] bottom-[50] absolute bg-cw_shade flex items-center justify-center">
                            <Img src="images/carbon_view-filled.png" alt="imageSixtyTwo_Two"
                              className="rounded-full w-5 bg-cw_shade" />
                          </div>
                        )} */}
                      </div>
                    </div>
                  ) : (
                      <Img src="images/img_globe_light_blue_300.svg" alt="code wizard" className="w-36 mx-auto" />
                  )}            
                    <div className="absolute left-1 bottom-1 p-1">
                      <h2 className="text-lg font-semibold">{item?.ProjectName}</h2>
                    </div>
              </div>
             ))}
           </div>
           <div className="flex justify-between items-center mt-4">
              <Button
                className={`px-3 py-2 rounded ${currentPage === 1 ? "invisible" : "hover:text-primary text-subtle text-sm"}`}
                disabled={currentPage === 1} 
                onClick={() => handlePageChange(-1)}
              >
              {'<<'} Previous
              </Button>
              
              <Text variant="body3" className="text-hint">
                Page {currentPage} of {totalPages}
              </Text>
    
              <Button
                className={`px-3 py-2 rounded ${
                  currentPage === totalPages ? "invisible" : "hover:text-primary text-subtle text-sm"}`}
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(1)}
              >
                Next {'>>'}
              </Button>
           </div>
        </>
      }
    </>
  )
}

const defaultError = "An error occurred while processing your request.";

const WizardGPTHome = () => {
  const [chats, setChats] = useState([]);
  const [logs, setLogs] = useState({});
  const [isStreaming, setIsStreaming] = useState(false);
  const [tables, setTables] = useState([]);
  const [appData, setAppData] = useState({});
  const [activeStep, setActiveStep] = useState(null);
  const [expandAI, setExpandAI] = useState(true);
  const [appFeatues, setAppFeatues] = useState({});
  const [showHistory, setShowHistory] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const { user } = useAuth0();

  const short_uuid = require('short-uuid');

  const convertString = (str, regex) => {
    return str.replace(regex, '');
  }

  const fetchStreamingData = async (payload, formdata, newRow) => {
    setActiveStep(null);
    setShowPreview(true);
    setAppData({});
    
    let url = `${WIZARD_GPT}/generate?format=json`;
    setIsStreaming(true);
  
    try {
      const aiRequests = [
        fetch(url, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${Session.Retrieve("bearer_token")}`,
          },
          body: formdata,
        }),
        GenerateFeatures(payload)
      ];
  
      const [streamingResponse, featureResponse] = await Promise.all(aiRequests);
  
      // Handle streaming API response
      if (!streamingResponse.ok) {
        global.AlertPopup("warning", defaultError);
        setIsStreaming(false);
        return;
      }
  
      const reader = streamingResponse.body.getReader();
      const decoder = new TextDecoder();
  
      let resMsg = false;
      let result = "";
  
      while (true) {
        const { value, done } = await reader.read();
        if (done) { setIsStreaming(false); break; }
  
        result += decoder.decode(value, { stream: true });
        const splitPatterns = ['{"responseMessage"', '{"listOfEntities"', '{"entity":{', '{"delta"', '{"model"', '{"appId"', '{"queryId"'];
  
        const regex = new RegExp(splitPatterns.join('|'), 'g');
  
        const markedData = result.replace(regex, match => `|||${match}`);
        const jsonObjects = markedData.split('|||').filter(Boolean).map(obj => JSON.parse(obj));
  
        if (!resMsg) {
          jsonObjects.forEach(x => {
            if (Object.keys(x).includes("responseMessage" || "listOfEntities")) {
              const updatedRow = { q: payload.userPrompt, rslt: { responseMessage: x?.responseMessage, listOfEntities: x?.listOfEntities } };
              const updatedChats = [...newRow.slice(0, newRow.length - 1), updatedRow];
              updateChat(updatedChats);
            }
          });
          resMsg = true;
        }
  
        const newRslt = jsonObjects.reduce((acc, val) => { 
          if (val.entity) { return { ...acc, entities: [...(acc?.entities || []), val.entity] } }
          return { ...acc, ...val };
        }, {});
  
        if (!helper.IsNullValue(newRslt.queryId)) {
          setAppData(prev => ( {...prev, queryId: newRslt.queryId} ));
          const classes = Functions.MergeTables(tables, newRslt);
          if (!helper.IsArrayEmpty(classes)) { 
            setTables(classes); 
            onSubmit(newRslt.applicationName, classes); 
          }
        }
      }
  
      // Handle GenerateFeatures response
      if (featureResponse?.status) {
        setAppFeatues(prev => ({ ...prev, theme: featureResponse.values.theme }));
      }
    } catch (error) {
      const errorRow = { q: payload.userPrompt, rslt: { responseMessage: defaultError }};
      const updatedChats = [...newRow.slice(0, newRow.length - 1), errorRow];
      
      updateChat(updatedChats);
      setIsStreaming(false);
      setActiveStep(-1);
      global.AlertPopup("warning", defaultError);
      console.error('Error:', error);
    }
  };
   
  const updateChat = (x) => {
      setChats(x)
  }

  const onSubmit = async (DesignName,tables) => {      
    try {
      setActiveStep(1);
      const data = Functions.ToInputJson(DesignName,tables);
  
      const jsonString = JSON.stringify(data);
      const jsonBlob = new Blob([jsonString], { type: "application/json" });
      const formdata = new FormData();
      const fileName = DesignName.split(/[\s-]/).join("_");
      
      formdata.append("filename", jsonBlob, `${fileName}.json`); 
      formdata.append("tech", "JSON");
      
      const validationRslt = Functions.validateModel(data.model);
      if(!helper.IsJSONEmpty(validationRslt.errors)) { setLogs(validationRslt); console.log(validationRslt); setActiveStep(-1); return; };
      const res = await DakshService(formdata);

      if(res.status){
        const modelData = {          
          ModelType: "JSONAI", ModelName: DesignName, UserName: user?.email, ModelFileIndustry: 4,
          ModelFileName: `${fileName}.json`, Version:"v1"
        };
        const uploadRes = await OnUploadmodel(fileName, "json", formdata, modelData);

        if (uploadRes.status) generateFr(DesignName, uploadRes.values, res.values.docId);
        else setActiveStep(-1);
        
      } else setActiveStep(-1); 
    } catch (e) {
      setActiveStep(-1);
      console.log("error",e);
    }
  }

  // const GenerateCode = async (DesignName, design) => {
  //   const ApplicationName = convertString(DesignName,/[^a-zA-Z0-9.\_]/g);
  //   const Namespace = "com.app." + convertString(DesignName,/[^a-zA-Z0-9\_]/g);
  //   const timestamp = Date.now().toString().slice(-3);
  //   const DatabaseName = `${ApplicationName.toLowerCase()}_${timestamp}`;

  //   const appConfig = { ...bkndConfig, ...{ basicDetail : { ...bkndConfig.basicDetail, ...{ ApplicationName, Namespace, DatabaseName }} }, modelType : design }
  //   const projectDetail = { ProjectName: DesignName };

  //   setActiveStep(2);
  //   const bkndRes = await CreateBackendPoject(appConfig, projectDetail, user, ()=>{});

  //   if (!bkndRes.status){ setActiveStep(-1); return; }

  //   const { ProjectId, applicationServiceName, gitHubURL } = bkndRes?.values;
  //   let deployData = { gitHubURL, applicationServiceName, projectId: ProjectId, projectType: 'BACKEND' };

  //   setActiveStep(3);
  //   const appRes = await AppRunnerService(deployData);

  //   if (appRes.status) { setActiveStep(4); setAppData(prev => ({...prev, ...appRes.values})) }
  //   else setActiveStep(-1);
  // }

  const configureApp = async (DocId, name) => {
    const uuid = short_uuid.generate();
    const raw = { theme : appFeatues?.theme, name }
    const params = {DocId, uuid}
    const res = await UpdateCapp(params,raw);
    return res;
  }

  const generateFr = async (DesignName, design, DocId) => {
    const ApplicationName = convertString(DesignName,/[^a-zA-Z0-9.\_]/g);
    const Namespace = "com.app." + convertString(DesignName,/[^a-zA-Z0-9\_]/g);

    let appConfig = { ...frdConfig, ...{ basicDetail : { ...frdConfig.basicDetail, ...{ ApplicationName, Namespace,  }} }, api : { BackendApp : design } }
    const projectDetail = { ProjectName: DesignName };

    const configureRes = await configureApp(DocId, DesignName);
    if(!configureRes.status) { setActiveStep(-1); return; }
    appConfig = {...appConfig, configuratorDetail : { value : configureRes.values.cAppId} }
    
    setActiveStep(2);
    const frdRes = await CreateFrontendProject(appConfig, projectDetail, user, ()=>{});
    if (!frdRes.status) { setActiveStep(-1); return; }

    const { ProjectId, applicationServiceName, gitHubURL } = frdRes?.values;
    let deployData = { gitHubURL, applicationServiceName, projectId: ProjectId, projectType: 'FRONTEND', useSecureProtocol: true };

    setActiveStep(3);
    const appRes = await AppRunnerService(deployData);
    
    if (appRes.status) { setActiveStep(4); setAppData({ GitHubURL: gitHubURL, ProjectName : DesignName, LiveURL : appRes.values.url }) }
    else setActiveStep(-1);
  }

  const onClickTab = (bool) => {
    setShowHistory(bool);
    setActiveStep(0);
    setAppData({});
  }
  
  useEffect(() => {
      session.Store("WizardDesign", { SessionId:short_uuid.generate() }, true);
  }, [])

  return (
    <div className={`relative bg-base flex justify-between items-start h-full w-full -mx-8`}>
        {!expandAI && <Img src="images/sidebar.svg" alt="code wizard" className="absolute left-2 top-5 w-[27px] z-50 cursor-pointer"
              onClick={() => setExpandAI(!expandAI)} /> }

        <div className={`${!showPreview ? "w-full" : !expandAI ? "w-0 invisible" : "w-[30%]" } 
            sm:absolute sm:top-0 sm:left-0 flex flex-col h-full ease-in-out duration-500 transition-[width]`}>
          <div className='flex justify-between items-center w-full px-4 py-4'>
            <div className='flex rounded border border-[#6D6D6D]'>
              <Button
               className={`${showHistory ? "bg-base" : "bg-[#2F2F2F]"}
                text-core flex items-center rounded px-2.5 py-1 text-sm gap-1`}
               leftIcon={( <Img src="images/ming_ai.svg" alt="code wizard" className="w-5" /> )}
              onClick={() => onClickTab(false)}
              >
                Chats
              </Button>
              <Button
                className={`${!showHistory ? "bg-base" : "bg-[#2F2F2F]"}
               text-core flex items-center rounded px-2.5 py-1 text-sm gap-1`}
                leftIcon={( <Img src="images/solar_history.svg" alt="code wizard" className="w-5" /> )}
                onClick={() => onClickTab(true)}
              >
                History
              </Button>
            </div>
            {showPreview && (
              <Img src="images/sidebar.svg" alt="code wizard" className="w-[27px] z-50 cursor-pointer"
                onClick={() => setExpandAI(!expandAI)} />
            )}
          </div>
          {showHistory ?
            <RenderHistory appData={appData} setAppData={(e) => setAppData(e)} expandAI={expandAI} setExpandAI={bool => setExpandAI(bool)}
              showPreview={showPreview} setShowPreview={(bool) => setShowPreview(bool)} />
          :
          <ChatControls chats={chats} updateChat={updateChat} appData={appData} expandAI={expandAI} showPreview={showPreview}
            fetchStreamingData={fetchStreamingData} isStreaming={isStreaming} activeStep={activeStep} />
          }
        </div>
        {showPreview && (
          <div className={`${!expandAI ? "w-[100%] ml-7" : "w-[70%]" } sm:w-[100%] h-full overflow-x-hidden`}>
            <PreviewApp appData={appData} activeStep={activeStep} isStreaming={isStreaming} />
          </div>
        )}
    </div>
  );
};

export default WizardGPTHome