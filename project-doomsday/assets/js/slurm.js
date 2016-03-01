var fratica = document.getElementsByClassName('greenish');
for(var i = 0; i < fratica.length; i++) {
  fratica[i].addEventListener('click', changeBg);
}

function changeBg(event) {
  var evClass = event.currentTarget.classList;
  var evChild = event.currentTarget.children[3].classList;
  if(evClass.contains("old-green")) {
    for(var i = 0; i < fratica.length; i++) {
      fratica[i].classList.remove("new-green");
      fratica[i].classList.add("old-green");
      fratica[i].children[3].classList.remove("new-green");
      fratica[i].children[3].classList.add("old-green");
    }
    evClass.remove("old-green");
    evClass.add("new-green");
    evChild.remove("old-green");
    evChild.add("new-green");

  } else {
    evClass.remove("new-green");
    evClass.add("old-green");
    evChild.remove("new-green");
    evChild.add("old-green");
  }
}

var stanga = document.getElementsByClassName('slide-left');
var dreapta = document.getElementsByClassName('slide-right');
stanga[0].addEventListener('click', manSlide);
dreapta[0].addEventListener('click', manSlide);
var slider = document.getElementsByClassName('slide');

var slides = 0;
slide();


function slideTimer() {
  if(slides <= 1){
  slides += 1;
  slide();
} else {
  slides = 0;
  slide();
} };
var interval = setInterval(slideTimer, 3000);

function slide() {
  if(slides == 0) {
    slider[1].style.display = "none";
    slider[2].style.display = "none";
    slider[0].style.display = "block";
  } else if(slides == 1) {
    slider[1].style.display = "block";
    slider[2].style.display = "none";
    slider[0].style.display = "none";
  } else if (slides == 2) {
    slider[1].style.display = "none";
    slider[2].style.display = "block";
    slider[0].style.display = "none";
  }
}
function manSlide(event) {
      if(event.currentTarget.classList.contains('slide-left')) {
        clearInterval(interval);
        if(slides > 0) {
          slides -= 1;
          slide();
          interval = setInterval(slideTimer, 3000);
        } else {
          slides = 3;
          slide();
          interval = setInterval(slideTimer, 3000);
        }
    }else {
      clearInterval(interval);
      if(slides <= 1) {
        slides += 1;
        slide();
        interval = setInterval(slideTimer, 3000);
      } else {
        slides = 0;
        slide();
        interval = setInterval(slideTimer, 3000);
      }
    }
}
var elements = 0;
var cloneus = document.getElementById('cloneus');
var afterThis = document.getElementById('afterThis');
var Clone1 = document.getElementById('1stClone');
var Clone2 = document.getElementById('2stClone');
var Clone3 = document.getElementById('3stClone');

function doSomething() {
  var lastRowCount = document.getElementsByClassName('rowList');
  var lastRow = lastRowCount[lastRowCount.length -1];
  if(elements == 0) {
    var newDiv = document.createElement("div");
    var newCol2 = document.createElement("div");
    var newCol10 = document.createElement("div");
    var newRow = document.createElement("div");

    newDiv.className = 'row height200px margin-js rowList relative';
    lastRow.parentNode.insertBefore(newDiv, lastRow.nextSibling);
    newCol2.className = 'col-md-2';
    newCol10.className = 'col-md-10';
    newRow.className = 'row';
    lastRow = lastRowCount[lastRowCount.length -1];
    lastRow.appendChild(newCol2);
    lastRow.appendChild(newCol10);
    lastRow.children[1].appendChild(newRow);
  }
  if(elements == 1) {
    var elem1 = Clone1.cloneNode(true);
    lastRow.children[1].children[0].appendChild(elem1);
  }
  if(elements == 2) {
    var elem2 = Clone2.cloneNode(true);
    lastRow.children[1].children[0].appendChild(elem2);
  }
  if(elements == 3) {
    var elem3 = Clone3.cloneNode(true);
    lastRow.children[1].children[0].appendChild(elem3);
  }
  elements += 1;
  if(elements > 3) {
    elements = 0;
  }
}
