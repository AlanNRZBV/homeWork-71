import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { dishesState, isDishesLoading } from './dishesSlice.ts';
import DishesItem from './DishesItem.tsx';
import { Spinner } from 'react-bootstrap';
import { useEffect } from 'react';
import { fetchDishes } from './dishesThunks.ts';
import { useLocation } from 'react-router-dom';
import Total from '../Total/Total.tsx';
import CheckoutModal from '../Checkout/CheckoutModal.tsx';
import {
  addOrderInfo,
  isCheckoutVisible,
  toggleVisibility,
} from '../Checkout/checkoutModalSlice.ts';
import { orderState } from '../../containers/Client/clientSlice.ts';
import { IOrderInModal } from '../../types';
import { totalSum } from '../Total/totalSlice.ts';
// import { addOrderToModal } from '../Checkout/checkoutModalThunks.ts';

const Dishes = () => {
  const location = useLocation();
  const isClient = location.pathname === '/';
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(dishesState);
  const isLoading = useAppSelector(isDishesLoading);
  const isVisible = useAppSelector(isCheckoutVisible);
  const orders = useAppSelector(orderState);
  const sum = useAppSelector(totalSum);

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  const showModal = () => {
    dispatch(toggleVisibility());

    const ordersInModal: IOrderInModal[] = [];

    orders.forEach((order) => {
      for (const orderId in order) {
        const index = dishes.findIndex((dish) => dish.id === orderId);
        if (index !== -1) {
          const dish = dishes[index];
          const count = order[orderId];
          const tempVar = {
            title: dish.title,
            price: dish.price,
            count: count,
            id: orderId,
          };
          ordersInModal.push(tempVar);
        }
      }
    });
    dispatch(addOrderInfo(ordersInModal));
  };

  const clientFeatures = isClient ? (
    <div>
      <Total />
      <button
        onClick={showModal}
        type="button"
        className="btn btn-outline-primary"
        disabled={sum === 0}
      >
        Checkout
      </button>
      <button onClick={() => console.log(orders)}>test</button>

      {isVisible ? <CheckoutModal /> : <></>}
    </div>
  ) : (
    <></>
  );

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        dishes.map((item) => (
          <DishesItem
            key={item.id}
            title={item.title}
            price={item.price}
            id={item.id}
            dishImg={item.dishImg}
          />
        ))
      )}
      {clientFeatures}
    </div>
  );
};

export default Dishes;
