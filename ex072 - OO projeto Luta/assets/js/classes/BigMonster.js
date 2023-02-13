import { Character } from "./Character.js";

export class BigMonster extends Character {
  constructor() {
    super("Big Monster");
    this.life = 120;
    this.maxLife = this.life;
    this.attack = 16;
    this.defense = 6;
  }
}
