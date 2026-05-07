import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Typography, FormControlLabel, RadioGroup, Radio } from '@mui/material';

import helper from 'shared/helper';
import { NotificationService, PostQA } from "shared/services";
import { Button, Input, Text } from "components";
import posthog from "posthog-js";

const theme = createTheme({
  components: { 
    MuiFormControlLabel: {
        styleOverrides: {
          root: {
            marginRight: '60px',  
            
          },
          label: {
            fontSize: '14px', 
            fontWeight: 100, 
          },
       
        },
      }, 
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "white",
          '& .MuiSvgIcon-root': {
            fontSize: 20,
          },
        },
        
      },
    }, 
  },
});

const Component = (props) => {
  const { close } = props;
  const [errordisplay,setErrordisplay] = useState(false);
  const [inputvalue,setInputvalue] = useState("");
  const { user } = useAuth0();

  const handleClose = async () => {
    if(helper?.IsJSONEmpty(inputvalue.experience) || helper?.IsJSONEmpty(inputvalue.appKind)){
      setErrordisplay(true);
    }
    else{
    const payload =  {
            Question : "Experience",
            Answer : inputvalue?.experience,
            Attribute4 :  `${inputvalue?.appKind} - ${inputvalue?.companyName}`,
            Attribute5 :  user?.email
        }
      global.Busy(true);
        // Track signup event
        posthog.capture('user_signed_up', {
          email: user.email
        });
       await PostQA(payload);
      global.Busy(false);
      close();
      await NotificationService({payload :  {
        to: user.email,
        subject: "Welcome to Code-Wizard: Your Fast-Track to Development Success!",
        name: user.name,
        template: "welcome.html",
        homePageHost: "https://platform.code-wizard.ai/",
        learnDocLink: "https://docs.google.com/document/d/12WPOGMbhIccwnPXxGct3-RbudN_lPX0sbHemJMzDQJs/edit?tab=t.0",
        cc: "support@code-wizard.in"
    }})
    }    
  };

  const onChangeInput = (event) => {
    const {name,value} = event.target
    setInputvalue(prevState => {
        return {...prevState,...{[name] : value}}
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{color: "white"}} className="font-inter">
        <Typography variant="h5" className="!font-inter" gutterBottom>Welcome to Code-Wizard</Typography>
        <Typography variant="body1" className="!font-inter" gutterBottom>{user?.name}</Typography><br/>
        <Typography variant="body1" className="!font-inter" gutterBottom>Your software development level of experience <span className="text-error">*</span></Typography>
        <RadioGroup value={inputvalue?.experience} name="experience" onChange={onChangeInput} row sx={{ marginLeft: '30px' }}>
        <FormControlLabel value="new" control={<Radio />} label="New" />
        <FormControlLabel value="beginner" control={<Radio />} label="Beginner"  />
        <FormControlLabel value="intermediate" control={<Radio />} label="Intermediate" />
        <FormControlLabel value="pro" control={<Radio />} label="Pro" />
        </RadioGroup>
        <br/>
        <Typography variant="body1" className="!font-inter" gutterBottom>Creating application for <span className="text-error">*</span></Typography>
        <RadioGroup value={inputvalue?.appKind} name="appKind" onChange={onChangeInput} row sx={{ marginLeft: '30px' }}>
        <FormControlLabel value="work" control={<Radio />} label="Work"  />
        <FormControlLabel value="personal" control={<Radio />} label="Personal Use" />
        </RadioGroup>
        <br/>
          <div className="flex flex-col gap-[8px] items-start justify-between self-stretch sm:w-[100%] relative w-[auto] pb-6">
            <Text
              className="text-core text-left w-[auto]"
              variant="h6" as='h6'
            >
              Company Name
            </Text>
            <Input
              wrapClassName="border-gray_801 common-pointer bg-gray_902 border-[1px] border-solid p-[12px] rounded-[4px] sm:w-[100%] w-[auto]"
              className="placeholder:text-hint border-[1px] text-[12px] text-core text-left sm:w-[100%] p-0 w-[512px]"
              name="companyName"
              placeholder="Enter Your Company name"
              onChangeHandler={onChangeInput}
            />
          </div>
        {errordisplay && (<Text variant="body2" className="text-error">Please fill in the form to get started!</Text>)}
        <Button 
          onClick={handleClose}
          className="bg-primary rounded-md text-core py-2 px-4 float-right"
         >
          Get Started
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default Component;