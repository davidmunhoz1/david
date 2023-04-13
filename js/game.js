/**
 * Variables used during the game.
 */
let player;
let enemy;
let cursors;
let background;
let background2;

/**
 * It prelaods all the assets required in the game.
 */
function preload() {
  this.load.image("sky", "assets/backgrounds/blue.png");
  this.load.image("player", "assets/characters/player.png");
  this.load.image("enemy", "assets/characters/alien1.png");
}

/**
 * It creates the scene and place the game objects.
 */
function create() {
  // scene background
  background = this.add.image(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, "sky");
  background2 = this.add.image(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, "sky");
  background2.setY(background2.y - background.height);
  

  // playet setup
  player = this.add.image(SCREEN_WIDTH / 2, SCREEN_HEIGHT, "player");
  player.setX((SCREEN_WIDTH - player.width * PLAYER_SCALE) / 2);
  player.setY(SCREEN_HEIGHT - (player.height * PLAYER_SCALE) / 2); /* Cambiar esta coordenada para ir bajandolo */
  player.setScale(PLAYER_SCALE);

  // enemy setup
  enemy = this.add.image(SCREEN_WIDTH / 2, SCREEN_HEIGHT, "enemy");
  enemy.setX((SCREEN_WIDTH - enemy.width * ENEMY_SCALE) / 2);
  enemy.setY((enemy.height * ENEMY_SCALE) / 2);
  enemy.setScale(ENEMY_SCALE);

  //cursors map into game engine
  cursors = this.input.keyboard.createCursorKeys();
}

/**
 * Updates each game object of the scene.
 */
function update() {


  background2.setY(background2.y +3);
  background.setY(background.y +3);

  if(background.y >= SCREEN_HEIGHT/2 + background.height){
    background.setY(background2.y - background.height)
    let aux = background
    background = background2;
    background2 = aux;
  }
 
  function playerMove(){
  if (cursors.left.isDown && player.width !== 0){
    player.setX(player.x - 2);
     }
   
     if (cursors.right.isDown){
       player.setX(player.x +2);
     }

     if(cursors.up.isDown){
      player.setY(player.y -2)
     }

     if(cursors.down.isDown){
      player.setY(player.y +2)
     }
    }

    function borderCollision(){
      
    }
 
 
}

