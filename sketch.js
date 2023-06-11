//Sizes of the Logo
const DVDheight = Math.floor(371 / 12) * 4,
        DVDwidth = 200;

//Position of the logo
let x, y;

//Declaring velocity of the logo
let stepX = 0, stepY = 0;

//Declaring random start points for logo
let startX = Math.floor(Math.random() * 200);
let startY = Math.floor(Math.random() * 200);

//Variables for detecting the direction of logo
let horizontalRight = true, verticalBottom = true;
//Previous directions
let preHorizon, preVertical;

//Different colors of the logo
let dvd_white;
let dvd_yellow;
let dvd_red;

//DVD Image declarations
let dvdImg;
let imageCounter = 0;
let imageArr;

function preload() {
    //Reading different colored DVD logo images
    dvd_white = loadImage("white.png");
    dvd_yellow = loadImage("yellow.png");
    dvd_red = loadImage("red.png");
  
    imageArr = [dvd_white, dvd_yellow, dvd_red];
}

function setup() {
    createCanvas(500, 500);
    dvdImg = dvd_white; //First color of the logo
}

function draw() {
    background(0);
    //Previous directions
    preHorizon = horizontalRight;
    preVertical = verticalBottom;
  
    //Position of logo
    x = startX + stepX;
    y = startY + stepY;
  
    //Checking for the collisions
    collisionsCheck(x, y, DVDwidth, DVDheight);
  
    //Changing logo directions
    horizontalRight ? stepX++ : stepX--;
    verticalBottom ? stepY++ : stepY--;
  
    //If previous direction different from present direction then change the color
    if (preHorizon != horizontalRight || preVertical != verticalBottom) {
          //Increasing counter for next color in array
          imageCounter++;
      
          //Reset Counter
          if (imageCounter > 2) imageCounter = 0;
          //Switch to next color
          dvdImg = imageArr[imageCounter];
    }
  
    //Drawing logo to screen
    image(dvdImg, x, y, DVDwidth, DVDheight);
}

function collisionsCheck(x, y, hX, hY) {
    /*-----X-----*/
    //Right-wall
    if (x + hX >= width) horizontalRight = false;
    //Left-wall
    else if (x <= 0) horizontalRight = true;
  
    /*-----Y-----*/
    //Bottom-wall
    if (y + hY >= height) verticalBottom = false;
    //Top-wall
    else if (y <= 0) verticalBottom = true;
}
































