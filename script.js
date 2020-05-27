document.getElementById("add").style.visibility = "hidden";


document.getElementById('btm').onclick = function changeContent() {
  
  if(document.getElementById('useri').value == "mes" &&  document.getElementById('passi').value == "iloveyou"){
    
document.getElementById("add").style.visibility = "visible";
    
    console.log("query OK");
    
  }else if( usuario.value  != "mes" || contraseña.value != "iloveyou"){
    
    console.log("query ERROR");
    
  }else{
    console.log("FALTAL ERROR");
  }
}

