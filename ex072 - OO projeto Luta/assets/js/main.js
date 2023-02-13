import { Knight } from "./classes/Knight.js";
// import { Sorcerer } from "./classes/Sorcerer.js";
// import { LittleMonster } from "./classes/LittleMonster.js";
import { BigMonster } from "./classes/BigMonster.js";

import { Stage } from "./classes/Stage.js";
import { Log } from "./classes/Log.js";

// Knight or Sorcerer - Guerreiro ou Mago
// LitteMonster or BigMonster

let char = new Knight("Mateus");
let monster = new BigMonster();
let log = new Log(document.querySelector(".log"));

const stage = new Stage(
  char,
  monster,
  document.querySelector("#char"),
  document.querySelector("#monster"),
  log
);

stage.start();
