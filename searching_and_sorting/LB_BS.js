let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 4;
let n = arr.length;

function BS(arr, target, n) {
    let low = 0;
    let high = n - 1;
    let ans = n;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] >= target) {
            ans = mid;
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return ans
}

// time complexity O(log n)
// space complexity O(1)

console.log(BS(arr, target, n));