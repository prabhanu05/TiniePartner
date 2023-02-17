import { AppointmentsSlice } from '@store/slice/AppointmentsSlice';
import { CredentialsSlice } from '@store/slice/CredentialsSlice';
import { RegisterSlice } from '@store/slice/RegisterSlice';

export const registerActions = RegisterSlice.actions;
export const credentialsActions = CredentialsSlice.actions;
export const appointmentsActions = AppointmentsSlice.actions;
