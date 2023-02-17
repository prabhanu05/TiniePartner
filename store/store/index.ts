import { configureStore } from '@reduxjs/toolkit';
import { AppointmentsSlice } from '@store/slice/AppointmentsSlice';
import { CredentialsSlice } from '@store/slice/CredentialsSlice';
import { RegisterSlice } from '@store/slice/RegisterSlice';

const store = configureStore({
    reducer: {
        registerReducer: RegisterSlice.reducer,
        credentialReducer: CredentialsSlice.reducer,
        appointmentReducer: AppointmentsSlice.reducer,
    },
});

export type StoreModel = ReturnType<typeof store.getState>;

export default store;
