let pontos 
let bonko

let bonk = false;
let yBoula = 200;
let xBoula = 289;
let noitemetro = 22;
let trovao = noitemetro /2;

let VelxBoula = 7;
let VelyBoula = 7;

let tockX = 5;
let tockY = 150;
let tockLong = 10;
let tockAlt = 90;

let tockXmal = 585;
let tockYmal = 150;
let VelYmal

let pigs = 0
let pigsmal = 0

function preload() {
  pontos = loadSound("HAHA.mp3")
  bonko = loadSound("Oink.mp3");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(80, 50, 0); 
  mostraBoula();
  movimentaBoula();
  mostraTock(tockX, tockY);
  mostraTock(tockXmal, tockYmal);
  movimentaTock1();
  movimentaTockmal();
  ColisaoBorda();
  ColisaoTock(tockX, tockY);
  ColisaoTock(tockXmal, tockYmal)
  placar();
  contapigs();
  reset();
}

 function mostraBoula() {
   fill (255, 110, 100)
  circle(xBoula, yBoula, noitemetro);
 }
 function movimentaBoula() {
   xBoula += VelxBoula;
   yBoula -= VelyBoula;
 }
 function ColisaoBorda () {
  if (xBoula + trovao > width || xBoula - trovao < 0) {
    VelxBoula *= -1;
  }
  if (yBoula + trovao > height || yBoula - trovao < 0) {
    VelyBoula *= -1;
  }
 }
 function mostraTock(x, y) {
   fill  (190, 120, 10)
  rect(x, y, tockLong, tockAlt) 
 }

 function movimentaTock1() { 
   if(keyIsDown(87) && tockY > 10) {
     tockY -= 10;
   }
   if(keyIsDown(83) && tockY + tockAlt < height - 10) {
     tockY += 10;
   }
}
 function ColisaoTock(x, y) {
    bonk = collideRectCircle(x, y, tockLong, tockAlt, xBoula, yBoula, trovao);
    if (bonk){
        VelxBoula *= -1;
      bonko.play();
    }
}

function movimentaTockmal() {
    if(keyIsDown(UP_ARROW) && tockYmal > 10) {
     tockYmal -= 10;
   }
   if(keyIsDown(DOWN_ARROW) && tockYmal + tockAlt < height - 10) {
     tockYmal += 10;
}
}

function placar() {
  textAlign(CENTER);
  textSize(20);
  rect(80, 22.5, 40, 20);
  fill(255, 110, 100);
  text(pigs, 100, 40);
  fill(190, 110, 10);
  rect(480, 22.5, 40, 20);
  fill(255, 110, 100);
  text(pigsmal, 500, 40);
}

function contapigs() {
  if(xBoula > 588){
    pigs += 1
    pontos.play();
  }
  if(xBoula < 12){
    pigsmal += 1
    pontos.play();
  }
}

function reset() {
  if (keyIsDown(32)) {
   pigs = 0
   pigsmal = 0
}
}
