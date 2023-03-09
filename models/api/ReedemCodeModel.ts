export interface ReedemCodePayload {
    merchantId: number;
    token: string;
    reedemCode: string;
}

export interface ReedemCodeResponse {
    message: string;
}
