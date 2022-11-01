import tw from 'tailwind-styled-components';

const List = tw.ul`
menu bg-base-100 w-56 p-2 rounded-box shadow-lg
`;

const Category = tw.li`
menu-title
`;

export const SideBar = () => {
  return (
    <aside>
      <List>
        <Category>
          <span>인기 글</span>
        </Category>
      </List>
      <List>
        <Category>
          <span>최신 글</span>
        </Category>
      </List>
    </aside>
  );
};
