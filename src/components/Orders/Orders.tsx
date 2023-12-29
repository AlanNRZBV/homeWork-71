import { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks.ts';
import { fetchOrders } from './ordersThunks.ts';

const Orders = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return <div>orders will be here</div>;
};

export default Orders;
