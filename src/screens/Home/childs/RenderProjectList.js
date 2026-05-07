import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Text, Img } from "components";
import ModelUploader from 'modals/ModelUploader';
import CodeGenProcess from "modals/CodeGenProcess/CodeGenProcess";
import { SET_FRONTEND_CODE_GEN_DETAIL } from "store/slices/frontend.slice";
import { SET_CODE_GEN_DETAIL } from "store/slices/backend.slice";
import { RegenerateBackendProject, RegenerateFrontendProject } from "shared/common";
import CWTable from 'components/CWTable';
import helper from 'shared/helper';
import { CircularProgress } from '@mui/material';
import { AppRunnerService, GetProject, GetUserProjects } from 'shared/services';
import { useAuth0 } from '@auth0/auth0-react';
import { SET_DnR_RES, SET_DnR_BOOL, SET_DnR_Busy, SET_PROJECT_LIST } from 'store/slices/basicInformation.slice';

const Component = () => {
  const {DnR_Res, project_list, DnR_Bool, DnR_Busy} = useSelector(store => store.basicInformation);
  const [modelUploader, setModelUploader] = useState(false);
  const [codeGenerationModal,setCodeGenerationModal] = useState(false);
  const [codeGenActiveStep,setCodeGenActiveStep] = useState(null);
  const [uploadedModelValue,setUploadedModelValue] = useState({});
  const [selectedProject,setSelectedProject] = useState({});
  const [DnR_status,setDnR_status]= useState({});
  const [projectList,setProjectList] = useState(project_list);

  const { user } = useAuth0();
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchData = async () => {
      if(projectList.length === 0 ){
        const projectRes = await GetUserProjects(user?.email);
        if (projectRes.status) {
          setProjectList(projectRes.values.value);
        }
      }
      if (!DnR_Bool) return;
      
      dispatch(SET_DnR_Busy(true));
      dispatch(SET_DnR_BOOL(false));
      const projectRes = await GetUserProjects(user?.email);
      if (projectRes.status) {
        setProjectList(projectRes.values.value);
      }
      const [ project ] = projectRes.values.value;
      const appRes = await GetProject(project.ProjectId, null, "BackendApp($expand=Capabilities),FrontendApp($expand=Capabilities)");
      const gen_app = appRes.values;
      const { ProjectId, Attribute1, GitHubURL } = gen_app;
      let runCodePayload = {
        personalToken: 'Not considered',
        gitHubURL: GitHubURL,
        applicationServiceName: Attribute1,
        projectId: ProjectId,
      };

      if (gen_app.ProjectBackendApp) {
        if(gen_app.BackendApp?.Capabilities?.some(e => e.Name === "Authentication & Authorization [Spring]")) 
          runCodePayload = { ...runCodePayload, isSpringSecurityApp: true }
        runCodePayload.projectType = 'BACKEND';
      } else if (gen_app.ProjectFrontendApp) {
        runCodePayload = { ...runCodePayload, ...{ projectType : 'FRONTEND', useSecureProtocol: false} };
      }

      const res = await appRunnerControls(runCodePayload, gen_app);
      if (res.status) {
        const projectRes = await GetUserProjects(user?.email);
        if (projectRes.status) {
          dispatch(SET_PROJECT_LIST(projectRes?.values?.value));
          dispatch(SET_DnR_RES(res));
          dispatch(SET_DnR_Busy(false));
        }
      } else {
        dispatch(SET_DnR_Busy(false));
        global.AlertPopup('error', res?.statusText);
      }
    };

    fetchData();
  }, []);

  const appRunnerControls = async (data, gen_app) => {
    try {
      if(gen_app.FrontendApp?.Attribute1 && gen_app.FrontendApp?.Capabilities?.some(e => e.Name === "Authentication & Authorization [Spring]")) {
        const backendId =  JSON.parse(gen_app.FrontendApp?.Attribute1);
        const appRes = await GetProject(backendId);
        
        const { Attribute1, GitHubURL } = appRes.values;
        const parts = GitHubURL.split('/');
        const nameWithGit = parts[parts.length - 1];
        const projectName = nameWithGit.replace('.git', '');
        const bkndData = { projectId:  backendId, projectName, clientServiceName: Attribute1, 
          projectType : 'BACKEND', useSecureProtocol: false,  gitHubURL: GitHubURL };
        if(appRes.status && appRes.values.State === "running")  await AppRunnerService(bkndData, "stop");
        
        await AppRunnerService(bkndData, "pull-deploy");
       } 
        return await AppRunnerService(data);
    } catch (e) {
        console.log("Error",e);
        return e;
    }
  }

  useEffect(() => {
    if (DnR_Res.status === true) {
      setDnR_status(DnR_Res);
      setTimeout(() => {
        setDnR_status({status : false});
        dispatch(SET_DnR_RES({status : false}))
      },15*1000)
    }
  }, [DnR_Res]);

  useEffect(() => {
    setProjectList(project_list)
  },[project_list])

  useEffect(() => {
    (async _ => {
      if((Object.keys(uploadedModelValue).length > 0)){
        setCodeGenerationModal(true);
        setCodeGenActiveStep(0)       
        if(selectedProject.ProjectFrontendApp){
         try {
          const res = await RegenerateFrontendProject(selectedProject?.ProjectId,uploadedModelValue,updateActivStep);
          setCodeGenerationModal(false);
            if(res.status){
                setCodeGenActiveStep(5);
                dispatch(SET_FRONTEND_CODE_GEN_DETAIL(res?.values));
                navigate('/frontend-codegen-detail');
            } else {
               global.AlertPopup("error",res?.statusText);
            }
         }catch (e) {
          console.log(e);
          setCodeGenerationModal(false);
          global.AlertPopup("error",e?.statusText);
         }
      }
      else if(selectedProject?.ProjectBackendApp){
      try {
        const res = await RegenerateBackendProject(selectedProject?.ProjectId,uploadedModelValue,updateActivStep);
        setCodeGenerationModal(false);
        if(res.status){
          setCodeGenActiveStep(5);
          setCodeGenerationModal(false);
          dispatch(SET_CODE_GEN_DETAIL(res?.values))
          navigate('/backend-codegen-detail');
        } else {
          global.AlertPopup("error",res?.statusText);
        }
      }catch (e){
        console.log(e);
        setCodeGenerationModal(false);
        global.AlertPopup("error",e?.statusText);
       }
      }
    }
    })()
},[uploadedModelValue])

