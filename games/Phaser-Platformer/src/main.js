import { GameScene } from './scenes/game-scene.js';
import { LoadingScene } from './scenes/loading-scene.js';

// our game's configuration
const config = {
  type: Phaser.AUTO,
  scene: [LoadingScene, GameScene],
  title: 'Monster Kong',
  pixelArt: false,
  scale: {
    width: 360,
    height: 640,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    mode: Phaser.Scale.FIT,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        x: 0,
        y: 1000,
      },
      debug: false,
    }
  }
};

// create the game, and pass it the configuration
const game = new Phaser.Game(config);
