import { IApiDish } from '../../types';
import { FC} from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { deleteDish } from './dishesThunks.ts';
import { Spinner } from 'react-bootstrap';
import { isDishDeleting } from './dishesSlice.ts';

const DishesItem: FC<IApiDish> = ({ title, price, dishImg, id }) => {
  const dispatch = useAppDispatch();
  const isDeleting = useAppSelector(isDishDeleting)


  const onDelete = () => {
    dispatch(deleteDish(id));
  };

  return (
    <div className="d-flex align-items-center justify-content-between p-3 border border-1 rounded mb-3">
      <div className="d-flex align-items-center">
        <img
          className="me-3"
          src={dishImg}
          alt={`${title}'s image`}
          style={{ height: '100px' }}
        />
        <span className="me-2">
          <b className="text-primary">Title:</b> {title}
        </span>
        <span>
          <b className="text-primary">Price</b> {price} KGS
        </span>
      </div>
      <div className="d-flex align-items-center">
        <button type="button" className="btn btn-outline-warning me-3">
          Edit
        </button>
        <button
          onClick={onDelete}
          type="button"
          className="btn btn-outline-danger"
          disabled={isDeleting}
        >
          {isDeleting ? <Spinner /> : 'Delete'}
        </button>
      </div>
    </div>
  );
};

export default DishesItem;
