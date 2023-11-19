var  PLAY = 1;
var END1 = 0;
var serve = -1;
var gameState = serve;

var cuboOver,cuboOverimg;
var cubo,cuboimg;
var n1,n2,n3,n4,n5,n6,nimg;

var pared1,pared2,pared3,pared4,pared5,pared6,pared7,pared8,pared9,pared10,pared11,pared12,pared13,pared14,pared15,pared16,pared17,pared18,pared19,pared20,pared21,pared22,pared23,pared24,pared25,pared26,pared27,pared28,pared29,pared30,pared31,pared32,pared33,pared34,pared35,pared36,pared37,pared38,pared39,pared40,pared41,pared42,pared43,pared44,pared45,pared46,pared47,pared48,pared49,pared50,pared51,pared52,pared53,pared54,pared55,pared56,pared57,pared58,pared59,pared60,pared61,pared62,pared63,pared64,pared65,pared66,paredinv1;
var zona1,zona2;

var background,backgroundimg;

var points1,points2,points3,points4,points5,points6,pointsimg;

var controles,controlesimg;

var trofeo,trofeoimg;

var score = 0;
var puntos = 0

function preload(){
cuboimg = loadImage("cubo.png");
cuboOverimg = loadImage("cubo over.png");
nimg = loadImage("enemigo.png");
controlesimg = loadImage("controles.png");
trofeoimg = loadImage("trofeo.png");
pointsimg = loadImage("puntos.png");
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 
 zona1=createSprite(120,445,80,190);
 zona1.shapeColor=("LightBlue");

 points1=createSprite(710,446,100,50)
 points1.addImage(pointsimg)
 points1.scale=0.1

 points2=createSprite(805,446,100,50);
 points2.addImage(pointsimg);
 points2.scale=0.1;

 points3=createSprite(1175,220,100,50);
 points3.addImage(pointsimg);
 points3.scale=0.1;

 points4=createSprite(1174,675,100,50)
 points4.scale=0.1;
 points4.addImage(pointsimg);

 points5=createSprite(1400,590,100,50)
 points5.scale=0.1;
 points5.addImage(pointsimg);

 points6=createSprite(1400,303,100,50)
 points6.scale=0.1;
 points6.addImage(pointsimg);

 zona2=createSprite(1415,440,75,150);
 zona2.shapeColor=("LightYellow");

 trofeo=createSprite(1415,400,75,150);
 trofeo.addImage(trofeoimg);
 trofeo.scale=0.3;

 paredinv1 = createSprite(525,440,10,190);
 paredinv1.visible=false;
 
 controles=createSprite(150,height-90,20,50);
 controles.addImage(controlesimg);
 

 n4 = createSprite(400,height-300,20,50);
 n4.addImage(nimg);
 n4.scale=0.2;
 n4.velocityY=3;

 n3 = createSprite(340,height-300,20,50);
 n3.addImage(nimg);
 n3.scale=0.2;
 n3.velocityY=-3;

 n2 = createSprite(270,height-300,20,50);
 n2.addImage(nimg);
 n2.scale=0.2;
 n2.velocityY=3;

 n1 = createSprite(200,height-300,20,50);
 n1.addImage(nimg);
 n1.scale=0.2;
 n1.velocityY=-3;

 cubo = createSprite(100,height-300,20,50);
 cubo.addImage(cuboimg);
 cubo.scale=0.4;

//paredes
pared1=createSprite(300,350,450,10);
pared2=createSprite(300,540,450,10);
pared3=createSprite(78,445,10,200);
pared4=createSprite(525,280,10,150);
pared5=createSprite(525,610,10,150);
pared6=createSprite(775,680,490,10);
pared7=createSprite(770,200,500,10);
pared8=createSprite(700,370,10,110);
pared9=createSprite(700,510,10,100);
pared10=createSprite(720,465,30,10);
pared11=createSprite(730,445,10,30);
pared12=createSprite(715,425,40,10);
pared13=createSprite(815,560,240,10);
pared14=createSprite(820,320,230,10);
pared15=createSprite(940,355,10,80);
pared16=createSprite(940,525,10,80);
pared17=createSprite(910,490,60,10);
pared18=createSprite(880,505,10,40);
pared19=createSprite(810,520,144,10);
pared20=createSprite(734,445,10,160);
pared21=createSprite(808,370,140,10);
pared22=createSprite(912,400,66,10);
pared23=createSprite(880,385,10,40);
pared24=createSprite(1015,300,10,210);
pared25=createSprite(1015,580,10,190);
pared26=createSprite(1040,490,50,10);
pared27=createSprite(1040,400,50,10);
pared28=createSprite(1060,315,10,170);
pared29=createSprite(1060,570,10,170);
pared30=createSprite(1105,230,100,10);
pared31=createSprite(1105,660,100,10);
pared32=createSprite(1150,680,10,30);
pared33=createSprite(1168,695,46,10);
pared34=createSprite(1196,677,10,46);
pared35=createSprite(1150,210,10,30);
pared36=createSprite(1170,200,46,10);
pared37=createSprite(1198,216,10,42);
pared38=createSprite(1235,232,75,10);
pared39=createSprite(1235,659,75,10);
pared40=createSprite(1270,317,10,180);
pared41=createSprite(1270,574,10,180);
pared42=createSprite(1280,480,30,10);
pared43=createSprite(1280,410,30,10);
pared44=createSprite(1300,365,10,100);
pared45=createSprite(1300,525,10,100);
pared46=createSprite(1470,320,70,10);
pared47=createSprite(1470,570,70,10);
pared48=createSprite(1500,445,10,260);
pared49=createSprite(1375,445,10,150);
pared50=createSprite(1410,520,80,10);
pared51=createSprite(1410,370,80,10);
pared52=createSprite(1450,396,10,62);
pared53=createSprite(1450,494,10,62);
pared54=createSprite(1340,570,80,10);
pared55=createSprite(1340,320,80,10);
pared56=createSprite(1375,590,10,33);
pared57=createSprite(1400,610,60,10);
pared58=createSprite(1430,590,10,50);
pared59=createSprite(1375,300,10,33);
pared60=createSprite(1400,280,60,10);
pared61=createSprite(1430,300,10,50);
pared62=createSprite(830,445,10,70);
pared63=createSprite(810,478,50,10);
pared64=createSprite(810,410,50,10);
pared65=createSprite(780,416,10,22);
pared66=createSprite(780,472,10,22)
 score = 0; 
}

