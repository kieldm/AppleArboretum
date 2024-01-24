setWordBank();

function setWordBank(){
  var sets = [];

  // var set0string = "City of Dreams , Are you real just for me ?"
  // sets[0] = set0string.split(" ");
  // var set1string = "music to fill a joy inspire of heartfelt motion souls a the Kaali Peeli move in a world prove this that paradise is to emotion nothing journey taxi on symphony"
  // sets[1] = set1string.split(" ");
  // var set2string = "the sweetest droplet that can dance night long in the paradise of harmony no thunder only silver mist in the rain I find fades away whisper secrets in love of forever in this place"
  // sets[2] = set2string.split(" ");
  // var set3string = "A land where passions dance in perfect motion amid chaos is peace and all the worries and fears cease. where dreams get real making a new life."
  // sets[3] = set3string.split(" ");
  // var set4string = "The city hums with life and energy, A place where love and hope are free. From crowded streets to tranquil shores This Paradise has beauty in all its scores."
  // sets[4] = set4string.split(" ");
  // var set5string = "The scents of spices fill The air as colorful saris and bazaars are everywhere. From Bollywood to cricket the city thrives And every soul here truly feels alive. Oh Bombay you paradise where my heart sings my destiny."
  // sets[5] = set5string.split(" ");
  // var set6string = "Let your heart beat to the rhythm of Mumbai, let your dreams take flight in this city of endless possibilities, Everything is possible, and everything is right."
  // sets[6] = set6string.split(" ");
  // var set7string = "​​The dreams of millions come alive, In the streets of this bustling town, and in every corner, there's a story to be told, of a struggle, of triumph, of love that knows no bound."
  // sets[7] = set7string.split(" ");
  // var set8string = "The rickety car takes me on a ride, As I sing my songs with joyous pride, My melodies blend with the honking sound, And the rhythm of the city that surrounds. The driver hums along with my tune, And the passengers join in soon Together we create a musical scene That feels like a blissful dream."
  // sets[8] = set8string.split(" ");
  // var set9string = "The heart of business, the beating soul, people rush, from morning to night, making deals and taking flights. Amid the chaos, there's a calm, A place to breathe, a soothing balm."
  // sets[9] = set9string.split(" ");
  // var set10string = "Dear BKC , A true wonder, for all to see. May you keep shining, forevermore, And remain the heart of Mumbai's core. The Mithi river flows by your side, A serene beauty for this urban ride."
  // sets[10] = set10string.split(" ");
  // var set11string = "Their hearts are big, their spirit high, Mumbaikars never let the city die. With their infectious energy and zeal, They make Mumbai a city that's surreal. They're fighters, survivors, and dreamers too. They keep Mumbai alive, always thriving, the soul of the city."
  // sets[11] = set11string.split(" ");
  // var set12string = "And as we gaze out to the horizon, Where the sea and sky unite, We're reminded of Mumbai's resilience, And its unbreakable spirit. The salty air fills our lungs, And we breathe in the ocean's might."
  // sets[12] = set12string.split(" ");
  // var set13string = "Mumbai 2.0, a new chapter begins, With hopes and dreams ready to take on the world, With a spirit never to be curled. This city that never gives up, and always bounces back with a strong cup."
  // sets[13] = set13string.split(" ");
  // var set14string = "Breaking through glass ceilings, she rises up, and fearlessly shouts: I will not be held back, by norms, I will climb higher, and break through the barriers that were meant to last."
  // sets[14] = set14string.split(" ");
  // var set15string = "Sleep, my little one, with a smile, close your eyes and drift away As the night turns into day Mumbai will be here when you awake with new stories and adventures to make."
  // sets[15] = set15string.split(" ");

  var set0string = "Ears to the ground heart on the horizon"
  sets[0] = set0string.split(" ");
  var set1string = "Breathe with each leaf you paint Dawn and a bit After to Savour The First Rays of dew hand-made or Machine-made Paintings Each Leaf Like Pixel"
  sets[1] = set1string.split(" ");
  var set2string = "Seeing the wind Hearing the rain Breathe deep sleep dream imagine dare surrender hands eyes fingers linger calm beat heart Feel Dawn whispers softly Golden light"
  sets[2] = set2string.split(" ");
  var set3string = "Embrace a silent hush, Nature awakens A bit after dawn Gentle breeze caresses Leaves Listen to the Earth Rustling secrets in the breeze Heart beats with the sun Ground's Embrace a song"
  sets[3] = set3string.split(" ");
  var set4string = "Head on the horizon hums Nature symphony Morning quiet dance To savor the morn Cherish first Rays of dew Nature's sweet Delight First drop of the Sun"
  sets[4] = set4string.split(" ");
  var set5string = "Ripened fruit whispers Fortune Luck arrives with dawn Season's gift descends Fortune drips from nature's hand harvested luck blooms fruit's sweet anticipation luck drips a golden dance nature's blessing falls bit by bit"
  sets[5] = set5string.split(" ");
  var set6string = "minute by minute Hour by hour second by day by year by mountain jungle a sanctuary of green majestic heights a world unseen step by Step on this sacred trail"
  sets[6] = set6string.split(" ");
  var set7string = "nature's harmony where dreams set sail mist kissed peaks and a canvas of trees secrets of the wild carried by the breeze"
  sets[7] = set7string.split(" ");
  var set8string = "each step echoes with the mountain's song, in the heart of nature where I belong rivers sing tales as they wind and flow creatures unseen in the jungle's shadow amongst the peaks where eagles soar nature's embrace forevermore"
  sets[8] = set8string.split(" ");
  var set9string = "forgive forget forever sunset paints the Sky with hues untold a symphony of colors a sight to behold In the mountain's arms a tranquil balm, a journey of discovery a nature psalm"
  sets[9] = set9string.split(" ");
  var set10string = "sacred song or poem sacred rhyme a mountain jungle adventure frozen in time awake in the wild leaves cradle dreams in my hand jungle's gentle touch"
  sets[10] = set10string.split(" ");
  var set11string = "soil breathes life a fragrant dance soak in nature's grace"
  sets[11] = set11string.split(" ");


  runRandomSet(0);

  ////// POETIC WORDS
  var rs00 = Math.floor(Math.random() * sets.length);
  let setsCount = sets[rs00].length;
  for(var m = 0; m < setsCount; m++){
    var newWord = document.createElement('p');
    newWord.innerHTML = sets[rs00][m];
    newWord.className = "draggable";
    newWord.draggable = true;

    var parentDiv = document.getElementById('wordBox');  
    parentDiv.appendChild(newWord);
    runRandomSet(rs00);
  }

  ////// PUNCTUATIONS 
  let punctuationsCount = 5;
  var punctuations = [
    '=', '?', '@', '/', '!', '*'
  ]
  for(var m = 0; m < punctuationsCount; m++){
    var rs0 = Math.floor(Math.random() * punctuations.length);

    var newWord = document.createElement('p');
    newWord.innerHTML = punctuations[rs0];
    newWord.className = "draggable";
    newWord.draggable = true;

    var parentDiv = document.getElementById('wordBox');  
    parentDiv.appendChild(newWord);
    runRandomSet(rs00);
  }
}

