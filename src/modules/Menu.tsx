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
        <Category>
          <span>Programming Language</span>
        </Category>
        <li>
          <a>TypeScript</a>
        </li>
        <li>
          <a>JavaScript</a>
        </li>
        <Category>
          <span>FrameWork</span>
        </Category>
        <li>
          <a>React</a>
        </li>
        <li>
          <a>Vue</a>
        </li>
        <li>
          <a>Anguler</a>
        </li>
      </List>
    </nav>
  );
};
