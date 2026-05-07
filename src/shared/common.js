import { CodeGenerationService, CreateBackendApp, CreateFrontendApp, CreateProject, ExpandBackendProjectByID,
       ExpandDocumentByID, ExpandFrontendProjectByID, ModelValidation, SetModelFile, UploadDocument } from "./services";
import { SUBSCRIPTION_URL } from "utils/constants";
import helper from './helper';
import session from "./session";

const capKeysToRemove = ["CapId","CapFeatures"];
let currentDate = new Date().toISOString();

const removeKeyValueFromObj = (keysToRemove,objDetail) => {
  const filteredObj = Object.keys(objDetail).filter((key) => 
    !keysToRemove.includes(key)).reduce((obj, key) => {
            obj[key] = objDetail[key];
            return obj;
          }, {});
  return filteredObj;                   
}

const CreateBackendPoject = async (reviewDetail, projectBasicDetail, user, updateActivStep) => {
    const filteredCapabilities = reviewDetail?.capabilities?.map((capDetail) => {
      let _cap = capDetail;
      if(reviewDetail?.basicDetail?.SecurityMode === "Standard" &&
         capDetail.Name === "Authentication & Authorization [Spring]") _cap.Attribute1 = "false"
      return removeKeyValueFromObj(capKeysToRemove, _cap);
    })
    const data ={
      DbSchemaName: reviewDetail?.basicDetail?.DatabaseName,
      AppDetails: {
        AppName: reviewDetail?.basicDetail?.ApplicationName,
        AppDescription: reviewDetail?.basicDetail?.ApplicationDescription,
        Namespace: reviewDetail?.basicDetail?.Namespace,
        BuildTool: reviewDetail?.basicDetail?.BuildTool,
        Server: reviewDetail?.basicDetail?.Server,
      },     
      BackendAppModel: reviewDetail?.model?.ModelId,
      BackendAppMainTechnology: reviewDetail?.backend?.BeTechId,
      BackendAppDatabase: reviewDetail?.database?.DbId,
      BackendAppTemplate: reviewDetail?.database?.TemplateId,
      Capabilities: filteredCapabilities,    
    };  
    
    try {
      const BEAppRes = await CreateBackendApp(data);
        if (BEAppRes.status){
          updateActivStep(1)
          const projectData = {
            ProjectName: projectBasicDetail?.ProjectName,
            Description: projectBasicDetail?.Description,
            CustomerName: user?.name,
            // ProjectLogo: reviewDetail?.backend?.Icon,
            UserName: user?.email,
            ProjectBackendApp: BEAppRes?.values?.AppId,
            StartDate: currentDate,
            ProjectGitHubCred: reviewDetail?.basicDetail?.GithubCred,
            Version: reviewDetail?.model?.Version
          }
        const projectRes =  await CreateProject(projectData);
          if (projectRes.status){
            updateActivStep(2);
            const { values } = await ExpandBackendProjectByID(projectRes?.values?.ProjectId);
            updateActivStep(3);
            const codeGenRes = await CodeGenerationService(values);
            updateActivStep(4);
            return codeGenRes;     
          } else {
            global.AlertPopup("error",projectRes?.statusText);
            return projectRes;
          }
        } else {
          global.AlertPopup("error",BEAppRes?.statusText);
          return BEAppRes;
        }
    }catch (e){
    console.log(e)
    return {...e,status:false}
  } 
}
const CreateFrontendProject = async (frontend_details, projectBasicDetail, user, updateActivStep) => {
  const filteredCapabilities = frontend_details?.capabilities?.map((capDetail) => {
    let _cap = capDetail;
    if(frontend_details?.basicDetail?.SecurityMode === "Standard" &&
       capDetail.Name === "Authentication & Authorization [Spring]") _cap.Attribute1 = "false"
    
    return removeKeyValueFromObj(capKeysToRemove,capDetail);
  })
  let data ={      
    FrontendAppSiteMap: null,
    FrontendAppTheme: frontend_details?.FrontendAppTheme?.ThemeId,
    ProjectDetails: {
      AppName: frontend_details?.basicDetail?.ApplicationName,
      AppDescription: frontend_details?.basicDetail?.ApplicationDescription,
      Namespace: frontend_details?.basicDetail?.Namespace,
      BuildTool: frontend_details?.basicDetail?.BuildTool,
      Server: frontend_details?.basicDetail?.Server,
    }, 
    ConfigAppId: parseInt(frontend_details?.configuratorDetail?.value),    
    FrontendAppModel: frontend_details?.api?.BackendApp?.BackendAppModel,
    FrontendAppMainTechnology: frontend_details?.UITemplate?.MainTechnology?.FeTechId,
    SelectedScreenIds : frontend_details?.feScreens.map(x => x.TeScreenId),
    Capabilities: filteredCapabilities,
    FrontendAppTemplate: frontend_details?.UITemplate?.TemplateId,
    Attribute2 : frontend_details?.api?.Attribute1
  };  
  if(frontend_details?.basicDetail?.SecurityMode) data = { ...data, Attribute1 : frontend_details?.api?.ProjectId?.toString() }
 try {
    const FEAppRes = await CreateFrontendApp(data);
    if(FEAppRes.status){
      updateActivStep(1)
      const projectData = {
        ProjectName: projectBasicDetail?.ProjectName,
        Description: projectBasicDetail?.Description,
        CustomerName: user?.name,
        // ProjectLogo: reviewDetail?.feTeckstack?.Icon,
        UserName: user?.email,
        ProjectFrontendApp: FEAppRes?.values?.AppId,
        StartDate: currentDate,
        ProjectGitHubCred: frontend_details?.basicDetail?.GithubCred,
        Version: frontend_details?.api?.Version
      }
      const projectRes = await CreateProject(projectData);
      if(projectRes.status){
        updateActivStep(2);
        const CGPayloadRes = await ExpandFrontendProjectByID(projectRes?.values?.ProjectId);
        if (CGPayloadRes.status){
          updateActivStep(3);
          const CGRes = await  CodeGenerationService(CGPayloadRes?.values); 
          updateActivStep(4);
          return CGRes; 
        } else {
          global.AlertPopup("error",CGPayloadRes?.statusText);
          return CGPayloadRes;
        } 
      } else {
        global.AlertPopup("error",projectRes?.statusText);
        return projectRes;
      } 
    } else {
      global.AlertPopup("error",FEAppRes?.statusText);
      return FEAppRes;
    }
  } catch (e) {
    console.log(e);
  }
}

 const RegenerateBackendProject = async (id, modelData, updateActivStep) => {
  const projectDetail = await ExpandBackendProjectByID(id);
  const projectMetaDetail = {...projectDetail?.values}
  const filteredCapabilities = projectMetaDetail?.BackendApp?.Capabilities.map((capDetail) => {
    return removeKeyValueFromObj(capKeysToRemove,capDetail);
  })
  const data ={
    DbSchemaName: projectMetaDetail?.BackendApp?.DbSchemaName,
    AppDetails: projectMetaDetail?.BackendApp?.AppDetails,    
    BackendAppModel: modelData?.ModelId,
    BackendAppMainTechnology: projectMetaDetail?.BackendApp?.BackendAppMainTechnology,
    BackendAppDatabase: projectMetaDetail?.BackendApp?.BackendAppDatabase,
    BackendAppTemplate: projectMetaDetail?.BackendApp?.BackendAppTemplate,
    Capabilities: filteredCapabilities,    
  };    
  const BEAppRes = await CreateBackendApp(data);
    if (BEAppRes.status){
      updateActivStep(1);
      const projectData = {
        ProjectGitHubCred: projectMetaDetail?.ProjectGitHubCred,
        ProjectName: projectMetaDetail?.ProjectName,
        Description: projectMetaDetail?.Description,
        CustomerName: projectMetaDetail?.CustomerName,
        // ProjectLogo: projectMetaDetail?.MainTechnology?.Icon,
        UserName: projectMetaDetail?.UserName,
        ProjectBackendApp: BEAppRes?.values?.AppId,
        StartDate: currentDate,
        Version: modelData?.Version
      }
      const projectRes =  await CreateProject(projectData);
       if (projectRes.status){
          updateActivStep(2);
          const { values } = await ExpandBackendProjectByID(projectRes?.values?.ProjectId);
          updateActivStep(3);
          const codeGenRes = await CodeGenerationService(values);
          updateActivStep(4);
          return codeGenRes       
        } else {
          global.AlertPopup("error",projectRes?.statusText);
          return projectRes;
        }
    } else {
      global.AlertPopup("error",BEAppRes?.statusText);
      return BEAppRes;
    }
 }

 const RegenerateFrontendProject = async (id, modelData, updateActivStep)  => {
  const res = await ExpandFrontendProjectByID(id);
  const projectMetaDetail = {...res?.values} 
  const filteredCapabilities = projectMetaDetail?.FrontendApp?.Capabilities.map((capDetail) => {
    return removeKeyValueFromObj(capKeysToRemove,capDetail);
  })
  const data ={      
    FrontendAppTheme: projectMetaDetail?.FrontendAppTheme?.ThemeId,
    ProjectDetails: projectMetaDetail?.FrontendApp?.ProjectDetails, 
    ConfigAppId: projectMetaDetail?.FrontendApp?.ConfigAppId,    
    FrontendAppModel: modelData?.ModelId,
    FrontendAppMainTechnology: projectMetaDetail?.FrontendApp?.FrontendAppMainTechnology,
    SelectedScreenIds : projectMetaDetail?.FrontendApp?.SelectedScreenIds,
    Capabilities: filteredCapabilities,
    FrontendAppTemplate:projectMetaDetail?.FrontendApp?.Template?.TemplateId
  };  
  const FEAppRes = await CreateFrontendApp(data);
    if(FEAppRes.status){
      updateActivStep(1)
      const projectData = {
      ProjectName: projectMetaDetail?.ProjectName,
      Description: projectMetaDetail?.Description,
      CustomerName: projectMetaDetail?.CustomerName,
      // ProjectLogo: projectMetaDetail?.MainTechnology?.Icon,
      UserName: projectMetaDetail?.UserName,
      ProjectFrontendApp: FEAppRes?.values?.AppId,
      StartDate: currentDate,
      Version: modelData?.Version
    }
      const projectRes = await CreateProject(projectData);
      if(projectRes.status){
        updateActivStep(2);
        const CGPayloadRes = await ExpandFrontendProjectByID(projectRes?.values?.ProjectId);
        if (CGPayloadRes.status){
          updateActivStep(3);
          const CGRes = await  CodeGenerationService(CGPayloadRes?.values); 
          updateActivStep(4);
          return CGRes; 
        } else {
          global.AlertPopup("error",CGPayloadRes?.statusText);
          return CGPayloadRes;
        } 
      } else {
        global.AlertPopup("error",projectRes?.statusText);
        return projectRes;
      } 
    } else {
      global.AlertPopup("error",FEAppRes?.statusText);
      return FEAppRes;
    }
 }

