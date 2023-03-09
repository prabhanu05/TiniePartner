import { Endpoints } from '@constants/Endpoints';
import { Urls } from '@constants/Urls';
import {
    ReedemCodePayload,
    ReedemCodeResponse,
} from '@models/api/ReedemCodeModel';
import axios from 'axios';

export const ReedemCode = async (data: ReedemCodePayload) => {
    const apiUrl = await axios.put(
        `${Urls.CUSTOMER_LOCATION}${Endpoints.REEDEM_CODE}?merchantId=${data.merchantId}&reedemCode=${data.reedemCode}`,
        {},
        { headers: { token: data.token } }
    );

    const apiData = apiUrl.data as ReedemCodeResponse;
    return apiData;
};
