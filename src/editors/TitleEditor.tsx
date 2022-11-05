import tw from 'tailwind-styled-components/dist/tailwind';

const TitleInput = tw.input`
input w-full
`;

export const TitleEditor = () => {
  return (
    <div>
      <label htmlFor="title">제목</label>
      <TitleInput type="text" id="title" />
    </div>
  );
};