const invokeModelUploader = (flag,projectDetail) => {
  setModelUploader(flag);
  if(!helper.IsNullValue(projectDetail)){
    setSelectedProject(projectDetail);
  }
}

const updateActivStep = (step) => {
  setCodeGenActiveStep(step)
}

const getProjectType = () => {
  if(selectedProject.ProjectFrontendApp){
    return "Fron End"
  } else if (selectedProject.ProjectBackendApp) {
    return "Back End"
  }
}

  return (
    <div className="w-[100%]">
      <ModelUploader
        uploadComponentToShow={modelUploader}
        updateUploadComponentToShow={invokeModelUploader}
        updateModelResponse={(x) => setUploadedModelValue(x)}
      />
      <CodeGenProcess
        activeStep={codeGenActiveStep}
        projectType={getProjectType}
        codeGenerationModal={codeGenerationModal}
        updateCodeGenerationModal={(x) => setCodeGenerationModal(x)}
      />
        {DnR_Busy &&
         <div className='bg-[#aa44bfb4] flex flex-col gap-4 p-2 mb-2'>
           <div className='flex gap-2 items-center'>
             <CircularProgress  style={{ color: 'white' }} size={16} thickness={6} />
           <Text
             className="font-medium text-gray_50 text-left w-[100%]"
             as="h6"
             variant="h6"
             >
               Loading
             </Text>
           </div>
           <Text
            className="font-medium text-gray_50 text-left w-[100%]"
            variant="body2"
            >
             Deployment in progress... Your app will be ready shortly
           </Text>
         </div> 
         }
        {DnR_status.status &&
          <div className='bg-[green] flex flex-col gap-4 p-2'>
            <div className='flex gap-2 items-center'>
              <Img
                src="images/check_icon.svg"
                className="w-[28px] p-1 bg-cw_shade rounded-[50px]"
                alt="checkmark"
              />
            <Text
              className="font-medium text-gray_50 text-left w-[100%]"
              as="h6"
              variant="h6"
              >
                Success
              </Text>
            </div>
            <Text
            className="font-medium text-gray_50 text-left w-[100%]"
            variant="body2"
            >
              The app is successfully running at &nbsp;
              <a href={DnR_status?.values?.url} target='_blank' rel='noreferrer'
                className='text-core border-b-2 border-core hover:text-warning'
              > 
                {DnR_status?.values?.url} 
              </a>
            </Text>
          </div>
        }
        {projectList.length > 0 ? (
          <>
            <Text
            className="font-medium text-gray_50 text-left w-[100%] py-4"
            as="h4"
            variant="h4"
            >
              My Apps
            </Text>
            <CWTable rows={projectList} invokeModelUploader={invokeModelUploader} selectedProject={selectedProject} setProjectList={x => setProjectList(x)} />
          </>
        )
        : (
          <div className='flex flex-col items-center justify-center h-[100%] w-[auto]'>
            <Img
              src="images/CW-logo-light.png"
              className=" md:w-[auto] object-cover w-[200px]"
              alt="code wizard"
            />
            <Text
              className="font-normal not-italic text-gray_50 text-left w-[auto]"
              as="h6"
              variant="h6"
            >
              It’s empty in here!
            </Text>
            <Text
              className="font-normal mt-[8px] not-italic text-gray_501 text-left w-[auto]"
              variant="body2"
            >
              Start building in Code Wizard
            </Text>
          </div>
        )} 
    </div>    
  )
}

export default Component;