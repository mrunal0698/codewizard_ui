import React, { useState } from "react";
import { Button, Img,  Text } from "components";
import Helper from "shared/helper";
  
  const TableHeader = ({ columns, sortConfig, handleSort, actions }) => {
    return (
      <thead className="bg-secondary">
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              className="py-4 text-left text-subtle cursor-pointer select-none group"
              onClick={() => handleSort(col.key)}
            >
              <div className="px-6 flex items-center justify-between group-hover:border-r hover:border-hint">
                <Text variant="body3" className="font-medium text-subtle"> {col.label} </Text>  
  
                <Img src="images/img_arrowdown_gray_50_24x24.svg" 
                  className={`${sortConfig.direction === "desc" && col.key ===  sortConfig.key ? "rotate-180" : "rotate-0"} 
                  ${col.key ===  sortConfig.key && "!visible"}
                  w-4 h-4 invisible group-hover:visible`}
                />             
              </div>
            </th>
          ))}
          {actions.length > 0 && <th className="text-subtle text-xs font-medium px-6 py-3 text-left"> Actions </th>}
        </tr>
      </thead>
    )
  }
  
  const TableBody = ({columns, data, enums, keyId, actions, onActionClicked, KeyDes  }) => {
    const [hoveredRow, setHoveredRow] = useState(null); 

    const handleMouseEnter = (rowId) => {
      setHoveredRow(rowId);
    };
  
    const handleMouseLeave = () => {
      setHoveredRow(null);
    };

    return (
      <tbody>
        {data.map((row) => (
          <tr key={row[keyId]} className="h-[72px] border-t border-secondary"
            onMouseLeave={handleMouseLeave}
           >
             {columns.map((col, colIndex) => (
              <td key={col.key} className="px-6 py-4 border-r border-secondary relative"
                onMouseEnter={() =>
                colIndex === 1 && row[KeyDes]
                  ? handleMouseEnter(row[keyId])
                  : null }
              >
                {col.type === 'enum' && !Helper.IsJSONEmpty(enums[col.key]) ? (
                  <span className={`m-auto rounded-lg px-2 py-1 ${enums[col.key][row[col.key]]}`} > {row[col.key]} </span>            
                  ) 
                  : col.type === 'date' ?
                  <span className="text-subtle text-sm"> {row[col.key] ? Helper.ToDate(row[col.key],"Do MMMM YYYY",true) : "N/A" } </span>
                  :
                  <span className="text-subtle text-sm"> {row[col.key] || "N/A" } </span>  
                }
                {colIndex === 1 && row[KeyDes] && hoveredRow === row[keyId] && (
                  <div className="absolute top-full left-2 -mt-3 w-64 z-10 p-2 bg-secondary text-white text-sm rounded shadow-lg">
                    {row[KeyDes]}
                  </div>
                )}
              </td>
            ))}
            {actions.length > 0 && (
             <td className="px-6 py-4">
                <div className="flex justify-center space-x-2">
                  {actions.map((action) => (
                    <Img
                      src={`images/${action}.svg`}
                      key={action}
                      onClick={() => onActionClicked(row[keyId], action)}
                      className="rounded cursor-pointer grayscale hover:filter hover:brightness-0 hover:invert"
                    />
                    ))}
                </div>
             </td>
           )}
          </tr>
        ))}
      </tbody>
    )
  }

  const Pagination = ({ rowCount, pageInfo, onPaginationModelChange }) => {

    const OnPaginationModelChange = (e) => {
     if(onPaginationModelChange) onPaginationModelChange(e);
    }
  
    return (
        <div className="flex justify-between items-center mt-4">
            <Button
              className={`px-3 py-2 rounded ${pageInfo.page === 0 ? "invisible" : "hover:text-primary text-subtle text-sm"}`}
              disabled={pageInfo.page === 0}
              onClick={() => OnPaginationModelChange({ ...pageInfo, page: pageInfo.page - 1 })}
            >
            {'<<'} Previous
            </Button>
            
            <Text variant="body3" className="text-hint">
              Page {pageInfo.page + 1} of {Math.ceil(rowCount / pageInfo.pageSize)}
            </Text>
  
            <Button
              className={`px-3 py-2 rounded ${
                (pageInfo.page + 1) * pageInfo.pageSize >= rowCount ? "invisible" : "hover:text-primary text-subtle text-sm"}`}
              disabled={(pageInfo.page + 1) * pageInfo.pageSize >= rowCount}
              onClick={() => OnPaginationModelChange({ ...pageInfo, page: pageInfo.page + 1 })}
            >
              Next {'>>'}
            </Button>
        </div>
    )
  }
  
  const Component = ({ data, columns, actions, onSort, onActionClicked, keyId, enums,
    rowCount, pageInfo, onPageClicked, KeyDes, pagination }) => {
  
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  
    const handleSort = (key) => {
      const direction = sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
      setSortConfig({ key, direction });
      if(onSort) onSort(key, direction);
    };
  
    const OnActionClicked = (id,action) => {
      if(onActionClicked) onActionClicked(id,action);
    }
  
    return (
      <div className="overflow-x-auto w-full">
        <table className="min-w-full border border-secondary">
          <TableHeader columns={columns} sortConfig={sortConfig} handleSort={handleSort} actions={actions} />
  
          {data?.length > 0 && (
            <TableBody columns={columns} data={data} enums={enums} keyId={keyId} actions={actions} onActionClicked={OnActionClicked}
              KeyDes={KeyDes} />
          )}
  
        </table>
  
        {/* Pagination */}
        {data.length > 0 && pagination && <Pagination rowCount={rowCount} pageInfo={pageInfo} onPaginationModelChange={onPageClicked} />}
      </div>
    );
  };

  export default Component