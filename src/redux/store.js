import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactSlice";
import { filterReducer } from "./filterSlice";
import { authReducer } from "./auth/slice";

export const store = configureStore({
    reducer: {
      contacts: contactReducer,
      filter: filterReducer,
      auth: authReducer
    },
});