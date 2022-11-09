import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register, logIn, logOut } from '../firebase/auth';
import tw from 'tailwind-styled-components';
import { auth } from '../firebase/app';

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
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [signUpInfo, setSignUpInfo] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
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
                    onClick={() => dispatch(logIn(signUpInfo))}
                  />
                  <label
                    htmlFor="login-modal"
                    className="btn btn-primary rounded-full w-20 px-5"
                  >
                    취소
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Nav>
  );
};
