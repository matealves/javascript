class Animal {
    constructor(tipo, pernas) {
        this.tipo = tipo;
        this.pernas = pernas;
    }

    falar(som = 'Som qualquer') {
        return som;
    }

    get dados() {
        return `Tipo: ${this.tipo}, Pernas: ${this.pernas}`;
    }

}

export class Gato extends Animal{

    constructor(pernas, cor) {
        super('Gato', pernas); // reaproveita o constructor da class Animal
        this.cor = cor;
    }

    falar(som = 'Miau') {
        return som;
    }

    getCor() {
        return this.cor
    }

} 