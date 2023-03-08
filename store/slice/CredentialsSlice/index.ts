import { CredentialsSliceModel } from '@models/store/CredentialsSliceModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    phonenumber: null,
    token: null,
    merchantId: null,
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
                merchantId: number;
            }>
        ) {
            state.token = action.payload.token;
            state.phonenumber = action.payload.phonenumber;
            state.merchantId = action.payload.merchantId;
        },
        removeCredentials(state) {
            state.token = null;
            state.phonenumber = null;
            state.merchantId = null;
        },
    },
});
