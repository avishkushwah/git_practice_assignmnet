let n=13;
let count=0;
for (let i=1; i<=n; i++){
    if (n%i==0){
        count++;
    }
}

if (count==2){
    console.log("Number is prime");
} else{
    console.log("Number is not prime");
}