import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { modalState, toggleVisibility } from './checkoutModalSlice.ts';
import CheckoutModalItem from './CheckoutModalItem.tsx';
import { DELIVERY } from '../../app/constants.ts';
import { totalSum } from '../Total/totalSlice.ts';
import Backdrop from '../UI/Backdrop/Backdrop.tsx';
import { uploadOrder } from './checkoutModalThunks.ts';

const CheckoutModal = () => {
  const dispatch = useAppDispatch();
  const clientOrder = useAppSelector(modalState);
  const sum = useAppSelector(totalSum);

  const onCloseHandler = () => {
    dispatch(toggleVisibility());
  };

  const onOrderHandler = () => {
    dispatch(uploadOrder(clientOrder));
    dispatch(toggleVisibility());
  };

  return (
    <>
      <div className="border border-1 rounded-3 p-3 position-absolute top-50 start-50 translate-middle bg-white z-2">
        {clientOrder.map((item) => (
          <CheckoutModalItem
            count={item.count}
            title={item.title}
            price={item.price}
            id={item.id}
            key={item.id}
          />
        ))}
        <div className="border-bottom border-1 d-flex flex-column border-top border-1 py-2 mt-3">
          <span>Delivery: {DELIVERY} KGS</span>
          <span>Total: {sum + DELIVERY}</span>
        </div>
        <div className="mt-3">
          <button
            onClick={onCloseHandler}
            type="button"
            className="btn btn-outline-warning me-3"
          >
            Cancel
          </button>
          <button
            onClick={onOrderHandler}
            type="button"
            className="btn btn-success"
          >
            Order
          </button>
        </div>
      </div>
      <Backdrop />
    </>
  );
};

export default CheckoutModal;
