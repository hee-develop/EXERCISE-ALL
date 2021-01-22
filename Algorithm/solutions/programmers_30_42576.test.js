import solution, { solutionB } from './programmers_30_42576';

test('예제#1 "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.', () => {
  const participant = ['leo', 'kiki', 'eden'];
  const completion  = ['eden', 'kiki']
  expect(solution(participant, completion)).toBe('leo');
});

test('예제#2 "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.', () => {
  const participant = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
  const completion  = ['josipa', 'filipa', 'marina', 'nikola']
  expect(solution(participant, completion)).toBe('vinko');
});

test('예제#3 "mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.', () => {
  const participant = ['mislav', 'stanko', 'mislav', 'ana'];
  const completion  = ['stanko', 'ana', 'mislav']
  expect(solution(participant, completion)).toBe('mislav');
});

// ---

test('B해결 예제#1 "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.', () => {
  const participant = ['leo', 'kiki', 'eden'];
  const completion  = ['eden', 'kiki']
  expect(solutionB(participant, completion)).toBe('leo');
});

test('B해결 예제#2 "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.', () => {
  const participant = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
  const completion  = ['josipa', 'filipa', 'marina', 'nikola']
  expect(solutionB(participant, completion)).toBe('vinko');
});

test('B해결 예제#3 "mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.', () => {
  const participant = ['mislav', 'stanko', 'mislav', 'ana'];
  const completion  = ['stanko', 'ana', 'mislav']
  expect(solutionB(participant, completion)).toBe('mislav');
});
