export abstract class Funcionario {
    private _salario: number;

    constructor(
        public nome: string,
        public matricula: string,
        salarioInicial: number
    ) {
        this._salario = salarioInicial;
    }

    get salario(): number {
        return this._salario;
    }

    alterarSalario(novoSalario: number): void {
        if (novoSalario > 0) {
            this._salario = novoSalario;
        } else {
            console.log("Erro: O salário deve ser um valor positivo.");
        }
    }

    abstract calcularBonus(): number;
}