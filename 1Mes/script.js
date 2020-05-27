document.getElementById("h1").style.visibility = "visible";
document.getElementById("bt").style.visibility = "visible";
document.getElementById("h2").style.visibility = "hidden";

var count = 0;
document.getElementById("bt").onclick = funcion show(){
  count += 1;
  if(count == 1){
    document.getElementById("1").style.visibility = "visible";
  }
}


