let arr = [-7, 4, 3, 5, 1, 2];

function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let curr = arr[i];
        let prev = i - 1;
        while (prev >= 0 && arr[prev] > curr) {
            arr[prev + 1] = arr[prev];
            prev--;

        }
        arr[prev + 1] = curr;
    }
    return arr;

}

console.log(insertionSort(arr));

// time complexity O(n^2)
// space complexity O(1)