import { Endpoints } from '@constants/Endpoints';
import { Urls } from '@constants/Urls';
import { BusinessDetailsResponseModel } from '@models/api/AccountDetails';
import axios from 'axios';

export const GetAccountDetails = async (token: string) => {
    const apiUrl = await axios.get(
        `${Urls.VENDOR_AUTH}${Endpoints.ACCOUNT_DETAILS}`,
        { headers: { token } }
    );

    const apiData = apiUrl.data as BusinessDetailsResponseModel;

    return apiData;
};
