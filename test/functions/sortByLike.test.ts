import sortByLike from '../../src/functions/sortByLike';
import { testArray } from './mock_data';

test('The function sortByLike should return array sorted by like number', () => {
  expect(sortByLike(testArray)).toEqual(
    testArray.sort((a, b) => b.like - a.like)
  );
});
