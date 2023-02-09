import { Endpoints } from '@constants/Endpoints';
import { Urls } from '@constants/Urls';
import axios from 'axios';

export const SendOTP = async (contactDetails: string) => {
    const apiUrl = await axios.get(
        `${Urls.VENDOR_AUTH}${Endpoints.GET_MERCHANT_OTP}?contact=${contactDetails}`
    );

    const apiData = apiUrl.data as { status: string };

    if (apiData?.status === 'OTP successfully sent') {
        return true;
    }
    throw new Error('Unable to send OTP');
};
