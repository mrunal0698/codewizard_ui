import { Button, Img, Line, Text } from 'components';
import React, { useEffect, useRef, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Session from "shared/session";

const tags = ["Create an Entity", "Create a Relationship", "Create Fields","Create a Model"];

const AnimatedText = ({ text, entities, prompt }) => {
  return (
    <div className="bg-[#535353] p-2 rounded-[4px] flex flex-wrap w-auto">
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

const ChatControls = ({ chats, updateChat, fetchStreamingData, isStreaming, appData}) => {
  const [prompt, setPrompt] = useState('');
  const [textRow, setTextRow] = useState(1);
  const [files, setFiles] = useState([]);
  
  const { user } = useAuth0();
  const messagesEndRef = useRef(null);
  const { SessionId } = Session.Retrieve('InputDesign',true) || {};

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

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
    fetchStreamingData(raw, formdata, newRow);
   
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
      {chats.length < 1 && (
        <>
          <div className='flex flex-col justify-center items-center gap-3 w-auto my-auto h-40'>
            <Text
              variant="h5" as="h5"
              className="text-core"
            >
              Welcome to CodeWizGPT
            </Text>
            <Text
              variant="body2"
              className="text-hint text-center text-[12px]"
            >
              To get started enter your requirements in the chat.
            </Text>
          </div>
          <div className='p-2 flex flex-col w-full'>
            {tags.map((tag,idx) => {
                return(
                  <Button className="bg-base border-[1px] border-solid border-hint text-core text-xs p-2 rounded-sm fadeIn w-auto"
                    key={idx}
                    onClick={() => handleSend(`${tag}`)}
                  >
                    {tag} 
                  </Button>
                )
              })}
          </div>
        </>
      )}

      {chats.length > 0 && (
        <div className="p-4 flex flex-col gap-4 overflow-y-auto">
          {chats.map((x,idx) => (
            <div key={idx} className='w-auto'>
              <Text
                variant="h6" as="h6"
                className="bg-base p-2 mb-2 text-core text-left ml-auto rounded-[4px] w-max max-w-[90%]"
              >
                {x.q}
              </Text>
              <AnimatedText text={x.rslt?.responseMessage} entities={x.rslt?.listOfEntities}
                prompt={isStreaming && chats.length === idx+1} /> 
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      )}

      <div className='relative flex flex-col justify-start items-end gap-2 mt-auto w-full'>
        <Line className="h-[1px] bg-hint w-[100%]" />
        <div className='flex gap-4 flex-wrap'>
          {files.map(file => (
            <div className='relative border border-hint rounded-md py-1 px-4'>
                <Text
                  variant="body3"
                  className="text-hint text-center"
                >
                  {file.name}
                </Text>
                  <Img
                    src="images/add.png"
                    className="absolute right-1 top-1 h-3 w-3 rotate-45 hover:bg-error rounded-full cursor-pointer"
                    alt="image"
                    onClick={() => onRemoveFile(file)}
                  />
            </div>
          ))}
        </div>
        <div className='flex justify-start items-end gap-2 w-full'>
          <textarea
            id="promt"
            rows={textRow}
            className={`block p-2 w-[90%] h-full leading-6 text-sm text-core bg-secondary !font-inter border-none placeholder:text-hint resize-none`}
            placeholder="Enter your prompt here ..."
            name="prompt"
            onChange={onchange}
            value={prompt}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey && !isStreaming) {
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

          {!isStreaming && 
            <Img
              src="/images/send_icon.svg"
              className="cursor-pointer w-7"
              alt="question"
              onClick={() => handleSend(prompt)}
            />
          }
        </div>
      </div>
    </>
  );
};

const Component = ({ chats, updateChat, setAIprompt, fetchStreamingData, isStreaming, appData }) => {

  return (
    <div className={`bg-secondary p-3 border-[1px] border-hint rounded-lg fixed bottom-8 right-8 z-50`}>
      <div className="flex justify-between items-center rounded-t-lg cursor-pointer">
            <Text
             variant="h6" as="h6"
             className="text-core"
            >
             AI Generate
            </Text>
            <Img src="/images/img_arrowdown_gray_50_24x24.svg" 
              className={`bg-base hover:bg-[#535353] w-[21px] h-[21px] cursor-pointer rounded-full`}
              onClick={() => setAIprompt(false)}
            />
      </div>
      <div className={`rounded-b-lg w-72 h-[450px] pt-3 transition-all duration-300 ease-in-out`}>
        <div className="flex flex-col h-full">
          <ChatControls chats={chats} updateChat={updateChat} appData={appData}
            fetchStreamingData={fetchStreamingData} isStreaming={isStreaming} />
        </div>
      </div>
  </div>
  );
};

export default Component;