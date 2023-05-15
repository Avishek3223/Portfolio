//use to select the button element from html dom 
 var btnTranslate = document.querySelector("#btnTranslate");   
var txtInput = document.querySelector("#txtInput");
var txtOutput = document.querySelector("#txtOutput")

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(text){
  return serverURL + "?" + "text=" +text
}

function clickHandler(){
  // txtOutput.innerText = txtInput.value;

  var inputtext= txtInput.value;
  fetch(getTranslationURL(inputtext))
  .then(response => response.json())
  .then(json => {
       var translatedText = json.contents.translatedText;
       txtOutput.innerText = translatedText; 
  })

}

btnTranslate.addEventListener("click", clickHandler)