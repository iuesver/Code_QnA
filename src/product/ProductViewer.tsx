import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { post } from '../redux/postSlice';
import tw from 'tailwind-styled-components';
import { Params, useNavigate } from 'react-router-dom';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { deletePost } from '../firebase/function';

const Article = tw.article`
p-2
`;
const Info = tw.div`
flex flex-col
`;

const Title = tw.h1`
text-3xl font-bold flex-1
`;
const SubContent = tw.span`
text-gray-400
`;

export const ProductViewer = ({
  posts,
  params,
  user,
}: {
  posts: post[];
  params: Readonly<Params<string>>;
  user: string;
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post: post | undefined = posts.find(
    (item: post) => item.id === Number(params.id)
  );
  return (
    <Article>
      {post && (
        <>
          <Info>
            <div className="flex">
              <Title>{post.title}</Title>
              {user === post.author && (
                <div className="dropdown dropdown-bottom dropdown-end p-2">
                  <label tabIndex={0}>
                    <EllipsisVerticalIcon className="w-6 h-6" />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-gray-100 rounded-box w-32"
                  >
                    <li
                      onClick={() => {
                        dispatch(deletePost(Number(params.id)));
                        alert('게시물이 삭제되었습니다');
                        window.location.reload();
                        navigate('/');
                      }}
                    >
                      <a>게시글 삭제</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
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
