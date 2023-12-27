import { NavLink, useLocation } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';

const Navigation = () => {
  const location = useLocation();

  let brandInnerText
  let brandLinkPath

  if(location.pathname.startsWith('/admin')){
    brandInnerText = 'Pizza Admin'
    brandLinkPath = '/admin'
  }else{
    brandInnerText = 'Pizza'
    brandLinkPath = '/'

  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to={brandLinkPath} className="navbar-brand me-auto">{brandInnerText}</NavLink>
        <div className={location.pathname.startsWith('/admin') ? 'd-flex' : 'd-none'}>
          <NavLink to="/admin/dishes" className="text-black nav-link fs-4 me-3">
            Dishes
          </NavLink>
          <NavLink to="/admin/orders" className="btn btn-primary">
            Orders
          </NavLink>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
