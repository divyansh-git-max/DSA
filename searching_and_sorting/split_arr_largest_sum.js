
let arr = [7, 2, 5, 10, 8];
let k = 2;

function subArr(arr, mid) {
    let sub = 1;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (sum + arr[i] <= mid) {
            sum += arr[i];
        } else {
            sub++;
            sum = arr[i];
        }
    }
    return sub;
}

function splitArray(arr, k) {
    let n = arr.length;

    if (k > n) {
        return -1;
    }

    let low = Math.max(...arr);
    let high = arr.reduce((a, b) => a + b, 0);

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (subArr(arr, mid) > k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;

}

console.log(splitArray(arr, k));