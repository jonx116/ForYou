let usuario = getElementById('useri');
let contraseña = getElementById('passi');
let btm = getElementById('btm');
let add = getElementById('add');

add.visibility = "hidden";

btm.onclick = submit(){
  if( usuario == '1Mes' && contraseña == 'iloveyou'){
    add.visibility = "visible";
  }
}
