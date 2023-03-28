import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

export const Menu = () => {
  return (
    <nav className="hidden sm:block">
      <List>
        <li>
          <Link to="/">전체</Link>
        </li>
        <Category>
          <span>프로그래밍 언어</span>
        </Category>
        <li>
          <Link to="?category=타입스크립트">타입스크립트</Link>
        </li>
        <li>
          <Link to="?category=자바스크립트">자바스크립트</Link>
        </li>
        <Category>
          <span>프레임워크</span>
        </Category>
        <li>
          <Link to="?category=리액트">리액트</Link>
        </li>
        <li>
          <Link to="?category=뷰">뷰</Link>
        </li>
        <li>
          <Link to="?category=앵귤러">앵귤러</Link>
        </li>
      </List>
    </nav>
  );
};

const List = tw.ul`
menu bg-base-100 w-56 p-2 rounded-box shadow-lg
`;

const Category = tw.li`
menu-title
`;
