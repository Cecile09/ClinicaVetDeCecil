import { Animal } from "./Animal";

export class Ave extends Animal {
    emitirSom(): void {
        console.log(`${this.nome} diz: Piu Piu (cantando)!`);
    }

    descreverCuidados(): void {
        console.log(`Cuidados com ${this.nome}: Precisa de uma gaiola adequada.`);
    }
}