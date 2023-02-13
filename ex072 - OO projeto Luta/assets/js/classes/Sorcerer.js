import { Character } from "./Character.js";

export class Sorcerer extends Character {
  constructor(name) {
    super(name);
    this.life = 80;
    this.maxLife = this.life;
    this.attack = 15;
    this.desenfe = 3;
  }
}
