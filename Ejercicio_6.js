function incriptar(palabra){
    for(let i =0;i<palabra.length;i++){
        palabra.replace("m","0");
    }
    return palabra;
}
console.log(incriptar("murcielago"));