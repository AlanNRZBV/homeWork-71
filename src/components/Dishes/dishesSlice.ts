import { IApiDish } from '../../types';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';
import { deleteDish, fetchDish, fetchDishes } from './dishesThunks.ts';

interface DishesState {
  dishes: IApiDish[];
  isLoading: boolean;
  isDeleting: boolean;
  isEditing: boolean;
}

export const initialState: DishesState = {
  dishes: [],
  isLoading: false,
  isDeleting: false,
  isEditing: false,
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDishes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDishes.fulfilled, (state, { payload: dishes }) => {
      if (dishes) {
        state.dishes = dishes;
      }
      state.isLoading = false;
    });
    builder.addCase(fetchDishes.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteDish.pending, (state) => {
      state.isDeleting = true;
    });
    builder.addCase(deleteDish.fulfilled, (state, { payload: id }) => {
      if (id) {
        state.dishes = state.dishes.filter((item) => item.id !== id);
      }
      state.isDeleting = false;
    });
    builder.addCase(deleteDish.rejected, (state) => {
      state.isDeleting = false;
    });
    builder.addCase(fetchDish.pending, (state) => {
      state.isEditing = true;
    });
    builder.addCase(fetchDish.fulfilled, (state) => {

      state.isEditing = false;
    });
    builder.addCase(fetchDish.rejected, (state) => {
      state.isEditing = false;
    });
  },
});

export const dishesReducer = dishesSlice.reducer;

export const dishesState = (state: RootState) => state.dishes.dishes;
export const isDishesLoading = (state: RootState) => state.dishes.isLoading;
export const isDishDeleting = (state: RootState) => state.dishes.isDeleting;
export const isDishEditing = (state: RootState) => state.dishes.isEditing;
