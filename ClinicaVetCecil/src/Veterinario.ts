import { Funcionario } from "./Funcionario";

export class Veterinario extends Funcionario {
    public consultasRealizadas: number = 0;

    constructor(nome: string, matricula: string, salarioInicial: number) {
        super(nome, matricula, salarioInicial);
    }

    consultar(): void {
        this.consultasRealizadas++;
    }

    calcularBonus(): number {
        const valorPorConsulta = 50; 
        return this.consultasRealizadas * valorPorConsulta;
    }
}