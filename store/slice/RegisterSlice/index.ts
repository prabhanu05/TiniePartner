import { CategoryModel } from '@models/api/CategoryListModel';
import { FileModel } from '@models/data/FileModel';
import {
    RegisterSliceFileModel,
    RegisterSliceSelectModel,
    RegisterSliceState,
    RegisterSliceStringModel,
    RegisterSliceToggleModel,
} from '@models/store/RegisterSliceModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    additionalServices: [],
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    pin: '',
    city: '',
    state: '',
    businessName: '',
    businessPhoneNumber: '',
    email: '',
    emailOtp: '',
    merchantId: {
        name: '',
        type: '',
        uri: '',
    },
    gstinId: {
        name: '',
        type: '',
        uri: '',
    },
    latitude: null,
    longitude: null,
    name: '',
    pan: '',
    passcode: '',
    phoneNumber: '',
    phoneOtp: '',
    subCategory: {
        id: '',
        name: '',
    },
    yearEstablished: '',
    outletManagerName: '',
    outletManagerEmail: '',
    bms: false,
    bri: false,
    ims: false,
    offAndOn: false,
    pos: false,
    sfc: false,
    sms: false,
    tax: false,
    anyOtherAssistance: '',
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
        fileHandler(
            state: typeof initialState,
            action: PayloadAction<{
                uid: keyof RegisterSliceFileModel;
                item: FileModel;
            }>
        ) {
            state[action.payload.uid] = action.payload.item;
        },
        selectHandler(
            state: typeof initialState,
            action: PayloadAction<{
                uid: keyof RegisterSliceSelectModel;
                item: CategoryModel;
            }>
        ) {
            state[action.payload.uid] = action.payload.item;
        },
        latLonHandler(
            state: typeof initialState,
            action: PayloadAction<{
                latitude: number;
                longitude: number;
            }>
        ) {
            state.latitude = action.payload.latitude;
            state.longitude = action.payload.longitude;
        },
        setPasscode(state: typeof initialState, action: PayloadAction<string>) {
            state.passcode = action.payload;
        },
        toggleHandler(
            state: typeof initialState,
            action: PayloadAction<{ uid: keyof RegisterSliceToggleModel }>
        ) {
            state[action.payload.uid] = !state[action.payload.uid];
        },
    },
});
