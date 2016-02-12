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
