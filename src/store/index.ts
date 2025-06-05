import { configureStore } from '@reduxjs/toolkit';
import uploadReducer from 'store/slices/uploadSlice';
import stepReducer from 'store/slices/stepSlice';

export const store = configureStore({
  reducer: {
    upload: uploadReducer,
    steps: stepReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
