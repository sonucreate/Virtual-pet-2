class FoodObj{
constructor(){
this.foodStock=0;
}
display(){
var x=80,y=100;
imageMode(CENTER);

if(Food!=0){
    for (var i = 0; i < Food; i++) {
        if (i%10===0){
            x=80;
            y=y+50
        }
        image(foodimg,x,y,50,50);
        x=x+30;
    }
}
}
writeStocks(x){
    if (x>0){
      x=x-1;
      console.log(x);
    }
    lastFeedTime=hour();
  this.updateStocks2(lastFeedTime);
    console.log(lastFeed);
    this.updateStocks(x)
}
updateStocks(x){
    database.ref('/').update({
        Food:x
    })
}
updateStocks2(x){
    database.ref('/').update({
        lastFeed:x
    })
}
addFoods(x){
x=x+1;
console.log(x);
this.updateStocks(x);
}
lastfeed(x){

}
}
