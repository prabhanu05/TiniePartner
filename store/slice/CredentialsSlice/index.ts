import { CredentialsSliceModel } from '@models/store/CredentialsSliceModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    phonenumber: null,
    token: null,
} as CredentialsSliceModel;

export const CredentialsSlice = createSlice({
    name: 'credentialsSlice',
    initialState,
    reducers: {
        setCredentials(
            state,
            action: PayloadAction<{
                token: string;
                phonenumber: number;
            }>
        ) {
            state.token = action.payload.token;
            state.phonenumber = action.payload.phonenumber;
        },
        removeCredentials(state) {
            state.token = null;
            state.phonenumber = null;
        },
    },
});
