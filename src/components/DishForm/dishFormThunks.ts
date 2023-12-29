import { createAsyncThunk } from '@reduxjs/toolkit';
import { IDish } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import { IMG_PLACEHOLDER } from '../../app/constants.ts';
import { RootState } from '../../app/store.ts';

export const uploadDish = createAsyncThunk<void, IDish>(
  'dishForm/upload',
  async (arg) => {
    try {
      const dish: IDish = {
        title: arg.title,
        price: arg.price,
        dishImg: arg.dishImg !== '' ? arg.dishImg : IMG_PLACEHOLDER,
      };
      await axiosAPI.post('pizzaHouse/dishes.json', dish);
    } catch (error) {
      console.log('Caught on try - UPLOAD DISH - ', error);
    }
  },
);

export const editDish = createAsyncThunk<void, string, {state: RootState}>(
  'dishForm/edit', async (arg, thunkAPI)=>{
    try {
      const getState = thunkAPI.getState();
      const dish = getState.dishForm.dish
      await axiosAPI.put(`pizzaHouse/dishes/${arg}.json`, dish)
    }catch (error)
    {
      console.log('Caught on try - EDIT DISH - ', error)
    }
  }
)