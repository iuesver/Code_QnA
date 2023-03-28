import { sortPosts } from '../../src/functions/sortPosts';
import sortByDate from '../../src/functions/sortByDate';
import sortByLike from '../../src/functions/sortByLike';
import { sortByComments } from '../../src/functions/sortByComments';
import { testArray, testCommentsArray } from './mock_data';

describe('Function sortPosts should return array', () => {
  it("arg text is '인기'", () => {
    expect(sortPosts(testArray, testCommentsArray, '인기')).toEqual(
      sortByLike(testArray)
    );
  });
  it("arg text is '최신'", () => {
    expect(sortPosts(testArray, testCommentsArray, '최신')).toEqual(
      sortByDate(testArray)
    );
  });
  it("arg text is '댓글'", () => {
    expect(sortPosts(testArray, testCommentsArray, '댓글')).toEqual(
      sortByComments(testArray, testCommentsArray)
    );
  });
});
