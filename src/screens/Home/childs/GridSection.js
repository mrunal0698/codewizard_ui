import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router-dom';

import '../index.css';

import CWModal from 'modals/Modal';
import { CreateProject } from '.';
import { Button, Img } from 'components';

const options = [
    {
      path: "frontend-app",
      projectType: "Front End",
    },
    {
      path: "backend-app",
      projectType: "Back End"
    },
];

const GridSection = () => {
  const [createProjectModel,setCreateProjectModel] = useState(false);
  const [appDetails,setAppDetails] = useState({});
  
  const navigate = useNavigate();

  const open = (projectType) => {
    setCreateProjectModel(true);
    const value = options.find(x => x.projectType === projectType);
    setAppDetails(value);
  }

  return (
    <div className="flex gap-5 w-[auto] sm:flex-col items-center justify-start flex-wrap h-[auto]">
      <CWModal open={createProjectModel} close={() => setCreateProjectModel(false)}
       className="rounded-xl" >
        <CreateProject close={() => setCreateProjectModel(false)} appDetails={appDetails}/>
      </CWModal>

      <Box className="sun-gradient second-card">
        <Box onClick={() => open("Back End")} className='cursor-pointer'>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
            <Button className='px-2 py-1 bg-core rounded-[5px] text-[10px]'>Web App</Button>
            <IconButton style={{ 
                color: 'white', 
                border: '2px dashed white',
                borderRadius: '6px',
                width:"43px",
                height:"43px" 
              }}
              >
              <Img src="images/BE_icon.svg" style={{ fontSize: '32px' }}/>
            </IconButton>
          </Box>
          <Typography variant="body1" sx={{ fontWeight: "500", color: 'var(--core)'}}>
            Create a New, <br /> Backend Project
          </Typography>
          <Typography variant="caption" sx={{ fontWeight: "400", color: 'var(--subtle)', mt:2,display:'block' }}>
            Get started with a new backend project by choosing or uploading a design model
          </Typography>
        </Box>
       </Box> 

      <Box className="water-gradient second-card">
        <Box onClick={() => open("Front End")} className='cursor-pointer'>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%'}}>
            <Button className='px-2 py-1 bg-core rounded-[5px] text-[10px]'>Web App</Button>
            <IconButton style={{ 
                color: 'white', 
                border: '2px dashed white',
                borderRadius: '6px', 
                width:"43px",
                height:"43px",
                padding:"4px" 
              }}
              >
              <Img src="images/FE_icon.svg" style={{ fontSize: '32px' }}/>
            </IconButton>
          </Box>
          <Typography variant="body1" sx={{ fontWeight: "500", color: 'var(--core)'}}>
            Create a New <br />
            Frontend Project
          </Typography>
          <Typography variant="caption" sx={{ fontWeight: "400", color: 'var(--subtle)', mt:2,display:'block' }}>
            Get started with a new frontend project by choosing or uploading a design model
          </Typography>
        </Box>
       </Box> 
       
      <Box className='first-card'
        onClick={() => navigate('/pre-built-apps')}
      >
        <Box style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: "8px" }}>
          {/* <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={2000}
            infinite={true}
            customTransition="all 1s ease-in-out"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          >
            {images.map((x, index) => (
              <div key={index} style={{ width: '100%', height: '100%' }}> */}
                <img
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  src="images/my_turn.png"
                  alt={`appimage`}
                />
              {/* </div>
            ))}
          </Carousel> */}
        </Box>
        <Typography variant="body1" className='carousel-title'>Pre Built Applications</Typography>
      </Box>   
    </div> 
  );
};

export default GridSection;