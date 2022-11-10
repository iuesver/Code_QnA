import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { LoadingContainer } from '../containers/LoadingContainer';
import { post } from '../redux/postSlice';
import sortByDate from '../functions/sortByDate';
import sortByLike from '../functions/sortByLike';
const List = tw.ul`
menu bg-base-100 w-56 p-2 rounded-box shadow-lg
`;

const Category = tw.li`
menu-title
`;

export const SideBar = ({ posts }: { posts: post[] }) => {
  const [sortByLikePosts, setSortByLikePosts] = useState<post[]>([]);
  const [sortByDatePosts, setSortByDatePosts] = useState<post[]>([]);
  useEffect(() => {
    if (posts.length !== 0 && typeof posts !== 'undefined') {
      setSortByLikePosts(sortByLike([...posts]));
      setSortByDatePosts(sortByDate([...posts]));
    }
  }, [posts]);
  if (posts.length === 0 || typeof posts === 'undefined') {
    return <LoadingContainer />;
  }
  return (
    <aside>
      <List>
        <Category>
          <span>인기 글</span>
        </Category>
        <ul>
          {sortByLikePosts.map((item: post) => (
            <li>
              <Link to={'/' + item.id} key={item.id}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </List>
      <List>
        <Category>
          <span>최신 글</span>
        </Category>
        <ul>
          {sortByDatePosts.map((item: post) => (
            <li>
              <Link to={'/' + item.id} key={item.id}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </List>
    </aside>
  );
};
