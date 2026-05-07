import { APP_RUNNER_URL, BASE_URL, CODE_GEN_URL, CONFIGURATOR_URL, MODEL_VALIDATION_URL, 
    RAZORPAY_URL, REP_TECH_BACKEND_URL, SUBSCRIPTION_URL, EXCLUSIVE_AUTH_URL, 
    APP_RUNNER_FE, FEEDBACK_URL, WIZARD_GPT} from "utils/constants";
import session from "./session";
import axios from "axios";
import Helper from 'shared/helper';

const CreateBackendApp = (data) => {
    return new Promise(async (resolve) => {

        let url = `${REP_TECH_BACKEND_URL}/BackendApps`;

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                },
                body: JSON.stringify(data)
            });

            const json = await res.json();
            if (res.status === 200 || res.status === 201) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const CreateProject = (data) => {
    return new Promise(async (resolve) => {
        let url = `${REP_TECH_BACKEND_URL}/Projects`;
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                },
                body: JSON.stringify(data)
            });
            const json = await res.json();
            if (res.status === 200 || res.status === 201) {
                return resolve({ status: res.ok, values: json || 0 });
            }
            return resolve({ status: false, statusText: json.error.message });
        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const CodeGenerationService = (payload) => {
    return new Promise(async (resolve) => {
        let url = `${CODE_GEN_URL}/create`;
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                },
                body: JSON.stringify(payload)
            });
            const json = await res.json();
            if (res.status === 200 || res.status === 201) {
                return resolve({ status: res.ok, values: { ...json, ProjectId : payload?.ProjectId } || 0 });
            }
            return resolve({ status: false, statusText: json.error.message });
        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })  
}

const CreateFrontendApp = (payload) => {
    return new Promise(async (resolve) => {
        let url = `${REP_TECH_BACKEND_URL}/FrontendApps`;
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                },
                body: JSON.stringify(payload)
            });
            const json = await res.json();
            if (res.status === 200 || res.status === 201) {
                return resolve({ status: res.ok, values: json || 0 });
            }
            return resolve({ status: false, statusText: json.error.message });
        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })  
}

