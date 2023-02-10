import { configureStore } from '@reduxjs/toolkit';
import { RegisterSlice } from '@store/slice/RegisterSlice';

const store = configureStore({
    reducer: {
        registerReducer: RegisterSlice.reducer,
    },
});

export type StoreModel = ReturnType<typeof store.getState>;

export default store;
