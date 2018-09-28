var arr = [2, false, 1, 3, 'hola', 5, 'neta', 1];

function getTypoDato(array) {
    var contString = 0;
    var contNumber=0;
    var contBoolean =0;
    var contNull=0;
    for(let i =0;i<array.length;i++){
        if(typeof array[i] == 'string'){
            contString++;
        }else if(typeof array[i] == 'number'){
            contNumber++;
        }else if(typeof array[i] == 'boolean'){
            contBoolean++;
        }else if(typeof array[i] == 'null'){
            contNull++;
        }
    }
    return(`String: ${contString} Number: ${contNumber} Boolean: ${contBoolean} Null: ${contNull}`);
}
console.log(getTypoDato(arr));
