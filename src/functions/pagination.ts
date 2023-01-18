import { post } from '../redux/postSlice';

const limit = 6;

export const pagination = (arr: post[], current: number) => {
  const currentArr = arr.slice(limit * (current - 1), limit * current);
  return currentArr;
};

export const totalPageNum = (arr: post[]) => {
  const num = Math.ceil(arr.length / limit);
  return num;
};
