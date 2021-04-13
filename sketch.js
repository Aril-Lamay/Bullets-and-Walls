//declaring the variables
var wall, thickness;
var bullet, speed, weight;


function setup() {
  //creating the canvas
  createCanvas(1600,400);

  //assigning random speed and weight to the bullet and thickness to the wall
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  //creatingg the bullet and wall sprites
  bullet = createSprite(50, 200, 50, 20);
  wall = createSprite(1200,200,thickness,height/2);

  //giving color to the wall
  wall.shapeColor = color(80,80,80);

  //bullet.velocityX = speed;
}

function draw() {
  //assigning color to the background
  background(0,0,0); 

  //execute the command if the bullet is not touching the wall
  if(isTouching(bullet,wall)!= true){
    if(keyDown("space")){
      bullet.velocityX = speed;
    }
  }

  //execute the command if bullet is touching the wall
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;

    //declaring damage to the wall
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    //assigning color to the bullet according to the damage
    if (damage >= 10){
      bullet.shapeColor = color(255,0,0);
    }
    if (damage < 10){
      bullet.shapeColor = color(0,255,0);
    }
  }

  //display the sprites
  drawSprites();
}

//create a isTouching function
function isTouching(object1, object2) {
  if (object1.x - object2.x < object1.width / 2 + object2.width / 2
    && object2.x - object1.x < object1.width / 2 + object2.width / 2
    && object1.y - object2.y < object1.height / 2 + object2.height / 2
    && object2.y - object1.y < object1.height / 2 + object2.height / 2) {
      return true;
  }
  else {
    return false;
  }

}

function hasCollided(lbullet,lwall){
  var bulletRightEdge = lbullet.x + lbullet.width;
  var wallLeftEdge = lwall.x;
  if (bulletRightEdge >= wallLeftEdge){
    return true
  }
  return false;
}