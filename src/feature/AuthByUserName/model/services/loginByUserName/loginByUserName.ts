import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage/localstorage';
import i18n from 'shared/config/i18n/i18n';

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
            if (!response.data) {
                throw new Error();
            }
            thunkAPI.dispatch(userActions.setAuthData({ authData: response.data }));
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    },
);
