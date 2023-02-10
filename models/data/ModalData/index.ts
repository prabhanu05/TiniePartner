export type ModalData = {
    isVisible: boolean;
    message: string;
};

export type SuccessErrorModel = {
    success: ModalData;
    error: ModalData;
};
