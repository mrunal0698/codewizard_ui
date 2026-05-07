import { Button, Img, Text } from 'components'
import React from 'react'
import Helper from "shared/helper";
import Configurator from './Configurator';

const steps = ["Starting Code Generation","Pushing Code","Deploying Code","Running URL"];

const Spinner = ({className}) => (
  <div class={`${className} border-blue-500 border-t-transparent rounded-full animate-spin`}></div>
)

const StepSlider = ({activeStep}) => {
  return (
    <div className="relative w-full h-20 overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
          {
           activeStep === -1 ? (<Text variant="p" as="p" className="text-error">Failed to preview application</Text>)
            : steps.map((step, index) => (
              <div className={`step-text absolute flex gap-4 transition-all duration-1000 ease-in-out ${
                index === activeStep-1 ? 'block animate-slide-down' : 'hidden'
              }`}>
                  <Img src="images/ming_ai.svg" alt="code wizard" className="w-5 animate-fade" />
                  <p
                    key={index}
                    className='text-core'
                  >
                    {step}
                  </p>
              </div>
          ))}
      </div>
    </div>
  );
};


const PreviewApp = ({ appData, activeStep, isStreaming }) => {
  
  if(isStreaming) {
    return (
      <div className='w-full h-full p-5 sm:p-2 gap-4'>
        <div className='w-full h-full bg-[#3F3F3F] flex justify-center items-center rounded-xl border border-[#6D6D6D]'>
          <Spinner className="w-5 h-5 border-2"/> 
          <Text variant="body2" className="text-core ml-2">Loading</Text> 
        </div>
      </div>
    )
  }
   
  return (
    <div className='w-full h-full flex flex-col p-5 sm:p-2 gap-4'>
        {!Helper.IsJSONEmpty(appData) && (
          <div className='flex justify-between items-center'>
            <Text variant="p" as="p" className="text-core">{appData.ProjectName}</Text>
            <div className='flex gap-2'>
               <a
                className='bg-[#000000] text-core flex items-center rounded px-2.5 py-1 text-sm gap-2.5 cursor-pointer'
                href={appData?.LiveURL}
                target='_blank'
                rel='noreferrer'
              > 
                Open in new tab
              </a>
              <a
                className='bg-[#000000] text-core flex items-center rounded px-2.5 py-1 text-sm gap-2.5 cursor-pointer'
                href={appData?.GitHubURL}
                target='_blank'
                rel='noreferrer'
              > 
                <Img src="images/code-linear.svg" alt="code wizard" className="w-5" />
                View Code
              </a>
              <Button
                className='bg-[#000000] text-core flex items-center rounded px-2.5 py-1 text-sm gap-2.5 cursor-not-allowed'
                leftIcon={(
                  <Img src="images/edit-outline.svg" alt="code wizard" className="w-5" />
                )}
              > Configure </Button>
            </div>
          </div>
        )}
        <div className='w-full h-full bg-[#3F3F3F] flex justify-center items-center rounded-xl border border-[#6D6D6D]'>
            {(activeStep && activeStep < steps.length) ? <StepSlider activeStep={activeStep} /> 
             : 
              !Helper.IsJSONEmpty(appData) && Helper.IsJSONEmpty(appData.LiveURL) ? (
                <Text variant="p" as="p" className="text-error">Failed to preview application</Text>
               ) 
               :
              <Configurator url={appData.LiveURL} />
            }
        </div>
    </div>
  )
}

export default PreviewApp