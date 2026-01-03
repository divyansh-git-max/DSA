// https://leetcode.com/problems/reverse-string/


var reverseString = function (s) {
    let n = s.length;
    for (let i = 0; i < n / 2; i++) {
        if (i <= n - i - 1) {
            let temp = s[i];
            s[i] = s[n - i - 1];
            s[n - i - 1] = temp;
        }
    }
};