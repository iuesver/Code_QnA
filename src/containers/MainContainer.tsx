import { Menu } from '../modules/Menu';
import tw from 'tailwind-styled-components';
import { SideBar } from '../modules/SideBar';
import { MainPost } from '../modules/MainPost';
import { readComment, readPost } from '../firebase/function';
import { useAppSelector, useAppDispatch } from '../redux/app';
import { useEffect } from 'react';
import { LoadingContainer } from './LoadingContainer';
import { post } from '../redux/postSlice';
import { comment } from '../redux/commentSlice';

const Section = tw.section`
flex justify-evenly min-h-screen p-4
`;

export const MainContainer = () => {
  const posts: post[] = useAppSelector((state: any) => {
    return state.post.data;
  });
  const comments: comment[] = useAppSelector((state: any) => {
    return state.comment.data;
  });
  const dispatch = useAppDispatch();

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
      <SideBar posts={posts} />
    </Section>
  );
};
