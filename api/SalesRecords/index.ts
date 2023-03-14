import { Endpoints } from '@constants/Endpoints';
import { Urls } from '@constants/Urls';
import {
    SalesEarningsPayloadModel,
    SalesResponseModel,
} from '@models/data/SalesAndEarningsModel';
import axios from 'axios';

export const SalesRecords = async (data: SalesEarningsPayloadModel) => {
    const apiUrl = await axios.get(
        `${Urls.CUSTOMER_LOCATION}${Endpoints.GET_SALES_DETAILS}?businessId=${data.businessId}`,
        { headers: { token: data.businessId } }
    );

    const apiData = apiUrl.data as SalesResponseModel;

    return apiData;
};
