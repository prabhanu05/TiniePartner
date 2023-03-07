export interface ReedemDataModel {
    appointmentDate: string;
    appointmentTime: string;
    name: string;
    orderId: string;
    price: number;
    quantity: number;
    reedemId: string;
    slotDate: string;
    slotTime: string;
}

export interface ReedemModel {
    reedemResponse: ReedemDataModel[];
    totalOrdersReedemed: number;
}
