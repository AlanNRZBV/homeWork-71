import { NavLink } from 'react-router-dom';
import Dishes from '../../components/Dishes/Dishes.tsx';
import { useAppDispatch } from '../../app/hooks.ts';
import { toggleStatus } from '../../components/DishForm/dishFormSlice.ts';

const Admin = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <NavLink
        onClick={() => dispatch(toggleStatus())}
        to="/admin/add-dish"
        className="btn btn-outline-primary"
      >
        Add dish
      </NavLink>
      <Dishes />
    </div>
  );
};

export default Admin;