const ExpandBackendProjectByID = (ProjectId) => {
    return new Promise(async (resolve) => {
        let url = `${REP_TECH_BACKEND_URL}/Projects(${ProjectId})?$expand=GitHubCred,BackendApp($expand=Template($expand=Generator),Database,Capabilities,MainTechnology,Model)`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const ExpandFrontendProjectByID = (ProjectId) => {
    return new Promise(async (resolve) => {
        let url = `${REP_TECH_BACKEND_URL}/Projects(${ProjectId})?$expand=GitHubCred,FrontendApp($expand=Template($expand=Generator,AllScreens,MainTechnology,Supported_BETechnology),Capabilities,Dependency,MainTechnology,Model)`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const AppRunnerService = (payload, path) => {
    return new Promise(async (resolve) => {
        let url = `${APP_RUNNER_URL}/clone-repo`;
        if(payload.projectType === "FRONTEND")  url = `${APP_RUNNER_FE}/clone-repo`;
        if(path) url = `${APP_RUNNER_URL}/${path}`;
        
        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
            },
            body: JSON.stringify(payload)
        }
        try {
            const res = await fetch(url, options , 480*1000);
            if(!path) {
                const json = await res.json();
                if (res.status === 200 || res.status === 201) {
                    return resolve({ status: res.ok, values: json || 0 });
                }
            } else if (res.status === 200 || res.status === 201) {
               return resolve({ status: res.ok });                
            }           
            const json = await res.json();
            return resolve({ status: false, statusText: json.message });
        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })  
}

const DeployApp = (payload) => {
    return new Promise(async (resolve) => {
        let url = `${APP_RUNNER_URL}/deploy`;
        
        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${session.Retrieve("bearer_token")}`,
            },
            body: JSON.stringify(payload)
        }
        try {
            const res = await fetch(url, options , 480*1000);
            if (res.status === 200 || res.status === 201) {
                return resolve({ status: res.ok });
            }
            const json = await res.json();
            return resolve({ status: false, statusText: json.error.message });
        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })  
}

const ModelValidation = (payload) => {
    return new Promise(async (resolve) => {
        let url = `${MODEL_VALIDATION_URL}`;
        try {
            const res = await axios.post(
                url,
                payload,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                  },
                }
              );
            if (res.status === 200 || res.status === 201) {
                return resolve({ status: true, values: res?.data || 0 });
            }
            return resolve({ status: false, statusText: res.response.data.message });
        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.response.data.message });
        }
    })  
}

const GetAppConfigurationsById = (id) => {
    return new Promise(async (resolve) => {
        let url = `${CONFIGURATOR_URL}/AppConfigurations(${id})`
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const InvokeAppConfigurations = (data,UUID) => {
    const { ModelFileFile, ModelType } = data;
    return new Promise(async (resolve) => {
        let url = `${REP_TECH_BACKEND_URL}/ValidateModel(DocId=${ModelFileFile},Uuid='${UUID}',ModelType='${ModelType}')`
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetGitHubCreds = (value) => {
    return new Promise(async (resolve) => {
        let url = `${REP_TECH_BACKEND_URL}/GitHubCreds?$filter=UserName eq '${value}'`
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetUserProjects = (value) => {
    return new Promise(async (resolve) => {
        let url = `${REP_TECH_BACKEND_URL}/Projects?$filter=UserName eq '${value}'&$orderby= ProjectId desc & $expand=BackendApp,FrontendApp`
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const DeleteModelFile = (id) => {
        return new Promise(async (resolve) => {
            let url = `${REP_TECH_BACKEND_URL}/ModelFiles(${id})`
            try {
                const res = await fetch(url, {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                    }
                });
    
                if (res.status === 200 || res.status === 204) {
                    return resolve({ status: res.ok });
                }
                const json = await res.json();
    
                return resolve({ status: false, statusText: json.error.message });
    
            } catch (error) {
                console.log(error);
                return resolve({ status: false, statusText: error.message });
            }
        })
}

const DeleteGithubCred = (id) => {
    return new Promise(async (resolve) => {
        let url = `${REP_TECH_BACKEND_URL}/GitHubCreds(${id})`
        try {
            const res = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                }
            });

            if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok });
            }

            const json = await res.json();
            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const ExpandDocumentByID = (id) => {
    return new Promise(async (resolve) => {
        let url = `${REP_TECH_BACKEND_URL}/Documents(${id})/$value`;

        try {
            const res = await axios.get(url, {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                }
            });
            if (res.status === 200) {
                return resolve({ status: true, values: res.data || 0 });
            }

            return resolve({ status: false, statusText: res.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}
    

const UploadDocument = (name,type = "mdj",file) => {
    return new Promise(async (resolve) => {
        let url = `${REP_TECH_BACKEND_URL}/Documents`;
        try {
            const res = await axios.post(url, file, {
                headers: {
                    "Filetype" : type,
                    "fileName" : name,
                    "Content-Type" : 'multipart/form-data',
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                },            
            });
            if (res.status === 200 || res.status === 201) {
                return resolve({ status: true, values: res?.data || 0 });
            }
            return resolve({ status: false, statusText: res.response.data.message });
        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.response.data.message });
        }
    })  
}

const UploadGithubCreds = (payload) => {
    return new Promise(async (resolve) => {
        let url = `${REP_TECH_BACKEND_URL}/GitHubCreds`;
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                 "Content-type": "application/json",
                 "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                },
                body: JSON.stringify(payload)
            });
            const json = await res.json();
            if (res.status === 200 || res.status === 201) {
                return resolve({ status: res.ok, values: json || 0 });
            }
            return resolve({ status: false, statusText: json.error.message });
        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })  
}
    

const SetModelFile = (payload) => {
    return new Promise(async (resolve) => {
        let url = `${REP_TECH_BACKEND_URL}/ModelFiles`;
        let id = payload.ModelId;
        let method = "POST";
        if (payload.ModelId && !payload.Deleted) {
            method = "PATCH";
            url = `${REP_TECH_BACKEND_URL}/ModelFiles(${payload.ModelId})`;
        } else if (payload.ModelId && payload.Deleted) {
            method = "DELETE";
            url = `${REP_TECH_BACKEND_URL}/ModelFiles(${payload.ModelId})`;
        }

        delete payload['ModelId'];
        delete payload['Deleted'];
        try {
            const res = await fetch(url, {
                method,
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                },
                body: JSON.stringify(payload)
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.ModelId });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }
        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })  
}

const Generate = (payload) => {
    return new Promise(async (resolve) => {
        let url = `${BASE_URL}/ai/generate?format=json`;
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                },
                body: JSON.stringify(payload)
            });
            const json = await res.json();
            if (res.status === 200 || res.status === 201) {
                return resolve({ status: res.ok, values: json || 0 });
            }
            return resolve({ status: false, statusText: json.error.message });
        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })  
}

const GenerateFeatures = (payload) => {
    return new Promise(async (resolve) => {
        let url = `${BASE_URL}/ai/app/features `;
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                },
                body: JSON.stringify(payload)
            });
            const json = await res.json();
            if (res.status === 200 || res.status === 201) {
                return resolve({ status: res.ok, values: json || 0 });
            }
            return resolve({ status: false, statusText: json.error.message });
        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })  
}

const UpdateCapp = (params,data) => {
    const { DocId, uuid } = params;
    return new Promise(async (resolve) => {
        let url = `${BASE_URL}/api/v1/convert?DocId=${DocId}&Uuid=${uuid}`;
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                 "Content-type": "application/json",
                 "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                },
                body: JSON.stringify(data)
            });
            const json = await res.json();
            if (res.status === 200 || res.status === 201) {
                return resolve({ status: res.ok, values: json || 0 });
            }
            return resolve({ status: false, statusText: json.error.message });
        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })  
}

const GetCWIndustries = () => {
    return new Promise(async (resolve) => {
        let url = `${REP_TECH_BACKEND_URL}/Industries`
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetUserModels = (input) => {
    return new Promise(async (resolve) => {
        let url = `${REP_TECH_BACKEND_URL}/ModelFiles?$filter=UserName eq '${input}' & $orderby= ModelId desc & $expand=Industry`
        if(!Helper.IsNullValue(input?.ModelId))
            url = `${REP_TECH_BACKEND_URL}/ModelFiles(${input.ModelId})`;
        if(!Helper.IsNullValue(input?.BackendAppModel))
            url = `${REP_TECH_BACKEND_URL}/ModelFiles(${input.BackendAppModel})`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const UpdateGitHubCred = (id,data) => {
    return new Promise(async (resolve) => {

        let url = `${REP_TECH_BACKEND_URL}/GitHubCreds(${id})`;

        try {
            const res = await fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                },
                body: JSON.stringify(data)
            });

            if (res.status === 200 || res.status === 201) {
                return resolve({ status: res.ok});
            }

            return resolve({ status: false});

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetQA = (value) => {
    return new Promise(async (resolve) => {
        let url = `${REP_TECH_BACKEND_URL}/QuestionAnswers?$filter=Attribute5 eq '${value}'`
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const PostQA = (payload) => {
    return new Promise(async (resolve) => {
        let url = `${REP_TECH_BACKEND_URL}/QuestionAnswers`;
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                },
                body: JSON.stringify(payload)
            });
            const json = await res.json();
            if (res.status === 200 || res.status === 201) {
                return resolve({ status: res.ok, values: json || 0 });
            }
            return resolve({ status: false, statusText: json.error.message });
        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })  
}

const GetPreBuiltApps = (value) => {
    return new Promise(async (resolve) => {
        let url = `${REP_TECH_BACKEND_URL}/PreBuiltApplications?$expand=RefApp`
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}
const DeleteProject = (id) => {
    return new Promise(async (resolve) => {
        let url = `${REP_TECH_BACKEND_URL}/Projects(${id})`
        try {
            const res = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                }
            });

            if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok });
            }
            const json = await res.json();

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const ExclusiveAccess = (data) => {
    return new Promise(async (resolve) => {
        let url = `${EXCLUSIVE_AUTH_URL}/ExclusiveAccesses?$filter=Code eq '${data}'`;
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                }
            });
            const json = await res.json();
            if (res.status === 200 || res.status === 201) {
                return resolve({ status: res.ok, values: json.value?.length > 0 ? true : false });
            }
            return resolve({ status: false, statusText: json.error.message });
        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })  
}

const DakshService = (payload) => {
    return new Promise(async (resolve) => {
        let url = MODEL_VALIDATION_URL;
        try {
            const res = await axios.post(
                url,
                payload,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                  },
                }
              );
            if (res.status === 200 || res.status === 201) {
                return resolve({ status: true, values: res?.data || 0 });
            }
            return resolve({ status: false, statusText: res.response.data.message });
        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })  
}

const NotificationService = (payload) => {
    return new Promise(async (resolve) => {
        let url = `${BASE_URL}/notification`;
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                },
                body: JSON.stringify(payload)
            });

            if (res.status === 200 || res.status === 201) {
                return resolve({ status: res.ok });
            }
            return resolve({ status: false });
        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })  
}

const SendFeedback = (payload) => {
    return new Promise(async (resolve) => {
        let url = `${FEEDBACK_URL}/Feedbacks`;
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(payload)
            });
            const json = await res.json();
            if (res.status === 200 || res.status === 201) {
                return resolve({ status: res.ok, values: json || 0 });
            }
            return resolve({ status: false, statusText: json.error.message });
        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })  
}
const SetFeedbackDoc = (file, headers) => {
    return new Promise(async (resolve) => {
        let url = `${FEEDBACK_URL}/Documents`;
        try {
            const res = await axios.post(url, file, {
                headers: {
                    "Content-Type" : 'multipart/form-data',
                    ...headers
                },            
            });
            if (res.status === 200 || res.status === 201) {
                return resolve({ status: true, values: res?.data || 0 });
            }
            return resolve({ status: false, statusText: res.response.data.message });
        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.response.data.message });
        }
    })  
}

const SetDocument = async (input, headers) => {
    return new Promise(async (resolve) => {
        let id = headers.DocId;
        let method = "POST";
        let url = `${REP_TECH_BACKEND_URL}/Documents`;
        if (headers.DocId && !headers.Deleted) {
            method = "PATCH";
            url = `${REP_TECH_BACKEND_URL}/Documents(${headers.DocId})`;
        } else if (headers.DocId && headers.Deleted) {
            method = "DELETE";
            url = `${REP_TECH_BACKEND_URL}/Documents(${headers.DocId})`;
        } 
        delete headers['DocId'];
        delete headers['Deleted'];

        const formData = new FormData();
        formData.append('file', input);

        try {
            const res = await fetch(url, {
                method, body: formData,
                headers: {
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`,
                    ...headers
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.DocId });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetProject = async (id, params, expands) => {
    return new Promise(async (resolve) => {
        let url = `${REP_TECH_BACKEND_URL}/Projects(${id})`;
        if (params) {
            url = `${REP_TECH_BACKEND_URL}/Projects(${id})?${params}`;
        }
        if (expands) url = params ? `${url}&$expand=${expands}` : `${url}?&$expand=${expands}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`,
                    "Content-type": "application/json"
                }
            });
            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || {} });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

//static data

const GetUITemplates = () => {
    return new Promise(async (resolve) => {
        let url = `static/UITemplate.data.json`
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || 0 });
            }

            return resolve({ status: false });

        } catch (error) {
            console.log(error);
            return resolve({ status: false });
        }
    })
}

