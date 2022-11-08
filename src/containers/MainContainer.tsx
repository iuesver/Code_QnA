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
  const posts = useSelector((state: any) => {
    return state.post.data;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readPost());
    console.log(posts);
  }, [dispatch]);
  if (!posts) {
    return <h1>loading...</h1>;
  }
  return (
    <Section>
      <Menu />
      <MainPost posts={posts} />
      <SideBar />
    </Section>
  );
};
