var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var minWidthHeight = Math.min(canvas.width, canvas.height);
var maxWidthHeight = Math.max(canvas.width, canvas.height);

var c = canvas.getContext('2d');
var performerArray = [];
var environmentMode = false;

function arcToxy(alpha, radius){
  var x = window.innerWidth/2 + Math.cos(alpha)*radius;
  var y = window.innerHeight/2 + Math.sin(alpha)*radius;
  return [x , y];
}

var mouse = {
  x : undefined,
  y : undefined
}

window.addEventListener('mousemove', function(event){
  mouse.x = event.x;
  mouse.y = event.y;
})

window.addEventListener('resize', function(event){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  minWidthHeight = Math.min(canvas.width, canvas.height);
  init();
})

window.addEventListener('click', function(event){
  //console.log(event);
  environmentMode = !environmentMode;
})


function dist(x,y,xx,yy){
  return Math.sqrt((x-xx)**2 +(y-yy)**2);
}

function performer(alpha, radius, dalpha, dradius){
  this.alpha = alpha;
  this.radius = radius;
  this.dalpha = dalpha;
  this.dradius = dradius;
  this.color = '#00E3CC';
  var xy = [];
  this.draw = function(){
    xy = arcToxy(this.alpha,this.radius);
    c.beginPath();
    c.arc(xy[0], xy[1], 12, 0, 2 * Math.PI, false);
    c.strokeStyle = this.color;
    c.stroke();
    c.fillStyle = this.color;
    c.fill();
  }
  this.update = function() {
    if (this.radius > minWidthHeight/10+minWidthHeight/3 || this.radius < minWidthHeight/3){
      this.dradius = -this.dradius;
    }
    if (environmentMode) {this.alpha += (-averageAcceleration + this.dalpha);} else {this.alpha += this.dalpha;}
    this.radius += this.dradius;
    // if (mouse.x < window.innerWidth/2){
    //   this.color = 'blue';
    // } else this.color = 'red';
    if (dist(mouse.x,mouse.y,xy[0],xy[1]) < 50) {
      env.dalpha -= this.dalpha*5/(150*numberOfPerformers);
      this.dalpha *= 155/150;
    }
  }
}

class Line {
  constructor(alpha1, r1, alpha2, r2){
    this.alpha1 = alpha1;
    this.r1 = r1;
    this.alpha2 = alpha2;
    this.r2 = r2;
  }
}


class Environment {
  constructor(numLines, color){
    this.numlines = numLines;
    this.color = color;
    this.lineArray = [];
    for (var i=0; i < this.numlines; i++){
      this.lineArray.push(new Line(Math.random()*2*Math.PI, Math.random()*maxWidthHeight, Math.random()*2*Math.PI, Math.random()*maxWidthHeight));
    }
  }
  draw() {
    for (var i=0; i < this.numlines; i++){
      var fromxy = arcToxy(this.lineArray[i].alpha1,this.lineArray[i].r1);
      var toxy = arcToxy(this.lineArray[i].alpha2,this.lineArray[i].r2);
      c.beginPath();
      c.moveTo(fromxy[0],fromxy[1]);
      c.lineTo(toxy[0],toxy[1]);
      c.strokeStyle = this.color;
      c.stroke();
    }
  }
  update() {
    for (var i=0; i < this.numlines; i++){
      this.lineArray[i].alpha1+= this.dalpha;
      this.lineArray[i].alpha2+= this.dalpha;
    }
  }
}

var averageAcceleration = 0;

let env = new Environment(10,'#00635A');

var numberOfPerformers = 60;

function init(){
  performerArray = [];
  averageAcceleration = 0;
  for (var i = 0 ; i < numberOfPerformers; i++){
    var alpha = Math.random()*2*Math.PI;
    var radius = Math.random()*minWidthHeight/10+minWidthHeight/3 ;
    var dalpha = -1*Math.random()/150;
    averageAcceleration += dalpha;
    var dradius = Math.random()/140-1/280;
    performerArray.push(new performer(alpha, radius, dalpha, dradius));
  }
  averageAcceleration /= numberOfPerformers;
  env.dalpha = -averageAcceleration;
}

init();

function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0,0,canvas.width,canvas.height);
  if (environmentMode) {
    env.update();

    env.draw();
    for (var i = 0 ; i < performerArray.length; i++){
        performerArray[i].update();
        performerArray[i].draw();
    }
  } else {
    for (var i = 0 ; i < performerArray.length; i++){
      performerArray[i].update();
      performerArray[i].draw();
      env.draw();
    }
  }
}

animate();
