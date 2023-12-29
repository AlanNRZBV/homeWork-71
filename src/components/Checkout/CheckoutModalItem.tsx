import { FC } from 'react';
import { IOrderInModal } from '../../types';
const CheckoutModalItem: FC<IOrderInModal> = ({ title, price, count }) => {
  return (
    <div className="d-flex">
      <span className="text-primary me-2">{title}</span>
      <span className="text-black me-auto">x{count}</span>
      <span className="text-success">{price}</span>
      <button type="button" className="btn btn-outline-danger">
        Delete
      </button>
    </div>
  );
};

export default CheckoutModalItem;
