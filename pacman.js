//board
let board;
const rowCount = 21;
const columnCount = 19;
const tileSize = 32;
const boardWidth = columnCount*tileSize;
const boardHeight = rowCount*tileSize;
let context;

//images
let blueGhostImage;
let orangeGhostImage;
let pinkGhostImage;
let redGhostImage;
let pacmanUpImage;
let pacmanDownImage;
let pacmanLeftImage;
let pacmanRightImage;
let wallImage;

//X = muro, O = skip, P = pac man, ' ' = comida
//Fantasmas = {b = azul, o = naranja, p = rosado, r = rojo} 
const tileMap = [
    "XXXXXXXXXXXXXXXXXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X                 X",
    "X XX X XXXXX X XX X",
    "X    X       X    X",
    "XXXX XXXX XXXX XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXrXX X XXXX",
    "O       bpo       O",
    "XXXX X XXXXX X XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXXXX X XXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X  X     P     X  X",
    "XX X X XXXXX X X XX",
    "X    X   X   X    X",
    "X XXXXXX X XXXXXX X",
    "X                 X",
    "XXXXXXXXXXXXXXXXXXX" 
];

const walls = new Set();
const foods = new Set();
const ghosts = new Set();
let pacman;

window.onload = function(){
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d") //se usa para crear la imagen 2D del tablero

  loadImages();
  loadMap();
  // console.log(walls.size);
  // console.log(foods.size);
  // console.log(ghosts.size);
  update();
}

function loadImages() {
  wallImage = new Image();
  wallImage.src = "./assets/images/wall.png"

  //fantasmas

  //azul
  blueGhostImage = new Image();
  blueGhostImage.src = "./assets/images/blueGhost.png"
  //naranja
  orangeGhostImage = new Image();
  orangeGhostImage.src = "./assets/images/orangeGhost.png"
  //rosado
  pinkGhostImage = new Image();
  pinkGhostImage.src = "./assets/images/pinkGhost.png"
  //rojo
  redGhostImage = new Image();
  redGhostImage.src = "./assets/images/redGhost.png"

  //pacman

  //pacman arriba
  pacmanUpImage = new Image();
  pacmanUpImage.src = "./assets/images/pacmanUp.png"
  //pacman abajo
  pacmanDownImage = new Image();
  pacmanDownImage.src = "./assets/images/pacmanDown.png"
  //pacman izquierda
  pacmanLeftImage = new Image();
  pacmanLeftImage.src = "./assets/images/pacmanLeft.png"
  //pacman derecha
  pacmanRightImage = new Image();
  pacmanRightImage.src = "./assets/images/pacmanRight.png"
}

function loadMap(){
  walls.clear();
  foods.clear();
  ghosts.clear();

  for (let r = 0; r < rowCount; r++){
    for(let c = 0; c < columnCount; c++){
      const row = tileMap[r];
      const tileMapChar = row[c];

      const x = c*tileSize;
      const y = r*tileSize;
      
      if (tileMapChar == 'X'){
        const wall = new Block(wallImage, x, y, tileSize, tileSize);
        walls.add(wall);
      }
      else if (tileMapChar == 'b'){
        const ghost = new Block(blueGhostImage, x, y, tileSize, tileSize);
        ghosts.add(ghost);
      }
      else if (tileMapChar == 'o'){
        const ghost = new Block(orangeGhostImage, x, y, tileSize, tileSize);
        ghosts.add(ghost);
      }
      else if (tileMapChar == 'p'){
        const ghost = new Block(pinkGhostImage, x, y, tileSize, tileSize);
        ghosts.add(ghost);
      }
      else if (tileMapChar == 'r'){
        const ghost = new Block(redGhostImage, x, y, tileSize, tileSize);
        ghosts.add(ghost);
      }
      else if (tileMapChar == 'P'){
        pacman = new Block(pacmanRightImage, x, y, tileSize, tileSize);
      }
      else if (tileMapChar == ' '){
        const food = new Block(null, x+14, y+14, 4, 4)
        foods.add(food);
      }
    }
  }
}

function update(){
  //move
  draw();
  setTimeout(update, 50); //20 fps -> 1000ms/20 = 50ms
}

function draw(){
  context.drawImage(pacman.image, pacman.x, pacman.y, pacman.width, pacman.height);
  for (let ghost of ghosts.values()) {
    context.drawImage(ghost.image, ghost.x, ghost.y, ghost.width, ghost.height);
  }
  for (let wall of walls.values()) {
    context.drawImage(wall.image, wall.x, wall.y, wall.width, wall.height);
  }
}

class Block {
  constructor(image, x, y, width, height){
    this.image = image;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.startX = x;
    this.startY = y;
  }
}
