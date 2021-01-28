/*
완주하지 못한 선수

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다.
*/

/*
단 한 명이 완주하지 못했으므로 반환하는 값은 하나면 충분
배열을 오름차순으로 정렬한 뒤 비교하면 값이 다른 결과가 완주하지 못한 대상

정렬은 시간이 오래 걸리고 sort()는 원본의 순서를 바꿔 버린다는 문제점 존재
*/
export function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0, len = participant.length; i < len; i++) {
      if (participant[i] !== completion[i]) {
          return participant[i];
      }
  }
}

/*
해쉬를 이용해 남아 있는 값을 찾음
*/
export function solutionB(participant, completion) {
  const participantMap = new Map();

  participant.forEach(p => {
    participantMap.set(p, (participantMap.get(p) ?? 0) + 1);
  });

  completion.forEach(c => {
    participantMap.set(c, participantMap.get(c) - 1);
  })

  for (let [k,v] of participantMap) {
    if (v > 0) return k;
  }
}
