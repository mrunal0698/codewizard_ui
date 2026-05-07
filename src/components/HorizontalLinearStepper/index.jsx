import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { styled } from '@mui/material/styles';

const ColorlibStepIconRoot = styled('div')(({ ownerState }) => ({
  backgroundColor:"#fff",
  zIndex: 1,
  color: '#016CD9',
  width: 35,
  height: 35,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  border:"1px solid #ffffff",
  outline:"1px solid #016CD9",
  fontSize:"15px",
  fontWeight:"600",
  ...(ownerState.active && {
    backgroundColor:"#016CD9",
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    color : "#ffffff",
    position : "relative",
    top:"0",
    outline:"1.5px solid #fffff",
  }),
  ...(ownerState.completed && {
    backgroundImage: `url("images/mdi_tick.png")`, 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: "20px",
    color: '#016CD9',
    backgroundColor:"#016CD9",
    border:"none",
    outline:"none"
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
  
const HorizontalLinearStepper = (props) => {
  const { activeStep, steps } = props;
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel 
      //  sx={{
      //   '.css-z7uhs0-MuiStepConnector-line': {
      //        marginTop: "10px",
      //        borderBottom:"solid 4px",
      //        borderColor:"#016CD9"
      //   }
      // }}
      >
        {steps?.map((label,index) => (
          <Step key={label} 
          sx={{
            '& .MuiStepLabel-root .Mui-completed': {
              color: '#dddddd', // circle color (COMPLETED)
              fontSize:"12px",
            },
            '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
              {
                color: 'white', // Just text label (COMPLETED)
              },
            '& .MuiStepLabel-root .Mui-active': {
              color: '#f8fafc', // circle color (ACTIVE)
              fontSize:"12px",
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
              fontSize:"12px"
            },
            '.css-z7uhs0-MuiStepConnector-line': {
              marginTop: "5px",
              borderBottom:"solid 2px",
              borderColor: index <= activeStep ? "#016CD9"  :"#ffffff"
         }
          }}
          >
            <StepLabel
             StepIconComponent={ColorlibStepIcon}
            >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default HorizontalLinearStepper;