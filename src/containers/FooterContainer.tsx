import tw from 'tailwind-styled-components';

const Footer = tw.footer`
footer footer-center p-10 bg-primary text-white
`;

export const FooterContainer = () => {
  return (
    <Footer>
      <div>
        <h1 className="font-bold">Code Q&A</h1>
        <p className="font-bold">Web Service for Q&A</p>
        <p>2022 . 11</p>
      </div>
    </Footer>
  );
};
