// https://leetcode.com/problems/fibonacci-number/description/

// iterative approach

// time complexity O(n)
// space complexity O(1)
var fib = function (n) {
    let f1 = 0;
    let f2 = 1;
    let sum = 0;
    if (n == 1) {
        return 1;
    }
    for (let i = 2; i <= n; i++) {
        sum = f1 + f2;
        f1 = f2;
        f2 = sum;
    }
    return sum;
};

// recursive approach
// time complexity O(2^n)
// space complexity O(n)
var fib = function (n) {

}


