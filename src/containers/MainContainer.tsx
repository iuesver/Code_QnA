import { Menu } from '../modules/Menu';
import tw from 'tailwind-styled-components';
import SideBar from '../modules/SideBar';
import MainPost from '../modules/MainPost';
import { readComment, readPost } from '../firebase/function';
import { useAppSelector, useAppDispatch, RootState } from '../redux/app';
import { useEffect } from 'react';
import { post } from '../redux/postSlice';
import { comment } from '../redux/commentSlice';

export const MainContainer = () => {
  const posts: post[] = useAppSelector((state: RootState) => {
    return state.post.data;
  });
  const comments: comment[] = useAppSelector((state: RootState) => {
    return state.comment.data;
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(readPost());
    dispatch(readComment());
  }, [dispatch]);

  return (
    <Section>
      <Menu />
      <MainPost posts={posts} comments={comments} />
      <SideBar posts={posts} />
    </Section>
  );
};

const Section = tw.section`
flex justify-evenly p-4 min-h-screen
`;
