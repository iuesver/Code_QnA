import { post } from '../redux/postSlice';

const sortByLike = (arr: post[]): post[] => {
  const result = arr.sort((a: post, b: post) => {
    return b.like - a.like;
  });

  return result;
};

export default sortByLike;
