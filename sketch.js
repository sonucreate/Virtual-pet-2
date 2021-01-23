//Create variables here
var Food=20;
var database;
var Food;
var feed,addFood;
var lastFeed,lastFeedTime,foodimg;
function preload()
{
  //load images here
  dog1=loadImage("Dog.png");
  dog2=loadImage("happydog.png");
  foodimg=loadImage("Milk.png");
}

function setup() {
  database=firebase.database();
  createCanvas(800, 700);
  dog=createSprite(400,350,30,30);
  dog.addImage(dog1);
  dog.scale=0.2;
  //dog.scale(1);
  food=new FoodObj();
  Foodref=database.ref("Food");
  Foodref.on("value",readStock);
  lastFeedref=database.ref("lastFeed");
  lastFeedref.on("value",readStock2);


  
}


function draw() {  
  background("red");
  fill("blue");
  textSize(15);
  text("Food:"+Food,50,40);
  if (lastFeed>12){
    text("Last Feed:"+lastFeed%12 +"PM",200,40);
  }
  else if (lastFeed===0){
    text("Last Feed :12 AM",200,40);
  }
  else{
    text("last Feed:" +lastFeed+"AM")
  }
  feed=createButton('Feed');
  feed.position(400,20);
  BuyFood=createButton('Add Food');
  BuyFood.position(450,20);
  
  drawSprites();
   //add styles here
  if (keyWentDown(DOWN_ARROW)){
    food.addFoods(Food);
  }
  if (keyWentDown(UP_ARROW)){
   food.writeStocks(Food);
    dog.addImage(dog2);
}
//feed.mousePressed(food.writeStocks(Food));
//BuyFood.mousePressed(food.addFoods(Food));
}
 function readStock(data){
  Food=data.val();
}
function readStock2(data){
  lastFeed=data.val();
}
function feedDog(){
database.ref('/').update({
Food:food.getFoodStock()-1
})

}

