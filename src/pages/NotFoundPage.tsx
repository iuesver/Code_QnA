import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

export const NotFoundPage = () => {
  return (
    <HeroDiv>
      <HeroContent>
        <div className="max-w-md">
          <h1 className="text-5xl font-bold py-4">404 ERROR!</h1>
          <p className="text-2xl font bold py-2">페이지를 찾을 수 없습니다.</p>
          <p className="pb-2">
            페이지가 사라졌거나, 잘못된 경로를 입력하셨습니다.
            <br />
            올바른 URL을 입력하였는지 확인해주세요.
          </p>
          <Link to="/">
            <button className="btn btn-primary text-white">
              홈으로 돌아가기
            </button>
          </Link>
        </div>
      </HeroContent>
    </HeroDiv>
  );
};

const HeroDiv = tw.div`
hero min-h-screen
`;

const HeroContent = tw.div`
hero-content text-center
`;
