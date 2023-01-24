class Form {
  items = [];
  method = "GET";

  constructor(container, method, action) {
    this.container = document.querySelector(container);
    this.method = method;
    this.action = action;
  }

  addItem(item) {
    this.items.push(item);
  }

  render() {
    let formElement = document.createElement("form");
    formElement.setAttribute("method", this.method);
    formElement.setAttribute("action", this.action);

    for (let i in this.items) {
      this.items[i].renderInput(formElement);
    }

    this.container.appendChild(formElement);
  }
}

class Input {
  _type = "text";
  required = false;

  constructor(name, label) {
    this.name = name;
    this.label = label;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    if (["text", "password", "email", "submit"].includes(value)) {
      this._type = value;
    } else {
      throw new Error(`Input type ${value} doesn't exist.`);
    }
  }

  renderInput(formElement) {
    let el = document.createElement("input");
    el.type = this.type;
    el.name = this.name;
    el.placeholder = this.label;
    el.required = this.required;

    formElement.appendChild(el);
  }
}

class Button extends Input {
  constructor(label) {
    super("", label);
    this.type = "submit";
  }

  renderInput(formElement) {
    let el = document.createElement("input");
    el.type = this._type;
    el.value = this.label;

    formElement.appendChild(el);
  }
}

// IMPLEMENTAÇÃO:
//Formulário
let form = new Form(".form-area", "POST", "https://google.com/");

// E-mail
let email = new Input("email", "Digite seu e-mail");
email.type = "email";
email.required = true;
form.addItem(email);

// Senha
let password = new Input("password", "Digite sua senha");
password.type = "password";
password.required = true;
form.addItem(password);

// Botão
let button = new Button("Enviar");
form.addItem(button);

form.render();
