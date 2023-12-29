import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDish } from '../../types';
import { RootState } from '../../app/store.ts';
import { uploadDish } from './dishFormThunks.ts';
import { fetchDish } from '../Dishes/dishesThunks.ts';

interface DishFormState {
  dish: IDish;
  isLoading: boolean;
  isEditing: boolean;
  status: 'add' | 'edit';
  editId: string;
}

export const initialState: DishFormState = {
  dish: { title: '', price: '', dishImg: '' },
  isLoading: false,
  isEditing: false,
  status: 'add',
  editId: '',
};

export const dishFormSlice = createSlice({
  name: 'dishForm',
  initialState,
  reducers: {
    addDishes: (
      state,
      action: PayloadAction<{ key: string; value: string | number }>,
    ) => {
      const { key, value } = action.payload;
      return {
        ...state,
        dish: {
          ...state.dish,
          [key]: value,
        },
      };
    },
    addDish: (state, action: PayloadAction<IDish>) => {
      const dish = action.payload;
      if (dish) {
        state.dish = dish;
      }
    },
    toggleStatus: (state) => {
      state.status = 'add';
    },

    resetForm: () => {
      return initialState;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(uploadDish.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(uploadDish.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(uploadDish.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchDish.pending, (state) => {
      state.status = 'edit';
      state.isLoading = true;
    });
    builder.addCase(fetchDish.fulfilled, (state, { payload: id }) => {
      if (id) {
        state.editId = id;
      }
      state.isLoading = false;
    });
    builder.addCase(fetchDish.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const dishFormReducer = dishFormSlice.reducer;
export const { addDishes, resetForm, toggleStatus } = dishFormSlice.actions;

export const dishFormState = (state: RootState) => state.dishForm.dish;
export const isDishFormLoading = (state: RootState) => state.dishForm.isLoading;
export const isDishFormEditing = (state: RootState) => state.dishForm.isEditing;
export const currentFormStatus = (state: RootState) => state.dishForm.status;
export const currentDishId = (state: RootState) => state.dishForm.editId;
