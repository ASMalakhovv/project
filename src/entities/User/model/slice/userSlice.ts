import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User, UserSchema } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage/localstorage';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<{authData: User}>) => {
            state.authData = action.payload.authData;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            state.authData = undefined;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
