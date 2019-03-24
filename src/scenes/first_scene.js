import Phaser from 'phaser'

export default class FirstScene extends Phaser.Scene {
  constructor() {
    super({ key: "FirstScene", active: true })
  }

  preload() {
    this.load.bitmapFont(
      'font',
      '../assets/font.png',
      '../assets/font.fnt'
    )
  }

  create() {
    const messageA = this.add.bitmapText(
      25,
      100,
      'font',
      'Welcome to Mami',
      12
    )
    const messageB = this.add.bitmapText(
      25,
      250,
      'font',
      'Bienvenidos a Miami',
      12
    )

    const messages = { true: messageA, false: messageB }

    this.input.keyboard.on('keydown_ENTER', event => {
      this.selected = !(!!this.selected)
      this.cameras.main.setLerp(0.5, 0.5)
      this.cameras.main.startFollow(messages[this.selected], true, 0.5, 0.5)
    })
  }
}
