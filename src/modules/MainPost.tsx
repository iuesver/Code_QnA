import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/solid';
import tw from 'tailwind-styled-components';

const Article = tw.article`
flex flex-col w-1/2 shadow-lg
`;

const SearchBar = tw.input`
input input-bordered input-lg w-full
`;

const BtnDiv = tw.div`
flex justify-between
`;

const AddBtn = tw.button`
btn btn-primary btn-sm rounded-full text-white
`;

const LikeDiv = tw.div`
flex flex-col justify-center items-center w-16
`;

export const MainPost = ({ posts }: any) => {
  return (
    <Article>
      <div>
        <SearchBar type="search" placeholder="무엇이든 물어보세요!" />
        <BtnDiv>
          <ul className="tabs p-2">
            <li className="tab tab-active">인기 순</li>
            <li className="tab">최신 순</li>
            <li className="tab">댓글 순</li>
          </ul>
          <div className="p-2">
            <Link to={`/create`}>
              <AddBtn>작성하기</AddBtn>
            </Link>
          </div>
        </BtnDiv>
      </div>
      <div>
        {posts.map((post: any) => (
          <div className="p-4" key={post.id}>
            <div className="flex p-2 border-b-2">
              <LikeDiv>
                <HeartIcon className="inline-block w-8 h-8 text-error" />
                <span>{post.like}</span>
              </LikeDiv>
              <div>
                <Link to={`/${post.id}`}>
                  <h1 className="text-2xl text-bold">{post.title}</h1>
                </Link>
                <p className="mt-2 text-gray-500">{post.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Article>
  );
};
