"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clinica = void 0;
class Clinica {
    nome;
    funcionarios = [];
    animais = [];
    constructor(nome) {
        this.nome = nome;
    }
    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }
    adicionarAnimal(animal) {
        this.animais.push(animal);
    }
}
exports.Clinica = Clinica;
//# sourceMappingURL=Clinica.js.map