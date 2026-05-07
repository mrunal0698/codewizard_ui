import React, { useEffect, useState } from "react";
import { Button, Img,  Loader,  Text } from "components";
import * as Api from "shared/services";
import Helper from "shared/helper";
import ModelUploader from "modals/ModelUploader";
import AlertBoxModal from "modals/AlertBoxModal";
import CWModal from "modals/Modal";
import ModelCatalogue from "components/ModelCatalogue/ModelCatalogue";
import { SortableTable } from "screens/childs";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import session from "shared/session";

const gridActions = [
  {name:"Upload a File", src:"images/upload-icon.svg", type: "Upload_Design"},
  {name:"Create with AI", src:"images/AI_text.svg", type: "Create_Input_Design"},
  {name:"New UML Design", src:"images/uml-icon.svg"},
  // {name:"Create New Tabular Input Design", src:"images/table-icon.svg", type: "Create_Input_Design"}, 
]

const ModelType = {
  StarUML : "text-[#E44D26] bg-[rgba(228,77,38,0.2)]",
  JSONAI : "text-[#01A650] bg-[rgba(1,166,80,0.1)]",
  EDMX : "text-[#016CD9] bg-[rgba(1,108,217,0.1)]"
}

const ActionGrid = ({ setInitialize }) => {
  const [modelUploader, setModelUploader] = useState(false);
  const [uploadRes,setUploadRes] = useState(null);
  
  const short_uuid = require('short-uuid');

  const navigate = useNavigate();

  useEffect(() => {
    if(Helper.IsJSONEmpty(uploadRes)) setInitialize(true);
  },[uploadRes])

  const onClickedGirdItem = (type) => {
   if(type === "Upload_Design") setModelUploader(true);
   if(type === "Create_Input_Design") OnCreateDesign();
  }

  const OnCreateDesign = () => {
    session.Store("InputDesign", { SessionId:short_uuid.generate() }, true);
    navigate("/input-table");
  }

  return(
    <div className="grid sm:grid-cols-1 sm:m-auto md:grid-cols-3 grid-cols-4 gap-5">
        {gridActions.map((menu, idx) => {
            return(
              <div className={`${menu.type? "opacity-100 cursor-pointer"  : "opacity-50 cursor-not-allowed"} bg-[#383838] flex items-center gap-4 px-[22px] py-[18px] rounded-lg`}
              onClick={() => onClickedGirdItem(menu.type)} key={idx}
              >
                <Img src={menu.src} alt="menu"/>
                <Text variant="body2" className="text-core"> {menu.name} </Text>
              </div>
            )
        })}


        <ModelUploader
          uploadComponentToShow={modelUploader}
          updateUploadComponentToShow={bool => setModelUploader(bool)} 
          updateModelResponse={(x) => setUploadRes(x)}
        />
    </div>
  )
}
const columns = [
  { key: "ModelId", label: "Design Id" },
  { key: "ModelName", label: "Name" },
  { key: "Version", label: "Version" },
  { key: "Date", label: "Date", type:"date" },
  { key: "ModelType", label: "Design Type", type:'enum' },
];

const RenderCWDesign = () => {
    const [rows, setRows] = useState([]);
    const [modelCatalogue, setModelCatalogue] = useState(false);
    const [selectedDesign,setSelectedDesign] = useState("");

    const FetchData = async () => {
      global.Busy(true);
      const res = await Api.GetExistingModels();
      global.Busy(false);
      if(res.status){
        setRows(res.values);
      }
    }

    useEffect(() => {
      FetchData();
    }, [])

    const updateSelectedDesign = (design) => {
      setModelCatalogue(true);
      setSelectedDesign(design); 
    };

  return(
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-cols-4 sm:mx-auto justify-center gap-6">
        {rows.map((design) => {
          return (
            <div 
              onClick={() => updateSelectedDesign(design)}
              className="bg-secondary flex flex-col items-center justify-center p-2 rounded-[7px] min-w-[230px] min-h-[146px] gap-3 cursor-pointer"
              key={design.ModelId}
            >
                <Img src={design?.IconPath} className="h-[56px] w-[56px]" alt={design.ModelName} />
          
                <Text className="text-center text-core" variant="body2" >
                  {design.ModelName}
                </Text>
            </div>
          )
        })}

        <CWModal open={modelCatalogue} className="bg-base px-6 rounded-lg w-[900px] md:w-[100%]"
          close={() => setModelCatalogue(false)}
        >
          <ModelCatalogue selectedModel={selectedDesign} close={() => setModelCatalogue(false)}/>
        </CWModal>
    </div>
  )
}
  
