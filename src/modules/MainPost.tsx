import tw from 'tailwind-styled-components';

const Article = tw.article`
flex flex-col w-1/2 shadow-lg
`;

const SearchBar = tw.input`
input input-bordered input-lg w-96
`;

export const MainPost = () => {
  return (
    <Article>
      <div>
        <SearchBar type="search" placeholder="무엇이든 물어보세요!" />
      </div>
      <div></div>
    </Article>
  );
};
