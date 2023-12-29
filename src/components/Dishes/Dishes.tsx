import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { dishesState, isDishesLoading } from './dishesSlice.ts';
import DishesItem from './DishesItem.tsx';
import { Spinner } from 'react-bootstrap';
import { useEffect } from 'react';
import { fetchDishes } from './dishesThunks.ts';
import { useLocation } from 'react-router-dom';
import Total from '../Total/Total.tsx';

const Dishes = () => {
  const location = useLocation()
  const isClient = location.pathname === '/'
  const dispatch = useAppDispatch()
  const dishes = useAppSelector(dishesState)
  const isLoading = useAppSelector(isDishesLoading)

  useEffect(() => {
    dispatch(fetchDishes())
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (<Spinner/>) : (
        dishes.map((item)=>(
          <DishesItem key={item.id} title={item.title} price={item.price} id={item.id} dishImg={item.dishImg}/>
        ))
      )}
      {isClient ? (<Total/>) : (<></>)}
    </div>
  );
};

export default Dishes;