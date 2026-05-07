import React from "react";
import { ThemeProvider, Tooltip } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridRowModes } from '@mui/x-data-grid';
import {
    Edit as EditIcon, DeleteOutlined as DeleteIcon,
    Visibility as VisibilityIcon, Save as SaveIcon, Close as CancelIcon
} from '@mui/icons-material';
import { darkTheme } from "styles/theme";
import { Button, Img } from "components";


export const ROWSPERPAGE = [30,40,50];

const Component = (props) => {

    const { columns, rowsCount, rows, pageInfo, onActionClicked, sortBy, keyId, pageMode,
        onSortClicked, onPageClicked, sx, noActions, hideFooter, onUpdateClicked, name, onClickAddRow, title, parent } = props;

    const paginationMode = pageMode || "server";
    const [rowModesModel, setRowModesModel] = React.useState({});


    const OnActionClicked = (id, type) => {
        if (onActionClicked) onActionClicked(id, type, name, parent);
    };

    const OnClickAddRow = (name) => {
        if(onClickAddRow) onClickAddRow(name, parent)
    }

    const handleEditClick = (id) => {
        setRowModesModel({ [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id) => {
        setRowModesModel({ [id]: { mode: GridRowModes.View } });
    };

    const handleCancelClick = (id) => {
        setRowModesModel({ [id]: { mode: GridRowModes.View, ignoreModifications: true } });
    };

    const processRowUpdate = (newRow) => {
        if (onUpdateClicked) onUpdateClicked(newRow, name, parent);
        return newRow;
    };

    const RenderGridActions = (props) => {
        const { noDelete, noView, noEdit } = props;

        return {
            headerName: "Actions", type: 'actions', field: "actions", width: 135,
            renderHeader: onClickAddRow && (() => (
                <Button
                  className="bg-primary cursor-pointer flex gap-2 items-center justify-center p-2 rounded border-[1px] border-core"
                  onClick={() => OnClickAddRow(name)}
                  leftIcon={
                    <Img
                      src="/images/add.png"
                      className="w-[14px]"
                      alt="checkmark"
                    />
                  }
                >
                  {title || "Add Row"}
                </Button>
              )),
            getActions: ({ row }) => {

                const isInEditMode = rowModesModel[row[keyId]]?.mode === GridRowModes.Edit;

                const actions = [];

                if (isInEditMode) {

                    actions.push(<GridActionsCellItem
                        icon={
                            <Tooltip title="Save" arrow>
                                <SaveIcon />
                            </Tooltip>
                        }
                        label="Save"
                        className="textPrimary"
                        color="inherit"
                        onClick={() => handleSaveClick(row[keyId])}
                    />)

                    actions.push(<GridActionsCellItem
                        icon={
                            <Tooltip title="Cancel" arrow>
                                <CancelIcon />
                            </Tooltip>
                        }
                        label="Cancel"
                        className="textPrimary"
                        color="inherit"
                        onClick={() => handleCancelClick(row[keyId])}
                    />)

                    return actions;
                }

                if (!noView) {
                    actions.push(<GridActionsCellItem
                        icon={
                            <Tooltip title="View" arrow>
                                <VisibilityIcon />
                            </Tooltip>
                        }
                        label="View"
                        className="textPrimary"
                        color="inherit"
                        onClick={() => OnActionClicked(row[keyId], 'view')}
                    />)
                }

                if (!noEdit) {
                    actions.push(<GridActionsCellItem
                        icon={
                            <Tooltip title="Edit" arrow>
                                <EditIcon />
                            </Tooltip>
                        }
                        label="Edit"
                        className="textPrimary"
                        color="inherit"
                        /* onClick={() => OnActionClicked(row[keyId], 'edit')} */
                        onClick={() => handleEditClick(row[keyId])}
                    />);
                }

                if (!noDelete) {

                    actions.push(<GridActionsCellItem
                        icon={
                            <Tooltip title="Delete" arrow>
                                <DeleteIcon />
                            </Tooltip>
                        }
                        label="Delete"
                        color="inherit"
                        onClick={() => OnActionClicked(row[keyId], 'delete')}
                    />);
                }

                return actions;
            }
        };

    }

    const handleSortModelChange = (e) => {
        if (onSortClicked) onSortClicked(e[0]);
    }

    const handlePaginationModel = (e) => {
        if (onPageClicked) onPageClicked(e);
    }

    const GetColumns = () => {
        const { noDelete, noView, noEdit } = props;
        if (noActions || (noDelete && noView && noEdit)) return [...columns];
        
        return [...columns, RenderGridActions(props)];
    }
    
    const handleRowModesModelChange = (newRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    // const getRows = () => {
    //     return rows.map((row) => (
    //         columns.reduce((acc, x) => {
    //              return {...acc, [x.field]: row[x.field] || ''}
    //             }, row)
    //     ));
    // };
      
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <DataGrid
                    autoHeight
                    disableColumnMenu
                    columns={GetColumns()}
                    // rowCount={}
                    rowHeight={46} 
                    rows={rows}
                    rowSelection={false}
                    hideFooter={hideFooter || false}
                    // paginationModel={pageInfo}
                    initialState={{
                        pagination: { paginationModel: { pageSize: 30 } },
                      }}
                    pageSizeOptions={ROWSPERPAGE}
                    sortModel={sortBy ? [sortBy] : [{ field: "", sort: "asc" }]}
                    paginationMode={paginationMode}
                    sortingMode={paginationMode}
                    onSortModelChange={handleSortModelChange}
                    onPaginationModelChange={handlePaginationModel}

                    editMode="row"
                    rowModesModel={rowModesModel}
                    onRowModesModelChange={handleRowModesModelChange}
                    processRowUpdate={processRowUpdate}
                    sx={{
                        width:'100%',
                        '& .MuiDataGrid-cell': {
                            border: '1px solid #4E4E4E', 
                            borderRight: 0,
                            borderTop: 0,
                        },
                        '& .MuiDataGrid-row': {
                            borderBottom: '1px solid #4E4E4E', 
                        },
                        ...sx
                    }}
                />
            </ThemeProvider>
        </>
    );

};

export default Component;