const StartSubscription = async (userpofile,updateSubscriptionStatus,planInfo) => { 
    try {   
    const data = {
      plan_id: planInfo?.PlanId,
      total_count: 6,
      quantity: 1,
      expire_by: 1893456000,
      customer_notify: 1,
      prefill: {
        name: userpofile?.name,
        email: userpofile?.email,
        userId:userpofile?.sub
      }
    }
    global.Busy(true);
    const response = await fetch(
      `${SUBSCRIPTION_URL}/create`,{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }     
    );
    global.Busy(false);
    const subscriptionData = await response.json();
    if (subscriptionData?.status !== "created") {
       return {...subscriptionData, status: false};
    }else {
      const token = session.Retrieve("bearer_token");
      var options = {
        key: 'rzp_test_Wm0F71BCeWCa8w',
        subscription_id: subscriptionData.id,
        name: "Replicacia Payment",
        description: "Subscription Plan for CodeWizard",
        image: "https://media.licdn.com/dms/image/C4E0BAQGPsmkslWmKdA/company-logo_200_200/0/1630482306784/replicacia_technologies_pvt_ltd_logo?e=2147483647&v=beta&t=zF6h4T9_sMZDXjDr63RLr8FQP4lDMgZtH7s3HSTZOZs",
        handler: async (response) => {
          try {
            global.Busy(true);
            const verifySubscription = await fetch(`${SUBSCRIPTION_URL}/verify_payment`,{
              method: 'POST',
              headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },
              body:  JSON.stringify(response)
            }            
            );
           const subscriptionResponse= await verifySubscription.json();
           global.Busy(false);
           return updateSubscriptionStatus(verifySubscription.ok, subscriptionResponse);
          } catch (error) {
            console.log(error);
             global.Busy(false);
             return {...error, status: false};
          }
        },
        "theme": {
          "color": "#686CFD"
        }
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (resp) {
        console.error(resp.error.code);
        console.error(resp.error.description);
        console.error(resp.error.source);
        console.error(resp.error.step);
        console.error(resp.error.reason);
        console.error(resp.error.metadata.order_id);
        console.error(resp.error.metadata.payment_id);
        return {...{error: "Payment Failed!"}, status: false};
      })
      rzp1.open();
    }
  } catch (error) {
    console.error("Error");
    global.Busy(false);
    global.AlertPopup("error",error?.statusText);
    return {...error, status: false};
  }
}