const GetBETemplates = () => {
    return new Promise(async (resolve) => {
        let url = `static/BETemplate.data.json`
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || 0 });
            }

            return resolve({ status: false });

        } catch (error) {
            console.log(error);
            return resolve({ status: false });
        }
    })
}

const GetIndutries = () => {
    return new Promise(async (resolve) => {
        let url = `static/modelFiles.data.json`
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.Industries || 0 });
            }

            return resolve({ status: false });

        } catch (error) {
            console.log(error);
            return resolve({ status: false });
        }
    })
}

const GetFETechstacks = () => {
    return new Promise(async (resolve) => {
        let url = `static/technologies.data.json`
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.FETechnologies || 0 });
            }

            return resolve({ status: false });

        } catch (error) {
            console.log(error);
            return resolve({ status: false });
        }
    })
}
const GetBETechstacks = () => {
    return new Promise(async (resolve) => {
        let url = `static/technologies.data.json`
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.BETechnologies || 0 });
            }

            return resolve({ status: false });

        } catch (error) {
            console.log(error);
            return resolve({ status: false });
        }
    })
}
const GetDatabases = () => {
    return new Promise(async (resolve) => {
        let url = `static/database.data.json`
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || 0 });
            }

            return resolve({ status: false });

        } catch (error) {
            console.log(error);
            return resolve({ status: false });
        }
    })
}

