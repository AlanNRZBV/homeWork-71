import Navigation from '../../components/Navigation/Navigation.tsx';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Admin from '../Admin/Admin.tsx';
import User from '../User/User.tsx';
import Dishes from '../../components/Dishes/Dishes.tsx';
import Orders from '../../components/Orders/Orders.tsx';


function App() {

  return (
    <>
      <header>
        <Navigation/>
      </header>
      <Container>
      <Routes>
        <Route path="/" element={<User/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/dishes" element={<Dishes/>}/>
        <Route path="/admin/orders" element={<Orders/>}/>
      </Routes>
      </Container>
    </>
  )
}

export default App
