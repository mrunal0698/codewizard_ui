import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullstack_details: {
    modelType: "",
    feTeckstack:{},
    FeTemplate:[],
    backend: {},
    database:{},
    capablities:[],
    basicDetail:{
      ApplicationName : null,
      Namespace : null,
      ApplicationDescription : null,
      Architecture : null,
      DatabaseName : null,
      Server : null,
      BuildTool : null,
      PackageManagement : null
    }
  }
}
const fullstackSlice = createSlice({
  name: "fullstackSlice",
  initialState,
  reducers: {
      SET_MODEL_DETAIL: (state, action) => {
        state.fullstack_details.modelType = action.payload;
      },
      SET_FETECKSTACK: (state, action) => {
        state.fullstack_details.feTeckstack = action.payload;
      },
      ADD_FETEMPLATES: (state, action) => {
        state.fullstack_details.FeTemplate = action.payload;
      },
      SET_BACKEND: (state, action) => {
        state.fullstack_details.backend = action.payload;
      },
      SET_DATABASE: (state, action) => {
        state.fullstack_details.database = action.payload;
      },
      ADD_CAPABLITIES: (state, action) => {
        state.fullstack_details.capablities = action.payload;
      },
      SET_BASIC_DETAIL: (state, action) => {
        state.fullstack_details.basicDetail = action.payload;
      },
      CLEAR_ALL_FULLSTACKAPP_DETAIL: () => {
        return initialState;
      }  
  }
});

export const { SET_MODEL_DETAIL,SET_FETECKSTACK,ADD_FETEMPLATES,ADD_CAPABLITIES,SET_BACKEND,SET_BASIC_DETAIL,SET_DATABASE,CLEAR_ALL_FULLSTACKAPP_DETAIL } = fullstackSlice.actions;
export default fullstackSlice.reducer;