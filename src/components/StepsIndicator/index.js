import { Button, Img, Line, Text } from 'components';
import React, { useState } from 'react';

const Stepper = ({ steps }) => {
    return (
      <div className="flex flex-col items-start justify-start gap-2">
        {steps.map((step, index) => (
            <>
                <div key={step.id} className="flex items-center gap-4 p-2 rounded w-full">
                    <div
                      className={`h-6 w-6 flex items-center justify-center rounded-full ${
                          step.status === "completed"
                          ? "bg-green-500"
                          : step.status === "active"
                          ? "bg-primary"
                          : "bg-gray-700"
                      }`}
                    >
                      <Text
                        className="text-core font-medium"
                        variant="body3"
                      >
                         {step.status === "completed" ? "✔" : index + 1}                     
                      </Text>
                    </div>

                    {/* {index < steps.length - 1 && (
                    <div className="flex-1 h-1 bg-gray-300">
                        <div
                        className={`h-1 ${
                            steps[index + 1].status === "completed" ||
                            steps[index + 1].status === "active"
                            ? "bg-blue-500"
                            : "bg-red-600"
                        }`}
                        >
                        </div>
                    </div>
                    )} */}
                    <div className='flex flex-col gap-2'>
                       <div className='flex gap-1 items-end'>
                          <Text
                              className="font-medium text-core text-left"
                              variant="body3"
                            >
                                {step.label}
                            </Text>
                            {!step.isRequired && (
                            <Text
                              className="text-hint"
                              variant="body3"
                            >
                              (Optional)
                            </Text>
                            )}
                       </div>
                        <Button 
                            className={`px-2 py-1 w-[140px] text-core text-xs text-medium rounded-xl shadow-md cursor-default ${
                                step.status === "completed" ? "text-[#01A650] bg-[rgba(1,166,80,0.1)]"
                                : step.status === "active" ? "text-[#016CD9] bg-[rgba(1,108,217,0.1)]"
                                : "text-[#E44D26] bg-[rgba(228,77,38,0.2)]"
                            }`}>
                        {step?.status}
                        </Button>
                    </div>
                </div>
                {index < steps.length-1 && <Line className="h-[1px] w-full bg-[#4E4E4E]" />}
            </>
        ))}
      </div>
    );
  };
   

const Component = ({ steps }) => {
  const [showStepper, setShowStepper] = useState(true);
  return (
    <>  
        {showStepper ? 
            <div className='fixed top-[60px] right-5 bg-secondary bg-opacity-[94%] w-[260px] rounded-md shadow-lg border border-[#4E4E4E] md:h-[calc(100vh-60px)] h-[430px] overflow-y-auto'>
              <div className='relative p-5'>
                <Img src="images/img_arrowdown_gray_50_24x24.svg" 
                    className={`${showStepper ? "rotate-0" : "rotate-180"} bg-secondary w-7 h-7 absolute top-2 right-2 p-1 ease-in-out transition-[all] duration-500 cursor-pointer rounded-full float-right hover:bg-[#4E4E4E]`}
                    onClick={() => setShowStepper(!showStepper)}
                  />
                {showStepper &&  <Stepper steps={steps} /> }
              </div>
            </div>
         : 
         <div className='fixed top-[60px] right-5'>
            <div className="data-label-left" data-label="Steps Guide">
              <img
                src="images/info.svg"
                className="bg-primary h-[41px] w-[41px] p-2 rounded-full cursor-pointer shadow-2xl"
                alt="info"
                onClick={() => setShowStepper(true)}
              />
            </div>
         </div>
         }

    </>
  )
}

export default Component