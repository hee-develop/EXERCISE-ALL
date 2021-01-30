/*
Simple Array Sum
https://www.hackerrank.com/challenges/simple-array-sum/problem

Use Array.reduce() for array sum
*/
export function simpleArraySum(ar) {
  return ar.reduce((acc, cur) => acc + cur, 0);
};
