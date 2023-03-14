import { CategoryModel } from '@models/api/CategoryListModel';

export interface AccountDetailsHeaderModel {
    viewDetails: boolean;
    editDetails: boolean;
}

export interface AccountDetailsDataModel {
    name: string;
    email: string;
    mobile: string;
    businessName: string;
    typeOfBusiness: CategoryModel;
    businessPan: string;
}

export interface AccountDetailsPayloadModel {
    businessId: string;
    businessName: string;
    businessType: string;
    email: string;
    merchantId: number;
    name: string;
    pan: string;
    phoneNumber: string;
    token: string;
}

export interface AccountDetailsResponseModel {
    id: number;
    status: string;
    timestamp: number;
}
