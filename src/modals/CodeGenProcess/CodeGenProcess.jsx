import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Text } from "components";
import HorizontalLinearStepper from 'components/HorizontalLinearStepper';

const frontendCodeGenSteps = [
  "Code Generation Started",
  "Application Code Generated",
  "Code Generated for Selected Capabilities",
  "Integrated with Backend",
  "Pushed to Git",
  "Code Generation Process Successful",
];
const backendCodeGenSteps = [
  "Code Generation Started",
  "Application Code Generated",
  "Test Cases, Postman Collection & Selected Capabilities Generated",
  "Integrated with Database",
  "Pushed to Git",
  "Code Generation Process Successful"
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '65%',
  height: '75%',
  bgcolor: 'blur',
  boxShadow: 24,
};

const CodeGenProcess = (props) => {
  const { activeStep, projectType, codeGenerationModal } = props;

  return (
    <div>
      <Modal
        open={codeGenerationModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="sm:!w-[90%] md:!w-[90%]">
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%] bg-gray_901">
          <Text
            className="font-medium md:mt-[0] text-gray_50 text-left w-[auto] p-4"
            as="h3"
            variant="h3"
          >
            Generating Code
          </Text>
          <div className="min-h-[70vh] bg-gray_901 flex items-center justify-start max-w-[960px] mx-[auto] md:px-[20px] w-[100%]">
            <HorizontalLinearStepper activeStep={activeStep} projectType={projectType} 
            steps={projectType === "Front End" ? frontendCodeGenSteps : backendCodeGenSteps } />             
          </div>
        </div>
        </Box>
      </Modal>
    </div>
  );
}

export default CodeGenProcess;
