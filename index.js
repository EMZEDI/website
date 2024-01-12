// How to implement the text animation using js is below
/*

var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter() {

  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;

    setTimeout(typeWriter, speed);
  }
  else {
    i = 0;
    document.getElementById("demo").innerHTML = "";
    setTimeout(typeWriter, speed);
  }
}

// A function that calls typeWriter() everytime it finishes typing the text
typeWriter(); 
*/
