import { Endpoints } from '@constants/Endpoints';
import { Urls } from '@constants/Urls';
import { AppointmentsDataModel } from '@models/api/AppointmentsDataModel';
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

    const apiData = apiUrl.data as AppointmentsDataModel[];
    if (Array.isArray(apiData) && apiData.length <= 0)
        throw new Error('No records exist');
    return apiData;
};
