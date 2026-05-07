import React, { useEffect, useState } from 'react'
import { Button, Img, Input, Line, NoDataFound, Text } from 'components';
import helper from "shared/helper";
import { DataTable } from 'screens/childs';
import { DakshService, ExpandDocumentByID, GetChats, SetDocument, SetModelFile } from 'shared/services';
import { ChatPrompt, RenderAdvOptions, RenderProperties, RenderRelationship } from './childs';
import session from "shared/session";
import { useAuth0 } from '@auth0/auth0-react';
import Functions from './childs/Functions';
import { OnUploadmodel } from 'shared/common';
import { useNavigate, useParams } from 'react-router-dom';
import CWModal from 'modals/Modal';
import AlertBoxModal from 'modals/AlertBoxModal';
import {  WIZARD_GPT } from 'utils/constants';

const dataTypes = ['String', 'Int', 'Long', 'Boolean', 'Date', 'Time', 'DateTimeOffset', 'Double', 'Decimal', 'BigDecimal', 'Float']

const argColumns = [
  { headerName: "Argument Name", field: "name", flex: 1, sortable: false, editable: true },
  { headerName: "Argument Type", field: "type", flex: 1, sortable: false, editable: true, type: 'singleSelect',
    valueOptions: [...dataTypes,'void'] },
];
const operartionColumns = (onClickedArgsForm) => {
  return [
    { headerName: "Name", field: "name", flex: 1, sortable: false, editable: true },
    { headerName: "Argument", field: "Advanced", flex: 1, sortable: false, editable: false,
      renderCell: (params) => (
        <Button className='flex items-center border-2 text-core text-medium text-[12px] border-hint px-2 h-[28px] mt-2.5 mx-auto rounded-md cursor-pointer'
          onClick={() => onClickedArgsForm(params)}
        >
          View / Edit
        </Button>
      ),
    },
    { headerName: "Response", field: "returnType", flex: 1, sortable: false, editable: true, type: 'singleSelect',
      valueOptions: [...dataTypes,'void'] },
    { headerName: "Description", field: "description", flex: 1, sortable: false, editable: true },
   ];
}

const entitycolumns = (onClickedAdvOpt, dataTypes) => {
  return [
     { headerName: "Field Name", field: "name", flex: 1, sortable: false, editable: true },
     { headerName: "Is Key", field: "isKey", flex: 1, sortable: false, editable: true, type: 'boolean'},
     { headerName: "Data Type", field: "type", flex: 1, sortable: false, editable: true, type: 'singleSelect',
       valueOptions: dataTypes },
     { headerName: "Default", field: "defaultValue", flex: 1, sortable: false, editable: true },
     { headerName: "Advanced", field: "Advanced", flex: 1, sortable: false, editable: false,
       renderCell: (params) => (
         <Button className='flex items-center border-2 text-core text-medium text-[12px] border-hint px-2 h-[28px] mt-2.5 mx-auto rounded-md cursor-pointer'
           onClick={() => onClickedAdvOpt(params)}
         >
           Advanced
         </Button>
       ),
     }
   ];
}

const enumColumns = [
  { headerName: "Name", field: "name", flex: 1, sortable: false, editable: true },
  { headerName: "Value", field: "value", flex: 1, sortable: false, editable: true },
];

