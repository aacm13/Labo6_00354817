function incriptar(palabra){
    palabra = palabra.replace('m',0);
    palabra = palabra.replace('u',1);
    palabra = palabra.replace('r',2);
    palabra = palabra.replace('c',3);
    palabra = palabra.replace('i',4);
    palabra = palabra.replace('e',5);
    palabra = palabra.replace('l',6);
    palabra = palabra.replace('a',7);
    palabra = palabra.replace('g',8);
    palabra = palabra.replace('o',9);
    palabra = palabra.replace('M',0);
    palabra = palabra.replace('U',1);
    palabra = palabra.replace('R',2);
    palabra = palabra.replace('C',3);
    palabra = palabra.replace('I',4);
    palabra = palabra.replace('E',5);
    palabra = palabra.replace('L',6);
    palabra = palabra.replace('A',7);
    palabra = palabra.replace('G',8);
    palabra = palabra.replace('O',9);
        
    
    return palabra;
}
console.log(incriptar("murcielago"));
