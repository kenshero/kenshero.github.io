export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  // some parameters for our scene
  init() {
    this.playerSpeed = 150;
    this.jumpSpeed = 600;
    this.levelData = this.cache.json.get('levelData');
  }

  // executed once, after assets were loaded
  create() {
    // add all level elements
    this.setupLevel();
    // initiate barrel spawner
    this.setupSpawner();

    // collision detection
    this.physics.add.collider([this.player, this.barrels], [this.platforms, this.ground]);
    // overlap checks
    this.physics.add.overlap(this.player, this.goal, this.restartGame, null, this);

    // enable cursor keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // this.input.on('pointerdown', (pointer) => {
    //   console.log(pointer.x, pointer.y);
    // });
  }

  update() {
    // are we on the ground?
    const onGround = this.player.body.blocked.down || this.player.body.touching.down;

    // movement to the left
    if (this.cursors.left.isDown && !this.cursors.right.isDown) {
      this.player.body.setVelocityX(-this.playerSpeed);

      this.player.setFlipX(false);

      if (onGround) {
        // play animation if not already playing
        this.player.play('walking', true);
      }
    } else if (this.cursors.right.isDown && !this.cursors.left.isDown) {
      // movement to the right
      this.player.body.setVelocityX(this.playerSpeed);

      this.player.setFlipX(true);

      if (onGround) {
        // play animation if not already playing
        this.player.play('walking', true);
      }
    } else if (!this.cursors.left.isDown && !this.cursors.right.isDown) {
      // make the player stop
      this.player.body.setVelocityX(0);

      // stop walking animation
      this.player.stop();

      // set default frame
      this.player.setFrame(3);
    }

    // handle jumping
    if (onGround && (this.cursors.up.isDown || this.cursors.space.isDown)) {
      // give the player a velocity in Y
      this.player.body.setVelocityY(-this.jumpSpeed);

      // stop walking animation
      this.player.stop();

      // set default frame
      this.player.setFrame(2);
    }
  }

  setupLevel() {
    // world bounds
    this.physics.world.setBounds(0, 0, this.levelData.world.width, this.levelData.world.height);

    // create all the platforms
    this.platforms = this.physics.add.staticGroup();

    this.levelData.platforms.forEach((platform) => {
      const { width, height } = this.textures.get(platform.key).get(0);
      const gameObject = this.add.tileSprite(platform.x, platform.y, width * platform.numOfTiles, height, platform.key);
      gameObject.setOrigin(0);
      // this.physics.add.existing(gameObject, true);
      this.platforms.add(gameObject);
    });

    // ground
    this.ground = this.physics.add.staticSprite(this.levelData.ground.x, this.levelData.ground.y, this.levelData.ground.key);

    // player
    this.player = this.physics.add.sprite(this.levelData.player.x, this.levelData.player.y, this.levelData.player.key, this.levelData.player.frame);
    // constraint player to the game bounds
    this.player.body.setCollideWorldBounds(true);

    // create all the fire objects
    this.fires = this.physics.add.group({
      allowGravity: false,
      immovable: true
    });
    this.levelData.fires.forEach((fire) => {
      const gameObject = this.fires.create(fire.x, fire.y, fire.key);
      gameObject.setOrigin(0);

      // play burning animation
      gameObject.play('burning');

      // // for level creation
      // gameObject.setInteractive({
      //   draggable: true,
      // });
    });

    // // for level creation
    // this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
    //   gameObject.x = dragX;
    //   gameObject.y = dragY;
    //   console.log(dragX, dragY);
    // });

    // goal
    this.goal = this.physics.add.staticSprite(this.levelData.goal.x, this.levelData.goal.y, this.levelData.goal.key);

    // camera bounds
    this.cameras.main.setBounds(0, 0, this.levelData.world.width, this.levelData.world.height);
    this.cameras.main.startFollow(this.player);
  }

  // restart game (game over + you won!)
  restartGame() {
    // disable player physics body
    this.player.body.enable = false;

    // fade out
    this.cameras.main.fade(500);
    // when fade out completes, restart scene
    this.cameras.main.once('camerafadeoutcomplete', () => {
      // restart the scene
      this.scene.restart();
    });
  }

  // generation of barrels
  setupSpawner() {
    // barrel group
    this.barrels = this.physics.add.group({
      collideWorldBounds: true,
      bounceX: 1,
      bounceY: 0.1,
    });

    this.time.addEvent({
      delay: this.levelData.spawner.interval,
      loop: true,
      callback: () => {
        // create a barrel
        const barrel = this.barrels.get(this.goal.x, this.goal.y, 'barrel');
        barrel.setActive(true).setVisible(true);
        barrel.body.enable = true;

        // set properties
        const speed = Phaser.Math.Between(this.levelData.spawner.speed.min, this.levelData.spawner.speed.max);
        const direction = Phaser.Math.Between(0, 1) === 0 ? -1 : 1;
        barrel.setVelocityX(speed * direction);

        //console.log(this.barrels.getChildren().length);

        // lifespan
        this.time.addEvent({
          delay: this.levelData.spawner.lifespan,
          callback: () => {
            this.barrels.killAndHide(barrel);
            barrel.body.enable = false;
          }
        })
      }
    })
  }
}
