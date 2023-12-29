import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrder } from '../../types';
import { RootState } from '../../app/store.ts';

interface ClientState {
  isLoading: boolean;
  order: IOrder[];
}

export const initialState: ClientState = {
  isLoading: false,
  order: [],
};

export const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<IOrder>) => {
      const key = Object.keys(action.payload)[0];
      const index = state.order.findIndex((order) => Object.keys(order)[0] === key);
      if (index !== -1) {
        const order = state.order[index]
        order[key]+=1
      }else{
        state.order.push(action.payload);
      }
    },
  },
});

export const clientReducer = clientSlice.reducer;
export const { addOrder } = clientSlice.actions;
export const orderState = (state: RootState)=>state.client.order

/*
в order массив с ключ: количество
при загрузке модалки нужно запросить список блюд
если айдишник блюда совпадает с ключом из orders

собираем все даныне в объект и пушим его в массив
после массив передаем в состояние
 */