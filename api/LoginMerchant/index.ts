import { Endpoints } from '@constants/Endpoints';
import { Urls } from '@constants/Urls';
import axios from 'axios';

export const LoginMerchant = async (
    phone: string,
    passcode: string,
    phoneOtp: string
) => {
    const apiUrl = await axios.post(
        `${Urls.VENDOR_AUTH}${Endpoints.LOGIN_MERCHANT}?passcode=${passcode}&phone=${phone}&phoneOtp=${phoneOtp}`,
        {
            passcode,
            phone,
            phoneOtp,
        }
    );

    // const apiData = apiUrl.data as RegisterModel;

    // if (!!apiData?.status) {
    //     return apiData?.status;
    // }
    throw new Error('Unable to create account');
};
