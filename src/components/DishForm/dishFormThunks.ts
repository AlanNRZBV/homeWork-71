import { createAsyncThunk } from '@reduxjs/toolkit';
import { IDish } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import { IMG_PLACEHOLDER } from '../../app/constants.ts';

export const uploadDish = createAsyncThunk<void, IDish>(
  'dishForm/upload', async (arg)=>{
    try {
      console.log('trying to upload dish')
      const dish: IDish = {
        title: arg.title,
        price: arg.price,
        dishImg: arg.dishImg !== '' ? (arg.dishImg) : (IMG_PLACEHOLDER)
      }
      console.log(dish)
      await axiosAPI.post('pizzaHouse/dishes.json', dish)
    }catch (error){
      console.log('Caught on try - UPLOAD DISH - ', error)
    }
  }
)