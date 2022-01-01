var boy_1, boy_img, bg_img;
var bg;
var invisibleground;
var boyAnime;
var coin1, coin2, coin3;


function preload(){
  bg_img = loadImage("horror_background.png");
  boyAnime = loadAnimation("Boy_Running_1.png","Boy_Running_11.png","Boy_Running_12.png","Boy_Running_13.png","Boy_Running_2.png");
  coin1 = loadImage("coins/gold_coin.png");
  coin2 = loadImage("coins/silver_coin.png");
  coin3 = loadImage("coins/bronze_coin.png");
}

function setup() {
  createCanvas(800,650);

  bg = createSprite(400,300,800,600);
  bg.addImage(bg_img);
  invisibleground = createSprite(400,620,800,20);
  invisibleground.visible = false;
  boy_1 = createSprite(30,570,20,50);
  boy_1.addAnimation("RunningBoy",boyAnime);
  boy_1.scale = 0.3;
  boy_1.debug = true;
  boy_1.setCollider("rectangle",0,0,110,270);
  bg.velocityX = -2;
}


function draw() 
{
  background(51);
  if (bg.x<300){
    bg.x = 400;
  }

  if(keyDown("space")){  
    boy_1.velocityY = -4; 
  }
  boy_1.velocityY = boy_1.velocityY + 0.3;
  boy_1.collide(invisibleground);

  spawnCoins();
  drawSprites();
  
 
}

function spawnCoins(){
  if (frameCount % 100 === 0) {
    var coin = createSprite(800,random(300,500),40,10);
     coin.scale = 0.4;
     coin.velocityX = -3;
     var rnum = Math.round(random(1,3));
     switch(rnum){
       case 1: coin.addImage(coin1);
               coin.scale =0.2;
       break;
       case 2: coin.addImage(coin2);
               coin.scale = 0.06;
       break;
       case 3: coin.addImage(coin3);
               coin.scale = 0.2;
       break;
       default: break;
     }
    if (boy_1.isTouching(coin)){
      if (rnum === 1){
        score = score+20;
      }
    }  
     coin.lifetime= 266;
   }
}

