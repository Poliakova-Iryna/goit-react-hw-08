import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./contactsOps";

const initialState = {
   items: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }],
   filters: '',
   isLoading: false,
   isError: false,
};

const slice = createSlice ({
    name: 'contacts',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
        })
        .addCase(fetchContacts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload);
        })
        .addMatcher(isAnyOf(addContact.pending, deleteContact.pending, fetchContacts.pending ), state => {
            state.isError = false;
            state.isLoading = true;
        })
        .addMatcher(isAnyOf(addContact.rejected, deleteContact.rejected, fetchContacts.rejected), state => {
            state.isError = true;
            state.isLoading = false;
        })
        .addMatcher(isAnyOf(addContact.fulfilled, deleteContact.fulfilled, fetchContacts.fulfilled), state => {
            state.isLoading = false;
        })
    }
});

export const selectFilteredContacts = createSelector(
    [state => state.contacts.items, state => state.filter.filter],
    (contacts, filter) => {
      return contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
    }
);