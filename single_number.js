var singleNumber = function (nums) {
    let m = 0;
    for (let i = 0; i < nums.length; i++) {
        m = m ^ nums[i]
    }
    return m;
};


// https://leetcode.com/problems/single-number/