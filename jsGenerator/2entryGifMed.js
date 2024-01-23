class EntryGifMed {
  constructor(w_, h_){
    this.w = w_;
    this.h = h_;

    this.is = int(random(pgGifMedCount));
    this.currentImage = pgGifMed[this.is];

    this.heightRatio = this.currentImage.height/this.currentImage.width;

    this.imageW = this.w;
    this.imageH = this.w * this.heightRatio;

    if(this.imageH > pgGifMed[this.is].height || this.imageW > pgGifMed[this.is].width){
      this.imageW = pgGifMed[this.is].width;
      this.imageH = pgGifMed[this.is].height;
    }
  }

  update(){

  }

  display(){
    push();
      // set orig of content to BL
      translate(-this.w/2, this.h/2);
      
      translate(0, -this.h);            ////// origin to top left
      translate(0, -(this.imageH - this.h)/2);    ////// origin to center image vertically
      // stroke(0,0,255);
      // noFill();
      // rect(0, 0, this.w, this.h);

      image(this.currentImage, 0, 0, this.imageW, this.imageH);
    pop();
  }
}