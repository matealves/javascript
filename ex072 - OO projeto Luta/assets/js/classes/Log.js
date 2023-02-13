export class Log {
  list = [];

  constructor(listElem) {
    this.listElem = listElem;
  }

  addMessage(message) {
    this.list.push(message);
    this.render();
  }

  render() {
    this.listElem.innerHTML = "";

    this.list.forEach((item) => {
      this.listElem.innerHTML += `<li>${item}</li>`;
    });
  }
}
