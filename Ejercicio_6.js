function incriptar(palabra){
    for(var i=0; i<palabra.length;i++){
        if(palabra[i] === 'm'){
            palabra[i] = 0;
        }
        if(palabra[i] === 'u'){
            palabra[i] = 1;
        }
        if(palabra[i] === 'r'){
            palabra[i] = 2;
        }
        if(palabra[i] === 'c'){
            palabra[i] = 3;
        }
        if(palabra[i] === 'i'){
            palabra[i] = 4;
        }
        if(palabra[i] === 'e'){
            palabra[i] = 5;
        }
        if(palabra[i] === 'l'){
            palabra[i] = 6;
        }
        if(palabra[i] === 'a'){
            palabra[i] = 7;
        }
        if(palabra[i] === 'g'){
            palabra[i] = 8;
        }
        if(palabra[i] === 'o'){
            palabra[i] = 9;
        }
        
    }
    return palabra;
}
console.log(incriptar("murcielago"));
