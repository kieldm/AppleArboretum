function setText(){
  print(coreString);
  var enteredText = coreString;
  var kt0 = enteredText;
  var kt1 = kt0.replace(/(\r\n|\n|\r)/gm, "");
  keyArray = kt1.split(" ");

  if(keyArray == null){
    keyArray = " ";
  }

  randomInsert();

  mainStory = new Story();
}

function randomInsert(){
  // insert for images - mid
  var r1 = 8;
  for(var r = 0; r<r1; r++){
    var insertPoint = round(random(keyArray.length));

    keyArray.splice(insertPoint, 0, "X1");
  }

  // insert for images - small
  var r2 = 4;
  for(var r = 0; r<r2; r++){
    var insertPoint = round(random(keyArray.length));

    keyArray.splice(insertPoint, 0, "X2");
  }

  // insert for images - tall
  var r3 = 2;
  for(var r = 0; r<r3; r++){
    var insertPoint = round(random(keyArray.length));

    keyArray.splice(insertPoint, 0, "X3");
  }

  // insert for mumbai Type
  var r4 = 0
  // var r4 = 1;
  for(var r = 0; r<r4; r++){
    var insertPoint = round(random(keyArray.length));

    keyArray.splice(insertPoint, 0, "X4");
  }

  // insert for drawings
  var r5 = 3;
  for(var r = 0; r<r5; r++){
    var insertPoint = round(random(keyArray.length));

    keyArray.splice(insertPoint, 0, "X5");
  }

  // insert for gif-med
  var r6 = 3;
  for(var r = 0; r<r6; r++){
    var insertPoint = round(random(keyArray.length));

    keyArray.splice(insertPoint, 0, "X6");
  }

  // insert for gif-small
  var r7 = 2;
  for(var r = 0; r<r7; r++){
    var insertPoint = round(random(keyArray.length));

    keyArray.splice(insertPoint, 0, "X7");
  }

  // insert for images - large
  var r8 = 2;
  for(var r = 0; r<r8; r++){
    var insertPoint = round(random(keyArray.length));

    keyArray.splice(insertPoint, 0, "X8");
  }

  // insert for gif-Large
  var r9 = 2;
  for(var r = 0; r<r9; r++){
    var insertPoint = round(random(keyArray.length));

    keyArray.splice(insertPoint, 0, "X9");
  }
}

function changeAnimSet(val){
  animSet = val;

  for(var n = 0; n < mainStory.entries.length; n++){
    mainStory.entries[n].setAnimSets();
  }
}

function setSliderOne(val){
  sliderA = map(val, 0, 100, 1, 0);

  for(var n = 0; n < mainStory.entries.length; n++){
    mainStory.entries[n].setAnimSets();
  }
}

function setSliderTwo(val){
  sliderB = map(val, 0, 100, 0.2, 3);

  for(var n = 0; n < mainStory.entries.length; n++){
    mainStory.entries[n].setAnimSets();
  }
}

function setExportFormat(val){
  exportFormat = val;
}

function setExportRatio(val){
  exportRatio = val;
}

function setBackground(val){
  if(document.getElementById("switch").checked){
    gradientOn = true;
    document.documentElement.style.backgroundImage = "url('resources/grads/ap_gradient_" + pgGradSelected + ".png')";
  } else {
    gradientOn = false;
    document.documentElement.style.background = "#000";
  }
}

function exportCore(){
  if(exportRatio == 0){
    myCanvas = createCanvas(1080,1080);
    myCanvas.parent("testID");

    if(windowWidth > 750){
      print("NORMAL VERSION")
      canvas.style.maxHeight = "calc(77vh)";
      canvas.style.maxWidth = "calc(77vh)";
    } else {
      print("MOBILE VERSION")
      canvas.style.maxHeight = "calc(90vw)";
      canvas.style.maxWidth = "calc(90vw)";
    }
  } else {
    myCanvas = createCanvas(1080,1920);
    myCanvas.parent("testID");

    if(windowWidth > 750){
      print("NORMAL VERSION")
      canvas.style.maxHeight = "calc(77vh)";
      canvas.style.maxWidth = "calc(43.3vh)";
    } else {
      print("MOBILE VERSION")
      canvas.style.maxHeight = "calc(133.33vw)";
      canvas.style.maxWidth = "calc(75vw)";
    }

  }

  if(exportFormat == 0){
    saveStaticOn = true;
  } else {
    saveMotionOn = true;
    recMessageOn = true;
    setRecorder();
    toggleRecMessage();
  }
}

function setRecorder(){
  cwidth = int(width/2) * 2;
  cheight = int(height/2) * 2;

  numFrames = round(map(sliderA, 0, 1, 60, 300));

  pixelDensity(1);

  HME.createH264MP4Encoder().then(enc => {
    encoder = enc;
    encoder.outputFilename = 'TodayAtApple_CreateStory_w' + makerName;
    encoder.pixelDensity = 2;
    encoder.width = cwidth * 1;
    encoder.height = cheight * 1;
    encoder.frameRate = frate;
    encoder.kbps = 50000; // video quality
    encoder.groupOfPictures = 5; // lower if you have fast actions.
    encoder.initialize();
  })
}

function toggleRecMessage(){
  if(recMessageOn){
    document.getElementById('recMessage').style.display = "inline";
  } else {
    document.getElementById('recMessage').style.display = "none";
  }
}
