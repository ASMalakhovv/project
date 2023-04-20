import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginByUserName } from '../services/loginByUserName/loginByUserName';
import { LoginSchema } from '../types/LoginSchema';

const initialState: LoginSchema = {
    error: '',
    isLoading: false,
    username: '',
    password: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<{ value: string }>) => {
            state.username = action.payload.value;
        },
        setPassword: (state, action: PayloadAction<{ value: string }>) => {
            state.password = action.payload.value;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUserName.pending, (state, action) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(loginByUserName.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(loginByUserName.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
