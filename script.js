let usuario = getElementById('useri');
let contraseña = getElementById('passi');
let btm = getElementById('btm');
let add = getElementByClass('add');
add.style.visibility = "hidden";
btm.onclick = submit(){
  if( usuario == '1Mes' && contraseña == 'iloveyou'){
    add.style.visibility = "visible";
  }
}
