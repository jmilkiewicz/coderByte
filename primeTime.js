function PrimeTime(num) { 

  for(i=2;i<=num/2;i++){
    if( num%i === 0){
      return false;
    }
  }
  // code goes here  
  return true; 
         
}
