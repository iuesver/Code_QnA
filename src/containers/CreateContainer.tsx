import { useNavigate } from 'react-router-dom';
import { TextEditor } from '../editors/TextEditor';
import tw from 'tailwind-styled-components';

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

const TitleInput = tw.input`
input input-bordered
`;

export const CreateContainer = () => {
  const navigate = useNavigate();
  return (
    <>
      <TextEditor />
      <BtnDiv>
        <AddBtn htmlFor="add-modal">작성하기</AddBtn>
        <input type="checkbox" id="add-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <div className="form-control w-full">
              <label htmlFor="title" className="label">
                <span>글 제목을 정해주세요</span>
              </label>
              <TitleInput type="text" name="title" id="title" required />
            </div>
            <div className="modal-action">
              <AddModal type="submit" value="등록하기" />
              <DeleteModal htmlFor="add-modal">취소하기</DeleteModal>
            </div>
          </div>
        </div>
        <DeleteBtn onClick={() => navigate(-1)}>취소하기</DeleteBtn>
      </BtnDiv>
    </>
  );
};
