var arr = [2, 3, 1, 3, 4, 5, 3, 1];

function getSuma(array) {
    var suma = 0;
    array.forEach((v) => (suma = suma + v));
    return suma;
}
console.log(getSuma(arr));