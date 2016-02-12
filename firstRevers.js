//Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 


function FirstReverse(str) { 
    var array = str.split("");
    var reduced = array.reduce(function(acc,current){
        return [current].concat(acc);
    },[]);

    return reduced.join("");        
}
