import { Endpoints } from '@constants/Endpoints';
import { Urls } from '@constants/Urls';
import { ReedemModel } from '@models/api/ReedemDataModel';
import { CredentialsSliceModel } from '@models/store/CredentialsSliceModel';
import axios from 'axios';

export const ReedemList = async (credentials: CredentialsSliceModel) => {
    const apiUrl = await axios.get(
        `${Urls.CUSTOMER_LOCATION}${Endpoints.GET_ALL_REEDEMS}?businessPhoneNumber=${credentials.phonenumber}`,
        {
            headers: {
                token: credentials.token,
            },
        }
    );

    const apiData = apiUrl.data as ReedemModel;

    return apiData;
};
