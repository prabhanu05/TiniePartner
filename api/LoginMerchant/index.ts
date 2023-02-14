import { Endpoints } from '@constants/Endpoints';
import { Urls } from '@constants/Urls';
import { LoginPayload, LoginSuccessModel } from '@models/api/LoginModel';
import axios from 'axios';

export const LoginMerchant = async (data: LoginPayload) => {
    const apiUrl = await axios.get(
        `${Urls.VENDOR_AUTH}${Endpoints.LOGIN_MERCHANT}?passcode=${data.passcode}&phone=${data.phone}&phoneOtp=${data.phoneOtp}`
    );

    const apiData = apiUrl.data as LoginSuccessModel;

    if (!!apiData.token) {
        return apiData;
    }

    throw new Error('Unable to login');
};
