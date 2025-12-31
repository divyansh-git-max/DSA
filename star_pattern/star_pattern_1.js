// star pattern
let n=4

for(let i=0;i<n;i++){
    let row = '';
    for(let j=0; j<n; j++){
        row=row+"*"
    }
    console.log(row);
}

for(let i=0;i<n;i++){
    let row = '';
    for(let j=0; j<=i; j++){
        row=row+"*"
    }
    console.log(row);
}

for(let i=1;i<=5;i++){
    let row = '';
    for(let j=1;j<=i;j++){
        row=row+i;
    }
    console.log(row);
}

for(let i=0;i<5;i++){
    let row = '';
    for(let j=1;j<=5-i;j++){
        row=row+j;
    }
    console.log(row);
}

for(let i=0;i<5;i++){
    let row='';
    for(let j=0;j<5-(i+1);j++){
        row=row+" ";
    }
    for(let k=0;k<=i;k++){
        row=row+"*";
    }
    console.log(row);
}


for(let i=0;i<6;i++){
    let row = '';
    for(let j=0;j<i+1;j++){
        if(j%2==0){
            row=row+"1"
        }
        else{
            row=row+"0"
        }
    }
    console.log(row);
}

