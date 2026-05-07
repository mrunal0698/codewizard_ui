import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  typography: {
    fontFamily: "Inter",
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#121212', // Background color for the app
      paper: '#1d1d1d',   // Background color for components
    },
    text: {
      primary: '#ffffff',  // Primary text color
      secondary: '#b0b0b0', // Secondary text color
    },
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 'none',
          '& .MuiDataGrid-cell': {
            color: '#ffffff',
            fontSize: '12px',
            height:'46px !important',
          },
          '& .MuiInputBase-input': {
            backgroundColor:'#1d1d1d'
          },
          '& css-14y2yj1-MuiDataGrid-root .MuiDataGrid-row.MuiDataGrid-row' : {
            height:'46px !important'
          },
          '& .MuiDataGrid-row': {
            height:'46px !important',
            maxHeight: '46px !important',
            minHeight: '46px !important',

            // '&:nth-of-type(even)': {
            //   backgroundColor: '#2d2d2d',
            // },
          },
          '& .MuiDataGrid-container--top [role=row]': {
            backgroundColor: '#535353',
            borderRadius: "8px 8px 0 0",
            height:'46px !important'
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#53533', 
            height: '46px !important',
          },
          '& .MuiDataGrid-columnHeader': {
            height: '46px !important', 
          },
          '& .css-t89xny-MuiDataGrid-columnHeaderTitle' : {
            fontSize: '12px'
          },
          '& .css-ewig31 input' : {
            backgroundColor : "#1d1d1d"
          },
          '& .css-1u7mkiz-MuiInputBase-root-MuiDataGrid-editInputCell input' : {
            backgroundColor : "#1d1d1d"
          },
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        color:"#fff",
        zIndex:0,
        padding:"8px",
        borderBottom:"1px solid var(--gray_801)",
        fontSize:"12px",
        fontWeight:"normal"
      },     
    },
  },
});

export { darkTheme };
