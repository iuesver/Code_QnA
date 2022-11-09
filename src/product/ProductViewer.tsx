import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { post } from '../redux/readPostSlice';
import tw from 'tailwind-styled-components';
import { Params } from 'react-router-dom';

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

export const ProductViewer = ({
  posts,
  params,
}: {
  posts: post[];
  params: Readonly<Params<string>>;
}) => {
  const post: post | undefined = posts.find(
    (item: post) => item.id === Number(params.id)
  );
  return (
    <Article>
      {post && (
        <>
          <Info>
            <Title>{post.title}</Title>
            <div className="flex py-2">
              <SubContent className="flex-1">작성일 : {post.date}</SubContent>
              <SubContent>작성자 : {post.author}</SubContent>
            </div>
          </Info>
          <Viewer initialValue={post.content} />
        </>
      )}
    </Article>
  );
};
