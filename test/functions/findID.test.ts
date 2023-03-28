import { findID } from '../../src/functions/findID';
import { post } from '../../src/redux/postSlice';
import { comment } from '../../src/redux/commentSlice';

describe('The function should return id number', () => {
  const postTestArrayEmptyMiddle: post[] = [
    {
      title: 'test1',
      category: 'ts',
      content: 'test...',
      desc: 'test code...',
      author: 'unknown',
      id: 1,
      date: '2023-03-26',
      like: 1,
    },
    {
      title: 'test3',
      category: 'ts',
      content: 'test...',
      desc: 'test code...',
      author: 'unknown',
      id: 3,
      date: '2023-03-26',
      like: 1,
    },
  ];
  const postTestArray: post[] = [
    {
      title: 'test1',
      category: 'ts',
      content: 'test...',
      desc: 'test code...',
      author: 'unknown',
      id: 1,
      date: '2023-03-26',
      like: 1,
    },
    {
      title: 'test2',
      category: 'ts',
      content: 'test...',
      desc: 'test code...',
      author: 'unknown',
      id: 2,
      date: '2023-03-26',
      like: 1,
    },
  ];
  const commentTestArrayEmptyMiddle: comment[] = [
    { comment: 'test1', commenter: 'unknown', id: 1, group: 1 },
    { comment: 'test3', commenter: 'unknown', id: 3, group: 1 },
  ];
  const commentTestArray: comment[] = [
    { comment: 'test1', commenter: 'unknown', id: 1, group: 1 },
    { comment: 'test2', commenter: 'unknown', id: 2, group: 1 },
  ];
  it('when arg array is postTestArrayEmptyMiddle', () => {
    expect(findID(postTestArrayEmptyMiddle)).toBe(2);
  });
  it('when arr array is postTestArray', () => {
    expect(findID(postTestArray)).toBe(3);
  });
  it('when arr array is commentTestArrayEmptyMiddle', () => {
    expect(findID(commentTestArrayEmptyMiddle)).toBe(2);
  });
  it('when arg array is commentTestArray', () => {
    expect(findID(commentTestArray)).toBe(3);
  });
});
