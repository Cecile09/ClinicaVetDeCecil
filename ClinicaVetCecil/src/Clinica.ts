import { Funcionario } from "./Funcionario";
import { Animal } from "./Animal";

export class Clinica {
    public funcionarios: Funcionario[] = [];
    public animais: Animal[] = [];

    constructor(public nome: string) {}

    adicionarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }

    adicionarAnimal(animal: Animal): void {
        this.animais.push(animal);
    }
}