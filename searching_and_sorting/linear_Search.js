let arr = [4, 5, 6, 1, 2, 5, 0];
let target = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        console.log(i);
        break;
    }
}


