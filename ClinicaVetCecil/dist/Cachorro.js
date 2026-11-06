"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const Animal_1 = require("./Animal");
class Cachorro extends Animal_1.Animal {
    emitirSom() {
        console.log(`${this.nome} diz: Au Au!`);
    }
    descreverCuidados() {
        console.log(`Cuidados com ${this.nome}: Precisa de passeio diário.`);
    }
}
exports.Cachorro = Cachorro;
//# sourceMappingURL=Cachorro.js.map