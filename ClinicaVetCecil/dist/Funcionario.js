"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    nome;
    matricula;
    _salario;
    constructor(nome, matricula, salarioInicial) {
        this.nome = nome;
        this.matricula = matricula;
        this._salario = salarioInicial;
    }
    get salario() {
        return this._salario;
    }
    alterarSalario(novoSalario) {
        if (novoSalario > 0) {
            this._salario = novoSalario;
        }
        else {
            console.log("Erro: O salário deve ser um valor positivo.");
        }
    }
}
exports.Funcionario = Funcionario;
//# sourceMappingURL=Funcionario.js.map