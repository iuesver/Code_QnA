import { Outlet } from 'react-router-dom';
import { HeaderContainer } from '../containers/HeaderContainer';
import { FooterContainer } from '../containers/FooterContainer';

const ProductPage = () => {
  return (
    <>
      <HeaderContainer />
      <Outlet />
      <FooterContainer />
    </>
  );
};

export default ProductPage;
