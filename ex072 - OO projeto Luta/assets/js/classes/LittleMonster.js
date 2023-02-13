import { Character } from "./Character.js";

export class LittleMonster extends Character {
  constructor() {
    super("Little Monster");
    this.life = 40;
    this.maxLife = this.life;
    this.attack = 4;
    this.defense = 4;
  }
}
