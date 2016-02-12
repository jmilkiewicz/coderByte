// Have the function PrimeMover(num) return the numth prime number. The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number. 


function PrimeMover(num) {
    var found = 0;
    for(i=2;;i++){
        if(isPrime(i)){
            found ++;
        }
        if(found === num){
            return i;
        }
    }
}

function isPrime(num){

    for(var i=2;i<=num/2;i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
