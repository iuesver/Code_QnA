import { post } from '../../src/redux/postSlice';
import { testArray } from './mock_data';

const LIMIT = 2;

const pagination = (arr: post[], current: number) => {
  const currentArr = arr.slice(LIMIT * (current - 1), LIMIT * current);
  return currentArr;
};

const totalPageNum = (arr: post[]) => {
  const num = Math.ceil(arr.length / LIMIT);
  return num;
};

test('The function pagination should return array sliced by limit', () => {
  expect(pagination(testArray, 1)).toEqual(testArray.slice(0, 2));
  expect(pagination(testArray, 2)).toEqual(testArray.slice(2, 4));
});

test('The function totalPageNum should return integer number length of arg array', () => {
  expect(totalPageNum(testArray)).toBe(2);
});
