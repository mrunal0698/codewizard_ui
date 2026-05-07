import { createSlice } from '@reduxjs/toolkit';

const basicInformationSlice = createSlice({
  name: "basicInformationSlice",
  initialState: {
    path: "",
    projectType : sessionStorage.getItem("project_type"),
    projectBasicDetail : null,
    DnR_Bool : false,
    DnR_Busy : false,
    DnR_Res :{},
    project_list :[]
  },
  reducers: {
    SET_ACTIVE_PATH: (state, action) => {
      state.path = action.payload;
    },
    SET_PROJECT_TYPE: (state, action) => {
      state.projectType = action.payload;
    },
    SET_PROJECT_BASIC_DETAIL: (state,action) => {
      state.projectBasicDetail = action.payload
    },
    SET_DnR_BOOL: (state,action) => {
      state.DnR_Bool = action.payload;
    },
    SET_DnR_Busy: (state,action) => {
      state.DnR_Busy = action.payload;
    },
    SET_DnR_RES: (state,action) => {
      state.DnR_Res = action.payload;
    },
    SET_PROJECT_LIST: (state,action) => {
      state.project_list = action.payload;
    },
  }
});

export const { SET_ACTIVE_PATH,SET_PROJECT_TYPE,SET_PROJECT_BASIC_DETAIL, 
  SET_GEN_APP_RES, SET_DnR_BOOL, SET_DnR_Busy, SET_DnR_RES, SET_PROJECT_LIST, SET_PROJECT_ID } = basicInformationSlice.actions;
export default basicInformationSlice.reducer;