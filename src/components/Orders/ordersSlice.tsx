import { IApiOrders } from '../../types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchOrders } from './ordersThunks.ts';

interface IOrdersState {
  orders: IApiOrders[];
  isLoading: boolean;
}

export const initialState: IOrdersState = {
  orders: [],
  isLoading: false,
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchOrders.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const ordersReducer = ordersSlice.reducer;
