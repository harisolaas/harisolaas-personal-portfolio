import * as PIXI from "pixi.js";
import { IBoundaries } from "./class-fireflies-graphics";
import { getRandomArbitrary, getRandomBoolean } from "../utils";

export default class Firefly {
  averageXVel: number;
  averageYVel: number;
  blinkingTimeout: NodeJS.Timeout;
  boundaries: IBoundaries;
  isOn: boolean;
  isStill: boolean;
  sprite: PIXI.Sprite;
  waveSize: number;
  xDirection: number;
  yDirection: number;
  z: number;

  constructor(
    container: PIXI.Container,
    texture: PIXI.Texture,
    boundaries: IBoundaries
  ) {
    this.waveSize = getRandomArbitrary(0.001, 0.05);
    this.averageXVel = getRandomArbitrary(0.2, 0.5);
    this.averageYVel = getRandomArbitrary(0.1, 0.4);
    this.boundaries = boundaries;
    this.isStill = getRandomBoolean();
    this.isOn = true;
    this.xDirection = Math.sign(getRandomArbitrary(-1, 1));
    this.yDirection = Math.sign(getRandomArbitrary(-1, 1));
    this.z = (getRandomArbitrary(0, Math.PI) / this.waveSize) * 30;

    this.sprite = new PIXI.Sprite(texture);
    this.sprite.x = getRandomBoolean() ? boundaries.left : boundaries.right;
    this.sprite.y = getRandomArbitrary(boundaries.top, boundaries.bottom);
    this.sprite.anchor.set(0.5);

    this.drawScale();
    this.startStillIntermittence();
    this.startBlinking();

    container.addChild(this.sprite);
  }

  public draw = (delta: number): void => {
    if (this.isOn && this.sprite.alpha < 1) {
      this.sprite.alpha += 0.05;
    } else if (!this.isOn && this.sprite.alpha > 0) {
      this.sprite.alpha -= 0.05;
    }

    if (this.isStill) return;

    this.z += delta;

    if (
      this.sprite.x >= this.boundaries.right ||
      this.sprite.x < this.boundaries.left
    ) {
      this.xDirection *= -1;
    }
    if (
      this.sprite.y >= this.boundaries.bottom ||
      this.sprite.y < this.boundaries.top
    ) {
      this.yDirection *= -1;
    }

    const sinVel = Math.sin(this.z * this.waveSize);
    const sinXVel = sinVel * this.averageYVel * -1;
    const sinYVel = sinVel * this.averageXVel;
    const xv =
      this.averageXVel * delta * this.xDirection + sinXVel * this.xDirection;
    const yv =
      this.averageYVel * delta * this.yDirection + sinYVel * this.yDirection;
    this.sprite.x += xv;
    this.sprite.y += yv;

    this.drawScale();
  };

  public resetBlinkingTimer = (): void => {
    clearTimeout(this.blinkingTimeout);
    this.isOn = true;
    this.startBlinking();
  };

  public setBoundaries(boundaries: IBoundaries): void {
    this.boundaries = boundaries;
  }

  private drawScale = () => {
    this.sprite.scale.set(
      0.1 + Math.abs(Math.sin((this.z * this.waveSize) / 35))
    );
  };

  private startBlinking = (): void => {
    const timeout = this.isOn ? [1, 3] : [1, 2];
    this.blinkingTimeout = setTimeout(() => {
      this.isOn = !this.isOn;
      this.startBlinking();
    }, getRandomArbitrary(timeout[0], timeout[1]) * 1000);
  };

  private startStillIntermittence = (): void => {
    const timeout = this.isStill ? [2, 5] : [2, 20];
    setTimeout(() => {
      this.isStill = !this.isStill;
      this.startStillIntermittence();
    }, getRandomArbitrary(timeout[0], timeout[1]) * 1000);
  };
}
