export class Stage {
  constructor(fighter1, fighter2, fighter1Elem, fighter2Elem, logObject) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1Elem = fighter1Elem;
    this.fighter2Elem = fighter2Elem;
    this.log = logObject;
  }

  start() {
    this.update(this.fighter1, this.fighter2);

    this.fighter1Elem
      .querySelector(".attack-button")
      .addEventListener("click", () =>
        this.doAttack(this.fighter1, this.fighter2)
      );

    this.fighter2Elem
      .querySelector(".attack-button")
      .addEventListener("click", () =>
        this.doAttack(this.fighter2, this.fighter1)
      );
  }

  update(attacking, attacked) {
    // Fighter1
    this.fighter1Elem.querySelector(".name").textContent = `${
      this.fighter1.name
    } - ${this.fighter1.life.toFixed(2)} HP`;
    let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
    this.fighter1Elem.querySelector(".bar").style.width = `${f1Pct}%`;

    // Fighter2
    this.fighter2Elem.querySelector(".name").textContent = `${
      this.fighter2.name
    } - ${this.fighter2.life.toFixed(2)} HP`;
    let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
    this.fighter2Elem.querySelector(".bar").style.width = `${f2Pct}%`;

    if (attacking.life <= 0 || attacked.life <= 0) {
      this.log.addMessage("FIM DE JOGO.");
    }

    let logArea = document.querySelector(".log");
    logArea.scrollTop = logArea.scrollHeight;
  }

  doAttack(attacking, attacked) {
    if (attacking.life <= 0 || attacked.life <= 0) {
      return;
    }

    let attackFactor = (Math.random() * 2).toFixed(2);
    let defenseFactor = (Math.random() * 2).toFixed(2);

    let actualAttack = attacking.attack * attackFactor;
    let actualDefense = attacked.defense * defenseFactor;

    if (actualAttack > actualDefense) {
      attacked.life -= actualAttack;
      this.log.addMessage(
        `${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${
          attacked.name
        }!`
      );
    } else {
      this.log.addMessage(`${attacked.name} conseguiu defender...`);
    }

    this.update(this.fighter1, this.fighter2);
  }
}
