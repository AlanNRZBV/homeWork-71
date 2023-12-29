import { IApiDish } from '../../types';
import { FC} from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { deleteDish, fetchDish } from './dishesThunks.ts';
import { Spinner } from 'react-bootstrap';
import { isDishDeleting, isDishEditing } from './dishesSlice.ts';
import { useNavigate } from 'react-router-dom';

const DishesItem: FC<IApiDish> = ({ title, price, dishImg, id }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const isDeleting = useAppSelector(isDishDeleting)
  const isEditing = useAppSelector(isDishEditing)


  const onDelete = () => {
    dispatch(deleteDish(id));
  };

  const onEdit = async ()=>{
    try {
      await dispatch(fetchDish(id))
      navigate(`/admin/edit-dish/${id}`)
    }catch (error){
      console.log('Caught on try - NAVIGATE TO FORM ON EDIT - ', error)
    }
  }

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
        <button
          onClick={onEdit}
          type="button"
          className="btn btn-outline-warning me-3"
          disabled={isDeleting || isEditing}
        >
          {isEditing ? <Spinner/> : 'Edit'}
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
