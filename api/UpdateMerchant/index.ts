import { Endpoints } from '@constants/Endpoints';
import { Urls } from '@constants/Urls';
import {
    AccountDetailsPayloadModel,
    AccountDetailsResponseModel,
} from '@models/data/AccountDetailsModel';
import axios from 'axios';

export const UpdateMerchant = async (data: AccountDetailsPayloadModel) => {
    const apiUrl = await axios.put(
        `${Urls.VENDOR_AUTH}merchant/${data.merchantId}/${Endpoints.UPDATE_MERCHANT}?businessId=${data.businessId}&businessName=${data.businessName}&businessType=${data.businessType}&email=${data.email}&name=${data.name}&pan=${data.pan}&phoneNumber=${data.phoneNumber}`,
        {},
        { headers: { token: data.token } }
    );

    const apiData = apiUrl.data as AccountDetailsResponseModel;

    if (apiData?.status === 'Merchant update successful') {
        return true;
    }

    throw new Error(
        'Unable to update details this time! Please try again later.'
    );
};