const RenderInfo = () => {
  const [showInfo,setShowInfo] = useState(false);

  return(
    <>
      <Img
        src="/images/info.svg"
        className="bg-secondary h-[41px] w-[41px] absolute -top-2 right-3 p-2 rounded-full cursor-pointer"
        alt="info"
        onClick={() => setShowInfo(true)}
      />
      {showInfo && (
        <div className="bg-secondary border-l-[3px] border-primary flex flex-col gap-[12px] p-[12px] rounded absolute -top-2 right-0 md-auto fadeIn w-[520px]">
          <div className='flex gap-2 relative w-full'>
              <Img
                src="/images/info.svg"
                className="h-[17px] w-[17px] cursor-pointer"
                alt="home"
              />
              <Text
                className="cursor-pointer font-normal text-gray_50 text-left w-[100%]"
                variant="body2"
              >
                Description
              </Text>
              <Img
                src="/images/add.png"
                className="h-6 w-6 rotate-45 hover:bg-secondary transition-all rounded-full cursor-pointer"
                alt="image"
                onClick={() => setShowInfo(false)}
              />
          </div>
          <Text
            className="cursor-pointer font-normal text-subtle leading-5 text-left w-[100%]"
            variant="body2"
          >
            You can design the domain model of your backend API in few simple steps. Add APIs, attributes, End Points and relationships.
              You can either fill the details in tabular form, use UML view or use JSON format.
              Note that this is only a design of the backend APIs, not database tables. Every API referred here will become an API when the code is generated. 
          </Text>
        </div>
      )}
    </>
  )
}

const DesignHeader = ({ appData, onSaveDesignName, invokePrompt, setConfirmCancel, onSubmit  }) => {
  const [editInput, setEditInput] = useState("");
  const [rows, setRows] = useState();
  
  const onChangeInput = (e) => {
    const {name,value} = e.target;
    setRows(prev => (
      {...prev, [name] : value}
    ))
  }

  const OnSaveDesignName = () => {
    if(onSaveDesignName) { onSaveDesignName("applicationName", rows.applicationName); setEditInput(""); }
  }

  const OnSubmit = () => {
    if(!rows.applicationName) { 
      global.AlertPopup("error","Please enter your design name to save"); 
      setEditInput("applicationName"); 
      return;
    }

    if(onSubmit) onSubmit(appData.applicationName);
  }

  useEffect(() => {
    setRows(prev => (
      {...prev, applicationName : appData.applicationName}
    ))
  }, [appData.applicationName])

  return(
    <div className='flex justify-between pb-5'>
      {editInput === "applicationName" ?
        <Input
            wrapClassName={`${editInput === "applicationName" ? "border-[1px] border-hint" : ""} bg-base flex items-center md:h-[auto] px-3 rounded-md max-w-[300px]`}
            className="font-normal not-italic p-[0] placeholder:text-hint text-[14px] text-subtle text-left w-[100%]"
            name="applicationName"
            placeholder={`Enter Design Name`}
            value={rows.applicationName}
            onChange={onChangeInput}
            suffix={
              <>
                <Img
                  src="/images/close.png"
                  className="h-6 w-6 p-1 m-[4px] rounded-full cursor-pointer hover:bg-hint"
                  alt="question"
                  onClick={() => setEditInput("")}
                /> 
                <Img
                  src="/images/check_icon.svg"
                  className="h-6 w-6 p-1 m-[4px] rounded-full cursor-pointer hover:bg-hint"
                  alt="question"
                  onClick={OnSaveDesignName}
                /> 
              </>
            }
          />
       :
        <Text
          className="text-core text-center"
          variant="h6"
          as="h6"
        >
          {appData.applicationName || "Design Name"}
          <Img
            src="/images/Edit.svg"
            className="inline ml-5 cursor-pointer"
            alt="question"
            onClick={() => setEditInput("applicationName")}
          />
        </Text>            
      }
      <div className='flex items-center gap-3'>        
        <Img
          src="/images/ai_icon.svg"
          className="cursor-pointer w-10 h-10"
          alt="question"
          onClick={invokePrompt}
         />
        <Button
          onClick={() => setConfirmCancel(true)}
          className="cursor-pointer p-[10px] rounded-sm text-[14px] text-core border border-primary"
        >
          Cancel
        </Button>
        <Button
          onClick={OnSubmit}
          className="bg-primary cursor-pointer font-medium px-5 py-[10px] rounded-sm text-[14px] text-core"
        >
          Save
        </Button>
      </div>
    </div>
  )
}

