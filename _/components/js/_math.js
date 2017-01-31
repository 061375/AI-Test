Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};
 
// Converts from radians to degrees.
Math.degrees = function(radians) {
  return radians * 180 / Math.PI;
};

Math.sqr = function(number) {
  return number * number;
}
function distance_to_point(x1,y1,x2,y2)
{
  if(x1 < x2){var x = x2-x1;}else
  {var x = x1-x2;}
  if(y1 < y2){var y = y2-y1;}else{var y = y1-y2;}
  var dis = y / x;
  dis = x + dis;
  return dis;
}
function point_direction(x1,y1,x2,y2,radians)
{
  var x = x2 - x1;
  var y = y2 - y1;
  var angleInRadians = Math.atan2(y,x);
  var angleInDegrees = angleInRadians * (180/ Math.PI);
  if(angleInDegrees < 0){
    angleInDegrees+=360;
  }
  if(radians){
    return angleInRadians;
  }
  return angleInDegrees;
}
function motion_set_2(x,y,degrees,speed)
{

  var angle = degrees * (Math.PI/180);
  x += (Math.cos(angle) * Math.PI / 180) * speed;
  y += (Math.sin(angle) * Math.PI / 180) * speed;
  return {x:x,y:y};
}
function motion_set_3(x,y,z,degrees,speed)
{
  var obj = new Object();
  var angle = degrees * (Math.PI/180);
  x += (Math.cos(angle) * Math.PI / 180) * speed;
  y += (Math.sin(angle) * Math.PI / 180) * speed;
  z += (Math.sin(angle) * Math.PI / 180) * speed;
  obj.x = x;
  obj.y = y;
  obj.z = z;
  return obj;
}
function move_to_contact(obj1,obj2)
{
  var c_direction = point_direction(obj1.x,obj1.y,obj2.x,obj2.y);
  c_direction+=180;
  var speed = 15;
  if(obj1.speed > 1){
    speed = obj1.speed;
  }else{
    if(obj2.speed > 1){
      speed = obj2.speed;
    }
  }
  while(true == checkCollision(obj1,obj2)){
    var angle = c_direction * (Math.PI/180);
    obj1.x += (Math.cos(angle) * Math.PI / 180) * obj1.speed;
    obj1.y += (Math.sin(angle) * Math.PI / 180) * obj1.speed;
  }
}
function checkCollision(obj1,obj2)
{
    var pointsX = new Array(
      obj1.x-obj1.negXcollisionBox,
      obj1.x+obj1.posXcollisionBox
    );
    var pointsY = new Array(
      obj1.y-obj1.negYcollisionBox,
      obj1.y+obj1.posYcollisionBox
    );
    for(var xx=0; xx<2; xx++){
      for(var yy=0; yy<2; yy++){
        if(pointsX[xx] > obj2.x-obj2.negXcollisionBox && pointsX[xx] < obj2.x+obj2.posXcollisionBox && pointsY[yy] > obj2.y-obj2.negYcollisionBox && pointsY[yy] < obj2.y + obj2.posYcollisionBox){
          return true;
        }
      }
    }
    return false;
}
/**
 * gets the number of degrees from obj1 direction to the direction of obj2
 * (in both directions)
 * @param {object} obj1
 * @param {object} obj2
 * @returns float
 * */
function distance_to_directions(obj1,obj2)
{
  // init
  var port,starboard;
  
  // get the relative direction of obj2
  var obj2relDir = point_direction(obj1.x,obj1.y,obj2.x,obj2.y);
  return {
    port:((obj1.dir - obj2relDir) + 360)%360,
    starboard:((obj2relDir - obj1.dir)+360)%360
  }
}
function checkCollisionCoords(x1,y1,x2,y2,bsize)
{
//10,10,11,30,10
/*
10 > 1 = true
10 < 21 = true
10 > 20 = false
10 < 40 = true
*/
    var pointsX = new Array(
      x1-bsize,
      x1+bsize
    );
    var pointsY = new Array(
      y2-bsize,
      y2+bsize
    );
    if(x1 > (x2-bsize) && x1 < (x2+bsize) && y1 > (y2-bsize) && y1 < (y2 + bsize))
    {
      return true;
    }
    return false;
}