var arr = [2, false, 1, 3, "hola", 5, "neta", 1];
var type = 'number';
function getTypoDato(array, type) {
    for(let i =0;i<array.lenght;i++){
        if(typeof array[i] == type){
            console.log(array[i]);
        }
    }
}
console.log(getTypoDato(arr, type));