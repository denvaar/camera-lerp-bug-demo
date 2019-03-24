import Phaser from 'phaser'

import FirstScene from './scenes/first_scene'

const gameWidth = 500
const gameHeight = 400
const debugEnabled = false

const config = {
  type: Phaser.CANVAS,
  width: gameWidth,
  height: gameHeight,
  parent: 'game-container',
  resolution: window.devicePixelRatio,
  pixelArt: true,
  scene: [FirstScene],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y: 200},
      debug: debugEnabled
    }
  },
  render: { pixelArt: true, antialias: false }
}

const game = new Phaser.Game(config)
