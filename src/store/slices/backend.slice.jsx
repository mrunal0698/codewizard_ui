import { createSlice } from '@reduxjs/toolkit';
const initialState = {
backend_details: {
  modelType: "",
  backend: '',
  database:"",
  capablities:[],
  basicDetail:{
    ApplicationName : null,
    Namespace : null,
    ApplicationDescription : null,
    DatabaseName : null,
    Server : "Tomcat",
    BuildTool : "Maven",
    GithubCred : null
  },
  codeGenDetail : {},
  activeStep : 0
}
}
const backendSlice = createSlice({
  name: "backendSlice",
  initialState,
  reducers: {
      SET_BACKEND_MODEL_DETAIL: (state, action) => {
        state.backend_details.modelType = action.payload;
      },
      SET_BACKEND_BACKEND: (state, action) => {
        state.backend_details.backend = action.payload;
      },
      SET_BACKEND_DATABASE: (state, action) => {
        state.backend_details.database = action.payload;
      },
      ADD_BACKEND_CAPABLITIES: (state, action) => {
        state.backend_details.capablities = [...state.backend_details.capablities,action.payload];
      },
      DELETE_BACKEND_CAPABILITY: (state, action) => {
        state.backend_details.capablities = state.backend_details.capablities.filter(item => item.CapId !== action.payload);
      },
      SET_BACKEND_BASIC_DETAIL: (state, action) => {
        state.backend_details.basicDetail = action.payload;
      },
      SET_CODE_GEN_DETAIL : (state, action) => {
        state.backend_details.codeGenDetail = action.payload;
      },
      SET_BE_ACTIVE_STEP : (state, action ) => {
        state.backend_details.activeStep = action.payload;
      },
      CLEAR_ALL_BACKENDAPP_DETAIL: () => {
        return initialState;
      } 
  }
});

export const { SET_BACKEND_MODEL_DETAIL,SET_BACKEND_BACKEND,SET_BACKEND_DATABASE,ADD_BACKEND_CAPABLITIES,
  SET_BACKEND_BASIC_DETAIL,CLEAR_ALL_BACKENDAPP_DETAIL,SET_CODE_GEN_DETAIL, SET_BE_ACTIVE_STEP,DELETE_BACKEND_CAPABILITY } = backendSlice.actions;

export default backendSlice.reducer;