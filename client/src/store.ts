import { configureStore } from '@reduxjs/toolkit';
import interactAnimationReducer from 'features/interactAnimation/interactAnimationSlice';

export const store = configureStore({
  reducer: {
    interactAnimation: interactAnimationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
