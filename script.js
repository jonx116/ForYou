let usuario    =    document.getElementById('useri').value;
let contraseña =    document.getElementById('passi').value;
let add        =    document.getElementById('add');

document.getElementById('btm').onclick = function changeContent() {
  
  if( usuario.value  == "mes" && contraseña.value == "iloveyou"){
    add.style.visibility = "visible";
    console.log("query OK");
  }else if( usuario.value  != "mes" && contraseña.value != "iloveyou"){
    console.log("query ERROR");
  }else{
    console.log(FALTAL ERROR);
  }
}

