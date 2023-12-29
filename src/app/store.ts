import { configureStore } from '@reduxjs/toolkit';
import { dishFormReducer } from '../components/DishForm/dishFormSlice.ts';
import { dishesReducer } from '../components/Dishes/dishesSlice.ts';
import { clientReducer } from '../containers/User/clientSlice.ts';
import { totalReducer } from '../components/Total/totalSlice.ts';

export const store = configureStore({
  reducer:{
    dishForm: dishFormReducer,
    dishes: dishesReducer,
    client: clientReducer,
    total: totalReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch