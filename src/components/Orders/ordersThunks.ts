import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../../axiosAPI.ts';
import { IApiDish, IApiOrders } from '../../types';

export const fetchOrders = createAsyncThunk<IApiOrders[] | undefined>(
  'orders/fetch',
  async () => {
    try {
      const dishesResponse = await axiosAPI.get('pizzaHouse/dishes.json');
      const ordersResponse = await axiosAPI.get('pizzaHouse/orders.json');
      let newDishes: IApiDish[] = [];
      let newOrders = [];
      let orders: IApiOrders[] = [];
      if (dishesResponse.data !== null) {
        newDishes = Object.keys(dishesResponse.data).map((id) => ({
          id,
          ...dishesResponse.data[id],
        }));
      }

      return orders;
    } catch (error) {
      console.log(error);
    }
  },
);
