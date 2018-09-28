var arr = [2, 3, 1, 3, 4, 5, 3, 1];

function getOccurrencia(array, valor) {
    var cont = 0;
    array.forEach((v) => (v === valor && cont++));
    return cont;
}

console.log(getOccurrencia(arr, 3));
console.log(getOccurrencia(arr, 4));