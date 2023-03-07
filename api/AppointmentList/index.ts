import { Endpoints } from '@constants/Endpoints';
import { Urls } from '@constants/Urls';
import { CredentialsSliceModel } from '@models/store/CredentialsSliceModel';
import axios from 'axios';

export const AppointmentList = async (credentials: CredentialsSliceModel) => {
    const apiUrl = await axios.get(
        `${Urls.CUSTOMER_LOCATION}${Endpoints.GET_APPOINTMENTS}?businessPhoneNumber=${credentials.phonenumber}`,
        {
            headers: {
                token: credentials.token,
            },
        }
    );

    const apiData = apiUrl.data;
    return apiData;
};
