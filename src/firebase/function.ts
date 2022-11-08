import { createAsyncThunk } from '@reduxjs/toolkit';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { post } from '../redux/readPostSlice';
import { firestore } from './app';

export const createPost = createAsyncThunk(
  'post/CREATE_POST',
  async ({
    title,
    content,
    author,
    id,
    date = new Date().toLocaleDateString(),
    like = 0,
  }: post) => {
    const db = await doc(firestore, 'data', 'posts');
    try {
      await updateDoc(db, {
        post: arrayUnion({
          title: title,
          content: content,
          author: author,
          id: id,
          date: date,
          like: like,
        }),
      });
      const response = await getDoc(db);
      if (response.exists()) {
        let posts = response.data().post;
        return posts;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const readPost = createAsyncThunk('post', async () => {
  const db = await doc(firestore, 'data', 'posts');
  try {
    const response = await getDoc(db);
    if (response.exists()) {
      let posts = response.data().post;
      return posts;
    }
  } catch (error) {
    console.error(error);
  }
});
