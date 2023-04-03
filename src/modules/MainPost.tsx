import { Link, useSearchParams } from 'react-router-dom';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import tw from 'tailwind-styled-components';
import { post } from '../redux/postSlice';
import { comment } from '../redux/commentSlice';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/app';
import { ToastContainer, toast } from 'react-toastify';
import { sortPosts } from '../functions/sortPosts';
import { LoadingContainer } from '../containers/LoadingContainer';
import { pagination, totalPageNum } from '../functions/pagination';
import 'react-toastify/dist/ReactToastify.css';

export const MainPost = ({
  posts,
  comments,
}: {
  posts: post[];
  comments: comment[];
}) => {
  const [params, setParams] = useSearchParams({ page: '1', keyword: '인기' });
  const [list, setList] = useState<post[]>(posts);

  const commentsNum = comments.reduce(
    (acc: any, cur: comment) => ({
      ...acc,
      [cur.group]: (acc[cur.group] || 0) + 1,
    }),
    {}
  );

  useEffect(() => {
    if (posts && comments && params.get('keyword') !== null) {
      setList(
        sortPosts([...posts], [...comments], params.get('keyword') || '인기')
      );
    }
  }, [params, posts]);

  if (typeof list === undefined) {
    return <LoadingContainer />;
  }
  if (
    params.get('category') &&
    list.filter((item) => item.category === params.get('category')).length === 0
  ) {
    return (
      <Article>
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">게시물이 없습니다.</h1>
              <p className="py-6">첫번째 게시물의 주인공이 되어보세요!</p>
              <Link to={`/create`}>
                <button className="btn btn-primary text-white rounded-lg">
                  글 등록하기
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Article>
    );
  }
  return (
    <Article>
      <div>
        <div>
          <input
            type="search"
            className="w-full h-12 py-2 px-6"
            placeholder="무엇이든 검색해보세요!"
            onChange={(event) => {
              setList(
                posts.filter(
                  (item) =>
                    item.title.includes(event.target.value) ||
                    item.desc.includes(event.target.value)
                )
              );
              params.set('page', '1');
              setParams(params);
            }}
            onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
              if (event.key === 'Escape') {
                (event.target as HTMLElement).blur();
              }
            }}
          />
        </div>
        <div>
          <BtnDiv>
            <ul className="tabs p-2">
              <li
                className="tab"
                onClick={() => {
                  params.set('keyword', '인기');
                  setParams(params);
                }}
              >
                인기 순
              </li>
              <li
                className="tab"
                onClick={() => {
                  params.set('keyword', '최신');
                  setParams(params);
                }}
              >
                최신 순
              </li>
              <li
                className="tab"
                onClick={() => {
                  params.set('keyword', '댓글');
                  setParams(params);
                }}
              >
                댓글 순
              </li>
            </ul>
            <div className="p-2">
              <Link
                to={auth.currentUser ? `/create` : '/'}
                onClick={() => {
                  if (!auth.currentUser) {
                    const notify = () => {
                      toast.error('로그인 정보가 없습니다.', {
                        autoClose: 1000,
                      });
                    };
                    notify();
                  }
                }}
              >
                <AddBtn>작성하기</AddBtn>
              </Link>
            </div>
          </BtnDiv>
        </div>
        <div>
          {params.get('category') === null
            ? pagination(list, Number(params.get('page'))).map((post: post) => (
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
                          {post.title.length < 35
                            ? post.title
                            : post.title.slice(0, 35) + '...'}
                          <span className="text-sm text-accent px-1">
                            [{commentsNum[post.id] || 0}]
                          </span>
                        </h1>
                      </Link>
                      <p className="mt-2 text-gray-500">
                        {post.desc.length < 40
                          ? post.desc
                          : post.desc.slice(0, 40) + '...'}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            : pagination(
                list.filter(
                  (post: post) => post.category === params.get('category')
                ),
                Number(params.get('page'))
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
                          {post.title.length < 35
                            ? post.title
                            : post.title.slice(0, 35) + '...'}
                          <span className="text-sm text-accent px-1">
                            [{commentsNum[post.id] || 0}]
                          </span>
                        </h1>
                      </Link>
                      <p className="mt-2 text-gray-500">
                        {post.desc.length < 40
                          ? post.desc
                          : post.desc.slice(0, 40) + '...'}
                      </p>
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
              params.get('category') === null
                ? totalPageNum(list)
                : totalPageNum(
                    list.filter(
                      (post: post) => post.category === params.get('category')
                    )
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
                params.set('page', target.innerHTML);
                setParams(params);
              }}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
      <ToastContainer />
    </Article>
  );
};

const Article = tw.article`
flex flex-col justify-between w-full h-full min-h-screen shadow-lg sm:w-1/2
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
