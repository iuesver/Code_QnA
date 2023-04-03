import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { post } from '../redux/postSlice';
import sortByDate from '../functions/sortByDate';
import sortByLike from '../functions/sortByLike';

const SideBar = ({ posts }: { posts: post[] }) => {
  const [sortByLikePosts, setSortByLikePosts] = useState<post[]>([]);
  const [sortByDatePosts, setSortByDatePosts] = useState<post[]>([]);
  useEffect(() => {
    if (posts.length !== 0 && typeof posts !== 'undefined') {
      setSortByLikePosts(sortByLike(posts.slice(0, 5)));
      setSortByDatePosts(sortByDate(posts.slice(0, 5)));
    }
  }, [posts]);
  // if (posts.length === 0 || typeof posts === 'undefined') {
  //   return <LoadingContainer />;
  // }
  return (
    <aside className="hidden sm:block">
      <List>
        <Category>
          <span>인기 글</span>
        </Category>
        <ul>
          {sortByLikePosts.map((item: post) => (
            <li key={item.id}>
              <Link to={'/product/' + item.id}>{item.title}</Link>
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
            <li key={item.id}>
              <Link to={'/product/' + item.id}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </List>
    </aside>
  );
};

export default SideBar;

const List = tw.ul`
menu bg-base-100 w-56 p-2 rounded-box shadow-lg
`;

const Category = tw.li`
menu-title
`;
