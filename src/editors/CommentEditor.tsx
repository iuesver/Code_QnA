import { getAuth } from 'firebase/auth';
import React, { ChangeEvent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createComment } from '../firebase/function';
import { RootState, useAppSelector } from '../redux/app';
import { comment } from '../redux/commentSlice';

export const CommentEditor = React.memo(() => {
  const dispatch = useDispatch();
  const [commentInfo, setCommentInfo] = useState('');
  const params = useParams();
  const commentRef = useRef<any>();
  const auth = getAuth().currentUser;
  const user = auth !== null ? auth.email : '';

  const comments: comment[] = useAppSelector((state: RootState) => {
    return state.comment.data;
  });

  const changeComment = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentInfo(event.target.value);
  };
  return (
    <div className="form-control">
      <div className="input-group">
        <input
          type="text"
          placeholder="댓글을 작성해주세요..."
          className="input input-bordered w-full"
          ref={commentRef}
          onChange={changeComment}
          onKeyUp={(event) => {
            if (event.key === 'Enter') {
              dispatch(
                createComment({
                  comment: commentInfo,
                  commenter: user || 'unknown',
                  group: Number(params.id),
                  id: comments.length + 1,
                })
              );
              commentRef.current.value = '';
            }
          }}
        />
        <button
          onClick={() => {
            dispatch(
              createComment({
                comment: commentInfo,
                commenter: user || 'unknown',
                group: Number(params.id),
                id: comments.length + 1,
              })
            );
            commentRef.current.value = '';
          }}
          className="w-20 btn btn-square btn-primary text-white"
        >
          작성하기
        </button>
      </div>
    </div>
  );
});
