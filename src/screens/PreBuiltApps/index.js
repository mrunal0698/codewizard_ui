import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import { GetPreBuiltApps } from 'shared/services';

const PreBuiltApps = () => {
  const [appList,setAppList] = useState([]);

 useEffect(() => {
  (async _ => {
    const res = await GetPreBuiltApps();
    if(res.status){
      setAppList(res.values.value);
    }
  })()
 },[])

 const openRefAppWindow = (data) => {
  window.open(data?.LiveUrl,"_blank")
 }
 
  return (
    <Stack className='bg-gray_900' padding="24px" gap={2}>
      <Typography variant="body2" color="var(--gray_501)" sx={{ fontWeight: "400", color: 'var(--gray_501)'}}>
        Browse through pre built applications designed by the Code Wizard Team
      </Typography>
      <Stack
        direction="row"
        gap={5}
        flexWrap="wrap"
        className='md:justify-center'
      >       
        {appList.map((data, index) => (
         <Card key={index} sx={{ maxWidth: 360, bgcolor: 'var(--secondary)',borderRadius:"30px",display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
          <Stack direction='column' >
            <CardMedia
                component="img"
                alt="cardimage"
                sx={{ height: "290px" }}
                image={data.Attribute1}
            />
            <CardContent sx={{ padding: '24px' }}>
                <Stack direction="row" gap={2} >
                <DescriptionIcon sx={{ color: 'var(--gray_50)', width: 20, height: 20 }} />
                <Typography variant="body1" component="div" sx={{ fontWeight: "600", color: 'var(--gray_50)' }}>
                    {data.Name}
                </Typography>
                </Stack>

                <Typography variant="body2"  sx={{ fontWeight: "400", color: 'var(--gray_501)', marginTop: '8px' }}>
                {data.Description}
                </Typography>
            </CardContent>
          </Stack>
            <CardActions sx={{ justifyContent: 'flex-end', paddingRight: '24px', paddingBottom: '24px',height:"auto" }}>
                <Button variant="outlined" size="small" sx={{ borderColor: 'var(--gray_300)', color: 'var(--gray_50)',marginRight: '6px',textTransform:"none"}}>View Model</Button>
                <Button variant="contained" size="small" sx={{ bgcolor: 'var(--primary) !important', color: 'var(--gray_50)',textTransform:"none" }}
                 onClick={() => openRefAppWindow(data?.RefApp)}
                >
                 Open App 
                </Button>
            </CardActions>
         </Card>
        ))}
      </Stack>
    </Stack>
  );
}

export default PreBuiltApps;