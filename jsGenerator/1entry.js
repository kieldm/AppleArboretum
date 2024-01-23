class Entry{
  constructor(x_, y_, sFactor_, index_, row_){
    this.x = x_;
    this.y = y_;
    this.sFactor = sFactor_;
    this.index = index_;
    this.row = row_;

    this.xAnim = 0;
    this.yAnim = 0;
    this.rotAnim = 0;
    this.rotTarget = 0;
    this.directAnim = 1;
    this.scaleAnim = 1;

    var rs0 = random(100);

    this.currentTextSize = pgTextSize;
    if(this.sFactor == 1){
      this.currentTextSize = floor(pgTextSize/2);
    } else if(this.sFactor == 2){
      this.currentTextSize = floor(pgTextSize/4);
    } else {
      this.currentTextSize = pgTextSize;
    }

    this.pText = keyArray[this.index];

    this.h = this.currentTextSize * pgFactor;
    
    this.ticker = this.index * 2;
    this.animWindow = 180;

    this.ticker = 0;

    this.entryArt;
    if(this.pText == "X0"){              ////////////// WHITE OUTLINE
      this.w = random(this.h, this.h * 6);
      this.entryArt = new EntryBox(this.w, this.h);

    } else if(this.pText == "X1"){       ////////////// IMAGE Mid
      this.w = random(this.h * 2, this.h * 4);
      this.entryArt = new EntryImageMid(this.w, this.h);
 
    } else if(this.pText == "X2"){       ////////////// IMAGE small
      this.w = random(this.h/4, this.h/2);
      this.entryArt = new EntryImageSmall(this.w, this.h);
 
    } else if(this.pText == "X3"){       ////////////// IMAGE tall
      // this.w = random(this.h, this.h * 2);
      this.w = random(this.h/8, this.h/3);
      this.entryArt = new EntryImageTall(this.w, this.h);
 
    } else if(this.pText == "X4"){       ////////////// Mumbai Type
      this.w = random(this.h * 2, this.h * 6);
      this.entryArt = new EntryMumbaiType(this.w, this.h);
 
    } else if(this.pText == "X5"){       ////////////// Drawings
      this.w = random(this.h, this.h * 2);
      this.entryArt = new EntryDrawings(this.w, this.h);
 
    } else if(this.pText == "X6"){       ////////////// Gif - Med
      this.w = random(this.h, this.h * 2);
      this.entryArt = new EntryGifMed(this.w, this.h);
 
    } else if(this.pText == "X7"){       ////////////// Gif - Small
      // this.w = random(this.h, this.h * 2);
      this.w = random(this.h * 2, this.h * 4);
      this.entryArt = new EntryGifSmall(this.w, this.h);
 
    } else if(this.pText == "X8"){       ////////////// LARGE
      this.w = random(this.h * 3, this.h * 7);
      this.entryArt = new EntryImageLarge(this.w, this.h);
 
    } else if(this.pText == "X9"){       ////////////// gif - Tall
      this.w = random(this.h/8, this.h/2);
      this.entryArt = new EntryGifTall(this.w, this.h);
 
    } else {                            ////////////// Text
      textSize(this.currentTextSize);
      textFont(tFont[6]);
      this.w = textWidth(this.pText);

      this.entryArt = new EntryWord(this.w, this.h, this.currentTextSize, this.pText);
    }

    this.centerX = this.w/2;
    this.centerY = -this.h/2;
  }

  setAnimSets(){
    this.xAnim = 0;
    this.yAnim = 0;
    this.rotAnim = 0;
    this.directAnim = 1;
    this.scaleAnim = 1;

    this.animWindow = map(sliderA, 0, 1, 60, 300);

    if(animSet == 1){         //////////////////////// My Song
      if(this.row%2 == 0){
        this.directAnim = -1;
        var distDelay = dist(this.x + this.centerX, this.y + this.centerY, width/2, 0);
        this.ticker = map(distDelay, 0, width, this.animWindow/3, 0);
      } else {
        var distDelay = dist(this.x + this.centerX, this.y + this.centerY, width/2, 0);
        this.ticker = map(distDelay, 0, width, 0, this.animWindow/3);
      }

    } else if(animSet == 2){  //////////////////////// Rain
      this.ticker = map(this.index, 0, keyArray.length, this.animWindow, 0);

    } else if(animSet == 3){  //////////////////////// Speed
      var distDelay = dist(this.x + this.centerX, this.y + this.centerY, width/2, 0);
      this.ticker = map(distDelay, 0, width, this.animWindow/3, 0);

    } else if(animSet == 4){  //////////////////////// Kali
      var distDelay = dist(this.x + this.centerX, this.y + this.centerY, width/2, 0);
      this.ticker = map(distDelay, 0, width, 0, this.animWindow/4);

    } else if(animSet == 5){  //////////////////////// Dreams
      var distDelay = dist(this.x + this.centerX, this.y + this.centerY, width/2, 0);
      this.ticker = map(distDelay, 0, width, 0, this.animWindow);

    } else if(animSet == 6){  //////////////////////// Emotion
      this.rotTarget = random(-PI, PI);
      if(this.y + this.centerY < 0){
        this.directAnim = -1;
      }
      this.ticker = random(this.animWindow/4);

    } else if(animSet == 7){  //////////////////////// Paradise
      if(this.x + this.centerX > 0){
        this.directAnim = -1;
      }
      var distDelay = dist(this.x + this.centerX, this.y + this.centerY, 0, 0);
      this.ticker = map(distDelay, 0, width/2, 0, this.animWindow/2);
    }
  }

  update(){
    this.ticker ++;
    if(this.ticker > this.animWindow){
      this.ticker = 0;
    }

    if(animSet == 1){
      this.runMySong();
    } else if(animSet == 2){
      this.runRain();
    } else if(animSet == 3){
      this.runSpeed();
    } else if(animSet == 4){
      this.runKali();
    } else if(animSet == 5){
      this.runDreams();
    } else if(animSet == 6){
      this.runEmotion();
    } else if(animSet == 7){
      this.runParadise();
    }
    this.entryArt.update();
  }

  display(){
    push();
      translate(this.x, this.y);

      // set origin to middle for animation;
      translate(this.centerX, this.centerY);

      // ellipse(0, 0, 10, 10);

      // animate from preset
      translate(this.xAnim, this.yAnim);
      rotate(this.rotAnim);
      scale(this.scaleAnim);

      this.entryArt.display();

      // TEST BOX
      // noFill();
      // stroke(255, 0, 0);
      // rect(-this.w/2, this.h/2, this.w, - this.h);
      // textSize(10);
      // fill(0);
      // text(this.row, 0, 0);
    pop();
  }

  runMySong(){
    if(this.ticker < this.animWindow/2){
      var tk0 = map(this.ticker, 0, this.animWindow/2, 0, 1);
      this.xAnim = map(easeOutCubic(tk0), 0, 1, this.directAnim * width, 0);
      this.yAnim = 0;
    } else {
      var tk0 = map(this.ticker, this.animWindow/2, this.animWindow, 0, 1);
      this.yAnim = map(easeInCubic(tk0), 0, 1, 0, -this.y - height/2 - this.h - this.entryArt.imageH/2);
      this.xAnim = 0;
    }
  }

  runRain(){
    var tk0 = map(this.ticker, 0, this.animWindow, 0, 1);
    this.yAnim = map(easeInCubic(tk0), 0, 1, -this.y - height/2 - this.h - this.entryArt.imageH/2, - this.y + height/2 + culmHeight);
  }

  runSpeed(){
    if(this.ticker < this.animWindow/2){
      var tk0 = map(this.ticker, 0, this.animWindow/2, 0, 1);
      this.xAnim = map(easeOutCubic(tk0), 0, 1, -width, 0);
    } else {
      var tk0 = map(this.ticker, this.animWindow/2, this.animWindow, 0, 1);
      this.xAnim = map(easeInCubic(tk0), 0, 1, 0, width);
    }
  }

  runKali(){
    if(this.ticker < this.animWindow/2){
      var tk0 = map(this.ticker, 0, this.animWindow/2, 0, 1);
      this.yAnim = map(easeInOutElastic(tk0), 0, 1, -100, 100);
      this.rotAnim = map(easeInOutElastic(tk0), 0, 1, PI/16, -PI/16);
    } else {
      var tk0 = map(this.ticker, this.animWindow/2, this.animWindow, 0, 1);
      this.yAnim = map(easeInOutElastic(tk0), 0, 1, 100, -100);
      this.rotAnim = map(easeInOutElastic(tk0), 0, 1, -PI/16, PI/16);
    }
  }

  runDreams(){
    this.yAnim = sin(this.ticker * (2*PI)/this.animWindow) * 100;
    this.xAnim = cos(this.ticker * (2*PI)/this.animWindow) * 50;
    this.rotAnim = cos(this.ticker * (2*PI)/this.animWindow) * PI/8;
  }

  runEmotion(){
    if(this.ticker < this.animWindow * 0.5){
      this.scaleAnim = 1;
      var tk0 = map(this.ticker, 0, this.animWindow * 0.5, 0, 1);
      this.yAnim = map(easeOutElastic(tk0), 0, 1, this.directAnim * (this.y + height/2 + this.h + this.entryArt.imageH/2), 0);
      this.rotAnim = map(easeOutElastic(tk0), 0, 1, this.rotTarget, 0);
    } else {
      var tk0 = map(this.ticker, this.animWindow * 0.5, this.animWindow, 0, 1);
      this.scaleAnim = map(easeInQuint(tk0), 0, 1, 1, 0);
      this.rotAnim = 0;
    }
  }

  runParadise(){
    if(this.ticker < this.animWindow/2){
      var tk0 = map(this.ticker, 0, this.animWindow/2, 0, 1);
      this.rotAnim = this.directAnim * map(easeInOutQuad(tk0), 0, 1, -PI/16, PI/16);
      this.xAnim = this.directAnim * map(easeInOutQuad(tk0), 0, 1, -25, 25);

    } else {
      var tk0 = map(this.ticker, this.animWindow/2, this.animWindow, 0, 1);
      this.rotAnim = this.directAnim * map(easeInOutQuad(tk0), 0, 1, PI/16, -PI/16);
      this.xAnim = this.directAnim * map(easeInOutQuad(tk0), 0, 1, 25, -25);
    }
  }
}