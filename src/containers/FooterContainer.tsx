import tw from 'tailwind-styled-components';

const Footer = tw.footer`
footer footer-center p-10 bg-primary text-white
`;

export const FooterContainer = () => {
  return (
    <Footer>
      <div>
        <p className="font-bold">iuesver's private project</p>
        <p className="font-bold">Web Service for Q&A</p>
        <p>2022 . 11</p>
      </div>
    </Footer>
  );
};
