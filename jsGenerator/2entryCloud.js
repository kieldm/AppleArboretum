class EntryCloud {
  constructor(w_, h_){
    this.cloudW = w_;
    this.cloudH = h_/2;

    this.pointCount = 10;
    this.ang = 2*PI/this.pointCount;
    this.x = [];
    this.y = [];
    this.xH = [];
    this.yH = [];

    this.makeCloud();

    this.refreshTimer = 30;
    this.ticker = int(random(this.refreshTimer));

    this.rotSpeed = random(-2, 2)/100;

    this.imageW = this.cloudW;
    this.imageH = this.cloudH;
  }

  update(){
    this.ticker ++;

    if(this.ticker%this.refreshTimer == 0){
      this.makeCloud();
    }
  }

  display(){
    push();
      translate(this.cloudW/2, -this.cloudH/2);

      fill(bkgdColor);
      stroke(foreColor);
      strokeWeight(1);
      // ellipse(0, 0, this.cloudW, this.cloudH);

      beginShape();
        vertex(this.x[0], this.y[0]);
        for(var n = 1; n < this.pointCount; n++){
          bezierVertex(this.xH[n-1], this.yH[n-1], this.xH[n], this.yH[n], this.x[n], this.y[n]);
        }
        bezierVertex(this.xH[this.pointCount-1], this.yH[this.pointCount-1], this.xH[0], this.yH[0], this.x[0], this.y[0]);
      endShape();
    pop();
  }

  makeCloud(){
    for(var n = 0; n < this.pointCount; n++){
      var radRanX = random(this.cloudW/8, this.cloudW/4);
      var radRanY = random(this.cloudH/8, this.cloudH/4);
      var angRad = random(-this.ang/2, this.ang/2);
      var handleLength = random(this.cloudW/4, this.cloudW/2);

      this.x[n] = cos(n * this.ang - angRad + this.ticker * this.rotSpeed) * (this.cloudW - radRanX);
      this.y[n] = sin(n * this.ang - angRad + this.ticker * this.rotSpeed) * (this.cloudH - radRanY);

      this.xH[n] = this.x[n] + cos(n*this.ang - angRad + this.ticker * this.rotSpeed) * handleLength;
      this.yH[n] = this.y[n] + sin(n*this.ang - angRad + this.ticker * this.rotSpeed) * handleLength;
    }
  }
}