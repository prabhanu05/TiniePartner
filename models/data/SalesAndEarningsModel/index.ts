export interface SalesAndEarningsStateModel {
    sales: boolean;
    earnings: boolean;
}

export interface SalesAndEarningsFilterModel {
    today: boolean;
    thisWeek: boolean;
    thisMonth: boolean;
    lastMonth: boolean;
}

export interface SalesAndEarningsFilterDataModel {
    name: string;
    id: keyof SalesAndEarningsFilterModel;
}

export interface SalesEarningsPayloadModel {
    token: string;
    businessId: number;
}

export interface SalesResponseModel {
    itemName: string;
    price: number;
    quantity: number;
    saleDate: string;
}
