import { Endpoints } from '@constants/Endpoints';
import { Urls } from '@constants/Urls';
import { ServiceListModel } from '@models/api/ServiceListModel';
import { CredentialsSliceModel } from '@models/store/CredentialsSliceModel';
import axios from 'axios';

export const GetServiceList = async (data: CredentialsSliceModel) => {
    const apiUrl = await axios.get(
        `${Urls.CUSTOMER_LOCATION}business/${data.businessId}/${Endpoints.GET_ALL_SERVICES}`,
        { headers: { token: data.token } }
    );

    const apiData = apiUrl.data as ServiceListModel;

    return apiData;
};
