import { FileModel } from '@models/data/FileModel';
import {
    RegisterSliceFileModel,
    RegisterSliceNumberModel,
    RegisterSliceState,
    RegisterSliceStringArrayModel,
    RegisterSliceStringModel,
} from '@models/store/RegisterSliceModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    additionalServices: [],
    address: '',
    businessName: '',
    businessPhoneNumber: '',
    email: '',
    emailOtp: '',
    files: [],
    latitude: null,
    longitude: null,
    name: '',
    pan: '',
    passcode: '',
    phoneNumber: '',
    phoneOtp: '',
    subCategoryId: '',
    yearEstablished: '',
    outletManagerName: '',
    outletManagerEmail: '',
    outletManagePhone: '',
} as RegisterSliceState;

export const RegisterSlice = createSlice({
    name: 'registerSlice',
    initialState,
    reducers: {
        textHandler(
            state: typeof initialState,
            action: PayloadAction<{
                uid: keyof RegisterSliceStringModel;
                text: string;
            }>
        ) {
            state[action.payload.uid] = action.payload.text;
        },
        numberHandler(
            state: typeof initialState,
            action: PayloadAction<{
                uid: keyof RegisterSliceNumberModel;
                text: number;
            }>
        ) {
            state[action.payload.uid] = action.payload.text;
        },
        fileHandler(
            state: typeof initialState,
            action: PayloadAction<{
                uid: keyof RegisterSliceFileModel;
                item: FileModel;
            }>
        ) {
            state[action.payload.uid].push(action.payload.item);
        },
        arrayHandler(
            state: typeof initialState,
            action: PayloadAction<{
                uid: keyof RegisterSliceStringArrayModel;
                item: string;
            }>
        ) {
            state[action.payload.uid].push(action.payload.item);
        },
    },
});
