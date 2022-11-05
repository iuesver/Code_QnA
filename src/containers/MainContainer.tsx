import { Menu } from '../modules/Menu';
import tw from 'tailwind-styled-components';
import { SideBar } from '../modules/SideBar';
import { MainPost } from '../modules/MainPost';
import { readPost } from '../firebase/function';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Section = tw.section`
flex justify-evenly h-screen p-4
`;

export const MainContainer = () => {
  const post = useSelector((state: any) => {
    return state.read.data;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readPost());
    console.log(post);
  }, [dispatch]);
  return (
    <Section>
      <Menu />
      <MainPost />
      <SideBar />
    </Section>
  );
};
