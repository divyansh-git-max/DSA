// https://leetcode.com/problems/max-consecutive-ones/

var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            count++;
        }
        else {
            max = Math.max(count, max);
            count = 0;
        }
    }
    return Math.max(count, max);
};


var findMaxConsecutiveOnes = function (nums) {


    var previous = 0;
    var current = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            current++;
        } else {
            current = 0;
        }

        if (current > previous) {
            previous = current;
        }
    }
    return previous;
};