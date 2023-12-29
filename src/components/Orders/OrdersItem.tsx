import { IApiOrders } from '../../types';
import { FC } from 'react';

const OrdersItem: FC<IApiOrders> = ({ id, count, title, total, price }) => {
  return <div>order here</div>;
};

export default OrdersItem;
