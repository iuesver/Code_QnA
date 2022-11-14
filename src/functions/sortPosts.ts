import { comment } from '../redux/commentSlice';
import { post } from '../redux/postSlice';
import { sortByComments } from './sortByComments';
import sortByDate from './sortByDate';
import sortByLike from './sortByLike';

export const sortPosts = (posts: post[], comments: comment[], str: string) => {
  switch (str) {
    case '인기':
      return sortByLike(posts);
      break;
    case '최신':
      return sortByDate(posts);
      break;
    case '댓글':
      return sortByComments(posts, comments);
      break;
    default:
      break;
  }
};
