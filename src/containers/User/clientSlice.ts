import { IApiDish } from '../../types';
import { createSlice } from '@reduxjs/toolkit';

interface ClientState {
  dishes: IApiDish[],
  isLoading: boolean
}

export const initialState: ClientState = {
  dishes: [],
  isLoading: false
}

export const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers:{},

})

export const clientReducer = clientSlice.reducer
