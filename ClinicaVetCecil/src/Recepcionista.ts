import { Funcionario } from "./Funcionario";

export class Recepcionista extends Funcionario {
    public agendamentosConfirmados: number = 0;

    constructor(nome: string, matricula: string, salarioInicial: number) {
        super(nome, matricula, salarioInicial);
    }

    confirmarAgendamento(): void {
        this.agendamentosConfirmados++;
    }

    calcularBonus(): number {
        const valorPorAgendamento = 20; 
        return this.agendamentosConfirmados * valorPorAgendamento;
    }
}