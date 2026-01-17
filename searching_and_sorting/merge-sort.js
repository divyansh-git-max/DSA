let arr = [8, 4, 5, 6, 9, 1, 3, 6];


function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}



function merge(left, right) {

}

console.log(mergeSort(arr));