import { Menu } from '../modules/Menu';
import tw from 'tailwind-styled-components';
import { SideBar } from '../modules/SideBar';
import { MainPost } from '../modules/MainPost';

const Section = tw.section`
flex justify-evenly p-4
`;

export const MainContainer = () => {
  return (
    <Section>
      <Menu />
      <MainPost />
      <SideBar />
    </Section>
  );
};
