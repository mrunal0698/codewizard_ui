import { configureStore } from "@reduxjs/toolkit";
import frontendSlice from "./slices/frontend.slice";
import backendSlice from "./slices/backend.slice";
import fullstackSlice from "./slices/fullstack.slice";
import stepperSlice from "./slices/basicInformation.slice";

export const store = configureStore({
    reducer: {
      frontend : frontendSlice,
      backend : backendSlice,
      fullstack : fullstackSlice,
      basicInformation : stepperSlice,
    }
  });