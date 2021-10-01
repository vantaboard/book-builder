import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

interface InteractAnimationState {
  value: boolean;
}

const initialState: InteractAnimationState = {
  value: false,
};

export const interactAnimationSlice = createSlice({
  name: 'interactAnimation',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { toggle } = interactAnimationSlice.actions;

export const selectCount = (state: RootState) => state.interactAnimation.value;

export default interactAnimationSlice.reducer;