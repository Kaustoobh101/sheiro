//Create variables here
var dog,dogImage,happydog,database,foodS,soodstock;
function preload()
{
  //load images here
  dogImage=loadImage("images/dog.png");
  happydog=loadImage("images/happydog.png");
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,10,10);
  dog.addImage(dogImage);
  dog.scale=0.2;
  database=firebase.database();
foodStock=database.ref("foodS");
foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydog);
}
  drawSprites();
  
  textSize(20);
  fill(255);
  stroke(0);
  text("press UP_ARROW key to feed SHEIRO milk!!",50,50)
  //add styles here

}
function readStock(data){
  foodS=data.val();

}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  
  database.ref("/").update({
    foodS:x
  })
}

