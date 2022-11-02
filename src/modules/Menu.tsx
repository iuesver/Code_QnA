import tw from 'tailwind-styled-components';

const List = tw.ul`
menu bg-base-100 w-56 p-2 rounded-box shadow-lg
`;

const Category = tw.li`
menu-title
`;

export const Menu = () => {
  return (
    <nav>
      <List>
        <li>
          <a>전체</a>
        </li>
        <Category>
          <span>프로그래밍 언어</span>
        </Category>
        <li>
          <a>타입스크립트</a>
        </li>
        <li>
          <a>자바스크립트</a>
        </li>
        <Category>
          <span>프레임워크</span>
        </Category>
        <li>
          <a>리액트</a>
        </li>
        <li>
          <a>뷰</a>
        </li>
        <li>
          <a>앵귤러</a>
        </li>
      </List>
    </nav>
  );
};
