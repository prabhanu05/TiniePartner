import { Endpoints } from '@constants/Endpoints';
import { Urls } from '@constants/Urls';
import { PasscodeResetModel } from '@models/api/PasscodeResetModel';
import axios from 'axios';

export const PasscodeReset = async (data: PasscodeResetModel) => {
    const apiUrl = await axios.post(
        `${Urls.VENDOR_AUTH}${Endpoints.RESET_PASSCODE}`,
        {
            email: data.email,
            emailOtp: data.emailOtp,
            newPasscode: data.newPasscode,
            phoneOtp: data.phoneOtp,
        }
    );

    const apiData = apiUrl.data as { status: string };
    if (apiData?.status === 'Passcode reset successful') {
        return true;
    }

    throw new Error('Unable to reset passcode');
};
