import { comment } from '../redux/commentSlice';
import { post } from '../redux/postSlice';

export const sortByComments = (posts: post[], comments: comment[]): post[] => {
  const postsObj = posts.reduce((acc: { [key: string]: number }, cur: post) => {
    acc[cur.id] = 0;
    return acc;
  }, {});

  const postsObjWithComments = comments.reduce(
    (acc: { [key: string]: number }, cur: comment) => {
      if (postsObj.hasOwnProperty(cur.group)) {
        acc[cur.group]++;
      }
      return acc;
    },
    postsObj
  );

  const arr = Object.keys(postsObjWithComments).map((key: string) => [
    Number(key),
    postsObjWithComments[key],
  ]);
  arr.sort((a: number[], b: number[]) => {
    return b[1] - a[1];
  });

  const result: any[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(posts.find((item: post) => item.id === arr[i][0]));
  }

  return result;
};
