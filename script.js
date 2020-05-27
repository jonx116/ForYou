let usuario    =    document.getElementById('useri').value;
let contraseña =    document.getElementById('passi').value;
let add        =    document.getElementById('add');

add.style.visibility = "hidden";

document.getElementById('btm').onclick = function changeContent() {
  
  if( usuario  == "1Mes" && contraseña == "iloveyou"){
    add.style.visibility = "visible";
    console.log("query OK");
  }else{
    console.log("query ERROR");
  }
}
