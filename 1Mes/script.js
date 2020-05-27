document.getElementById("h1").style.visibility = "visible";
document.getElementById("bt").style.visibility = "visible";
document.getElementById("h2").style.visibility = "hidden";
document.getElementById("1").style.visibility  = "hidden";
      
var count = 0;
document.getElementById("bt").onclick = function show(){
  count += 1;
  if(count == 1){
    document.getElementById("1").style.visibility = "visible";
    document.getElementById("bt").value = "again";
  }else if(count == 2){
      document.getElementById("1").src = "https://qtxasset.com/fiercebiotech/1553681843/connor-wells-534089-unsplash.jpg/connor-wells-534089-unsplash.jpg?XObjNuiIeq00Lv1yNJ92KYHkC1mDagZm";
  }else{
      count = 0;
      document.getElementById("1").style.visibility  = "hidden";
       
  }
}


