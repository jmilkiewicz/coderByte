
function FirstReverse(str) { 
    var array = str.split("");
    var reduced = array.reduce(function(acc,current){
        return [current].concat(acc);
    },[]);

    return reduced.join("");        
}
