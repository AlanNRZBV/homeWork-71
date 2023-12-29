import { configureStore } from '@reduxjs/toolkit';
import { dishFormReducer } from '../components/DishForm/dishFormSlice.ts';
import { dishesReducer } from '../components/Dishes/dishesSlice.ts';
import { clientReducer } from '../containers/Client/clientSlice.ts';
import { totalReducer } from '../components/Total/totalSlice.ts';
import { checkoutModalReducer } from '../components/Checkout/checkoutModalSlice.ts';
import { ordersReducer } from '../components/Orders/ordersSlice.tsx';

export const store = configureStore({
  reducer: {
    dishForm: dishFormReducer,
    dishes: dishesReducer,
    client: clientReducer,
    total: totalReducer,
    checkoutModal: checkoutModalReducer,
    orders: ordersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
