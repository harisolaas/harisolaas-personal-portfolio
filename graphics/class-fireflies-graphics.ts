import * as PIXI from "pixi.js";
import Firefly from "./class-firefly";
import { debounce } from "../utils";

export interface IBoundaries {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export default class FirefliesGraphics {
  app: PIXI.Application;
  boundaries: IBoundaries;
  boundaryMargin: number;
  count: number;
  dimentions: { height: number; width: number };
  fireflies: Firefly[];
  fireflyTexture: PIXI.Texture;
  view?: HTMLCanvasElement;

  constructor(count: number, texture: string, view?: HTMLCanvasElement) {
    this.count = count;
    this.boundaryMargin = 100;
    this.fireflies = [];
    this.fireflyTexture = PIXI.Texture.from(texture);
    this.view = view;
  }

  public init(): void {
    this.setup();

    for (let index = 0; index < this.count; index++) {
      this.fireflies.push(
        new Firefly(this.app.stage, this.fireflyTexture, this.boundaries)
      );
    }

    this.app.ticker.add((delta) => {
      for (let index = 0; index < this.fireflies.length; index++) {
        this.fireflies[index].draw(delta);
      }
    });

    const resetBlinkingTimers = () => {
      for (let index = 0; index < this.fireflies.length; index++) {
        this.fireflies[index].resetBlinkingTimer();
      }
    };

    window.addEventListener("click", resetBlinkingTimers);
    window.addEventListener("touchstart", resetBlinkingTimers);
    window.addEventListener(
      "resize",
      debounce(() => {
        this.setBoundaries();
        for (let index = 0; index < this.fireflies.length; index++) {
          this.fireflies[index].setBoundaries(this.boundaries);
        }
      }, 200)
    );
  }

  private setup(): void {
    const options: PIXI.IApplicationOptions = {
      backgroundAlpha: 0,
      resizeTo: window,
    };
    if (this.view) options.view = this.view;
    this.app = new PIXI.Application(options);
    document.body.appendChild(this.app.view);

    this.setBoundaries();
  }

  private setBoundaries() {
    this.boundaries = {
      top: -this.boundaryMargin,
      right: this.app.renderer.view.width + this.boundaryMargin,
      bottom: this.app.renderer.view.height + this.boundaryMargin,
      left: -this.boundaryMargin,
    };
  }
}
