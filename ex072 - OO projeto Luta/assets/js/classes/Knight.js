import { Character } from "./Character.js";

export class Knight extends Character {
  constructor(name) {
    super(name);
    this.life = 100;
    this.maxLife = this.life;
    this.attack = 10;
    this.desenfe = 8;
  }
}
