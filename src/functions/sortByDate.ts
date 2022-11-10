import { post } from '../redux/postSlice';

const sortByDate = (post: post[]) => {
  const result = post.sort((a: post, b: post) => {
    const timeA = new Date(a.date).getTime();
    const timeB = new Date(b.date).getTime();
    return timeB - timeA;
  });
  return result;
};

export default sortByDate;
