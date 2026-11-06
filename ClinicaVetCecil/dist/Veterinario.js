"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinario = void 0;
const Funcionario_1 = require("./Funcionario");
class Veterinario extends Funcionario_1.Funcionario {
    consultasRealizadas = 0;
    constructor(nome, matricula, salarioInicial) {
        super(nome, matricula, salarioInicial);
    }
    consultar() {
        this.consultasRealizadas++;
    }
    calcularBonus() {
        const valorPorConsulta = 50;
        return this.consultasRealizadas * valorPorConsulta;
    }
}
exports.Veterinario = Veterinario;
//# sourceMappingURL=Veterinario.js.map