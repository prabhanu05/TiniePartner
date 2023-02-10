import { FileModel } from '@models/data/FileModel';

export interface RegisterSliceStringModel {
    address: string;
    businessName: string;
    businessPhoneNumber: string;
    email: string;
    emailOtp: string;
    pan: string;
    passcode: string;
    phoneNumber: string;
    phoneOtp: string;
    subCategoryId: string;
    yearEstablished: string;
    name: string;
    outletManagerName: string;
    outletManagerEmail: string;
    outletManagePhone: string;
}

export interface RegisterSliceNumberModel {
    latitude: number | null;
    longitude: number | null;
}

export interface RegisterSliceFileModel {
    files: FileModel[];
}

export interface RegisterSliceStringArrayModel {
    additionalServices: string[];
}

export interface RegisterSliceState
    extends RegisterSliceStringModel,
        RegisterSliceNumberModel,
        RegisterSliceFileModel,
        RegisterSliceStringArrayModel {}
