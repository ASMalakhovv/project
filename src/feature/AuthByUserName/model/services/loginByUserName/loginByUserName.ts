import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { User } from 'entities/User';

type LoginByUserNameArg = {
    username: string
    password: string
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameArg, {
    rejectValue: string
}>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
