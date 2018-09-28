var arr = [2, false, 1, 3, "hola", 5, "neta", 1];
var type = 'number';
function getTypoDato(array, type) {
    array.forEach(function(v){
        if(typeof v === type){
        console.log(v)
        }
    });
}
console.log(getTypoDato(arr, type));