const GetExistingModels = () => {
    return new Promise(async (resolve) => {
        let url = `static/modelFiles.data.json`
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.modelFiles || 0 });
            }

            return resolve({ status: false });

        } catch (error) {
            console.log(error);
            return resolve({ status: false });
        }
    })
}

const GetCodewizardAPIs = () => {
    return new Promise(async (resolve) => {
        let url = `static/cw_api.data.json`
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || 0 });
            }

            return resolve({ status: false });

        } catch (error) {
            console.log(error);
            return resolve({ status: false });
        }
    })
}

// subscriptions

const CreateSubscription = (payload) => {
    return new Promise(async (resolve) => {
        let url = `${SUBSCRIPTION_URL}/create`;
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const json = await res.json();
            if (res.status === 200 || res.status === 201) {
                return resolve({ status: res.ok, values: json || 0 });
            }
            return resolve({ status: false, statusText: json.error.message });
        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })  
}

const VerifySubsciption = (payload) => {
    return new Promise(async (resolve) => {
        let url = `${SUBSCRIPTION_URL}/verify_payment`;
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const json = await res.json();
            if (res.status === 200 || res.status === 201) {
                return resolve({ status: res.ok, values: json || 0 });
            }
            return resolve({ status: false, statusText: json.error.message });
        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })  
}


