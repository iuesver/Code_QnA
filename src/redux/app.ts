import { configureStore } from '@reduxjs/toolkit';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { firestore } from '../firebase/app';
import { postSlice } from './postSlice';
import { commentSlice } from './commentSlice';
import { plusLikeSlice } from './plusLikeSlice';
import { userSlice } from './userSlice';
import { Omit } from '@reduxjs/toolkit/dist/tsHelpers';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    post: postSlice.reducer,
    comment: commentSlice.reducer,
    plusLike: plusLikeSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: [thunk.withExtraArgument(firestore)],
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
