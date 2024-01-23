class EntryBox {
  constructor(w_, h_){
    this.w = w_;
    this.h = h_;

    this.imageW = this.w;
    this.imageH = this.h;
  }

  update(){

  }

  display(){
    push();
      // set orig of content to BL
      translate(-this.w/2, this.h/2);
      noFill();
      stroke(foreColor);

      rect(0, 0, this.w, -this.h);
    pop();
  }
}