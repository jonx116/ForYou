let usuario    =    document.getElementById('useri').value;
let contraseña =    document.getElementById('passi').value;
let btm        =    document.getElementById('btm');
let add        =    document.getElementById('add');

add.style.visibility = "hidden";

btm.onclick = submit();
  
function submit(){
  if( usuario  == '1Mes' && contraseña == 'iloveyou'){
    add.style.visibility = "visible";
    console.log("query OK");
  }else{
    console.log("query ERROR");
  }
}
