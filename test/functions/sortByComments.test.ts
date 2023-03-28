import { sortByComments } from '../../src/functions/sortByComments';
import { testArray, testCommentsArray } from './mock_data';

test("Function sortByComments should return an post array post data has more key 'group'", () => {
  expect(sortByComments(testArray, testCommentsArray)).toEqual(testArray);
});
