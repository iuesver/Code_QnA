import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth, googleAuthProvider, githubAuthProvider } from './app';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

export const register = createAsyncThunk(
  'register',
  async ({ email, password }: { email: string; password: string }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'logIn',
  async ({ email, password }: { email: string; password: string }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert('아이디 또는 비밀번호를 확인해주세요');
      console.error(error);
    }
  }
);

export const logInWithProvider = createAsyncThunk(
  'loginWithProvider',
  async (key: string) => {
    try {
      switch (key) {
        case 'google':
          await signInWithPopup(auth, googleAuthProvider).then((res) => {
            const credential = GoogleAuthProvider.credentialFromResult(res);
            const token = credential?.accessToken;
            const user = res.user;
          });
        case 'github':
          await signInWithPopup(auth, githubAuthProvider).then((res) => {
            const credential = GithubAuthProvider.credentialFromResult(res);
            const token = credential?.accessToken;
            const user = res.user;
          });
        default:
          break;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const logOut = createAsyncThunk('logOut', async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
});
