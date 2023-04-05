import tw from 'tailwind-styled-components';
import { Bars } from 'react-loader-spinner';

const Loading = () => {
  return (
    <Section>
      <Bars
        width="80"
        height="80"
        color="#015096"
        ariaLabel="loading"
        visible
      />
    </Section>
  );
};

export default Loading;

const Section = tw.section`
min-h-screen flex justify-center items-center
`;
