import { ModalData } from '@models/data/ModalData';

export type LoginModel = {
    mobile: string;
    otp: string;
};

export type LoginModalData = {
    passcodeModal: ModalData;
    errorModal: ModalData;
};
