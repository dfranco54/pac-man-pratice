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

window.onload = function(){
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d")
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