import { Animal } from "./Animal";

export class Cachorro extends Animal {
    emitirSom(): void {
        console.log(`${this.nome} diz: Au Au!`);
    }

    descreverCuidados(): void {
        console.log(`Cuidados com ${this.nome}: Precisa de passeio diário.`);
    }
}