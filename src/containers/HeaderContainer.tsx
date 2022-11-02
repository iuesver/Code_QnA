import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const Nav = tw.nav`
navbar bg-primary text-white
`;

const Title = tw.div`
flex-1 px-2
`;

const TextInput = tw.input`
text-black input input-bordered input-sm input-primary w-full
`;

export const HeaderContainer = () => {
  return (
    <Nav>
      <Title>
        <Link to={'/'}>
          <h1 className="font-bold text-xl">Code Q&A</h1>
        </Link>
      </Title>
      <div className="flex-none">
        <label htmlFor="login-modal" className="btn btn-primary text-lg">
          login
        </label>
        <input type="checkbox" id="login-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <label htmlFor="user-email" className="label">
              <span className="label-text">E-Mail</span>
            </label>
            <TextInput type="mail" name="user-email" id="user-email" />
            <label htmlFor="user-password" className="label">
              <span className="label-text">Password</span>
            </label>
            <TextInput
              type="password"
              name="user-password"
              id="user-password"
            />
            <div className="modal-action">
              <a href="/" className="link link-primary flex-1 mt-6">
                아직 회원이 아니신가요?
              </a>
              <input
                type="submit"
                value="로그인"
                className="btn btn-primary px-5"
              />
              <label htmlFor="login-modal" className="btn btn-primary px-6">
                취소
              </label>
            </div>
          </div>
        </div>
      </div>
    </Nav>
  );
};
