import { Equipo } from "./Equipo";
import { Jugador } from "./Jugador";

export class DatosEquipo{
    constructor(
        public equipo: Equipo,
        public jugadores: Array<Jugador>,
    ) {
        
    }
}