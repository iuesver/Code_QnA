import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from './app';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export const register = createAsyncThunk(
  'user',
  async ({ email, password }: { email: string; password: string }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'user',
  async ({ email, password }: { email: string; password: string }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert('아이디 또는 비밀번호를 확인해주세요');
      console.error(error);
    }
  }
);

export const logOut = createAsyncThunk('user', async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
});
