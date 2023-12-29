import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';

interface TotalState {
  sum: number;
}

export const initialState: TotalState = {
  sum: 0,
};

export const totalSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {
    updateSum: (state, action: PayloadAction<number>) => {
      state.sum += action.payload;
    },
  },
});

export const totalReducer = totalSlice.reducer;
export const { updateSum } = totalSlice.actions;

export const totalSum = (state: RootState) => state.total.sum;
