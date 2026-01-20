
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 4;


function UpperBound(arr, target) {
    let low = 0;
    let high = arr.legnth - 1;
    let ans = arr.length;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] > target) {
            ans = mid;
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return ans;
}


console.log(UpperBound(arr, target));
