import Phaser from "phaser";
import { MainScene } from "./scenes";

export const createGame = (element: HTMLDivElement) => {
  const { height, width } = element.getBoundingClientRect();
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.WEBGL,
    parent: element,
    width,
    height,
    scale: {
      mode: Phaser.Scale.CENTER_HORIZONTALLY,
      width: 800,
      height: 600,
    },
    physics: {
      default: "arcade",
    },
    scene: [MainScene],
  };

  return new Phaser.Game(config);
};
