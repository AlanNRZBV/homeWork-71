import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDish } from '../../types';
import { RootState } from '../../app/store.ts';
import { uploadDish } from './dishFormThunks.ts';

interface DishFormState {
  dish: IDish
  isLoading: boolean,
}

export const initialState: DishFormState ={
  dish: {title: '', price: 0, dishImg:''},
  isLoading: false
}

export const dishFormSlice = createSlice({
  name: 'dishForm',
  initialState,
  reducers:{
    addDish:(state, action:PayloadAction<{key: string, value: string | number}>)=>{
      const {key, value}= action.payload
      return {
        ...state,
        dish:{
          ...state.dish,
          [key]: value
        }
      }
    },
    resetForm:()=>{
      return initialState
    }
  },

  extraReducers:(builder)=>{
    builder.addCase(uploadDish.pending, (state)=>{
      state.isLoading = true
    });
    builder.addCase(uploadDish.fulfilled, (state)=>{
      state.isLoading = false
    });
    builder.addCase(uploadDish.rejected, (state)=>{
      state.isLoading = false
    })
  }
})

export const dishFormReducer = dishFormSlice.reducer
export const {addDish, resetForm}=dishFormSlice.actions

export const dishFormState = (state: RootState)=>state.dishForm.dish
export const isDishFormLoading = (state: RootState)=> state.dishForm.isLoading