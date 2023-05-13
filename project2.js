//use to select the button element from html dom 
 var btnTranslate = document.querySelector("#btnTranslate");   
var txtInput = document.querySelector("#txtInput");
var txtOutput = document.querySelector("#txtOutput")

function clickHandler(){
  txtOutput.innerText = txtInput.value;
}

btnTranslate.addEventListener("click", clickHandler)