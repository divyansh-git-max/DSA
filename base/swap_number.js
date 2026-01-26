// swap two numbers using xor 

let a = 10;
let b = 20;

function swap(a, b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;

    return [a, b]
}

let res = swap(a, b);
console.log(res);
