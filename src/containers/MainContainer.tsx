import { Menu } from '../modules/Menu';
import tw from 'tailwind-styled-components';
import { SideBar } from '../modules/SideBar';
import { MainPost } from '../modules/MainPost';
import { readComment, readPost } from '../firebase/function';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { LoadingContainer } from './LoadingContainer';

const Section = tw.section`
flex justify-evenly min-h-screen p-4
`;

export const MainContainer = () => {
  const posts = useSelector((state: any) => {
    return state.readPost.data;
  });
  const comments = useSelector((state: any) => {
    return state.readComment.data;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readPost());
    dispatch(readComment());
  }, [dispatch]);
  if (!posts || !comments) {
    return <LoadingContainer />;
  }
  return (
    <Section>
      <Menu />
      <MainPost posts={posts} comments={comments} />
      <SideBar />
    </Section>
  );
};
