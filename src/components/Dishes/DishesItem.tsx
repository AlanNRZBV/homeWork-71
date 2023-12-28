import { IApiDish } from '../../types';
import { FC } from 'react';

const DishesItem: FC<IApiDish> = ({title, price, dishImg}) => {
  return (
    <div className="d-flex align-items-center justify-content-between p-3 border border-1 rounded mb-3">
      <div className="d-flex align-items-center">
        <img className="me-3" src={dishImg} alt={`${title}'s image`} style={{ height: '100px' }} />
        <span className="me-2"><b className="text-primary">Title:</b> {title}</span>
        <span><b className="text-primary">Price</b> {price} KGS</span>
      </div>
      <div className="d-flex align-items-center">
        <button type="button" className="btn btn-outline-warning me-3">Edit</button>
        <button type="button" className="btn btn-outline-danger">Delete</button>
      </div>
    </div>
  );
};

export default DishesItem;