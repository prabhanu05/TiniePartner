export interface LoginPayload {
    phone: string;
    passcode: string;
    phoneOtp: string;
}

export interface LoginSuccessModel {
    id: number;
    phonenumber: number;
    role: string;
    sessionexpiry: number;
    token: string;
    username: string;
}
