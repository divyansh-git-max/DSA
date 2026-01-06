// https://leetcode.com/problems/missing-number/

var missingNumber = function (nums) {
    let m = ((nums.length + 1) * (nums.length)) / 2; // that is the summation formula (n*(n+1))/2
    for (let i = 0; i < nums.length; i++) {
        m = m - nums[i]
    }
    return m;
};