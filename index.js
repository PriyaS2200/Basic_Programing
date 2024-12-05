function findPrime(num){
    let count = 0;
    for(let i=2;i<num;i++){
        if(num%i == 0){
            count++;
        }
    }
    if(count == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(findPrime(13))
console.log(findPrime(33))
console.log(findPrime(43))
console.log(findPrime(12))
console.log(findPrime(15))

function evenOdd(num){
   if(num%2 == 0){
    return true;
   }
   else{
    return false;
   }  
}
console.log(evenOdd(13))
console.log(evenOdd(10))
console.log(evenOdd(72))
console.log(evenOdd(67))
console.log(evenOdd(90))