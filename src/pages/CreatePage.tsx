import { CreateContainer } from '../containers/CreateContainer';
import { FooterContainer } from '../containers/FooterContainer';
import { HeaderContainer } from '../containers/HeaderContainer';

export const CreatePage = () => {
  return (
    <>
      <HeaderContainer />
      <CreateContainer />
      <FooterContainer />
    </>
  );
};
