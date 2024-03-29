import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { comment } from '../redux/commentSlice';
import { post } from '../redux/postSlice';
import { firestore } from './app';

export const createPost = createAsyncThunk(
  'createPost',
  async ({
    title,
    content,
    category,
    author,
    id,
    desc,
    date = new Date().toLocaleDateString(),
    like = 0,
  }: post) => {
    const db = await doc(firestore, 'data', 'posts');
    try {
      await updateDoc(db, {
        post: arrayUnion({
          title: title,
          content: content,
          category: category,
          author: author,
          id: id,
          desc: desc,
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

export const readPost = createAsyncThunk('readPost', async () => {
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

export const updatePost = createAsyncThunk(
  'updatePost',
  async ({ item }: { item: post }) => {
    const db = doc(firestore, 'data', 'posts');
    try {
      const response = await getDoc(db);
      if (response.exists()) {
        let products = response.data().post;
        let product = products.find((product: post) => product.id == item.id);
        await updateDoc(db, {
          post: arrayRemove(product),
        });
      }
      await updateDoc(db, {
        post: arrayUnion(item),
      });
      const result = await getDoc(db);
      if (result.exists()) {
        let posts = result.data().post;
        return posts;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const deletePost = createAsyncThunk('deletePost', async (id: number) => {
  const db = doc(firestore, 'data', 'posts');
  try {
    const response = await getDoc(db);
    if (response.exists()) {
      let products = response.data().post;
      let product = products.find((item: post) => item.id == id);
      await updateDoc(db, {
        post: arrayRemove(product),
      });
    }
    if (response.exists()) {
      let posts = response.data().post;
      return posts;
    }
  } catch (error) {
    console.error(error);
  }
});
export const readComment = createAsyncThunk('readComment', async () => {
  const db = doc(firestore, 'data', 'comments');
  try {
    const response = await getDoc(db);
    if (response.exists()) {
      let comments = response.data().comment;
      return comments;
    }
  } catch (error) {
    console.error(error);
  }
});
export const createComment = createAsyncThunk(
  'createComment',
  async ({
    comment,
    commenter,
    group,
    id,
  }: {
    comment: string;
    commenter: string | null;
    group: number;
    id: number;
  }) => {
    const db = doc(firestore, 'data', 'comments');
    try {
      await updateDoc(db, {
        comment: arrayUnion({
          comment: comment,
          commenter: commenter,
          group: group,
          id: id,
        }),
      });
      const response = await getDoc(db);
      if (response.exists()) {
        let comments = response.data().comment;
        return comments;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateComment = createAsyncThunk(
  'updateComment',
  async ({ data, desc }: { data: comment; desc: string }) => {
    const db = doc(firestore, 'data', 'comments');
    try {
      const response = await getDoc(db);
      if (response.exists()) {
        let posts = response.data().comment;
        let post = posts.find((item: comment) => item.id === data.id);
        await updateDoc(db, {
          comment: arrayRemove(post),
        });
      }
      await updateDoc(db, {
        comment: arrayUnion({
          comment: desc,
          commenter: data.commenter,

          group: data.group,
          id: data.id,
        }),
      });
      const result = await getDoc(db);
      if (result.exists()) {
        let comments = result.data().comment;
        return comments;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteComment = createAsyncThunk(
  'deleteComment',
  async ({ data }: { data: comment }) => {
    const db = doc(firestore, 'data', 'comments');
    try {
      await updateDoc(db, {
        comment: arrayRemove(data),
      });
      const response = await getDoc(db);
      if (response.exists()) {
        let comments = response.data().comment;
        return comments;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const plusLike = createAsyncThunk(
  'plusLike',
  async ({ post }: { post: post }) => {
    const db = doc(firestore, 'data', 'posts');
    try {
      const response = await getDoc(db);
      if (response.exists()) {
        const posts = response.data().post;
        const updatedPosts = posts.map((data: post) => {
          if (data.id === post.id) {
            return { ...data, like: data.like + 1 };
          }
          return data;
        });
        await updateDoc(db, {
          post: updatedPosts,
        });
        return updatedPosts;
      }
    } catch (error) {
      console.error(error);
    }
  }
);