const CreateTable = ({ tables, activeTable, onClickAddTable, removeTableById, setActiveTable, isStreaming }) => {
  const [tableName, setTableName] = useState('');
  const [type,setType] = useState('Entity');

  const onchangeTableName = (e) => {
    setTableName(e.target.value)
  }

  const OnClickAddTable = () => {
   if(onClickAddTable) onClickAddTable(tableName,type); setTableName('');
  }
  
  const rows = [{label:' APIs',type:'Entity',name:"API"},{label:' Data Types',type:'Enum',name:'Data Type'},{label:' Complex',type:'Complex',name:'Complex'},{label:' Files',type:'File',name:'File'}]

  return(
    <div className="flex flex-1 flex-col gap-[14px] w-[25%] pt-2 border border-[#4E4E4E] rounded-lg p-4 h-fit">
      {isStreaming && (
        <Text
          className="text-hint"
          variant="h6" as="h6"
        >
            Generating ...
        </Text> 
      )}
      {rows.map((row,ind) => {
         return(
          <div  className="flex flex-col gap-4" key={row.type}>
            <div className='flex justify-between items-center py-1'>
              <Text
                  className="text-core text-left w-[auto] mt-auto"
                  variant="body2"
                >
                  {row.label} :
              </Text>
              {type !== row.type &&(
                <Button
                  className="bg-primary cursor-pointer flex gap-1 items-center justify-center px-2 text-core text-[12px] h-[28px] rounded"
                  onClick={() => setType(row.type)}
                  leftIcon={
                    <Img
                      src="/images/add.png"
                      className="w-[13px] h-[13px]"
                      alt="checkmark"
                    />
                  }
                >
                  Add 
                </Button>
              )}
            </div>
            {type === row.type && (
              <Input
                wrapClassName="bg-gray_902 flex md:h-[auto] px-3 py-2 rounded-md border-[1px] border-hint w-[100%]"
                className="font-normal not-italic p-[0] placeholder:text-hint sm:px-[20px] text-[14px] text-gray_300 text-left w-[100%]"
                name="email"
                placeholder={`Enter ${row.name} Name`}
                value={tableName}
                onChange={onchangeTableName}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    OnClickAddTable();
                  }
                }}
                suffix={
                  <Img
                    src="/images/add.png"
                    className="bg-primary m-[4px] border-[1px] border-core rounded-md cursor-pointer"
                    alt="question"
                    onClick={OnClickAddTable}
                  />
                }
              />
            )}
    
            <div className='flex w-[100%] gap-4 flex-wrap'>
              {tables.filter(x => x.stereotype.toLowerCase() === row.type.toLowerCase())?.map((x) => {
                  return(
                      <div 
                          className={`${activeTable?.id === x?.id ? "bg-primary" : ""} flex items-center justify-between w-[100%] rounded-sm`} 
                          key={x.id}
                      >                        
                          <Text
                            className="flex-1 text-core text-left w-[auto] p-3 cursor-pointer"
                            variant="body2"
                            onClick={() => setActiveTable(x)}
                          >
                              {x?.name}
                          </Text>
                          <Img
                            src="/images/add.png"
                            className="h-6 w-6 rotate-45 mx-3 hover:bg-error transition-all rounded-full cursor-pointer"
                            alt="image"
                            onClick={() => removeTableById(x.id)}
                          />
                      </div>
                  )
              })}

              {helper.IsArrayEmpty(tables
                .filter(x => x.stereotype.toLowerCase() === row.type.toLowerCase())) && 
                <NoDataFound msg={`No ${row.label} present`} className="!justify-start p-2" />}

              {ind+1 < rows.length && <Line className="bg-[#D9D9D980] h-[1px] w-[100%] opacity-50" />}
            </div>
          </div>
         )
      })}
    </div>
  )
}

const defaultError = "An error occurred while processing your request.";

