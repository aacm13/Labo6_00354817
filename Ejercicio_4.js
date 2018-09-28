var arr = [2, 3, 1, 3, 4, 5, 3, 1, 5];
function Sumas(array){

    for(let i =0;i<array.length/2;i++){
        if(i == array.length-1-i){
            console.log(array[i] + array[i]);
        }else{
            console.log(array[i] + array[array.length-1-i]);
        }
    }
}
console.log(Sumas(arr));