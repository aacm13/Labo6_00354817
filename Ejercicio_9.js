function aleatorio(){
    arr = [];
    opc = 0;
    respuesta;
    for(i=0; i < 20; i++){
        arr[i] = Math.random();
    }
    respuesta = arr[Math.floor(Math.random() * 20)];
    while(true){
        opc = prompt("ingrese un numero");
        if(opc < respuesta){
            console.log("su numero es muy pequeno");
        }
        if(opc > respuesta){
            console.log("es muy pequeno");
        }
        if(opc == respuesta){
            console.log("Es correcto");
            break;
        }
    }
}