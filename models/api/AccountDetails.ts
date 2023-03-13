export interface BusinessDetailsResponse {
    address: string;
    gstinUrl: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    pan: string;
    phoneNumber: number;
    subCategoryId: number;
}

export interface BusinessDetailsResponseModel {
    businessDetailsResponse: BusinessDetailsResponse[];
    email: string;
    name: string;
    phoneNumber: number;
}
