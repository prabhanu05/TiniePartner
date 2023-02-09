export type ResetData = {
    passcode: string;
    resetPasscode: string;
};

export type ModalData = {
    isVisible: boolean;
    message: string;
};

export type ResetModalData = {
    successModal: ModalData;
    errorModal: ModalData;
};
