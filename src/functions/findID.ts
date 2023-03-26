import { comment } from '../redux/commentSlice';
import { post } from '../redux/postSlice';

export const findID = (arr: post[] | comment[]): number => {
  const arrID: number[] = arr.map((item: post | comment) => item.id);
  for (let i = 1; i <= arrID[arrID.length - 1]; i++) {
    if (!arrID.includes(i)) {
      return i;
    }
  }
  return arr.length + 1;
};
