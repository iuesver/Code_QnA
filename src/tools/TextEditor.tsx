import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { Editor } from '@toast-ui/react-editor';
import { useEffect } from 'react';

export const TextEditor = () => {
  useEffect(() => {
    import('@toast-ui/editor/dist/toastui-editor.css');
  }, []);
  return (
    <Editor
      initialValue="내용을 작성해주세요!"
      previewStyle="vertical"
      height="450px"
      initialEditType="markdown"
      language="ko-KR"
      plugins={[colorSyntax]}
      useCommandShortcut={true}
    />
  );
};
