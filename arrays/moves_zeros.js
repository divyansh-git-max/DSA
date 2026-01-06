// https://leetcode.com/problems/move-zeroes/submissions/1875604766/

var moveZeroes = function (nums) {
    let n = nums.length
    let p = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] != 0) {
            let temp = nums[i];
            nums[i] = nums[p];
            nums[p] = temp;
            p++;
        }
    }
};