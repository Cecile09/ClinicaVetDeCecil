"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recepcionista = void 0;
const Funcionario_1 = require("./Funcionario");
class Recepcionista extends Funcionario_1.Funcionario {
    agendamentosConfirmados = 0;
    constructor(nome, matricula, salarioInicial) {
        super(nome, matricula, salarioInicial);
    }
    confirmarAgendamento() {
        this.agendamentosConfirmados++;
    }
    calcularBonus() {
        const valorPorAgendamento = 20;
        return this.agendamentosConfirmados * valorPorAgendamento;
    }
}
exports.Recepcionista = Recepcionista;
//# sourceMappingURL=Recepcionista.js.map