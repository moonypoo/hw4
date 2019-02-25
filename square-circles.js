function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();

  x.push(mouseX); // equivalent to append(x, mouseX)
  y.push(mouseY); // equivalent to append(y, mouseY)

  for (var i = 0; i < x.length; i = i + 10) {
    var w = 1 + (x.length - i);
    //rect(x[i] - w/2, y[i] - w/2, w, w);
    rect(x[i], y[i], w, w)
  }

  x = x.slice(-150); // keep the last 50 x values
  y = y.slice(-150); // keep the last 50 y values
}
