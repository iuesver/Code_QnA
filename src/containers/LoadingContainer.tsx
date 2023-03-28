import tw from 'tailwind-styled-components';
import { Bars } from 'react-loader-spinner';

export const LoadingContainer = () => {
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

const Section = tw.section`
flex justify-center items-center min-h-screen
`;
