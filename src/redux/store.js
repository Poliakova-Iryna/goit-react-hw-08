import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { contactsReducer } from "./contacts/slice";
import { filterReducer } from "./filters/slice";


export const store = configureStore({
    reducer: {
      contacts: contactsReducer,
      filter: filterReducer,
      auth: authReducer
    },
});