function runRandomSet(setNum){
  var randomTries = 2;
  if(setNum == 5 || setNum == 8 || setNum == 11){
    randomTries = 1;
  }
  for(var m = 0; m < randomTries; m++){
    var rs0 = Math.floor(Math.random() * 10);
    if(rs0 < 5){
      var newBlank = document.createElement('p');
      newBlank.className = "draggable";
      newBlank.className = "empty";
      var rs1 = Math.floor(Math.random() * 75);
      newBlank.style.width = rs1 + "px";
      newBlank.draggable = true;
  
      var parentDiv = document.getElementById('wordBox');  
      parentDiv.appendChild(newBlank);
    }
  }
}

function clearPoemBank(){
  print("CLEAR PHONE BANK");

  var p_list = document.getElementsByTagName("p");

  for(var i=p_list.length-1; i>=0; i--){
    var p = p_list[i];
    if(p.parentElement.id === "poemBox"){
      p.parentNode.removeChild(p);
    }
  }
}

function clearWordBank(){
  var p_list = document.getElementsByTagName("p");

  for(var i=p_list.length-1; i>=0; i--){
    var p = p_list[i];
    if(p.parentElement.id === "poemBox"){
    } else if(p.className === "draggable" || p.className ==="empty"){
        p.parentNode.removeChild(p);
    }
  }
}