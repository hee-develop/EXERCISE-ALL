import {solution} from './programmers_30_42578.js';

test('예제#1 headgear가 2개, eyewear가 1개이므로 5개의 조합이 가능합니다', () => {
  const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
  expect(solution(clothes)).toBe(5);
});

test('예제#2 face가 3개이므로 3개의 조합이 가능합니다.', () => {
  const clothes = [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]];
  expect(solution(clothes)).toBe(3);
});
