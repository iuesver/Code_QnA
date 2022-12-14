import { comment } from '../redux/commentSlice';
import { post } from '../redux/postSlice';
import { sortByComments } from './sortByComments';
import sortByDate from './sortByDate';
import sortByLike from './sortByLike';

export const sortPosts = (
  posts: post[],
  comments: comment[],
  str: string
): post[] => {
  let arr: post[] = [];
  switch (str) {
    case '인기':
      return (arr = sortByLike(posts));
    case '최신':
      return (arr = sortByDate(posts));
    case '댓글':
      return (arr = sortByComments(posts, comments));
    default:
      break;
  }
  return arr;
};
