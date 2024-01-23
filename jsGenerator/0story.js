class Story{
  constructor(){
    this.entries = [];
    this.lineWidths = [];

    this.tracking = 20;
    this.leading = 10;

    this.sizeSelect = 0;
    this.lineH = pgTextSize;
    this.makeEntries();
  }

  makeEntries(){
    var xTab = 0;
    var yTab = 0;
    var rowTab = 0;
    this.setSizeSelect();

    var marker = 0;
    for(var m = 0; m < keyArray.length; m++){
      this.entries[m] = new Entry(xTab, yTab, this.sizeSelect, m, rowTab);

      if(xTab + this.entries[m].w > wWidth){
        for(var p = marker; p < m; p++){
          this.entries[p].x -= xTab/2;
        }
        marker = m;

        xTab = 0;
        rowTab ++;
        this.setSizeSelect();

        yTab += this.lineH + this.leading;
      
        m--;
      } else {
        xTab += this.entries[m].w + this.tracking;
      }
    }

    // FINISH UP THE LAST LINE
    for(var p = marker; p < keyArray.length; p++){
      this.entries[p].x -= xTab/2;
    }
    culmHeight = yTab + this.entries[0].h;
  }

  setSizeSelect(){
    var rs0 = random(100);
    if( rs0 < 50){
      this.sizeSelect = 0;
      this.lineH = pgTextSize * pgFactor;
    } else if(rs0 < 75){
      this.sizeSelect = 1;
      this.lineH = pgTextSize/2 * pgFactor;
    } else {
      this.sizeSelect = 2;
      this.lineH = pgTextSize/4 * pgFactor;
    }
    this.tracking = this.lineH/4;
  }

  update(){
    for(var m = 0; m < this.entries.length; m++){
      this.entries[m].update();
    }
  }

  display(){
    for(var m = 0; m < this.entries.length; m++){
      this.entries[m].display();
    }
  }

}
