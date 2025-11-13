import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { forkJoin, Observable, map } from "rxjs";
import { Equipo } from "../models/Equipo";
import { DatosEquipo } from "../models/DatosEquipo";
import { Jugador } from "../models/Jugador";

@Injectable()
export class ServiceFutbol{
    constructor(
        private _http: HttpClient,
    ) {}
    loadEquipos(): Observable<Array<Equipo>>{
        let url = environment.urlFutbol + "api/Equipos"
        return this._http.get<Array<Equipo>>(url)
    }
    loadDatosEquipo(id: number): Observable<DatosEquipo>{
        let urljugadores = environment.urlFutbol + "api/Jugadores/JugadoresEquipos/" + id
        let urlequipo = environment.urlFutbol + "api/Equipos/" + id
        return forkJoin({
            equipo: this._http.get<Equipo>(urlequipo),
            jugadores: this._http.get<Array<Jugador>>(urljugadores)
        }).pipe(
            map(response => new DatosEquipo(response.equipo, response.jugadores))
        )
    }
}