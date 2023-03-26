import { post } from '../../src/redux/postSlice';

const testArray: post[] = [
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

export default testArray;
