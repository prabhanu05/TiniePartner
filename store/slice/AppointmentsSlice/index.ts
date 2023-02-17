import { AppointmentsSliceModel } from '@models/store/AppointmentsSliceModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    reedemCode: '',
} as AppointmentsSliceModel;

export const AppointmentsSlice = createSlice({
    name: 'appointmentsSlice',
    initialState,
    reducers: {
        setReedemCode(
            state,
            action: PayloadAction<{
                reedemCode: string;
            }>
        ) {
            state.reedemCode = action.payload.reedemCode;
        },
        clearReedemCode(state) {
            state.reedemCode = '';
        },
    },
});
