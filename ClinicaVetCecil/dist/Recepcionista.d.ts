import { Funcionario } from "./Funcionario";
export declare class Recepcionista extends Funcionario {
    agendamentosConfirmados: number;
    constructor(nome: string, matricula: string, salarioInicial: number);
    confirmarAgendamento(): void;
    calcularBonus(): number;
}
//# sourceMappingURL=Recepcionista.d.ts.map