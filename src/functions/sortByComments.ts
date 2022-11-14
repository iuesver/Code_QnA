import { comment } from '../redux/commentSlice';
import { post } from '../redux/postSlice';

export const sortByComments = (posts: post[], comments: comment[]): post[] => {
  const obj = comments.reduce(
    (acc: { [key: string]: number }, cur: comment) => {
      acc[cur.group] = (acc[cur.group] || 0) + 1;
      return acc;
    },
    {}
  );
  const arr = Object.keys(obj).map((key: string) => [Number(key), obj[key]]);
  arr.sort((a: number[], b: number[]) => {
    return b[1] - a[1];
  });
  const result: post[] = [];
  for (let i = 0; i < posts.length; i++) {
    result.push(posts.find((item: post) => item.id === arr[i][0])!);
  }
  return result;
};
