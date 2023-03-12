export interface CreateCatSubcatPayloadModel {
    token: string;
    id: number;
    name: string;
}

export interface CreateCatSubcatResponseModel {
    status: string;
    businessId: number;
    timestamp: number;
}
