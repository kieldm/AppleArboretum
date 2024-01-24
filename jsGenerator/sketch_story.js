var tFont = [];
var pgTextSize = 120;
var pgFactor = 0.75;
var bkgdColor, foreColor;

var coreString = "";
var keyArray = [];
var coreCounter = 0;

var pgImagesLargeCount = 18;
var pgImagesLarge = [];
var pgImagesMidCount = 36;
var pgImagesMid = [];
var pgImagesSmallCount = 59;
var pgImagesSmall = [];
var pgImagesTallCount = 18;
var pgImagesTall = [];
// var pgMumbaiTypeCount = 17;
// var pgMumbaiType = [];
var pgDrawingsCount = 47;
var pgDrawings = [];

var pgGifMedCount = 24;
var pgGifMed = [];
var pgGifSmallCount = 19;
var pgGifSmall = [];
var pgGifTallCount = 7;
var pgGifTall = [];

var pgGradSelected = 0;
var pgGradCount = 25;
var pgGrad = [];

var makerName = "Friend";

var wWidth;
var culmHeight = 0;

var colorG = [];

var mainStory;

var myCanvas;

var animSet = 0;

var exportFormat = 0;
var exportRatio = 0;

var frate = 30;
var saveStaticOn = false;
var saveMotionOn = false;
var cwidth, cheight;
var thisDensity;
var recordedFrames = 0;
var numFrames = 120;

var gen_cs, gen_title, gen_arrow;
var gen_csWh, gen_titleWh, gen_arrowWh;
var gen_appleWh, gen_apple;

var sliderA = 0.5;
var sliderB = 1;

var tempFrameSave = false;

var nudgeX, nudgeY;

var gradientOn = true;

var recMessageOn = false;
var mobileScale = 1;

function preload(){
  tFont[0] = loadFont("resources/SFText-1Ultralight.otf");
  tFont[1] = loadFont("resources/SFText-2Light_Italic.otf");
  tFont[2] = loadFont("resources/SFText-3Book.otf");
  tFont[3] = loadFont("resources/SFText-4Regular.otf");
  tFont[4] = loadFont("resources/SFText-5Medium_Italic.otf");
  tFont[5] = loadFont("resources/SFText-6Bold_Italic.otf");
  tFont[6] = loadFont("resources/SFText-6Bold.otf");
  tFont[7] = loadFont("resources/NewYork.ttf");
  tFont[8] = loadFont("resources/NewYorkItalic.ttf");
  tFont[9] = loadFont("resources/SFText-5Medium.otf");

  for(var n = 0; n < pgImagesLargeCount; n++){
    pgImagesLarge[n] = loadImage("jsGenerator/resources/images_large/large-" + n + ".png");
  }

  for(var n = 0; n < pgImagesMidCount; n++){
    pgImagesMid[n] = loadImage("jsGenerator/resources/images_mid/mid-" + n + ".png");
  }
  for(var n = 0; n < pgImagesSmallCount; n++){
    pgImagesSmall[n] = loadImage("jsGenerator/resources/images_small/small-" + n + ".png");
  }
  for(var n = 0; n < pgImagesTallCount; n++){
    pgImagesTall[n] = loadImage("jsGenerator/resources/images_tall/tall-" + n + ".png");
  }
  // for(var n = 0; n < pgMumbaiTypeCount; n++){
  //   pgMumbaiType[n] = loadImage("jsGenerator/resources/mumbai_type/mumbai_type-" + n + ".png");
  // } 
  for(var n = 0; n < pgGifMedCount; n++){
    pgGifMed[n] = loadImage("jsGenerator/resources/gif_med/gifMed-" + n + ".gif");
  }
  for(var n = 0; n < pgGifSmallCount; n++){
    pgGifSmall[n] = loadImage("jsGenerator/resources/gif_small/gifSmall-" + n + ".gif");
  }

  for(var n = 0; n < pgGifTallCount; n++){
    pgGifTall[n] = loadImage("jsGenerator/resources/gif_tall/gifTall-" + n + ".gif");
  }

  for(var n = 0; n < pgDrawingsCount; n++){
    pgDrawings[n] = loadImage("jsGenerator/resources/drawings/drawings-" + n + ".png");
  }

  for(var n = 0; n < pgGradCount; n++){
    pgGrad[n] = loadImage("resources/grads/ap_gradientArtboard_" + n + ".jpg");
  }

  gen_csWh = loadImage("resources/gen_cs_wh.png");
  gen_titleWh = loadImage("resources/gen_title_wh.png");
  gen_arrowWh = loadImage("resources/gen_arrow_wh.png");
  gen_appleWh = loadImage("resources/apple_logo_white.png");

  gen_cs = gen_csWh;
  gen_title = gen_titleWh;
  gen_arrow = gen_arrowWh;
  gen_apple = gen_appleWh;
}

function setup(){
  // var canvasW = int((windowWidth * 0.9) * 0.8);
  // var canvasH = int((windowHeight * 0.9) * 0.9);

  var canvasW = windowWidth;
  var canvasH = windowHeight;

  myCanvas = createCanvas(canvasW, canvasH);
  myCanvas.parent("canvasID");

  cwidth = int(width/2) * 2;
  cheight = int(height/2) * 2;

  thisDensity = pixelDensity();

  frameRate(frate);

  // wWidth = width - 100;
  if(windowWidth > 750){          ////////////////// SET NORMAL PARAMETERS
    mobileScale = 1;
    pgTextSize = 120;

    wWidth = round(width * 0.8);

    nudgeX = (width/2 - ((width * 0.9) * 0.8)/2)/2;
    nudgeY = (height/2 - ((height * 0.9) * 0.8)/2)/2;
  } else {                        ////////////////// SET MOBILE PARAMETERS
    mobileScale = 1.5;
    pgTextSize = 80;
    wWidth = round(width * 0.9);

    nudgeX = 0;
    nudgeY = -(height/2 - ((height * 0.9) * 0.8)/2)/2;
  }

  bkgdColor = color('#000000');
  foreColor = color('#ffffff');

  setText();
}

