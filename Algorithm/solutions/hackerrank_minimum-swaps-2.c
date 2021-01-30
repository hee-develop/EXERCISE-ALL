/*
Minimum Swaps 2
https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

idx [0, 1, 2, 3]
val {1, 2, 3, 4}
idx[x+1] = val[x]

Use value to index for swapping is faster than normal swapping,
because the values of "already sorted" cannot occur
*/

int minimumSwaps(int arr_count, int* arr)
{
    int cnt = 0;
    for (int i = 0; i < arr_count; i++)
    {
        if (arr[i] == i + 1) continue;

        cnt++;
        int temp = arr[i];
        arr[i] = arr[temp-1];
        arr[temp-1] = temp;
        i--;
    }

    return cnt;
}

/* 
for test : have to malloc

void main() {
    int* inputArr[] = {
        {4, 3, 1, 2},
        {2, 3, 4, 1, 5},
        {1, 3, 5, 2, 4, 6, 7},
        {8, 45, 35, 84, 79, 12, 74, 92, 81, 82, 61, 32, 36, 1, 65, 44, 89, 40, 28, 20, 97, 90, 22, 87, 48, 26, 56, 18, 49, 71, 23, 34, 59, 54, 14, 16, 19, 76, 83, 95, 31, 30, 69, 7, 9, 60, 66, 25, 52, 5, 37, 27, 63, 80, 24, 42, 3, 50, 6, 11, 64, 10, 96, 47, 38, 57, 2, 88, 100, 4, 78, 85, 21, 29, 75, 94, 43, 77, 33, 86, 98, 68, 73, 72, 13, 91, 70, 41, 17, 15, 67, 93, 62, 39, 53, 51, 55, 58, 99, 46}
    };
    int inputArrSize[] = {
        4,
        5,
        7,
        100
    };
    int outputArr[] = {
        3,
        3,
        3,
        91
    };

    for (int i = 0; i < 4; i++) {
        printf("%s", minimumSwaps(inputArrSize[i], inputArr[i]) == outputArr[i] ? "true" : "false");
    }
} */