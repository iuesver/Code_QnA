import testArray from './mock_data';
import sortByDate from '../../src/functions/sortByDate';

test('The function sortByDate should return array sorted by date', () => {
  expect(sortByDate(testArray)).toEqual(
    testArray.sort((a, b) => {
      const timeA = new Date(a.date).getTime();
      const timeB = new Date(b.date).getTime();
      return timeB - timeA;
    })
  );
});