const GetPlans = (value) => {
    return new Promise(async (resolve) => {
        let url = `${RAZORPAY_URL}/PlanInfos`
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const AccessTrail = (payload) => {
    return new Promise(async (resolve) => {
        let url = `${SUBSCRIPTION_URL}/usertrail`;
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`,
                },
                body: JSON.stringify(payload)
            });
            if (res.status === 200 || res.status === 201) {
                return resolve({ status: res.ok });
            }
            const json = await res.json();
            return resolve({ status: false, statusText: json.error.message });
        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })  
}

const GetChats = async (query, expands) => {
    return new Promise(async (resolve) => {
        let url = `${WIZARD_GPT}/conversation`;
        if (query) url = `${WIZARD_GPT}/conversation?${query}`;
        if (expands) url = `${url}&$expand=${expands}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.messages || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
//Auth

const IsRolesAssigned = () => {
    return new Promise(async (resolve) => {
        let url = `${BASE_URL}/roles/isRolesAssigned`
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetModelFilesCount = async (query, userName) => {
    return new Promise(async (resolve) => {
        let url = `${REP_TECH_BACKEND_URL}/ModelFiles/$count?$filter=UserName eq '${userName}'`;
        if (query) url = `${REP_TECH_BACKEND_URL}/ModelFiles/$count?$filter=UserName eq '${userName}' & ${query}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetModelFiles = async (query, expands, userName) => {
    return new Promise(async (resolve) => {
        let url = `${REP_TECH_BACKEND_URL}/ModelFiles?$filter=UserName eq '${userName}'`;
        if (query) url = `${REP_TECH_BACKEND_URL}/ModelFiles?$filter=UserName eq '${userName}' & ${query}`;
        if (expands) url = `${url}&$expand=${expands}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${session.Retrieve("bearer_token")}`
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}


export { CreateFrontendApp, CreateBackendApp, CreateProject, CodeGenerationService, AppRunnerService, ModelValidation, ExpandFrontendProjectByID,
         ExpandBackendProjectByID, GetAppConfigurationsById, InvokeAppConfigurations, GetGitHubCreds, CreateSubscription, VerifySubsciption,
         ExpandDocumentByID, DeleteModelFile, DeleteGithubCred, GetUserProjects, UploadDocument, UploadGithubCreds, SetModelFile, GetUserModels,
         GetCWIndustries, UpdateGitHubCred, GetQA, PostQA, GetPreBuiltApps, DeleteProject, GetUITemplates, GetBETemplates, GetFETechstacks,
          GetBETechstacks, GetIndutries, GetExistingModels, IsRolesAssigned, GetPlans, AccessTrail, DeployApp, GetDatabases, GetCodewizardAPIs, 
          DakshService, ExclusiveAccess, Generate, NotificationService, GetModelFilesCount, GetModelFiles, UpdateCapp, GenerateFeatures, SendFeedback,
          SetFeedbackDoc, SetDocument, GetChats, GetProject
         }
