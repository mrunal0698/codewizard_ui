import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Button, Img } from 'components';
import CancelProjectAlertModal from 'modals/CancelProjectAlertModal';
import { CLEAR_ALL_FRONTENDAPP_DETAIL } from 'store/slices/frontend.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CLEAR_ALL_BACKENDAPP_DETAIL } from 'store/slices/backend.slice';
import { CLEAR_ALL_FULLSTACKAPP_DETAIL } from 'store/slices/fullstack.slice';

const ColorlibStepIconRoot = styled('div')(({ ownerState }) => ({
  backgroundColor:"#232323",
  zIndex: 1,
  color: '#959595',
  width: 30,
  height: 30,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  border:"3px solid #232323",
  outline:"1.5px solid #bdbdbd",
  ...(ownerState.active && {
    backgroundColor:"#17FFA6",
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    color : "black",
    position : "relative",
    top:"0",
    outline:"1.5px solid #17ffa6",
  }),
  ...(ownerState.completed && {
    backgroundImage: `url("images/img_checkmark_teal_a400.svg")`, 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: '#232323',
    outline:"1.5px solid #17FFA6",     
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8"
  };

  return (
    <ColorlibStepIconRoot ownerState={{ active, completed }} className={className}>
      {completed ? (
         null
      ) : (
        icons[String(props.icon)]
      )}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};


const frontendSteps = [
  { label: 'Select A Model' },
  { label: 'Select Front End' },
  { label: 'Select Screen' },
  { label: 'Select Capabilities' },
  { label: 'Basic Details' },
  { label: 'Review' },
];
const BackendSteps = [
  { label: 'Select A Model' },
  { label: 'Select Back End' },
  { label: 'Select Database' },
  { label: 'Select Capabilities' },
  { label: 'Basic Details' },
  { label: 'Review' },
];
const BothSteps = [
  { label: 'Select A Model' },
  { label: 'Select Front End' },
  { label: 'Select Screen' },
  { label: 'Select Back End' },
  { label: 'Select Database' },
  { label: 'Select Capabilities' },
  { label: 'Basic Details' },
  { label: 'Review' },
];

export default function VerticalLinearStepper({activeStep,projectType}) {
  const [steps,setSteps] = useState([]);
  const [openCancelProjectModal,SetOpenCancelProjectMOdal] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    if(projectType === "Both")
      setSteps(BothSteps);
    else if(projectType === "Back End")
      setSteps(BackendSteps);
    else
      setSteps(frontendSteps)
  },[projectType])
  const cancelCreatingProject = () => {
    if(projectType === "Front End"){
        dispatch(CLEAR_ALL_FRONTENDAPP_DETAIL());
    }  
    else if(projectType === "Back End"){
      dispatch(CLEAR_ALL_BACKENDAPP_DETAIL());
    }    
    else{
      dispatch(CLEAR_ALL_FULLSTACKAPP_DETAIL());
    }
     SetOpenCancelProjectMOdal(false);
     navigate("/our-home")
    }
  const updateOpenCancelProjectModal = (value) => {
    SetOpenCancelProjectMOdal(value);
  }
  return (
    <>
     <CancelProjectAlertModal openCancelProjectModal={openCancelProjectModal} updateOpenCancelProjectModal={updateOpenCancelProjectModal} cancelCreatingProject={cancelCreatingProject} />
     <Box 
      className='bg-gray_901 flex flex-col md:hidden justify-evenly items-center w-[300px] h-[710px] py-[10px]'
      > 
      <div className="flex items-center justify-start md:ml-[0] md:w-[100%] w-[56%]">
            <Img
              src="images/img_frame529821.png"
              className="h-[40px] md:h-[auto] object-cover w-[100%]"
              alt="frame529821"
            />
          </div>
      <div className="flex flex-row gap-[9px] items-center justify-center my-[25px] w-[100%]">
      <Stepper activeStep={activeStep} orientation="vertical" 
        sx={{
          '.css-8t49rw-MuiStepConnector-line': {
             minHeight:"25px",
             marginLeft: "2px",
          }
        }}
      >
        {steps.map((step) => (
          <Step key={step.label} 
          sx={{
            '& .MuiStepLabel-root .Mui-completed': {
              color: '#dddddd', // circle color (COMPLETED)
              fontSize:"1rem",
            },
            '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
              {
                color: 'white', // Just text label (COMPLETED)
              },
            '& .MuiStepLabel-root .Mui-active': {
              color: '#f8fafc', // circle color (ACTIVE)
              fontSize:"1rem",
            },
            '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
              {
                color: 'common.white', // Just text label (ACTIVE)
              },
            '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
              fill: 'white', // circle's number (ACTIVE)
            },
            'span.MuiStepLabel-label.Mui-disabled': {
              color:'#959595 !important',
              fontSize: "1rem",
            }
          }}
          >
            <StepLabel
                StepIconComponent={ColorlibStepIcon}
              >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      </div>
      <div className='flex items-center justify-start md:ml-[0] md:w-[100%] w-[56%]"'>
        <Button 
          onClick={() => SetOpenCancelProjectMOdal(true)}
          className="border-[2px] border-solid border-red_400 cursor-pointer font-medium sm:px-[20px] md:px-[40px] px-[60px] py-[10px] rounded-[4px] text-[14px] text-center text-red_400 w-[161px] hover:border-red_A700 hover:text-red_A700"
          >
          Cancel
        </Button>
      </div>
    </Box>
    </>
  );
}
