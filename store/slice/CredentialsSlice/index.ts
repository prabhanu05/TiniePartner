import { CredentialsSliceModel } from '@models/store/CredentialsSliceModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    phonenumber: null,
    token: null,
    merchantId: null,
    businessId: null,
    businessName: null,
    rating: null,
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
                businessId: number;
                businessName: string;
                rating: number;
            }>
        ) {
            state.token = action.payload.token;
            state.phonenumber = action.payload.phonenumber;
            state.merchantId = action.payload.merchantId;
            state.businessId = action.payload.businessId;
            state.businessName = action.payload.businessName;
            state.rating = action.payload.rating;
        },
        removeCredentials(state) {
            state.token = null;
            state.phonenumber = null;
            state.merchantId = null;
            state.businessId = null;
            state.businessName = null;
            state.rating = null;
        },
    },
});
