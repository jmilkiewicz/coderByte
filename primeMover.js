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
