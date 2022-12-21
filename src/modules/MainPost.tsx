import { Link, useLocation } from 'react-router-dom';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import tw from 'tailwind-styled-components';
import { post } from '../redux/postSlice';
import { comment } from '../redux/commentSlice';
import React, { useEffect, useState } from 'react';
import { sortPosts } from '../functions/sortPosts';
import { LoadingContainer } from '../containers/LoadingContainer';
import { pagination, totalPageNum } from '../functions/pagination';

const Article = tw.article`
flex flex-col justify-between w-full h-full shadow-lg sm:w-1/2
`;

const BtnDiv = tw.div`
flex justify-between
`;

const AddBtn = tw.button`
btn btn-primary btn-sm rounded-full text-white
`;

const LikeDiv = tw.div`
flex flex-col justify-center items-center w-16
`;

export const MainPost = ({
  posts,
  comments,
}: {
  posts: post[];
  comments: comment[];
}) => {
  const location = useLocation();
  let urlParams = new URLSearchParams(location.search).get('category');
  const [list, setList] = useState<post[]>(posts);
  const [keyWord, setKeyWord] = useState<string>('인기');
  const [url, setUrl] = useState<string | null>(urlParams);
  const [page, setPage] = useState<number>(1);
  const commentsNum = comments.reduce(
    (acc: any, cur: comment) => ({
      ...acc,
      [cur.group]: (acc[cur.group] || 0) + 1,
    }),
    {}
  );
  useEffect(() => {
    if (posts && comments && keyWord !== null) {
      setList(sortPosts([...posts], [...comments], keyWord));
    }
    if (urlParams !== url) {
      setPage(1);
    }
    setUrl(urlParams);
  }, [urlParams, posts, keyWord]);
  // if (list.length === 0) {
  //   return <LoadingContainer />;
  // }
  return (
    <Article>
      <div>
        <div>
          <BtnDiv>
            <ul className="tabs p-2">
              <li
                className="tab"
                onClick={() => {
                  setKeyWord('인기');
                }}
              >
                인기 순
              </li>
              <li
                className="tab"
                onClick={() => {
                  setKeyWord('최신');
                }}
              >
                최신 순
              </li>
              <li
                className="tab"
                onClick={() => {
                  setKeyWord('댓글');
                }}
              >
                댓글 순
              </li>
            </ul>
            <div className="p-2">
              <Link to={`/create`}>
                <AddBtn>작성하기</AddBtn>
              </Link>
            </div>
          </BtnDiv>
        </div>
        <div>
          {url === null
            ? pagination(list, page).map((post: post) => (
                <div className="px-4" key={post.id}>
                  <div className="flex py-2 border-b-2">
                    <LikeDiv>
                      <ChevronUpIcon className="inline-block w-6 h-6" />
                      <span className="font-semibold">{post.like}</span>
                      <ChevronDownIcon className="inline-block w-6 h-6" />
                    </LikeDiv>
                    <div>
                      <Link to={`/product/${post.id}`}>
                        <h1 className="text-lg font-semibold">
                          {post.title}
                          <span className="text-sm text-accent px-1">
                            [{commentsNum[post.id] || 0}]
                          </span>
                        </h1>
                      </Link>
                      <p className="mt-2 text-gray-500">{post.desc}</p>
                    </div>
                  </div>
                </div>
              ))
            : pagination(
                list.filter((post: post) => post.category === url),
                page
              ).map((post: post) => (
                <div className="px-4" key={post.id}>
                  <div className="flex py-2 border-b-2">
                    <LikeDiv>
                      <ChevronUpIcon className="inline-block w-6 h-6" />
                      <span className="font-semibold">{post.like}</span>
                      <ChevronDownIcon className="inline-block w-6 h-6" />
                    </LikeDiv>
                    <div>
                      <Link to={`/product/${post.id}`}>
                        <h1 className="text-lg font-semibold">
                          {post.title}
                          <span className="text-sm text-accent px-1">
                            [{commentsNum[post.id] || 0}]
                          </span>
                        </h1>
                      </Link>
                      <p className="mt-2 text-gray-500">{post.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <div className="btn-group flex justify-center m-2">
        {Array.from(
          {
            length:
              url === null
                ? totalPageNum(list)
                : totalPageNum(
                    list.filter((post: post) => post.category === url)
                  ),
          },
          (v, i) => (
            <button
              key={i}
              className="btn hover:bg-blue-700 hover:text-white border-none bg-white text-black"
              onClick={(
                event: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ) => {
                const target = event.target as HTMLButtonElement;
                setPage(Number(target.innerHTML));
              }}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </Article>
  );
};
