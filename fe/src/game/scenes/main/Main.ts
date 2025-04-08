import Phaser from "phaser";

export class MainScene extends Phaser.Scene {
  private cursor?: Phaser.Types.Input.Keyboard.CursorKeys;

  preload() {}

  create() {}

  update() {
    if (!this.cursor) return;
  }
}
