document.getElementById("h1").style.visible = "visible";
document.getElementById("bt").style.visible = "visible";
document.getElementById("h2").style.visible = "hidden";
document.getElementById("1").style.visible = "hidden";
document.getElementById("2").style.visible = "hidden";
document.getElementById("3").style.visible = "hidden";
document.getElementById("4").style.visible = "hidden";
document.getElementById("5").style.visible = "hidden";

var n = 0;

document.getElementById("bt").onclick = vr();

function vr() { window.setInterval(function(){
  console.log(n);
  n++;
},1000);
}
