import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { Button, CircularProgress, Stack} from '@mui/material';
import Link from '@mui/material/Link';
import { Img } from 'components';
import { AppRunnerService, DeleteProject, DeployApp, GetUserProjects } from 'shared/services';
import { useAuth0 } from '@auth0/auth0-react';
import { LoadingButton } from '@mui/lab';

const columns = [
  {
    id: 'Project ID',
    label: 'Project ID'
  },
  {
    id: 'Name',
    label: 'Name',
  },
  {
    id: 'Technology',
    label: 'Technology',
  },
  {
    id: 'Version',
    label: 'Version',
  },
  {
    id: 'GitHub Url',
    label: 'GitHub Url',
    fn: () => {}
  },
  {
    id: 'App Url',
    label: 'App Url',
    fn: () => {}
  },
  {
    id: 'Status',
    label: 'Status',
  },
];

const AVTech = { 
  BETech : {
   name : "Spring OData",
   src: "images/img_springioicon1.svg"
  },
  FETech : {
   name : "React",
   src: "images/img_globe_light_blue_300.svg"
  }
}
const theme = createTheme({
  components: {
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
  }
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#535353",
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function CustomPaginationLabel(props) {
  const { count, page, rowsPerPage } = props;
  const len = Math.floor(parseInt(count)/parseInt(rowsPerPage));

  return (
    <span>
      Page {page+1} of {len+1}
    </span>
  );
}

const CWTable = (props) => {
  const { rows, invokeModelUploader, setProjectList } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [busy,setBusy] = React.useState(false);
  const [selectedRow,setSelectedRow] = React.useState({});
  const { user } = useAuth0();
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  const printString = (str) => {
    if(str?.length > 22){
       return `${str.slice(0,25)}...`;
    }else{
      return str;
    }
  }
  
  const runCodeHandler = async (data) => {
    const {ProjectId, Attribute1, GitHubURL, State, ProjectName, LiveURL } = data;
    setSelectedRow(data);
    if(State === "running") {
      global.AlertPopup("warning",`${ProjectName} app is already running`);
      return;
    }
    if (GitHubURL) {
      const parts = GitHubURL.split('/');
      const nameWithGit = parts[parts.length - 1];
      const projectName = nameWithGit.replace('.git', '');

      const payload = {
        projectId : ProjectId,
        projectName : projectName
      }
      let projectType = "FRONTEND";
      setBusy(true);
      if(data.ProjectBackendApp) projectType = 'BACKEND';
      if(LiveURL && data.ProjectBackendApp) {
        const res = await DeployApp(payload);
        if(res.status){
          const projectRes = await GetUserProjects(user?.email);
          if(projectRes.status){
              setProjectList(projectRes?.values?.value);
          }
          global.AlertPopup("success",`${data?.ProjectName} app is running now!`)
        }else {
          global.AlertPopup("error",res?.statusText)
        }
      }else {
          const runCodePayload = {
            personalToken: "Not considered",
            gitHubURL: GitHubURL,
            applicationServiceName: Attribute1,
            projectId: ProjectId,
            projectType: projectType,
            useSecureProtocol : false
          };
          const res = await AppRunnerService(runCodePayload);
          if (res.status) {
            const projectRes = await GetUserProjects(user?.email);
            if(projectRes.status){
                setProjectList(projectRes?.values?.value);
            }
            global.AlertPopup("success",`${data?.ProjectName} app is running now!`)
          }else {
            global.AlertPopup("error",res?.statusText)
          }
        }
      setBusy(false);
    }else {
      global.AlertPopup("error","The app cannot be executed without the source code.")
    }
  };

  const deleteProjectHandler = async (data) => {
    try{
      global.Busy(true);
      const res = await DeleteProject(data.ProjectId);
      global.Busy(false);
      if(res.status){
        global.Busy(true);
        const projectRes = await GetUserProjects(user?.email);
        global.Busy(false);
        if(projectRes.status){
            setProjectList(projectRes?.values?.value);
            global.AlertPopup("success","Project deleted successfully");
           }
      }else {
        global.AlertPopup("error",res.statusText);
      }
    }catch (e) {
      global.AlertPopup("error",e.statusText);
    }
  }

  const updateLiveURL = (url, tech) => {
    if(tech.name === 'Spring OData' && url) {
      const _url = new URL(url);
      return _url.origin;
    }
    return url;
  }

  const GetSeriviceName = (url, githubURL) => {
    if(url) {
      const _url = new URL(url).pathname;
      if(githubURL) return printString(_url.split("/")[2]);
      return printString(_url.split("/")[1]);
    }
    return printString(url);
  }

  return (
    <ThemeProvider theme={theme}>
      <TableContainer  sx={{ bgcolor:"var(--gray_900)",borderLeft:"1px solid var(--gray_801)",borderRight:"1px solid var(--gray_801)"}} component={Paper} >
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  style={{zIndex:"1"}}
                >
                  {column.label}
                </StyledTableCell>
              ))}
              <StyledTableCell style={{borderLeft:"1px solid #fff",zIndex:"1"}} align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row,idx) => {
                const getTech = () => {
                    if(row.ProjectFrontendApp){
                      return AVTech.FETech;
                    }else if(row.ProjectBackendApp){
                      return AVTech.BETech;
                    }
                  }
                  const Tech = getTech();
                  
                return (
                <TableRow
                  key={idx}
                  sx={{bgcolor:"var(--gray_900)"}}
                >
                  <TableCell >{row.ProjectId}</TableCell>
                  <TableCell >{row.ProjectName}</TableCell>

                  <TableCell >
                    <Stack direction="row" alignItems="center" gap={2}>
                    {Tech?.src && <Img src={Tech?.src} className="h-[25px]" alt="technology logo"/>}	
                    {Tech?.name || "Unavailable"}
                    </Stack>
                
                  </TableCell>
                  <TableCell >{row.Version || "v1"}</TableCell>

                  <TableCell ><Link href={row.GitHubURL} target="_blank" >
                    {GetSeriviceName(row.GitHubURL, true) || "Unavailable"} </Link>
                  </TableCell>

                  <TableCell >
                    <Link href={updateLiveURL(row.LiveURL, Tech)} target="_blank" rel="noopener noreferrer">
                    {GetSeriviceName(row.LiveURL) || "Unavailable"}</Link>
                  </TableCell>

                  <TableCell >{row.State || "Unavailable"}</TableCell>
                    <TableCell align="center" sx={{borderLeft:"1px solid #fff"}}>
                      <Stack direction="row" justifyContent="center" gap={2} sx={{flexShrink:0,width:"210px",mx:"auto"}}>
                          {/* <Button variant="outlined" sx={{ color: '#fff', borderColor:"var(--gray_50)",fontSize:"12px",height:"24px",padding:"4px"}}
                           onClick={() => invokeModelUploader(true,row)}
                          >
                            New version
                          </Button> */}
                          <LoadingButton variant="contained" sx={{ color: '#fff',bgcolor:"var(--primary) !important", fontSize:"12px",height:"24px",minWidth:"42px",padding:"4px"}}
                           onClick={() => runCodeHandler(row)}
                           loading={selectedRow?.ProjectId === row?.ProjectId ? busy : false}
                           loadingIndicator={<CircularProgress  style={{ color: 'white' }} size={16} thickness={6} />}
                           disabled={busy && selectedRow?.ProjectId !== row?.ProjectId ? true : false}
                          > 
                           Run
                          </LoadingButton>
                          <Img 
                           src='images/Delete_icon.svg'
                           className="w-6 h-6 cursor-pointer"
                           onClick={() => deleteProjectHandler(row)}
                          />
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelDisplayedRows={ ({count, page} ) => (
          <CustomPaginationLabel count={count} page={page} rowsPerPage={rowsPerPage} />
        )}
        sx={{
          bgcolor:"--var(gray_900)",
          color:"white",
          fontSize:"12px",
          fontWeight:"normal",
          '& .css-pdct74-MuiTablePagination-selectLabel': {
            fontSize:"12px",
          },
          '& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon' : {
             fill : "var(--gray_50)"
          },
          '& .css-levciy-MuiTablePagination-displayedRows' : {
            fontSize:"12px",
          }
        }}
      />
    </ThemeProvider>
  );
}

export default CWTable;