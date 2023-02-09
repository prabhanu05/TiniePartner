import { ModalData } from '@models/data/ModalData';

export type ResetData = {
    passcode: string;
    resetPasscode: string;
};

export type ResetModalData = {
    successModal: ModalData;
    errorModal: ModalData;
};
