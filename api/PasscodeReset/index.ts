import { Endpoints } from '@constants/Endpoints';
import { Urls } from '@constants/Urls';
import { PasscodeResetModel } from '@models/api/PasscodeResetModel';
import axios from 'axios';

export const PasscodeReset = async (data: PasscodeResetModel) => {
    const apiUrl = await axios.post(
        `${Urls.VENDOR_AUTH}${Endpoints.RESET_PASSCODE}`,
        data
    );

    return apiUrl.data;
    // const apiData = apiUrl.data as LoginSuccessModel;

    // if (!!apiData.token) {
    //     return apiData;
    // }

    throw new Error('Unable to reset passcode');
};
