import { post } from '../../src/redux/postSlice';

const LIMIT = 2;

const pagination = (arr: post[], current: number) => {
  const currentArr = arr.slice(LIMIT * (current - 1), LIMIT * current);
  return currentArr;
};

const totalPageNum = (arr: post[]) => {
  const num = Math.ceil(arr.length / LIMIT);
  return num;
};

const testArray: post[] = [
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
  {
    title: 'test4',
    category: 'ts',
    content: 'test...',
    desc: 'test code...',
    author: 'unknown',
    id: 4,
    date: '2023-03-26',
    like: 1,
  },
];

test('The function pagination should return array sliced by limit', () => {
  expect(pagination(testArray, 1)).toEqual([
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
  ]);
  expect(pagination(testArray, 2)).toEqual([
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
    {
      title: 'test4',
      category: 'ts',
      content: 'test...',
      desc: 'test code...',
      author: 'unknown',
      id: 4,
      date: '2023-03-26',
      like: 1,
    },
  ]);
});

test('The function totalPageNum should return integer number length of arg array', () => {
  expect(totalPageNum(testArray)).toBe(2);
});
