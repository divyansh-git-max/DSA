// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

var removeDuplicates = function (nums) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[x]) {
            x = x + 1;
            nums[x] = nums[i];
        }
    }
    return x + 1;
}


// sorted non-decreasing array (arr can have duplicates)
// 1,2,3,3,4,4,5