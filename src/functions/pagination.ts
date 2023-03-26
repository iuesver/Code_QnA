import { post } from '../redux/postSlice';

const LIMIT = 6;

export const pagination = (arr: post[], current: number) => {
  const currentArr = arr.slice(LIMIT * (current - 1), LIMIT * current);
  return currentArr;
};

export const totalPageNum = (arr: post[]) => {
  const num = Math.ceil(arr.length / LIMIT);
  return num;
};
