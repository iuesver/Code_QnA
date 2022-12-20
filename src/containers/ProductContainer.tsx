import { RootState, useAppDispatch, useAppSelector } from '../redux/app';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useEffect, useRef, useState } from 'react';
import { readComment, readPost, plusLike } from '../firebase/function';
import tw from 'tailwind-styled-components';
import { useParams } from 'react-router-dom';
import { post } from '../redux/postSlice';
import { createComment } from '../firebase/function';
import { ProductViewer } from '../product/ProductViewer';
import { HandThumbUpIcon } from '@heroicons/react/24/solid';
import { comment } from '../redux/commentSlice';
import { getAuth } from 'firebase/auth';
import { LoadingContainer } from './LoadingContainer';

const Section = tw.section`
flex flex-col w-3/4 h-full min-h-screen mx-auto my-2 rounded shadow-lg
`;

const Article = tw.article`
p-2
`;

const Info = tw.div`
flex flex-col
`;

const Title = tw.h1`
text-3xl font-bold
`;
const SubContent = tw.span`
text-gray-400
`;

export const ProductContainer = () => {
  const params = useParams();
  const [commentInfo, setCommentInfo] = useState('');
  const posts: post[] = useAppSelector((state: RootState) => {
    return state.post.data;
  });
  const comments: comment[] = useAppSelector((state: RootState) => {
    return state.comment.data;
  });
  const currentComments: comment[] | null =
    comments !== null
      ? comments.filter(
          (comment: comment) => comment.group === Number(params.id)
        )
      : null;
  const dispatch = useAppDispatch();
  const commentRef = useRef<any>();
  const auth = getAuth().currentUser;
  const user = auth !== null ? auth.email : '';
  const post = posts.find((item: post) => item.id === Number(params.id));
  useEffect(() => {
    dispatch(readPost());
    dispatch(readComment());
  }, [dispatch]);
  if (!posts || !comments || !post) {
    return <LoadingContainer />;
  }
  return (
    <Section>
      <ProductViewer posts={posts} params={params} user={user} />
      <div className="flex justify-center">
        <button
          onClick={() => {
            dispatch(plusLike({ post: post }));
          }}
          className="btn gap-2 bg-white text-black hover:text-white rounded-full"
        >
          <HandThumbUpIcon className="w-6 h-6 text-blue-500" />
          좋아요
        </button>
      </div>
      <Article>
        <div className="p-2">
          <span className="text-bold text-lg">댓글</span>
          <span className="text-sm text-gray-400">
            {' '}
            총{' '}
            <span className="text-accent">
              {currentComments === null ? 0 : currentComments.length}
            </span>
            개
          </span>
        </div>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="댓글을 작성해주세요..."
              className="input input-bordered w-full"
              ref={commentRef}
              onChange={(event) => {
                setCommentInfo(event.target.value);
              }}
            />
            <button
              onClick={(event) => {
                dispatch(
                  createComment({
                    comment: commentInfo,
                    commenter: user || 'unknown',
                    group: Number(params.id),
                    id: comments.length + 1,
                  })
                );
                commentRef.current.value = '';
              }}
              className="w-20 btn btn-square btn-primary text-white"
            >
              작성하기
            </button>
          </div>
        </div>
        <div>
          {currentComments &&
            currentComments.map((comment: comment) => (
              <div key={comment.id} className="p-2 border-b-2">
                <p>{comment.comment}</p>
                <span className="text-sm text-gray-500">
                  {comment.commenter}
                </span>
              </div>
            ))}
        </div>
      </Article>
    </Section>
  );
};
