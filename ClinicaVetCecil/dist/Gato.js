"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
const Animal_1 = require("./Animal");
class Gato extends Animal_1.Animal {
    emitirSom() {
        console.log(`${this.nome} diz: Miau!`);
    }
    descreverCuidados() {
        console.log(`Cuidados com ${this.nome}: Precisa de um arranhador.`);
    }
}
exports.Gato = Gato;
//# sourceMappingURL=Gato.js.map