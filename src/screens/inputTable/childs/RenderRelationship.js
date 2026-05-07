import React from 'react'
import { Line, Text } from 'components';
import { DataTable } from 'screens/childs';

const Component = ({  tables, relationships, onUpdateRow, onClickAddRow, onActionClicked }) => {
    const tableList = tables
      .filter(x => x.stereotype !== 'Enum' && x.stereotype !== 'Complex')
      .map(x => x.name); 
    
    const RelationsColumns = [
      { headerName: "Relation Name", field: "name", flex: 1, sortable: false, editable: true },
      { headerName: "Is Collection", field: "isCollection", flex: 1, sortable: false, editable: true, type: 'boolean'},
      { headerName: "Target Table", field: "type", flex: 1, sortable: false, editable: true, type: 'singleSelect',
        valueOptions: tableList }, 
    ];
  
  const OnClickAddRow = (key) => {
    if(onClickAddRow) onClickAddRow(key);
  }
  
  const OnUpdateRow = (e, key) => { 
    if(onUpdateRow) onUpdateRow(e, key);
  };
   
  const OnActionClicked = (id, type, key) => {
    if(onActionClicked) onActionClicked(id, type, key);
  } 

    return(
      <div className='flex flex-col gap-2 items-start w-[100%] max-w-[750px]'>
        <Text
          className="text-core text-center font-medium pt-1"
          variant="body2"
        >
          Relationships
        </Text>
        <Line className="bg-[#D9D9D980] opacity-50 h-[1px] w-[100%]" />

        <DataTable onActionClicked={OnActionClicked} rows={relationships || []} onUpdateClicked={OnUpdateRow}
            keyId={'id'} columns={RelationsColumns} noView={true} pageMode={"client"} name={'navProperty'}
            onClickAddRow={OnClickAddRow} title={'Relationship'}/>
      </div>
    )
  }

  export default Component;