const DesignLibrary = () => {
  const [initialize, setInitialize] = useState(false);
  const [pageInfo, setPageInfo] = useState({ page: 0, pageSize: 10 });
  const [sortBy, setSortBy] = useState({ field: "ModelId", sort: "desc" });
  const [rowsCount, setRowsCount] = useState(0);
  const [rows, setRows] = useState([]);
  const [searchStr, setSearchStr] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [deletedId, setDeletedId] = useState(0);
  const [activeMenu, setActiveMenu] = useState("Your Designs");
  const [loading,setLoading] = useState(false);

  const short_uuid = require('short-uuid');
  const navigate = useNavigate();
  const { user } = useAuth0();
  const actions = ["Delete","Edit"];

  const FetchResults = async () => {
    let query = null, filters = [];
    setRows([]);
    setRowsCount(0);
    setDeletedId(0);
    setShowConfirm(false);

    setLoading(true);

    if (!Helper.IsNullValue(searchStr)) {
        filters.push(`$filter=contains(ModelDescription, '${searchStr}') or contains(ModelName, '${searchStr}')`);
    }

    if (!Helper.IsJSONEmpty(filters)) {
        query = filters.join("&");
    }

    // await Api.GetModelFilesCount("", user?.email)
    //     .then(async (res) => {
    //         if (res.status) {
    //             setRowsCount(parseInt(res.values));
    //         } else {
    //             console.log(res.statusText);
    //         }
    //     });

    if (!Helper.IsJSONEmpty(sortBy)) {
        const sortByField = columns.find(x => x.field === sortBy.field)?.sortField || sortBy.field;
        filters.push(`$orderby=${sortByField} ${sortBy.sort}`);
    }

    // const _top = pageInfo.pageSize;
    // const _skip = pageInfo.page * pageInfo.pageSize;
    // filters.push(`$skip=${_skip}`);
    // filters.push(`$top=${_top}`);

    if (!Helper.IsJSONEmpty(filters)) {
        query = filters.join("&");
    }

    let _rows = [];
    await Api.GetModelFiles(query, "Industry", user?.email)
        .then(async (res) => {
            if (res.status) {
                _rows = res.values || [];
            } else {
                console.log(res.statusText);
            }
        });

    setRows(_rows);
    setLoading(false);
    return _rows;
}

// const OnSearchChanged = (e) => { setSearchStr(e); }

const OnSortClicked = (field, sort) => { setSortBy({ field, sort }); }

const OnPageClicked = (e) => { setPageInfo({ page: 0, pageSize: 5 }); if (e) setPageInfo(e); }

const OnCloseClicked = async (e) => {
  if (e) {
        setLoading(true);
        await Api.DeleteModelFile(deletedId).then(async (res) => {
        setLoading(false);
        if(res.status){
            setInitialize(true);
            global.AlertPopup("success","Model deleted sucessfully");
        } else {
          global.Busy(false);
          global.AlertPopup("error",`Can't delete ${rows.find(x => x.ModelId === deletedId)?.ModelName} while it is associated with existing project`)
        }
      })
  } else {
      setDeletedId(0);
      setShowConfirm(false);
  }
}

  const OnActionClicked = (id, type) => {
      if (type === 'Edit') {
        const data = rows.find(x => x.ModelId === id);
        if(data?.ModelType === "JSONAI") {
          session.Store("InputDesign", { SessionId : data?.Attribute1 , DocId : data?.ModelFileFile  }, true);
          navigate(`/design/edit/${data.ModelId}`);
        }
      }
      // if (type === 'view') _route = `/productsmany/view/${id}`;
      if (type === 'Delete') setDeletedId(id);
      // if (_route) NavigateTo(_route);
  }

  if (initialize) { setInitialize(false); FetchResults(); }

  useEffect(() => { setInitialize(true); }, [sortBy, pageInfo, searchStr]);

  useEffect(() => { setInitialize(true); }, []);

  useEffect(() => { if (deletedId > 0) setShowConfirm(true); }, [deletedId]);

return (
  <>  
      <div className="flex flex-1 flex-col gap-6 items-start px-4 py-10 justify-start w-[100%] max-w-[1130px] mx-auto">

        <ActionGrid setInitialize={(bool) => setInitialize(bool)} />

        <div className="flex md:flex-col flex-row md:gap-10 mt-4 md:items-start items-center justify-between w-[100%] border-b border-hint">
            <div className="flex flex-row gap-4 items-end justify-start">
                {["Your Designs","Designs by CodeWizard"].map(menu => (
                  <Button
                    onClick={() =>  setActiveMenu(menu)}
                    className={`${
                      activeMenu === menu ? "text-core border-core" : "text-hint border-base"
                    } border-b-[3px] cursor-pointer font-medium py-[5px] text-sm`}
                    key={menu}
                  >
                    {menu}
                  </Button>
                ))}
            </div>
          
            {activeMenu === 'Your Designs' && (
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-end justify-end md:w-[100%]">
                <div className="bg-transparent flex items-center gap-[8px] w-[165px] hover:w-[220px] ease-in-out transition-[width]">
                  <Img src="images/ic_round-search.png" alt="search" className="h-[18px] w-[18px]"/>

                  <input type="search" placeholder="Search" 
                  className="border-0 text-core w-full bg-transparent text-sm p-0" name="searchbox"
                  // value={searchStr}
                  // onChange={(e) => setSearchStr(e?.target?.value)}
                  />
                </div>
              </div>
            )}
        </div>

        {activeMenu === 'Your Designs' ? (
          <>
              <SortableTable
                data={rows}
                columns={columns}
                actions={actions}
                onSort={OnSortClicked}
                onActionClicked={OnActionClicked}
                keyId={"ModelId"}
                enums={{ModelType}}
                rowCount={rowsCount}
                pageInfo={pageInfo}
                onPageClicked={OnPageClicked}
                KeyDes={"ModelDescription"}
                pagination={false}
              />

              {rows.length <= 0 && !loading && (
                <div className="flex items-center justify-center w-[100%] h-[115px]">
                  <Text className="text-subtle" variant="body2" >
                    No files! Please upload your designs
                  </Text>
                </div>
              )}
          </>
        ) : (
           <RenderCWDesign />
        )}
      </div>

      <AlertBoxModal
        isOpen={showConfirm}
        onConfirm={OnCloseClicked}
        onClose={() => { setDeletedId(0); setShowConfirm(false) }}
        className="w-[520px] sm:w-auto"
        confirmText="Delete"
        message={`Are you sure you want to delete '${rows.find(x => x.ModelId === deletedId)?.ModelName}' ?`}
      />
      <Loader loading={loading} />
  </>
);
};

export default DesignLibrary;
