export declare abstract class Funcionario {
    nome: string;
    matricula: string;
    private _salario;
    constructor(nome: string, matricula: string, salarioInicial: number);
    get salario(): number;
    alterarSalario(novoSalario: number): void;
    abstract calcularBonus(): number;
}
//# sourceMappingURL=Funcionario.d.ts.map