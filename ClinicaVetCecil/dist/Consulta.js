"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consulta = void 0;
class Consulta {
    animal;
    veterinario;
    data;
    constructor(animal, veterinario, data) {
        this.animal = animal;
        this.veterinario = veterinario;
        this.data = data;
        this.veterinario.consultar();
    }
}
exports.Consulta = Consulta;
//# sourceMappingURL=Consulta.js.map