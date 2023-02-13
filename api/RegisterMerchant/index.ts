import { Endpoints } from '@constants/Endpoints';
import { Urls } from '@constants/Urls';
import { RegisterModel } from '@models/api/RegisterModel';
import axios from 'axios';

export const RegisterMerchant = async (payloadData: FormData) => {
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

    const apiData = apiUrl.data as RegisterModel;

    if (!!apiData?.status) {
        return apiData?.status;
    }
    throw new Error('Unable to create account');
};
