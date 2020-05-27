let usuario    =    document.getElementById('useri');
let contraseña =    document.getElementById('passi');
let btm        =    document.getElementById('btm');
let add        =    document.getElementById('add');

add.visibility = "hidden";

btm.onclick = function submit(){
  if( usuario == '1Mes' && contraseña == 'iloveyou'){
    add.visibility = "visible";
  }
}
