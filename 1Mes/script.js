document.getElementById("h1").style.visibility = "visible";
document.getElementById("bt").style.visibility = "visible";
document.getElementById("h2").style.visibility = "hidden";
document.getElementById("1").style.visibility = "hidden";
document.getElementById("2").style.visibility = "hidden";
document.getElementById("3").style.visibility = "hidden";
document.getElementById("4").style.visibility = "hidden";
document.getElementById("5").style.visibility = "hidden";


var n = 0;

 document.getElementById("bt").onclick = x();
  
  function x(){window.setInterval(function(){
  console.log(n);
  n++;
},1000);

document.getElementById("bt").onclick = function show(){
 n=0;
 while(n < 10 ){
  document.getElementById("h1").style.visibility = "hidden";
}
}
              }
