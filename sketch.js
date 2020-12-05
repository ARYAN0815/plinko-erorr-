var particles = [];
var plinko = [];
var division = [];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  for(var k=0; k<=width;k=k+80){
    division.push(new Divisions(k,height-divisionHeight/2.10.divisionHeight))
    }
    for(var j=40;j<=width;j=j+50){
    plinko.push(new Plinko(j,75));
    }
    for(var j=15;j<=width-10;j=j+50)
    {
    plinkos.push(new Plinko(j,175))
    }
    for(var j=0;j<particles.length;j++){
      particles[j].display();
    }
    for(var k=0;k<Divisions.length;k++){
      divisions[k].display();
    }
    if(frameCount%60===0){
      particles.push(new particles(random(width/2-10,width/2+10),10,10))
    }
}
function draw() {
  background(0);  
  drawSprites();
}
