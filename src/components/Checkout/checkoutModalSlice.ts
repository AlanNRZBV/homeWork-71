import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';
import { IOrderInModal } from '../../types';

interface CheckoutModalState {
  clientOrder: IOrderInModal[];
  isVisible: boolean;
  isLoading: boolean;
}

export const initialState: CheckoutModalState = {
  clientOrder: [],
  isVisible: false,
  isLoading: false,
};

export const checkoutModalSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    toggleVisibility: (state) => {
      state.isVisible = !state.isVisible;
    },
    addOrderInfo: (state, action: PayloadAction<IOrderInModal[]>) => {
      state.clientOrder = action.payload;
    },
    deletePosition: (state, action: PayloadAction<IOrderInModal[]>) => {
      console.log(action.payload);
      state.clientOrder = action.payload;
    },
  },
});

export const checkoutModalReducer = checkoutModalSlice.reducer;
export const { toggleVisibility, addOrderInfo, deletePosition } =
  checkoutModalSlice.actions;

export const isCheckoutVisible = (state: RootState) =>
  state.checkoutModal.isVisible;
export const modalState = (state: RootState) => state.checkoutModal.clientOrder;
