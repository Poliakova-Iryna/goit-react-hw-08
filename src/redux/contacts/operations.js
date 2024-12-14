import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi } from "../auth/operations";

export const fetchContacts = createAsyncThunk('contacts', async (_, thunkAPI) => {
    try {
        const response = await goitApi.get('/contacts');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('/contacts/deleteContact', async (contactId, thunkAPI) => {
    try {
        await goitApi.delete(`/contacts/${contactId}`);
        return contactId;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('/contacts/addContact', async (body, thunkAPI) => {
    try {
        const response = await goitApi.post('/contacts', body);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});