import '@testing-library/jest-dom/extend-expect';
import { sum } from './example2';

test('Example Test 2: Sum adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
