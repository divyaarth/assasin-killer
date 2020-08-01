var canvas, backgroundImage;

var gameState = 0;
var player;
var enemy;
var wall1;

function preload(){
  maze = loadImage("maze.jpg");
  playerImg = loadImage("player.png");
  playerIg = loadImage("soldies.jpg");
  player1Img = loadImage("playere1.png");
  player2Img = loadImage("player2.png");
  player3Img = loadImage("player3.png");
 
  enemy2Img= loadImage("enemy2.png");
  enemy3Img= loadImage("enemy3.png");
  enemy4Img = loadImage("enemy4.png");
}
  function setup(){
  canvas = createCanvas(displayWidth - 100, displayHeight-30);
player = createSprite(450, 270, 50, 50);
enemy1 = createSprite(500,415,20,20);
enemy1.addImage(enemy2Img);
enemy2 = createSprite(1000,55,20,20);
enemy2.addImage(enemy2Img);
enemy3 = createSprite(600,535,20,20);
enemy3.addImage(enemy3Img);
enemy4 = createSprite(400,175,20,20);
enemy4.addImage(enemy4Img);
enemy1.scale =0.25;
enemy2.scale =0.25;
enemy3.scale =0.25;
enemy4.scale =0.25;

 player.addImage(player1Img);
 player.scale = 0.25;
 maze.scale = 1.5;

 wall1= createSprite(600,20,1000,20);
 wall2 = createSprite(1045,310,20,515);
 wall3 = createSprite(600,625,1000,20);
 wall4 = createSprite(190,360,20,515);
 wall5 = createSprite(225,85,120,20);
 wall6 = createSprite(450,60,20,70);
 wall7 = createSprite(620,90,20,120);
 wall8 = createSprite(795,90,20,120);
 wall9 = createSprite(410,85,120,20);
 wall10 = createSprite(1010,140,120,20);
 wall11= createSprite(700,205,700,20);
 wall12 = createSprite(705,130,20,110);
 wall13 = createSprite(1010,260,120,20); 
 wall14 = createSprite(920,80,120,20); 
 wall15 = createSprite(880,190,20,230);
 wall16 = createSprite(875,325,200,20); 
 wall17 = createSprite(745,265,120,20); 
 wall18 = createSprite(705,320,20,110);
 wall19 = createSprite(890,385,400,20); 
 wall20 = createSprite(530,110,20,70);
 wall21 = createSprite(410,145,200,20);
 wall22 = createSprite(275,200,20,130);
 wall23 = createSprite(455,265,290,20);
 wall24 = createSprite(620,300,20,70); 
 wall25 = createSprite(415,325,370,20);
 wall26 = createSprite(320,385,120,20);
 wall27 = createSprite(365,500,20,200);
 wall28 = createSprite(455,445,180,20);
 wall29 = createSprite(315,505,110,20);
 wall30 = createSprite(495,565,270,20);
 wall31 = createSprite(225,445,120,20);
 wall32 = createSprite(225,565,120,20);
 wall33 = createSprite(540,385,190,20);
 wall34 = createSprite(795,445,360,20);
 wall35 = createSprite(620,505,340,20);
 wall36 = createSprite(705,565,20,110);
 wall37 = createSprite(875,500,20,130);
 wall38 = createSprite(1010,505,250,20);
 wall39 = createSprite(960,585,20,60);
 wall40 = createSprite(835,565,100,20);
 wall41 = createSprite(620,420,20,70);  
 }

  function draw() {

  background("orange");
  image(maze,20,-100,1200,900);
  //player.debug=true;
  player.setCollider("circle",0,0,90)
 
  wall1.visible =false;
  wall2.visible =false;
  wall3.visible =false;
  wall4.visible =false;
  wall5.visible =false;
  wall6.visible =false;
  wall7.visible =false;
  wall8.visible =false;
  wall9.visible =false;
  wall10.visible =false;
  wall11.visible =false;
  wall12.visible =false;
  wall13.visible =false;
  wall14.visible =false;
  wall15.visible =false;
  wall16.visible =false;
  wall17.visible =false;
  wall18.visible =false;
  wall19.visible =false;
  wall20.visible =false;
  wall21.visible =false;
  wall22.visible =false;
  wall23.visible =false;
  wall24.visible =false;
  wall25.visible =false;
  wall26.visible =false;
  wall27.visible =false;
  wall28.visible =false;
  wall29.visible =false;
  wall30.visible =false;
  wall31.visible =false;
  wall32.visible =false;
  wall33.visible =false;
  wall34.visible =false;
  wall35.visible =false;
  wall36.visible =false;
  wall37.visible =false;
  wall38.visible =false;
  wall39.visible =false;
  wall40.visible =false;
  wall41.visible =false;
  
  player.collide(wall1);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(wall5);
  player.collide(wall6);
  player.collide(wall7);
  player.collide(wall8);
  player.collide(wall9);
  player.collide(wall10);
  player.collide(wall11);
  player.collide(wall12);
  player.collide(wall13);
  player.collide(wall14);
  player.collide(wall15);
  player.collide(wall16);
  player.collide(wall17);
  player.collide(wall18);
  player.collide(wall19);
  player.collide(wall20);
  player.collide(wall21);
  player.collide(wall22);
  player.collide(wall23);
  player.collide(wall24);
  player.collide(wall25);
  player.collide(wall26);
  player.collide(wall27);
  player.collide(wall28);
  player.collide(wall29);
  player.collide(wall30);
  player.collide(wall31);
  player.collide(wall32);
  player.collide(wall33);
  player.collide(wall34);
  player.collide(wall35);
  player.collide(wall36);
  player.collide(wall37);
  player.collide(wall38);
  player.collide(wall39);
  player.collide(wall40);
  player.collide(wall41);
  if(keyWentDown("space")){
    player.addImage(playerIg);
  }
  if(keyWentUp("space")){
    player.addImage(playerImg);
  }
  if(keyDown("UP_ARROW")){
    player.y = player.y-3
    player.addImage(playerImg);
  }  
  if(keyDown("DOWN_ARROW")){
    player.y =player.y+3
    player.addImage(player2Img);
  }  
  if(keyDown("RIGHT_ARROW")){
    player.x =player.x+3
    player.addImage(player1Img);
  }  
  if(keyDown("LEFT_ARROW")){
    player.x =player.x-3
    player.addImage(player3Img);
  }  
  drawSprites();
}