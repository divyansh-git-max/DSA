var searchRange = function (nums, target) {

    function firstelem(nums, target) {
        let start = 0
        let end = nums.length;
        let answer = -1
        while (start < end) {
            let mid = Math.floor((start + end) / 2);
            if (nums[mid] === target) {
                answer = mid
                end = mid
            } else if (nums[mid] < target) {
                start = mid + 1
            } else if (nums[mid] > target) {
                end = mid
            }
        }
        return answer;
    }

    function lastelem(nums, target) {
        let answer = -1
        let start = 0
        let end = nums.length;
        while (start < end) {
            let mid = Math.floor((start + end) / 2)
            if (nums[mid] === target) {
                answer = mid
                start = mid + 1
            } else if (nums[mid] < target) {
                start = mid + 1
            } else if (nums[mid] > target) {
                end = mid
            }
        }
        return answer;
    }

    return [firstelem(nums, target), lastelem(nums, target)];
};

