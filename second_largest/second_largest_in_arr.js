

// find second largest element in an array


function secondLargest(arr){
    if (arr.length < 2){
        return null;
    }

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0; i<arr.length; i++){
        if (arr[i] > firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;

}

let arr = [1,2,3,4,5,6,7,8,9];
console.log(secondLargest(arr));

