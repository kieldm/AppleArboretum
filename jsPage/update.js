function runStart(){
  document.getElementById('generatorStage').style.display = "flex";
  document.getElementById('allHeaderBot').style.display = "flex";

  document.getElementById('introStage').style.display = "none";
}

function runCreate(){
  assembleString();

  document.getElementById('poemBox').style.display = "none";
  document.getElementById('wordBox').style.display = "none";
  document.getElementById('uiBar').style.display = "none";
  
  document.getElementById('presetBar').style.display = "flex"; 

  document.getElementById('mainStageNumber').innerHTML = "02";
  document.getElementById('topHeadline').innerHTML = "";
  document.getElementById('goForward').style.display = "none";
  document.getElementById('goBack').style.display = "flex";
  document.getElementById('goBack2').style.display = "none";

  document.getElementById('generatorMode').style.display = "inline";
  document.getElementById('poem').style.display = "flex";

  document.getElementById('recreate').style.display = "inline";

  document.getElementById('canvasID').style.display = "flex";

  runReCreate();
}

function runGoBack(){
  document.getElementById('poemBox').style.display = "flex";
  document.getElementById('wordBox').style.display = "flex";
  document.getElementById('uiBar').style.display = "flex";

  document.getElementById('presetBar').style.display = "none"; 
  document.getElementById('poem').style.display = "none";

  document.getElementById('mainStageNumber').innerHTML = "01";
  document.getElementById('topHeadline').innerHTML = "Create story by clicking the words";
  document.getElementById('goForward').style.display = "flex";
  document.getElementById('goBack').style.display = "none";
  document.getElementById('goBack2').style.display = "none";

  document.getElementById('generatorMode').style.display = "none";
  document.getElementById('finalBar').style.display = "none";

  document.getElementById('canvasID').style.display = "none";

  document.getElementById("switch").checked = false;
  gradientOn = true;
  document.documentElement.style.backgroundImage = "url('resources/grads/ap_gradientArtboard_" + pgGradSelected + ".jpg')";  
}

function runGoBack2(){
  document.getElementById('poemBox').style.display = "none";
  document.getElementById('wordBox').style.display = "none";
  document.getElementById('uiBar').style.display = "none";
  
  document.getElementById('presetBar').style.display = "flex"; 

  document.getElementById('mainStageNumber').innerHTML = "02";
  document.getElementById('goBack').style.display = "flex";
  document.getElementById('goBack2').style.display = "none";

  document.getElementById('generatorMode').style.display = "inline";
  document.getElementById('exportBar').style.display = "none";

  document.getElementById('finalBar').style.display = "none"; 
}

function runGoBack3(){
  resetGenerator();
  document.getElementById('exportBar').style.display = "flex";
  document.getElementById('presetBar').style.display = "none"; 

  document.getElementById('mainStageNumber').innerHTML = "03";
  document.getElementById('goBack').style.display = "none";
  document.getElementById('goBack2').style.display = "flex";
  document.getElementById('goBack3').style.display = "none";

  document.getElementById('generatorMode').style.display = "inline";
  document.getElementById('thankYou').style.display = "none";
  document.getElementById('poem').style.display = "flex";

  document.getElementById('finalBar').style.display = "none";

  document.getElementById('recreate').style.display = "inline";
}

function runExportPage() {
  document.getElementById('presetBar').style.display = "none"; 
  document.getElementById('exportBar').style.display = "flex";

  document.getElementById('mainStageNumber').innerHTML = "03";
  document.getElementById('goBack').style.display = "none";
  document.getElementById('goBack2').style.display = "flex";

  document.getElementById('finalBar').style.display = "none";
}

function runExport(){
  document.getElementById('exportBar').style.display = "none";
  document.getElementById('finalBar').style.display = "flex";

  document.getElementById('mainStageNumber').innerHTML = "04";
  document.getElementById('poem').style.display = "none";
  document.getElementById('thankYou').style.display = "flex";
  document.getElementById('goBack2').style.display = "none";
  document.getElementById('goBack3').style.display = "flex";

  document.getElementById('recreate').style.display = "none";

  exportCore();
}

function runAbout(){
  document.getElementById('allContainer').style.display = "none";
  document.getElementById('aboutContainer').style.display = "flex";
  document.getElementById('thankYou').style.display = "none";

  document.getElementById('goBack3').style.display = "none";
  document.getElementById('goBack4').style.display = "flex";
}

function runAboutBack(){
  document.getElementById('allContainer').style.display = "flex";
  document.getElementById('aboutContainer').style.display = "none";

  document.getElementById('goBack3').style.display = "flex";
  document.getElementById('goBack4').style.display = "none";
}

function runBackToHome(){
  document.getElementById('poemBox').style.display = "flex";
  document.getElementById('wordBox').style.display = "flex";
  document.getElementById('uiBar').style.display = "flex";

  document.getElementById('finalBar').style.display = "none";

  document.getElementById('mainStageNumber').innerHTML = "01";
  document.getElementById('goForward').style.display = "flex";
  document.getElementById('goBack').style.display = "none";
  document.getElementById('goBack2').style.display = "none";
  document.getElementById('goBack3').style.display = "none";

  document.getElementById('generatorMode').style.display = "none";

  document.getElementById('aboutContainer').style.display = "none";
  document.getElementById('allContainer').style.display = "flex";

  document.getElementById('topHeadline').innerHTML = "Create story by tapping the words";
  document.getElementById('thankYou').style.display = "none";

  document.getElementById('generatorStage').style.display = "none";
  document.getElementById('introStage').style.display = "flex";

  document.getElementById('canvasID').style.display = "none";

  document.getElementById("switch").checked = false;

  document.documentElement.style.backgroundImage = "url('resources/grads/ap_gradientArtboard_0.jpg')";
  resetGenerator();
}

function runReCreate(){
  setBkgd();
  setText();

  for(var n = 0; n < mainStory.entries.length; n++){
    mainStory.entries[n].setAnimSets();
  }
}

function setBkgd(){
  var rs0 = round(random(23));

  document.documentElement.style.backgroundImage = "url('resources/grads/ap_gradientArtboard_" + rs0 + ".jpg')";

  pgGradSelected = rs0;
  pgGrad[pgGradSelected] = loadImage("resources/grads/ap_gradientArtboard_" + pgGradSelected + ".jpg");

}

function shuffleWordBank(){
  clearWordBank();
  setWordBank();
  refreshClickAndContainers();
}

function setMakerName(){
  makerName = document.getElementById('makerName').value;
  document.getElementById('thankYou').innerText = "Dear " + makerName + ",\nThank you for creating with us.";
}
