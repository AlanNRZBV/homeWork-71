import { IApiDish } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';
import { deleteDish, fetchDishes } from './dishesThunks.ts';

interface DishesState {
  dishes: IApiDish[]
  isLoading: boolean
  isDeleting: boolean
}

export const initialState: DishesState = {
  dishes: [],
  isLoading: false,
  isDeleting: false
}

export const dishesSlice = createSlice({
  name:'dishes',
  initialState,
  reducers:{
    deleteDish:(state, action:PayloadAction<string>)=>{
      const id = action.payload
      state.dishes = state.dishes.filter(item => item.id !== id)
    }
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
    builder.addCase(deleteDish.pending,(state )=>{
      state.isDeleting = true

    })
    builder.addCase(deleteDish.fulfilled, (state,{payload:id})=>{

      if(id){

      state.dishes = state.dishes.filter(item => item.id !== id)
      }
      state.isDeleting = false
    })
    builder.addCase(deleteDish.rejected, (state)=>{
      state.isDeleting = false
    })
  }

})

export const dishesReducer = dishesSlice.reducer

export const dishesState = (state: RootState)=>state.dishes.dishes
export const isDishesLoading = (state:RootState)=>state.dishes.isLoading
export const isDishDeleting = (state:RootState)=>state.dishes.isDeleting