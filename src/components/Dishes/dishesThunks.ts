import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../../axiosAPI.ts';
import { IApiDish } from '../../types';

export const fetchDishes = createAsyncThunk<IApiDish[] | undefined>(
  'dishes/fetch',
  async () => {
    try {
      const response = await axiosAPI.get('pizzaHouse/dishes.json');

      let newDishes: IApiDish[] = [];

      if (response.data !== null) {
        newDishes = Object.keys(response.data).map((id) => ({
          id,
          ...response.data[id],
        }));
        return newDishes;
      }

      return newDishes;
    } catch (error) {
      console.log('Caught on try - FETCH DISHES - ', error);
    }
  },
);