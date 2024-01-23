refreshClickAndContainers();

var coreString = "";

function refreshClickAndContainers(){
  var draggables = document.querySelectorAll('.draggable');
  var containers = document.querySelectorAll('.container');

  draggables.forEach(draggable => {
    draggable.addEventListener('click', () => {
        if(draggable.parentElement.id === "poemBox"){
        // draggable.style.color = 'blue';
        document.getElementById('wordBox').appendChild(draggable);
      } else {
        // draggable.style.color = 'red';
        document.getElementById('poemBox').appendChild(draggable);
      }
    })
  })
}

function assembleString(){
  const currentlySelected = document.getElementById('poemBox').querySelectorAll('.draggable');
  const poemContainer = document.getElementById('poem');

  coreString = "";
  for(var m = 0; m < currentlySelected.length; m++){
    coreString += currentlySelected[m].innerHTML;
    coreString += " ";
    // console.log(currentlySelected[m].getAttribute('value'));
  }
  // console.log(coreString);
  poemContainer.innerText = coreString;

  let maxHeight = 55;
  let numLines = countLines(poemContainer);

  if(numLines > 2){
    poemContainer.style.fontSize = maxHeight/numLines + "px";
  };

}

function countLines(el) {
  var divHeight = el.offsetHeight;
  let lineHeight = 28.8;
  var lines = divHeight/lineHeight;
  return lines;
}