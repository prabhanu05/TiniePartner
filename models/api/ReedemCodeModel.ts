import { ModalData } from '@models/data/ModalData';

export interface ReedemCodePayload {
    merchantId: number;
    token: string;
    reedemCode: string;
}

export interface ReedemCodeResponse {
    message: string;
}

export interface ReedemCodeModal extends ModalData {
    reedemCode: string;
}