function draw(){
  clear();

  if(saveStaticOn || saveMotionOn || tempFrameSave){
    if(gradientOn == false){
      background(bkgdColor);
    } else {
      if(exportRatio == 0){
        image(pgGrad[pgGradSelected], 0, 0, 1440, 1080);
      } else {
        image(pgGrad[pgGradSelected], 0, 0, 2544, 1920);
      }
    }
  
    fill(foreColor);
    noStroke();
    
    if(exportRatio == 0){           ////////////////// SQUARE
      textSize(30);
      textFont(tFont[9]);
      textAlign(LEFT)
      text("Today at Apple",45, 80);
      text("ARBORETUM", 400, 80);
      textFont(tFont[2]);
      // text("BKC",45, 120);
      textSize(25);
      text("By " + makerName, 45, 1030);
      text("Thukral & Tagra", 400, 1030);
      textAlign(RIGHT)
      text("#AppleArboretum", 995, 1030);

      // image(gen_apple, 940, 50, 66, 82);
      image(gen_apple, 940, 54, 53, 66);
    } else {                       ////////////////// VERICAL
      textSize(30);
      textFont(tFont[9]);
      textAlign(LEFT)

      text("Today at Apple",45, 250);
      text("ARBORETUM", 400, 250);
      textFont(tFont[2]);
      // text("BKC",45, 290);
      textSize(25);
      text("By " + makerName, 45, 1678);
      text("Thukral & Tagra", 400, 1678);
      textAlign(RIGHT)
      text("#AppleArboretum", 995, 1678);

      // image(gen_apple, 940, 220, 66, 82);
      image(gen_apple, 940, 220, 53, 66);
    }
  }
  //CANVAS TEST
  // stroke(foreColor);
  // noFill();
  // line(0, 0, width, height);
  // line(width, 0, 0, height);
  // rect(0, 0, width, height);

  push();
    if(saveStaticOn || saveMotionOn || tempFrameSave){

    } else {
      translate(-nudgeX, nudgeY);
    }
    translate(width/2, height/2);
    if(saveStaticOn || saveMotionOn || tempFrameSave){
      scale(mobileScale);
    }
    // noStroke();
    // fill(0,255,0);
    // ellipse(0, 0, 5, 5);

    // for seeing out of bounds
    // scale(0.5);
    // noFill();
    // stroke(255);
    // rect(-width/2, -height/2, width, height);

    push();
      translate(0, -culmHeight/2 + mainStory.entries[0].h);
      mainStory.update();
      mainStory.display();
    pop();


    // noFill();
    // stroke(0, 0, 255);
    // rect( -wWidth/2, -height/2, wWidth, height);
    // rect( -width/2, -height/2, width, height);

    // ellipse(0, 0, 30, 30);
  pop();

  // SAVE STATIC
  if(saveStaticOn){
    // saveCanvas('TodayAtApple_CreateStory_w'+makerName,'jpg');
    save('TodayAtApple_CreateStory.jpg');
    saveStaticOn = false;

    tempFrameSave = true;
    // resetGenerator();
  }

  if(tempFrameSave){

    noLoop();
    // if(exportRatio == 0){
    //   canvas.style.maxHeight = "calc(77vh)";
    //   canvas.style.maxWidth = "calc(77vh)";
    // } else if(exportRatio == 1){
    //   canvas.style.maxHeight = "calc(77vh)";
    //   canvas.style.maxWidth = "calc(43.3vh)";
    // }
    tempFrameSave = false;
  }

  // SAVE MOTION
  if (saveMotionOn) {
    console.log('recording');
    encoder.addFrameRgba(drawingContext.getImageData(0, 0, encoder.width, encoder.height).data);
    recordedFrames++;
  }
  if (recordedFrames === numFrames) {
    saveMotionOn = false;
    recordedFrames = 0;
    console.log('recording stopped');

    encoder.finalize();
    const uint8Array = encoder.FS.readFile(encoder.outputFilename);
    const anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(new Blob([uint8Array], { type: 'video/mp4' }));
    anchor.download = encoder.outputFilename;
    anchor.click();
    encoder.delete();

    // setRecorder(); // reinitialize encoder

    recMessageOn = false;
    toggleRecMessage();
    // pixelDensity(thisDensity);
    // resetGenerator();
    tempFrameSave = true;
  }

}

function resetGenerator(){
  console.log("RESET THE SYSTEM!")
  canvas.style.maxHeight = "100%";
  canvas.style.maxWidth = "100%";
  loop();
  saveStaticOn = false;

  bkgdColor = color('#000000');
  foreColor = color('#ffffff');

  var canvasW = windowWidth;
  var canvasH = windowHeight;
  
  myCanvas = createCanvas(canvasW, canvasH);
  myCanvas.parent("canvasID");
  pixelDensity(thisDensity);
  
  cwidth = int(width/2) * 2;
  cheight = int(height/2) * 2;
}

function windowResized(){
  var canvasW = windowWidth;
  var canvasH = windowHeight;
  
  myCanvas = createCanvas(canvasW, canvasH);
  myCanvas.parent("canvasID");
  pixelDensity(thisDensity);
  
  cwidth = int(width/2) * 2;
  cheight = int(height/2) * 2;
}

