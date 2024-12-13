import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://67534176f3754fcea7bb4551.mockapi.io/';

export const fetchContacts = createAsyncThunk('phonebook/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/phonebook');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('/phonebook/deleteContact', async (id, thunkAPI) => {
    try {
        await axios.delete(`/phonebook/${id}`);
        return id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('/phonebook/addContact', async (body, thunkAPI) => {
    try {
        const response = await axios.post(`/phonebook`, body);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});