const InputTable = () => {
 const [tables, setTables] = useState([]);
 const [activeTable, setActiveTable] = useState({});
 const [advOption, setAdvOption] = useState(null);
 const [AIprompt,setAIprompt] = useState(true);
 const [chats,setChats] = useState([]);
 const [method,setMethod] = useState(null);
 const [logs,setLogs] = useState({});
 const [isStreaming, setIsStreaming] = useState(false);
 const [confirmCancel, setConfirmCancel] = useState(false);
 const [appData, setAppData] = useState({});

 const { user } = useAuth0();
 const Navigate = useNavigate();
 const { id } = useParams();

 function extractChatResponses(messages) {
  let structuredResponses = [];
  let currentQuestion = null;
  
  messages.forEach((msg, index) => {
      if (msg.role === "USER") {
          currentQuestion = msg.message;
      } else if (msg.role === "AI" && currentQuestion) {
          try {
              const fixedJson = `[ ${msg.message.replace(/}\s*{/g, "}, {")} ]`;
              const responseObj = JSON.parse(fixedJson);
              let responseMessage = responseObj[0].responseMessage;
              if (responseMessage) {
                  structuredResponses.push({ q: currentQuestion, rslt: { responseMessage } });
              }
          } catch (error) {
              console.error("Error parsing AI response: ", error);
          }
          
          currentQuestion = null;
      }
  });
  
  return structuredResponses;
}


 const fetchDesign = async (id) => {
    setAIprompt(false);
    global.Busy(true);
    const { DocId, SessionId } = session.Retrieve('InputDesign',true) || {};
    const res = await ExpandDocumentByID(DocId);
    const query = `id=${user?.email}-${SessionId}`;
    const ChatRes = await GetChats(query);
    const chats = extractChatResponses(ChatRes.values);
    setChats(chats);
    global.Busy(false);
    const data = JSON.parse(res.values.match(/{.*}/s));
    for (let cls of data.model?.classes) {
      cls.properties = cls.properties.map(prop => {
        let type = prop.type?.split('.')[1];
        if(type === "Int32") type = "Int";
        return {...prop, type }
      })
    }
    const classes = Functions.MergeTables([], data);
    if(!helper.IsArrayEmpty(classes)) { setTables(classes); setActiveTable(classes[0]) };
    setAppData({ applicationName: data.model?.name});
 } 

 useEffect(() => {
    if(!helper.IsNullValue(id)) fetchDesign(id);
 }, [id])

 const fetchStreamingData = async (payload, formData, newRow) => {
    let url = `${WIZARD_GPT}/generate?format=json`;
    setIsStreaming(true);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${session.Retrieve("bearer_token")}`,
        },
        body: formData,
      });

      if (!res.ok) {
        global.AlertPopup("warning", defaultError);
        setIsStreaming(false);
        return;
      }

      // Handle streaming response
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      
      let resMsg = false;
      let result = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) { setIsStreaming(false); break; }

        result += decoder.decode(value, { stream: true });
        const splitPatterns = ['{"responseMessage"', '{"listOfEntities"', '{"entity":{', '{"delta"', '{"model"', '{"appId"', '{"queryId"'];

        const regex = new RegExp(splitPatterns.join('|'), 'g');
        
        const markedData = result.replace(regex, match => `|||${match}`);
        const jsonObjects = markedData.split('|||').filter(Boolean).map(obj => JSON.parse(obj));
        if(!resMsg){
          jsonObjects.map(x => {
            if(Object.keys(x).includes("responseMessage" || "listOfEntities")){
              const updatedRow = { q: payload.userPrompt, rslt: {responseMessage: x?.responseMessage, listOfEntities: x?.listOfEntities} };
              const updatedChats = [...newRow.slice(0, newRow.length - 1), updatedRow];
              updateChat(updatedChats);
            }
          }) 
          resMsg = true;
        }

        const newRslt = jsonObjects.reduce((acc, val) => { 
          if(val.entity) { return {...acc,entities : [...(acc?.entities|| []),val.entity] }}
          return { ...acc, ...val }
        }, {});   

        if(newRslt.appId && newRslt.applicationName) {
          setAppData({appId: newRslt.appId,applicationName:newRslt.applicationName});
        }

        if(!helper.IsJSONEmpty(newRslt.delta) || helper.IsNullValue(appData.queryId)){
          try {
            setAppData(prev => ( {...prev, queryId: newRslt.queryId} ));
            const classes = Functions.MergeTables(tables, newRslt);
            !helper.IsArrayEmpty(classes) && setTables(classes);
          } catch (error) {
            const errorRow = { q: payload.userPrompt, rslt: { responseMessage: defaultError }};
            const updatedChats = [...newRow.slice(0, newRow.length - 1), errorRow];
      
            updateChat(updatedChats);
            setIsStreaming(false);
            global.AlertPopup("warning", defaultError);
            console.error('Error sending prompt:', error);
          } 
        }
      }
    } catch (err) {
        global.AlertPopup("warning", defaultError);
      setIsStreaming(false);
    }
 };

 const onClickedAdvOpt = (params) => {
  setAdvOption(params.row.id);
 }
 const getColumns = (type) => {
    if(type === 'Enum') {
      return enumColumns;
    }
    const enums = tables
    .filter(x => ['Enum','Complex'].includes(x.stereotype) )
    .map(x => x.name);
    return entitycolumns(onClickedAdvOpt, [...dataTypes,...enums]);
 };

 const updateChat = (x) => {
   setChats(x)
 }

  useEffect(() => {
    if(!helper.IsArrayEmpty(tables)) {
      if (helper.IsJSONEmpty(activeTable)) { setActiveTable(tables.at(0)); return; }
    
      setActiveTable(prev => {
        const Nvalue = tables.find(x  => x.id === prev.id);
        if(!helper.IsJSONEmpty(Nvalue)) return Nvalue
        return tables.at(-1);;
      })
    }
  },[tables])
  
  const onClickAddTable = (tableName,type) => {
    if (helper.IsNullValue(tableName)) 
      return global.AlertPopup("error","Name should not be Empty"); 
    const name = Functions.ToPascalCase(tableName);
    const tableExists = tables.some(table => table?.name === name);
    if (tableExists) 
      return global.AlertPopup("error","That table is already present");
    const maxId = tables.length > 0 ? Math.max(...tables.map(t => t.id)) : 0;
    const newTable = {
      id: maxId + 1,
      stereotype: type,
      methods: [],
      properties: [{ id: 1 }],
      navProperty: [],
      name
    }
    setActiveTable(newTable);
    setTables(prev => [newTable, ...prev]);
  };

  const removeTableById = (id) => {
    if (id) {
      setTables(prev => (
        prev.filter(x => x.id !== id)
      ));
    }
  }

  const onClickAddRow = (key) => {
    setTables(prev => {
      return prev.map((table) => {
        if (table.id !== activeTable.id) return table;
        const id = helper.GetUniqueId(table[key]);

        return { ...table, [key] : [...table[key], {id}] };
      });
    });
  }

  const onUpdateRow = (e, key) => {
    setTables(prev => {
      return prev.map((table) => {
        if (table.id !== activeTable.id) return table;
        
          return { ...table, [key]: table[key]
            .map((x) => x.id === e.id ? { ...x, ...e } : x )}      
      });
    })
  }

  const OnCloseClicked = async (id, key) => {
    if (id) {         
      setTables(prev => {
        return prev.map((table) => {
          if (table.id !== activeTable.id) return table;

          return { ...table, [key] : table[key].filter(x => x.id !== id) };
        });
      });
    }
  } 

  const OnActionClicked = (id, type, key, parent) => {
    if(!helper.IsNullValue(parent)) {
      if (type === 'delete') OnCloseChildRow(id, key, parent); return;
    }
    if (type === 'delete') OnCloseClicked(id, key, parent);
  } 

  const addChildRow = (key, parent) => {
    setTables(prev =>
      prev.map(t =>
        t.id === activeTable.id ? {
          ...t, [parent] : t[parent]
            .map(row => row.id === method ? {
              ...row, [key] : [...(row[key] || []),
              { id: helper.GetUniqueId(row[key] || []) }]
            } : row)
        } : t)
    );
  };
  
  const onUpdateChildRow = (e, key, parent) => {
    setTables(prev =>
      prev.map(t =>
        t.id === activeTable.id ? { ...t, [parent] : t[parent]
          .map(item => item.id === method ? { ...item, [key] : item[key]
            .map(row => row.id === e.id ? { ...row, ...e } : row ),
          } : item )}
        : t
      )
    );
  };
  
  const OnCloseChildRow = async (id, key, parent) => {
    if (id) {
      setTables(prev =>
        prev.map(tbl =>
          tbl.id === activeTable.id ? { ...tbl, [parent]: (tbl[parent] || [])
            .map(item => item.id === method ? { ...item, [key]: item[key]
              .filter(row => row.id !== id) } : item)}
            : tbl
        )
      );
    }
  };
  
  const onSubmit = async (DesignName) => {
    const data = Functions.ToInputJson(DesignName,tables);

    const jsonString = JSON.stringify(data);
    const jsonBlob = new Blob([jsonString], { type: "application/json" });
    const formdata = new FormData();

    const fileName = DesignName.split(/[\s-]/).join("_");
    
    formdata.append("filename", jsonBlob, `${fileName}.json`); 
    formdata.append("tech", "JSON");
    
    global.Busy(true);
    const validationRslt = Functions.validateModel(data.model);
    if(!helper.IsJSONEmpty(validationRslt.errors)) { setLogs(validationRslt); global.Busy(false); return; };
    const res = await DakshService(formdata);
    const { SessionId } = session.Retrieve('InputDesign',true) || {};
    if(res.status){
      let modelData = {          
        ModelType: "JSONAI",
        ModelName: DesignName,
        UserName: user?.email,
        ModelFileIndustry: 4,
        ModelFileName: `${fileName}.json`,
        Version:"v1",
        Date: helper.ToDate(new Date(), "YYYY-MM-DDTHH:mm:ss.SSZ", true),
        Attribute1: SessionId
      };
      if(!helper.IsNullValue(id)) modelData = { ...modelData, ModelId : id }

      const uploadRes = await OnUploadmodel(fileName,"json",formdata,modelData);
      if(uploadRes.status) {
        const { DocId } = session.Retrieve('InputDesign',true) || {};
        await SetDocument(null, { DocId, Deleted : true });
        global.AlertPopup("success",`File saved successfully`);
        Navigate(-1);
      }
      else {
        global.AlertPopup("error",uploadRes?.statusText)
      }
    } else {
      global.Busy(false);
      global.AlertPopup("error",res?.statusText)
    }
    global.Busy(false);
  }

  const invokePrompt = () => {
    setAIprompt(!AIprompt);
  }

  const onClickedArgsForm = (params) => {
    setMethod(params.row.id);
  }

  const onCancel = () => {
    session.Store('InputDesign', {}, true);
    Navigate("/design-library");
  }

  const onSaveDesignName = (name, value) => {
   setAppData(prev => ({...prev, [name] : value}))
  }

  return (
    <div className='p-4 pb-8 w-full'>
      <DesignHeader appData={appData} onSaveDesignName={onSaveDesignName} invokePrompt={invokePrompt}
        setConfirmCancel={(e) => setConfirmCancel(e)} onSubmit={onSubmit} />

      <div className='flex gap-6 w-[100%] relative'>    
        <CreateTable tables={tables} activeTable={activeTable} isStreaming={isStreaming}
          onClickAddTable={onClickAddTable} removeTableById={removeTableById} setActiveTable={x => setActiveTable(x)}/>
  
        {/* <Line className="bg-gray_801 w-[2px] min-h-[70vh]" /> */}

        <div className='w-[75%] flex flex-col gap-2 items-start pt-2'>
          {tables.length > 0 ? (
            <>
              <div className='flex flex-col items-start gap-2 w-[100%]'>
                <Text
                  className="text-core text-center font-medium pt-1"
                  variant="body2"
                >
                  Fields
                </Text>
                <Line className="bg-[#D9D9D980] opacity-50 h-[1px] w-[100%]" />
                <DataTable onActionClicked={OnActionClicked} rows={activeTable?.properties || []} onUpdateClicked={onUpdateRow}
                  keyId={'id'} columns={getColumns(activeTable?.stereotype)} noView={true} pageMode={"client"} name={"properties"}
                  onClickAddRow={onClickAddRow} title={'Field'}/>
              </div>

              <Text
                className="text-core text-center mt-2 font-medium"
                variant="body2"
              >
                Basic Properties
              </Text>
              <Line className="bg-[#D9D9D980] opacity-50 h-[1px] w-[100%]" />
              <RenderProperties tableId={activeTable?.id} id={advOption} setAdvOption={(x) => setAdvOption(x)}
                updateTable={x => setTables(x)} tables={tables} />
                
              {!['Enum','Complex','File'].includes(activeTable.stereotype) && (
                <>
                  <RenderRelationship tables={tables} relationships={activeTable?.navProperty || []}
                    onUpdateRow={onUpdateRow} onClickAddRow={onClickAddRow} onActionClicked={OnActionClicked} />

                  <div className='flex flex-col items-start flex-1 gap-2 mt-2 w-[100%]'>
                    <Text
                      className="text-core text-center font-medium"
                      variant="body2"
                    >
                      Endpoints
                    </Text>
                    <Line className="bg-[#D9D9D980] opacity-50 h-[1px] w-[100%]" />
                    <DataTable onActionClicked={OnActionClicked} rows={activeTable?.methods || []} onUpdateClicked={onUpdateRow}
                        keyId={'id'} columns={operartionColumns(onClickedArgsForm)} noView={true} pageMode={"client"} name={"methods"}
                        onClickAddRow={onClickAddRow} title={'Endpoint'} />
                  </div>
                </>
              )}
            </>
            ) :
              <>
                <NoDataFound msg="Create an API to get started." className="pt-1" />
                <Line className="bg-[#D9D9D980] opacity-50 h-[1px] w-[100%]" />
              </>
          }
        </div>
        <RenderInfo />
      </div>  
      
      {AIprompt && (
        <ChatPrompt setAIprompt={(x) => setAIprompt(x)} fetchStreamingData={fetchStreamingData} isStreaming={isStreaming}
          chats={chats} updateChat={updateChat} appData={appData}  />
      )}
      <RenderAdvOptions tableId={activeTable?.id} id={advOption} setAdvOption={(x) => setAdvOption(x)}
         updateTable={x => setTables(x)} tables={tables} activeTable={activeTable} />
         
       <CWModal open={!helper.IsNullValue(method) ? true : false} className="w-[600px] h-auto max-h-[460px] overflow-y-auto" close={() => setMethod(null)}>
         <div className='flex flex-col w-[100%]'>
            <DataTable onActionClicked={OnActionClicked} onClickAddRow={addChildRow} title={'Argument'} parent={'methods'} 
              rows={activeTable?.methods?.find(x => x.id === method)?.parameters || []} onUpdateClicked={onUpdateChildRow}
              keyId={'id'} columns={argColumns} noView={true} pageMode={"client"} name={"parameters"}
            />
            <Button
              className="border-primary border-2 cursor-pointer px-2 text-core text-[14px] h-[30px] w-[60px] rounded"
              onClick={() => setMethod(null)}
            >
              Close 
            </Button>
         </div>
       </CWModal>

       <AlertBoxModal
          isOpen={!helper.IsJSONEmpty(logs)}
          onConfirm={() => setLogs({})}
          message={logs?.errors}
          title={'Please fix the below errors'}
          alertType={'error'}
          className={`bg-base min-h-auto max-h-[400px] w-[650px] px-12 py-8 rounded-lg border-[1px] border-hint overflow-y-auto`}
        />
         <AlertBoxModal
          isOpen={confirmCancel}
          onConfirm={() => setConfirmCancel(false)}
          onClose={() => onCancel()}
          message={"Your current design progress will be lost if you cancel. Are you sure you want to proceed?"}
          closeText={'Yes'}
          confirmText={'Go Back'}
          className={`bg-base w-[650px] px-12 py-8 rounded-lg border-[1px] border-hint border-opacity-50`}
        />
    </div>
  )
}

export default InputTable;