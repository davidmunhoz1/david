/**
 * Variables used during the game.
 */
let player;
let enemy;
let cursors;
let background;
let background2;
let spaceBar;
let bullets = [];
let elapsedFrames = 0;
/**
 * It prelaods all the assets required in the game.
 */
function preload() {
  this.load.image("sky", "assets/backgrounds/blue.png");
  this.load.image("player", "assets/characters/player.png");
  this.load.image("enemy", "assets/characters/alien1.png");
  this.load.image("enemy2", "assets/characters/alien2.png");
  this.load.image("enemy3", "assets/characters/alien3.png");
  this.load.image("enemy4", "assets/characters/alien4.png");
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

  enemy2 = this.add.image(SCREEN_WIDTH / 2, SCREEN_HEIGHT, "enemy");
  enemy2.setX((SCREEN_WIDTH - enemy.width * ENEMY_SCALE) / 2);
  enemy2.setY((enemy.height * ENEMY_SCALE) / 2);
  enemy2.setScale(ENEMY_SCALE);

  enemy3 = this.add.image(SCREEN_WIDTH / 2, SCREEN_HEIGHT, "enemy");
  enemy3.setX((SCREEN_WIDTH - enemy.width * ENEMY_SCALE) / 2);
  enemy3.setY((enemy.height * ENEMY_SCALE) / 2);
  enemy3.setScale(ENEMY_SCALE);

  enemy4 = this.add.image(SCREEN_WIDTH / 2, SCREEN_HEIGHT, "enemy");
  enemy4.setX((SCREEN_WIDTH - enemy.width * ENEMY_SCALE) / 2);
  enemy4.setY((enemy.height * ENEMY_SCALE) / 2);
  enemy4.setScale(ENEMY_SCALE);



  //cursors map into game engine
  cursors = this.input.keyboard.createCursorKeys();

  spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
}


/**
 * Updates each game object of the scene.
 */
function update() {
  elapsedFrames++;

  background2.setY(background2.y +3);
  background.setY(background.y +3);

  // Movimiento Background
  if(background.y >= SCREEN_HEIGHT / 2 + background.height){
    background.setY(background2.y - background.height)
    let aux = background
    background = background2;
    background2 = aux;
  }
 
  // Movimiento teclas
  if (cursors.left.isDown && player.x > player.width / 2 * PLAYER_SCALE ){
    player.setX(player.x - PLAYER_VELOCITY);
     }
     if (cursors.right.isDown && player.x < SCREEN_WIDTH - player.width /2 * PLAYER_SCALE ){
       player.setX(player.x + PLAYER_VELOCITY);
     }
     if (cursors.up.isDown && player.y > player.height / 2 * PLAYER_SCALE) {
      player.setY(player.y - PLAYER_VELOCITY);
      
    }if (cursors.down.isDown && player.y < SCREEN_HEIGHT - player.height / 2 * PLAYER_SCALE){
      player.setY(player.y + PLAYER_VELOCITY);
    }

    //Enemy 1
    enemy.setY(enemy.y + PLAYER_VELOCITY / 2);
    enemy.setX(enemy.x + (player.x >= enemy.x ? 1 : -1) * DIFFICULTY_EASY);
    

    if(enemy.y > SCREEN_HEIGHT){
      enemy.destroy();


      enemy = this.add.image(SCREEN_WIDTH / 2, SCREEN_HEIGHT, "enemy");
      enemy.setX((SCREEN_WIDTH - enemy.width * ENEMY_SCALE) / 2);
      enemy.setY((enemy.height * ENEMY_SCALE) / 2);
      enemy.setScale(ENEMY_SCALE);

    }

    if (spaceBar.isDown && elapsedFrames > 20) {
      bullets.push(this.add.ellipse(player.x, player.y - player.height / 2 * PLAYER_SCALE, 5, 10, 0xf5400a));
      
      elapsedFrames = 0;
    }
  
    // mover balas
    for (const bullet of bullets) {
      bullet.setY(bullet.y - BULLET_VELOCITY);
    }

    if(bullets.y == enemy.y && bullets.x == enemy.x){
      enemy.destroy();

      enemy = this.add.image(SCREEN_WIDTH / 2, SCREEN_HEIGHT, "enemy");
      enemy.setX((SCREEN_WIDTH - enemy.width * ENEMY_SCALE) / 2);
      enemy.setY((enemy.height * ENEMY_SCALE) / 2);
      enemy.setScale(ENEMY_SCALE);

    }


}



    // if(cursors.left.isDown){
    //   enemy.setX(enemy.x - PLAYER_VELOCITY + 0.75 );
    // }
    // if(cursors.right.isDown){
    //   enemy.setX(enemy.x + PLAYER_VELOCITY - 0.75 );
    // }



