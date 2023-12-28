import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { dishesState, isDishesLoading } from './dishesSlice.ts';
import DishesItem from './DishesItem.tsx';
import { Spinner } from 'react-bootstrap';
import { useEffect } from 'react';
import { fetchDishes } from './dishesThunks.ts';

const Dishes = () => {
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
    </div>
  );
};

export default Dishes;