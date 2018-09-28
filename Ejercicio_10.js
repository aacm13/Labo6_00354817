var usuario = {
    nombre:'',
    apellido:'',
    fechaNacimiento:'',
    telefono:'',
    correo:'',
}
function Usuario(nomb, apel, fecha, tel,cor){
    usuario.nombre = nomb;
    usuario.apellido = apel;
    usuario.fechaNacimiento = fecha;
    usuario.telefono = tel;
    usuario.correo = cor;

    return usuario;
}
console.log(Usuario('alvaro', 'corpeno', '25/01/1999', '43542345', 'example@gmail.com'));
