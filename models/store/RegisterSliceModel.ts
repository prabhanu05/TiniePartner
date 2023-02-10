import { CategoryModel } from '@models/api/CategoryListModel';
import { FileModel } from '@models/data/FileModel';

export interface RegisterSliceStringModel {
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    pin: string;
    city: string;
    state: string;
    businessName: string;
    businessPhoneNumber: string;
    email: string;
    emailOtp: string;
    pan: string;
    passcode: string;
    phoneNumber: string;
    phoneOtp: string;
    yearEstablished: string;
    name: string;
    outletManagerName: string;
    outletManagerEmail: string;
    anyOtherAssistance: string;
}

export interface RegisterSliceSelectModel {
    subCategory: CategoryModel;
}

export interface RegisterSliceNumberModel {
    latitude: number | null;
    longitude: number | null;
}

export interface RegisterSliceFileModel {
    merchantId: FileModel;
    gstinId: FileModel;
}

export interface RegisterSliceToggleModel {
    bms: boolean;
    offAndOn: boolean;
    sms: boolean;
    ims: boolean;
    sfc: boolean;
    bri: boolean;
    pos: boolean;
    tax: boolean;
}

export interface RegisterSliceState
    extends RegisterSliceStringModel,
        RegisterSliceNumberModel,
        RegisterSliceFileModel,
        RegisterSliceToggleModel,
        RegisterSliceSelectModel {}
