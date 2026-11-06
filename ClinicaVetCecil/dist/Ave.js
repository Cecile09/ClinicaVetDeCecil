"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ave = void 0;
const Animal_1 = require("./Animal");
class Ave extends Animal_1.Animal {
    emitirSom() {
        console.log(`${this.nome} diz: Piu Piu (cantando)!`);
    }
    descreverCuidados() {
        console.log(`Cuidados com ${this.nome}: Precisa de uma gaiola adequada.`);
    }
}
exports.Ave = Ave;
//# sourceMappingURL=Ave.js.map