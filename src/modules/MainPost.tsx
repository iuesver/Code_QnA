import { Link } from 'react-router-dom';
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

export const MainPost = () => {
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
      <div></div>
    </Article>
  );
};
