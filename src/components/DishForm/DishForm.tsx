import { Button, Form, Spinner } from 'react-bootstrap';
import {
  addDishes, currentDishId,
  currentFormStatus,
  dishFormState,
  isDishFormEditing,
  isDishFormLoading,
  resetForm,
} from './dishFormSlice.ts';
import {  useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import React from 'react';
import { editDish, uploadDish } from './dishFormThunks.ts';
import { useNavigate } from 'react-router-dom';

const DishForm = () => {

  const navigate =useNavigate()
  const dispatch = useAppDispatch()
  const dish = useAppSelector(dishFormState)
  const isLoading = useAppSelector(isDishFormLoading)
  const isEditing = useAppSelector(isDishFormEditing)
  const status = useAppSelector(currentFormStatus)
  const currentId = useAppSelector(currentDishId)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const userInput = {
      key: e.target.name,
      value: e.target.value,
    };
    dispatch(addDishes(userInput));
  }

  const submitHandler = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    console.log('Current status is ' , status)
    if(status === 'add'){
      try{
        await dispatch(uploadDish(dish))
        dispatch(resetForm())
        navigate('/admin')
      }catch (error){
        console.log('Caught on try - DISH FORM SUBMIT HANDLER POST - ', error)
      }
    }else {
      try{
        await dispatch(editDish(currentId))
        dispatch(resetForm())
        navigate('/admin')
      }catch (error){
        console.log('Caught on try - DISH FORM SUBMIT HANDLER PUT - ', error)
      }
    }

  }

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3">
        <Form.Label>{isEditing ? 'Loading title data' : 'Title'}</Form.Label>
        <Form.Control onChange={changeHandler} type="text" placeholder="ex. Pizza" name="title" id="title" value={dish.title} required/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>{isEditing ? 'Loading price data' : 'Price'}</Form.Label>
        <Form.Control onChange={changeHandler} type="number" placeholder="ex. 100" name="price" id="price" value={dish.price} required/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>{isEditing ? 'Loading image data' : 'Image'}</Form.Label>
        <Form.Control onChange={changeHandler} type="url" placeholder="Dish image" name="dishImg" value={dish.dishImg} id="dishImg" />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? (<Spinner/>) : 'Submit'}
      </Button>
    </Form>
  );
};

export default DishForm;