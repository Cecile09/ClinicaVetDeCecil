import { Animal } from "./Animal";

export class Gato extends Animal {
    emitirSom(): void {
        console.log(`${this.nome} diz: Miau!`);
    }

    descreverCuidados(): void {
        console.log(`Cuidados com ${this.nome}: Precisa de um arranhador.`);
    }
}