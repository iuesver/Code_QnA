import tw from 'tailwind-styled-components';

const List = tw.ul`
menu bg-base-100 w-56 p-2 rounded-box shadow-lg
`;

const Category = tw.li`
menu-title
`;

export const Menu = () => {
  return (
    <nav className="hidden sm:block">
      <List>
        <li>
          <a href="/">전체</a>
        </li>
        <Category>
          <span>프로그래밍 언어</span>
        </Category>
        <li>
          <a href="?category=타입스크립트">타입스크립트</a>
        </li>
        <li>
          <a href="?category=자바스크립트">자바스크립트</a>
        </li>
        <Category>
          <span>프레임워크</span>
        </Category>
        <li>
          <a href="?category=리액트">리액트</a>
        </li>
        <li>
          <a href="?category=뷰">뷰</a>
        </li>
        <li>
          <a href="?category=앵귤러">앵귤러</a>
        </li>
      </List>
    </nav>
  );
};
