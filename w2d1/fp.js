//sum
function sum(a){
    const s = a.reduce(function (prevValue, elem, i, array){
        return prevValue + elem;
    }, 0);
    return s;
}
// multiply
function multiply(a){
    const p = a.reduce(function (prevValue, elem, i, array){
        return prevValue * elem;
    }, 1);
   return p;
}
//Function for reverse
function reverse(s){
    return s.split("").reverse().join("");
}

//filterLongWords()

function filterLongWords(s, i){
   return s.filter(w=>w.length > i);
    

}