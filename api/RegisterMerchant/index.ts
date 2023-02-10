import { Endpoints } from '@constants/Endpoints';
import { Urls } from '@constants/Urls';
import axios from 'axios';

export const RegisterMerchant = async (payloadData: FormData) => {
    console.log(payloadData);

    const apiUrl = await axios.post(
        `${Urls.VENDOR_AUTH}${Endpoints.REGISTER_MERCHANT}`,
        payloadData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                Accept: 'application/json',
            },
        }
    );

    const apiData = apiUrl.data;
    console.log({ apiData });
    return apiData;
    // if (apiData?.status === 'OTP successfully sent') {
    //     return true;
    // }
    throw new Error('Unable to create account');
};
