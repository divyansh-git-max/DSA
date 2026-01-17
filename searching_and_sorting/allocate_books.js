// allocate books

let arr = [25, 46, 28, 49, 24];



let n = arr.length;
let m = 4;

// linear search

let low = Math.max(...arr);
let high = arr.reduce((a, b) => a + b, 0);


function numofStudents(arr, pages) {
    let student = 1;
    let PagesStudent = 0;
    for (let i = 0; i < n; i++) {
        if (PagesStudent + arr[i] <= pages) {
            PagesStudent += arr[i];
        } else {
            student++;
            PagesStudent = arr[i];
        }
    }
    return student;
}


function allocateBooks(arr, m, low, high) {

    if (m > n || low > high) {
        return -1;
    }

    for (let i = low; i < high; i++) {
        if (numofStudents(arr, i) == m) {
            return i;
        }
    }
}


// time complexity O(n*m)
// space complexity O(1)


// binary search



function allocateBooks1(arr, m, low, high) {
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let noofStudent = numofStudents(arr, mid);
        if (noofStudent > m) {
            low = mid + 1;
        } else if (noofStudent <= m) {
            high = mid - 1;
        }
    }
    return low;
}


console.log(allocateBooks1(arr, m, low, high));
// time complexity O(log base 2 of (sum-max+1) * O(n))
// space complexity O(1)