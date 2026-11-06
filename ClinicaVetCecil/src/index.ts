import { Cachorro } from "./Cachorro";
import { Gato } from "./Gato";
import { Ave } from "./Ave";
import { Veterinario } from "./Veterinario";
import { Recepcionista } from "./Recepcionista";
import { Consulta } from "./Consulta";
import { Clinica } from "./Clinica";

const clinicaMarta = new Clinica("Clínica Veterinária Dona Marta");
console.log(`Bem-vindo à ${clinicaMarta.nome}`);

const dog = new Cachorro("Rex", 4, "Carlos");
const cat = new Gato("Mingau", 2, "Ana");
const bird = new Ave("Louro", 1, "Mariana");

clinicaMarta.adicionarAnimal(dog);
clinicaMarta.adicionarAnimal(cat);
clinicaMarta.adicionarAnimal(bird);

console.log("Rotina dos Animais");
clinicaMarta.animais.forEach(animal => {
    animal.emitirSom();
    animal.descreverCuidados();
    console.log("");
});

const vet = new Veterinario("Dr. Marcos", "VET123", 5000);
const recep = new Recepcionista("Juliana", "REC456", 2500);

clinicaMarta.adicionarFuncionario(vet);
clinicaMarta.adicionarFuncionario(recep);

console.log("Teste de Encapsulamento de Salário");
console.log(`Salário inicial do ${vet.nome}: R$ ${vet.salario}`);
vet.alterarSalario(5500);
console.log(`Novo salário do ${vet.nome}: R$ ${vet.salario}`);
vet.alterarSalario(-100);
console.log("");

console.log("Movimentação da Clínica");

recep.confirmarAgendamento();
recep.confirmarAgendamento();
recep.confirmarAgendamento();
console.log(`${recep.nome} confirmou ${recep.agendamentosConfirmados} agendamentos.`);

const consulta1 = new Consulta(dog, vet, new Date("2026-11-06"));
const consulta2 = new Consulta(cat, vet, new Date("2026-11-07"));

console.log(`Consulta realizada para ${consulta1.animal.nome} com o ${consulta1.veterinario.nome} na data ${consulta1.data.toLocaleDateString()}.`);
console.log(`Consulta realizada para ${consulta2.animal.nome} com o ${consulta2.veterinario.nome} na data ${consulta2.data.toLocaleDateString()}.`);
console.log(`${vet.nome} realizou um total de ${vet.consultasRealizadas} consultas.`);

console.log("Folha de Pagamento com Bônus");
clinicaMarta.funcionarios.forEach(func => {
    const bonus = func.calcularBonus();
    const total = func.salario + bonus;
    console.log(`Funcionário(a): ${func.nome} | Matrícula: ${func.matricula}`);
    console.log(`Salário Base: R$ ${func.salario}`);
    console.log(`Bônus Recebido: R$ ${bonus}`);
    console.log(`Total a Receber: R$ ${total}`);
    console.log("");
});