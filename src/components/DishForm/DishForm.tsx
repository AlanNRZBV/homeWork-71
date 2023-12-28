import { Button, Form, Spinner } from 'react-bootstrap';
import { addDish, dishFormState, isDishFormLoading, resetForm } from './dishFormSlice.ts';
import {  useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import React from 'react';
import { uploadDish } from './dishFormThunks.ts';
import { useNavigate } from 'react-router-dom';

const DishForm = () => {
  const navigate =useNavigate()
  const dispatch = useAppDispatch()
  const dish = useAppSelector(dishFormState)
  const isLoading = useAppSelector(isDishFormLoading)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const userInput = {
      key: e.target.name,
      value: e.target.value,
    };
    dispatch(addDish(userInput));
  }

  const submitHandler = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    await dispatch(uploadDish(dish))
    // dispatch(resetForm())
    // navigate('/admin')
  }

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={changeHandler} type="text" placeholder="ex. Pizza" name="title" id="title" value={dish.title} required/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control onChange={changeHandler} type="number" placeholder="ex. 100" name="price" id="price" value={dish.price} required/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control onChange={changeHandler} type="url" placeholder="Dish image" name="dishImg" value={dish.dishImg} id="dishImg" />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? (<Spinner/>) : 'Submit'}
      </Button>
    </Form>
  );
};

export default DishForm;