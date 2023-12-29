import { configureStore } from '@reduxjs/toolkit';
import { dishFormReducer } from '../components/DishForm/dishFormSlice.ts';
import { dishesReducer } from '../components/Dishes/dishesSlice.ts';

export const store = configureStore({
  reducer:{
    dishForm: dishFormReducer,
    dishes: dishesReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch