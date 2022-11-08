import { useDispatch, useSelector } from 'react-redux';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useEffect } from 'react';
import { readPost } from '../firebase/function';
import tw from 'tailwind-styled-components';
import { useParams } from 'react-router-dom';
import { post } from '../redux/readPostSlice';
import { ProductViewer } from '../product/ProductViewer';

const Section = tw.section`
flex flex-col w-3/4 h-screen mx-auto my-2 rounded shadow-lg
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
  let params = useParams();
  const posts: post[] = useSelector((state: any) => {
    return state.read.data;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readPost());
  }, [dispatch]);
  if (!posts) {
    return <h1>loading...</h1>;
  }
  return (
    <Section>
      <ProductViewer posts={posts} params={params} />
      <Article>
        <div className="p-2">
          <span className="text-bold text-lg">댓글</span>
          <span className="text-sm text-gray-400">
            {' '}
            총 <span className="text-accent">{1}</span>개
          </span>
        </div>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="댓글을 작성해주세요..."
              className="input input-bordered w-full"
            />
            <button className="w-20 btn btn-square btn-primary text-white">
              작성하기
            </button>
          </div>
        </div>
      </Article>
    </Section>
  );
};
