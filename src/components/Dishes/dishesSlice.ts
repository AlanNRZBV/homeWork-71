import { IApiDish } from '../../types';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';
import { fetchDishes } from './dishesThunks.ts';

interface DishesState {
  dishes: IApiDish[]
  isLoading: boolean
}

export const initialState: DishesState = {
  dishes: [],
  isLoading: false
}

export const dishesSlice = createSlice({
  name:'dishes',
  initialState,
  reducers:{
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchDishes.pending, (state)=>{
      state.isLoading = true
    })
    builder.addCase(fetchDishes.fulfilled, (state, {payload:dishes})=>{
      if (dishes){
        state.dishes = dishes
      }
      state.isLoading = false
    })
    builder.addCase(fetchDishes.rejected,(state)=>{
      state.isLoading = false
    })
  }

})

export const dishesReducer = dishesSlice.reducer

export const dishesState = (state: RootState)=>state.dishes.dishes
export const isDishesLoading = (state:RootState)=>state.dishes.isLoading