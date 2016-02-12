function PalindromeTwo(str) { 

 var array = str.split("");
    var sanitizedArray = array.filter(function(c){
        return c.match(/[a-z]/i);
    }).map(function(c){
        return c.toLowerCase();
    });

    var reversed = sanitizedArray.slice(0).reverse();

    return sanitizedArray.join("") === reversed.join("");
         
}
