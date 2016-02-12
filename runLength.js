/*
Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.
*/

var array = str.split("");

  var reduced = array.reduce(function(prev, current){
    if(prev.length === 0 || prev[prev.length-1].symbol != current ){
      prev.push({symbol:current, count:1});
    }else{
      prev[prev.length-1].count++;
    }
    return prev;
  },[]);

  var result = reduced.map(function(elem){
    return elem.count+elem.symbol;
  }).join("");


  return result;
         
}
