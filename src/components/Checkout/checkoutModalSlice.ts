import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';

interface CheckoutState {
  isVisible: boolean
}

export const initialState: CheckoutState = {
  isVisible: false
}

export const checkoutSlice = createSlice({
  name:'checkout',
  initialState,
  reducers:{
    toggleVisibility: (state)=>{
      state.isVisible = !state.isVisible
    }
  }

})

export const checkoutReducer = checkoutSlice.reducer
export const {toggleVisibility} = checkoutSlice.actions

export const isCheckoutVisible = (state:RootState)=>state.checkout.isVisible