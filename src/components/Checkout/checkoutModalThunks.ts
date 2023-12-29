import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../../axiosAPI.ts';
import { IOrder, IOrderInModal } from '../../types';

export const uploadOrder = createAsyncThunk<void, IOrderInModal[]>(
  'checkoutModal/upload',
  async (arg) => {
    try {
      const orders = arg.reduce((acc, item) => {
        const { id, count } = item;
        acc[id] = count;
        return acc;
      }, {} as IOrder);

      await axiosAPI.post('pizzaHouse/orders.json', orders);
    } catch (error) {
      console.log('Caught on try - UPLOAD ORDER - ', error);
    }
  },
);
