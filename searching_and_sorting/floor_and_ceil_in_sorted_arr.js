let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let target = 35;

function floor(arr, target) {
    let start = 0
    let end = arr.length - 1;
    let ans = -1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] <= target) {
            ans = mid
            start = mid + 1
        } else {
            end = mid - 1;
        }
    }
    return ans;
}


function ceil(arr, target) { // it will be same as lower bound
    let start = 0;
    let end = arr.length - 1;
    let ans = arr.length;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] >= target) {
            ans = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return ans;
}


console.log(floor(arr, target));
console.log(ceil(arr, target));