const UploadModel = async (modelDetail,formdata,user) =>{
  global.Busy(true);
  const DocRes = await UploadDocument(modelDetail?.uploadedModel?.name,'mdj',formdata);
    if(DocRes.status){
       const ModelRes = await SetModelFile({       
            ModelType: "StarUML",
            CreatedBy: "User",
            ModelName: modelDetail?.uploadedModel?.name.replace(".mdj", ""),
            ModelDescription: modelDetail?.description,
            IconPath: "images/img_group25.svg",
            UserName: user?.email,
            ModelFileIndustry: modelDetail?.industry,
            ModelFileFile: DocRes?.values?.DocId,
            ModelFileName: modelDetail?.uploadedModel?.name,
            Version:modelDetail?.version,
            Date: helper.ToDate(new Date(), "YYYY-MM-DDTHH:mm:ss.SSZ", true)
        });
          global.Busy(false);
          return ModelRes;
      }else {
        global.Busy(false);
        global.AlertPopup("error",DocRes?.statusText);
      }
} 

const ValidateYoursModel = async (modalDetail) => {
  try {
    global.Busy(true);
    const res = await ExpandDocumentByID(modalDetail?.ModelFileFile);
    if(res.status && Object.keys(res.values).length > 0){
     const mdjFile = res?.values;
     const fileArray = mdjFile.split('\r\n');
       for(let i=0; i<fileArray.length; i++){
         String(fileArray[i]).replace('\t','');
       }
       const filteredFile =  fileArray[4];
       const mdjFormData = new FormData();
       const blob = new Blob([filteredFile], { type: 'application/octet-stream' });    
       mdjFormData.append("filename",blob,modalDetail?.ModelName);
       mdjFormData.append("tech", "Odata_v4");
       const modelValidationRes = await ModelValidation(mdjFormData);
       global.Busy(false);
       return modelValidationRes;
    } else {
       global.Busy(false);
       global.AlertPopup("error",res?.statusText);
   }
 } catch(error) {
   console.log(error);
   global.AlertPopup("error",error?.statusText);
 }
}

const DownloadSelectedModel = async (selectedModel) => {
  await ExpandDocumentByID(selectedModel?.ModelFileFile).then(res => {
    const blob = new Blob([res?.values], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = selectedModel?.ModelFileName;
    document.body.appendChild(a);
    a.click();
    // Clean up by revoking the URL
    URL.revokeObjectURL(url);
  })
}

const OnUploadmodel = async (name,type,formdata,modelDetail) => {
  const DocRes = await UploadDocument(name,type,formdata);
  if(DocRes.status){
     const ModelRes = await SetModelFile({       
        IconPath: "images/img_group25.svg",
        CreatedBy: "User",
        ModelFileFile: DocRes?.values?.DocId,
        ...modelDetail
      });
        global.Busy(false);
        return ModelRes;
  } else {
    global.Busy(false);
    global.AlertPopup("error",DocRes?.statusText);
  }
}

export { CreateBackendPoject , CreateFrontendProject, RegenerateBackendProject, RegenerateFrontendProject, StartSubscription, UploadModel,
   ValidateYoursModel, DownloadSelectedModel, OnUploadmodel };