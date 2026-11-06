import { Animal } from "./Animal";
import { Veterinario } from "./Veterinario";

export class Consulta {
    constructor(
        public animal: Animal,
        public veterinario: Veterinario,
        public data: Date
    ) {
        this.veterinario.consultar();
    }
}