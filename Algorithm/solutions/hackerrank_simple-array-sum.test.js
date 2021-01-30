import {simpleArraySum} from './hackerrank_simple-array-sum';

test('1+2+3+4+5 equals 15', () => {
  const input = [1, 2, 3, 4, 5];
  expect(simpleArraySum(input)).toBe(15);
});

test('0+1+0+1+0 equals 2', () => {
  const input = [0, 1, 0, 1, 0];
  expect(simpleArraySum(input)).toBe(2);
});