function draw() {
background("white");
//n1.debug=true
//cubo.debug=true

//colision con paredes
cubo.setCollider("rectangle",0,0,70,65);
cubo.bounceOff(pared1);
cubo.bounceOff(pared2);
cubo.bounceOff(pared3);
cubo.bounceOff(pared4);
cubo.bounceOff(pared5);
cubo.bounceOff(pared6);
cubo.bounceOff(pared7);
cubo.bounceOff(pared8);
cubo.bounceOff(pared9);
cubo.bounceOff(pared10);
cubo.bounceOff(pared11);
cubo.bounceOff(pared12);
cubo.bounceOff(pared13);
cubo.bounceOff(pared14);
cubo.bounceOff(pared15);
cubo.bounceOff(pared16);
cubo.bounceOff(pared17);
cubo.bounceOff(pared18);
cubo.bounceOff(pared19);
cubo.bounceOff(pared20);
cubo.bounceOff(pared21);
cubo.bounceOff(pared22);
cubo.bounceOff(pared23);
cubo.bounceOff(pared24);
cubo.bounceOff(pared25);
cubo.bounceOff(pared26);
cubo.bounceOff(pared27);
cubo.bounceOff(pared28);
cubo.bounceOff(pared29);
cubo.bounceOff(pared30);
cubo.bounceOff(pared31);
cubo.bounceOff(pared32);
cubo.bounceOff(pared33);
cubo.bounceOff(pared34);
cubo.bounceOff(pared35);
cubo.bounceOff(pared36);
cubo.bounceOff(pared37);
cubo.bounceOff(pared38);
cubo.bounceOff(pared39);
cubo.bounceOff(pared40);
cubo.bounceOff(pared41);
cubo.bounceOff(pared42);
cubo.bounceOff(pared43);
cubo.bounceOff(pared44);
cubo.bounceOff(pared45);
cubo.bounceOff(pared46);
cubo.bounceOff(pared47);
cubo.bounceOff(pared48);
cubo.bounceOff(pared49);
cubo.bounceOff(pared50);
cubo.bounceOff(pared51);
cubo.bounceOff(pared52);
cubo.bounceOff(pared53);
cubo.bounceOff(pared54);
cubo.bounceOff(pared55);
cubo.bounceOff(pared56);
cubo.bounceOff(pared57);
cubo.bounceOff(pared58);
cubo.bounceOff(pared59);
cubo.bounceOff(pared60);
cubo.bounceOff(pared61);
cubo.bounceOff(pared62);
cubo.bounceOff(pared63);
cubo.bounceOff(pared64);
cubo.bounceOff(pared65);
cubo.bounceOff(pared66);

n4.setCollider("rectangle",0,0,100,95);
n4.bounceOff(pared1);
n4.bounceOff(pared2);

n3.setCollider("rectangle",0,0,100,95);
n3.bounceOff(pared1);
n3.bounceOff(pared2);

n2.setCollider("rectangle",0,0,100,95);
n2.bounceOff(pared1);
n2.bounceOff(pared2);

n1.setCollider("rectangle",0,0,100,95);
n1.bounceOff(pared1);
n1.bounceOff(pared2);  

if (gameState === PLAY){

 controles.visible=false

 //colision con trofeo
 if(cubo.isTouching(trofeo)){
  if(puntos = 6){
    gameState = END1
  }
}


//colision con monedas
 if(cubo.isTouching(points1)){
  points1.destroy() 
  puntos = puntos + 1

}

if(cubo.isTouching(points2)){
  points2.destroy() 
  puntos = puntos + 1
}

  if(cubo.isTouching(points3)){
  points3.destroy() 
  puntos = puntos + 1
}

if(cubo.isTouching(points4)){
  points4.destroy() 
  puntos = puntos + 1
}

if(cubo.isTouching(points5)){
  points5.destroy() 
  puntos = puntos + 1
}

if(cubo.isTouching(points6)){
  points6.destroy() 
  puntos = puntos + 1
}

//colision
 if(cubo.isTouching(n1)){
  cubo.x=100
  cubo.y=450
  score = score + 1
  }

 if(cubo.isTouching(n2)){
   cubo.x=100
   cubo.y=450
   score = score + 1
  }

  if(cubo.isTouching(n3)){
   cubo.x=100
   cubo.y=450
   score = score + 1
  }

  if(cubo.isTouching(n4)){
   cubo.x=100
   cubo.y=450
   score = score + 1
  }

//movimiento
 if(keyDown("D")){
   cubo.x = cubo.x + 2.5
 }

 if(keyDown("A")){
   cubo.x = cubo.x -2.5
 }

if(keyDown("W")){
  cubo.y = cubo.y -2.5
 }

if(keyDown("S")){
   cubo.y = cubo.y +2.5
 }
}

if(gameState === END1){
  
  text("presione 2 para ingresar al siguiente nivel",800,90)
  if(keyDown("2")){
   gameState=nivel2()
  }
}


 drawSprites()
 createEdgeSprites();
 //texto
 textSize(30)
 text("Muertes: "+score,90,340)
 text("Puntos: "+puntos,300,340)

if(gameState === serve){
//serve
controles.visible=true  
fill("grey")
text("Presiona space para empezar",50,200)
text("Necesitas 6 puntos para pasar de nivel",1,300)
text("Controles",50,600)
 if(keyDown("space")){
    gameState=PLAY
  }
 }
}
function nivel2(){
 background("black")

}