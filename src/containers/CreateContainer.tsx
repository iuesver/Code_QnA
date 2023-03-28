import { useNavigate } from 'react-router-dom';
import { TextEditor } from '../editors/TextEditor';
import tw from 'tailwind-styled-components';
import { useCallback, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch, RootState } from '../redux/app';
import { createPost, readPost } from '../firebase/function';
import { post } from '../redux/postSlice';
import { auth } from '../firebase/app';
import { findID } from '../functions/findID';
import { LoadingContainer } from './LoadingContainer';

export const CreateContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const posts: post[] = useAppSelector((state: RootState) => {
    return state.post.data;
  });
  const [info, setInfo] = useState<post>({
    title: '',
    category: '',
    content: '',
    desc: '',
    author: '',
    id: findID(posts),
    date: new Date().toLocaleDateString(),
    like: 0,
  });
  const { title, category, content, desc, author, id } = info;
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value }: { name: string; value: string } = event.target;
      setInfo({
        ...info,
        [name]: value,
      });
    },
    [info]
  );
  useEffect(() => {
    dispatch(readPost());
  }, [dispatch]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user && user.email !== null) {
        setInfo({
          ...info,
          ['author']: user.email,
        });
      } else {
        navigate('/');
      }
    });
  }, [auth]);
  if (!posts) {
    return <LoadingContainer />;
  }
  return (
    <Section>
      <TextEditor info={info} setFunc={setInfo} />
      <BtnDiv>
        <AddBtn
          htmlFor="add-modal"
          onClick={() => {
            setInfo({
              ...info,
              ['id']: findID(posts),
            });
          }}
        >
          작성하기
        </AddBtn>
        <input type="checkbox" id="add-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <div className="form-control w-full">
              <label htmlFor="title" className="label">
                <span>글 제목을 정해주세요</span>
              </label>
              <TextInput
                type="text"
                name="title"
                id="title"
                onChange={onChange}
                value={title}
                required
              />
              <label htmlFor="desc" className="label">
                <span>추가설명을 적어주세요</span>
              </label>
              <TextInput
                type="text"
                name="desc"
                id="desc"
                onChange={onChange}
                value={desc}
                required
              />
              <select
                className="select select-bordered mt-4"
                name="category"
                id="category"
                onChange={onChange}
                value={category}
              >
                <option value="전체">카테고리를 정해주세요</option>
                <option value="자바스크립트">자바스크립트</option>
                <option value="타입스크립트">타입스크립트</option>
                <option value="리액트">리액트</option>
                <option value="뷰">뷰</option>
                <option value="앵귤러">앵귤러</option>
              </select>
            </div>
            <div className="modal-action">
              <AddModal
                type="submit"
                value="등록하기"
                onClick={() => {
                  dispatch(createPost(info));
                  navigate('/');
                }}
              />
              <DeleteModal htmlFor="add-modal">취소하기</DeleteModal>
            </div>
          </div>
        </div>
        <DeleteBtn onClick={() => navigate(-1)}>취소하기</DeleteBtn>
      </BtnDiv>
    </Section>
  );
};

const Section = tw.section`
min-h-screen
`;

const BtnDiv = tw.div`
flex justify-end p-2
`;

const AddBtn = tw.label`
btn btn-accent rounded-full m-2 text-white
`;

const DeleteBtn = tw.button`
btn btn-error rounded-full m-2 text-white
`;

const AddModal = tw.input`
btn btn-sm btn-accent rounded-full m-0.5 text-white
`;

const DeleteModal = tw.label`
btn btn-sm btn-error rounded-full m-0.5 text-white
`;

const TextInput = tw.input`
input input-bordered
`;
