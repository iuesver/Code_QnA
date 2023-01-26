import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../redux/app';
import { Link } from 'react-router-dom';
import { register, logIn, logOut, logInWithProvider } from '../firebase/auth';
import tw from 'tailwind-styled-components';
import { auth } from '../firebase/app';
import GoogleLogo from '../assets/btn_google_light_normal_ios.svg';
import GithubLogo from '../assets/github-mark-white.svg';

const Nav = tw.nav`
navbar bg-primary text-white
`;

const Title = tw.div`
flex-1 px-2
`;

const TextInput = tw.input`
text-black input input-bordered input-sm input-primary w-full
`;

const ProviderBox = tw.div`
flex flex-col items-center py-2
`;

const ProviderDiv = tw.div`
flex items-center bg-black w-56 h-12 my-1 cursor-pointer
`;

const ProviderDesc = tw.p`
text-white font-bold flex justify-center pl-2
`;

export const HeaderContainer = () => {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [signUpInfo, setSignUpInfo] = useState({ email: '', password: '' });
  const submitRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { email, password } = signUpInfo;
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUpInfo({
      ...signUpInfo,
      [name]: value,
    });
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setSignIn(true);
        console.dir(user);
      } else {
        setSignIn(false);
      }
    });
  }, []);
  return (
    <Nav>
      <Title>
        <Link to={'/'}>
          <h1 className="font-bold text-xl">Code Q&A</h1>
        </Link>
      </Title>
      <div className="flex-none">
        {!signIn ? (
          <>
            <label
              htmlFor="login-modal"
              className="btn btn-primary text-md text-white rounded-full"
            >
              login
            </label>
            <input type="checkbox" id="login-modal" className="modal-toggle" />
          </>
        ) : (
          <>
            <button
              onClick={() => {
                dispatch(logOut());
                setSignIn(false);
                window.location.reload();
              }}
              className="btn btn-primary text-md text-white rounded-full"
            >
              logout
            </button>
          </>
        )}
        {signUp ? (
          <div className="modal">
            <div className="modal-box">
              <label htmlFor="user-email" className="label">
                <span className="label-text">이메일</span>
              </label>
              <TextInput
                type="mail"
                name="email"
                id="user-email"
                onChange={onChange}
                value={email}
                required
              />
              <label htmlFor="user-password" className="label">
                <span className="label-text">비밀번호</span>
              </label>
              <TextInput
                type="password"
                name="password"
                id="user-password"
                onChange={onChange}
                value={password}
                required
              />
              <div className="modal-action">
                <input
                  type="submit"
                  value="가입하기"
                  className="btn btn-primary rounded-full w-20 px-5"
                  onClick={() => {
                    dispatch(register(signUpInfo));
                  }}
                />
                <label
                  htmlFor="login-modal"
                  className="btn btn-primary rounded-full w-20 px-5"
                  onClick={() => setSignUp(!signUp)}
                >
                  취소
                </label>
              </div>
            </div>
          </div>
        ) : (
          <div className="modal">
            <div className="modal-box">
              <label htmlFor="user-email" className="label">
                <span className="label-text">이메일</span>
              </label>
              <TextInput
                type="mail"
                name="email"
                id="user-email"
                onChange={onChange}
                value={email}
                required
              />
              <label htmlFor="user-password" className="label">
                <span className="label-text">비밀번호</span>
              </label>
              <TextInput
                type="password"
                name="password"
                id="user-password"
                onChange={onChange}
                onKeyUp={(event) => {
                  if (event.keyCode === 13) {
                    dispatch(logIn(signUpInfo));
                  }
                }}
                value={password}
                required
              />
              <div className="modal-action flex justify-between">
                <a
                  onClick={(event) => {
                    event.preventDefault();
                    setSignUp(!signUp);
                  }}
                  href="/"
                  className="link link-primary mt-6"
                >
                  아직 회원이 아니신가요?
                </a>
                <div>
                  <input
                    type="submit"
                    value="로그인"
                    className="btn btn-primary rounded-full w-20 px-5 mr-2"
                    ref={submitRef}
                    onClick={() => {
                      dispatch(logIn(signUpInfo));
                    }}
                  />
                  <label
                    htmlFor="login-modal"
                    className="btn btn-primary rounded-full w-20 px-5"
                  >
                    취소
                  </label>
                </div>
              </div>
              <ProviderBox>
                <ProviderDiv
                  className="bg-blue-500"
                  id="google"
                  onClick={(event) =>
                    dispatch(logInWithProvider(event.target.id))
                  }
                >
                  <img
                    src={GoogleLogo}
                    id="google"
                    alt=""
                    className="h-14 py-1"
                  />
                  <ProviderDesc id="google">Sign in with Google</ProviderDesc>
                </ProviderDiv>
                <ProviderDiv
                  id="github"
                  onClick={(event) =>
                    dispatch(logInWithProvider(event.target.id))
                  }
                >
                  <img
                    src={GithubLogo}
                    id="github"
                    alt=""
                    className="w-12 h-10 p-2"
                  />
                  <ProviderDesc id="github">Sign in with Github</ProviderDesc>
                </ProviderDiv>
              </ProviderBox>
            </div>
          </div>
        )}
      </div>
    </Nav>
  );
};
