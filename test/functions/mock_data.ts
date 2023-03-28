import { comment } from '../../src/redux/commentSlice';
import { post } from '../../src/redux/postSlice';

export const testArray: post[] = [
  {
    title: 'test1',
    category: 'ts',
    content: 'test...',
    desc: 'test code...',
    author: 'unknown',
    id: 1,
    date: '2023-03-22',
    like: 1,
  },
  {
    title: 'test2',
    category: 'ts',
    content: 'test...',
    desc: 'test code...',
    author: 'unknown',
    id: 2,
    date: '2023-03-23',
    like: 2,
  },
  {
    title: 'test3',
    category: 'ts',
    content: 'test...',
    desc: 'test code...',
    author: 'unknown',
    id: 3,
    date: '2023-03-24',
    like: 3,
  },
  {
    title: 'test4',
    category: 'ts',
    content: 'test...',
    desc: 'test code...',
    author: 'unknown',
    id: 4,
    date: '2023-03-25',
    like: 4,
  },
];

export const testCommentsArray: comment[] = [
  { comment: 'testComment 1', commenter: 'A', id: 1, group: 1 },
  { comment: 'testComment 2', commenter: 'A', id: 2, group: 1 },
  { comment: 'testComment 3', commenter: 'A', id: 3, group: 1 },
  { comment: 'testComment 4', commenter: 'A', id: 4, group: 1 },
  { comment: 'testComment 5', commenter: 'B', id: 5, group: 2 },
  { comment: 'testComment 6', commenter: 'B', id: 6, group: 2 },
  { comment: 'testComment 7', commenter: 'B', id: 7, group: 2 },
  { comment: 'testComment 8', commenter: 'C', id: 8, group: 3 },
  { comment: 'testComment 9', commenter: 'C', id: 9, group: 3 },
  { comment: 'testComment 10', commenter: 'D', id: 10, group: 4 },
];
