import { NavLink } from 'react-router-dom';
import Dishes from '../../components/Dishes/Dishes.tsx';

const Admin = () => {
  return (
    <div>
      <NavLink to="/admin/add-dish" className="btn btn-outline-primary">Add dish</NavLink>
      <Dishes/>
    </div>
  );
};

export default Admin;