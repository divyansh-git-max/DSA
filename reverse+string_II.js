// https://leetcode.com/problems/reverse-string-ii/description/




let word = "abcdefgh"

let arr = word.split('')

const k = 2


for (let i = 0; i < arr.length; i = i + 2 * k) {
    let start = i;
    let m = i + k - 1;

    while (start < m) {
        let temp = arr[start];
        arr[start] = arr[m];
        arr[m] = temp;
        start++;
        m--;
    }



}
word = arr.join('')



