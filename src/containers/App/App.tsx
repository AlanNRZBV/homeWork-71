import Navigation from '../../components/Navigation/Navigation.tsx';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Admin from '../Admin/Admin.tsx';
import Client from '../Client/Client.tsx';
import Dishes from '../../components/Dishes/Dishes.tsx';
import Orders from '../../components/Orders/Orders.tsx';
import DishForm from '../../components/DishForm/DishForm.tsx';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Container>
        <Routes>
          <Route path="/" element={<Client />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/dishes" element={<Dishes />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/add-dish" element={<DishForm />} />
          <Route path="/admin/edit-dish/:id" element={<DishForm />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
