class EntryWord {
  constructor(w_, h_, currentTextSize_, pText_){
    this.w = w_;
    this.h = h_;

    this.currentTextSize = currentTextSize_;
    this.pText = pText_;

    this.imageW = this.w;
    this.imageH = this.h;

    var rs0 = int(random(9));
    this.fontSelect = tFont[rs0];
  }

  update(){

  }

  display(){
    push();
      scale(sliderB);
      // set orig of content to BL
      translate(-this.w/2, this.h/2);
      noStroke();
      fill(foreColor);

      textSize(this.currentTextSize);
      textFont(this.fontSelect );
      
      translate()
      text(this.pText, 0, 0);
    pop();
  }
}