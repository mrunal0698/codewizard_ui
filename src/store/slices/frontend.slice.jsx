import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  frontend_details: {
    api: {},
    feTeckstack:{},
    UITemplate:{},
    FrontendAppTheme : {},
    feScreens:[],
    feSelectedScreenIDList: [],
    capablities:[],
    basicDetail:{
      ApplicationName : null,
      ApplicationDescription : null,
      Server : "Nginx",
      BuildTool : "NPM",
      GithubCred : null
    },
    configuratorDetail: {},
    codeGenDetail : {},
    activeStep : 0
  }
}
const frontendSlice = createSlice({
  name: "frontendSlice",
  initialState,
  reducers: {
      SET_FRONTEND_API_DETAIL: (state, action) => {
        state.frontend_details.api = action.payload;
      },
      SET_FRONTEND_FETECKSTACK: (state, action) => {
        state.frontend_details.feTeckstack = action.payload;
      },
      SET_FRONTEND_UITEMPLATE: (state, action) => {
        state.frontend_details.UITemplate = action.payload;
      },
      ADD_FRONTEND_CAPABLITIES: (state, action) => {
        state.frontend_details.capablities = [...state.frontend_details.capablities, action.payload];
      },
      DELETE_FRONTEND_CAPABILITY: (state, action) => {
        state.frontend_details.capablities = state.frontend_details.capablities.filter(item => item.CapId !== action.payload);
      },
      SET_FRONTEND_BASIC_DETAIL: (state, action) => {
        state.frontend_details.basicDetail = action.payload;
      },
      SET_FRONTEND_APP_THEMENAME: (state,action) => {
        state.frontend_details.FrontendAppTheme = action.payload;
      },
      ADD_FRONTEND_SCREENS: (state,action) => { 
        state.frontend_details.feScreens = [...state.frontend_details.feScreens, action.payload];
      },
      SET_FRONTEND_SELECTED_SCREEN_ID_LIST: (state,action) => {
        state.frontend_details.feSelectedScreenIDList = [...state.frontend_details.feSelectedScreenIDList,action.payload];
      },
      SET_CONFIGURATOR_DETAIL : (state,action) => {
        state.frontend_details.configuratorDetail = action.payload;
      },
      SET_FRONTEND_CODE_GEN_DETAIL : (state, action) => {
        state.frontend_details.codeGenDetail = action.payload;
      },
      SET_FE_ACTIVE_STEP : (state, action ) => {
        state.frontend_details.activeStep = action.payload;
      },
      CLEAR_ALL_FRONTENDAPP_DETAIL: () => {
        return initialState;
      } 
  }
});

export const {
  SET_FRONTEND_API_DETAIL,
  SET_FRONTEND_FETECKSTACK,
  SET_FRONTEND_UITEMPLATE,
  ADD_FRONTEND_CAPABLITIES,
  SET_FRONTEND_BASIC_DETAIL,
  CLEAR_ALL_FRONTENDAPP_DETAIL,
  SET_FRONTEND_APP_THEMENAME,
  ADD_FRONTEND_SCREENS,
  SET_FRONTEND_SELECTED_SCREEN_ID_LIST,
  SET_CONFIGURATOR_DETAIL,
  SET_FRONTEND_CODE_GEN_DETAIL,
  SET_FE_ACTIVE_STEP,
  DELETE_FRONTEND_CAPABILITY
} = frontendSlice.actions;
export default frontendSlice.reducer;