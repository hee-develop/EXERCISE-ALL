/*
전화번호 목록

전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다.
전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.
- 구조대 : 119
- 박준영 : 97 674 223
- 지영석 : 11 9552 4421

전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성해주세요.

제한 사항
- phone_book의 길이는 1 이상 1,000,000 이하입니다.
- 각 전화번호의 길이는 1 이상 20 이하입니다.
*/

/*
접두어가 포함되는지 판단하므로 정렬한 뒤 이전 값이 들어 있는지 확인하면서 진행
처음엔 contains메소드를 사용했으나, contains는 중간에 포함되어 있는 경우에도 true를 반환하기 때문에
접두어를 검사할 때 부적절. startsWith메소드를 사용.
*/
import java.util.Arrays; 

class Solution {
    public boolean solution(String[] phone_book) {
        Arrays.sort(phone_book);

        for (int i = 0; i < phone_book.length - 1; i++) {
            if (phone_book[i+1].startsWith(phone_book[i])) {
                return false;
            }
        }
        return true;
    }
}

/*
TODO jUnit도입

입출력 예제
["119", "97674223", "1195524421"] -> false
["123","456","789"] -> true
["12","123","1235","567","88"] -> false
["819232312", "976", "119552", "2"] -> true
*/
