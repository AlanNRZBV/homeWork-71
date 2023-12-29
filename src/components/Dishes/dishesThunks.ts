import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../../axiosAPI.ts';
import { IApiDish, IDish } from '../../types';
import { dishFormSlice } from '../DishForm/dishFormSlice.ts';
import { RootState } from '../../app/store.ts';

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

export const deleteDish = createAsyncThunk<string | undefined, string>(
  'dishes/delete',
  async (arg) => {
    try {
      await axiosAPI.delete(`pizzaHouse/dishes/${arg}.json`);
      return arg;
    } catch (error) {
      console.log('Caught on try - DELETE DISH - ', error);
    }
  },
);

export const fetchDish = createAsyncThunk<
  string | undefined,
  string,
  { state: RootState }
>('dishes/fetchOne', async (arg, thunkAPI) => {
  try {
    const response = await axiosAPI.get(`pizzaHouse/dishes/${arg}.json`);

    const newDish: IDish = {
      title: '',
      price: '',
      dishImg: '',
    };

    if (response.data !== null) {
      newDish.title = response.data.title;
      newDish.price = response.data.price;
      newDish.dishImg = response.data.dishImg;
    }
    thunkAPI.dispatch(dishFormSlice.actions.addDish(newDish));

    return arg;
  } catch (error) {
    console.log('Caught on try - FETCH ONE DISH - ', error);
  }
});
