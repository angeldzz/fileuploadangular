import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceFutbol } from '../../services/ServiceFutbol';
import { Equipo } from '../../models/Equipo';
import { Jugador } from '../../models/Jugador';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datosequipo.component',
  imports: [CommonModule],
  templateUrl: './datosequipo.component.html',
  styleUrl: './datosequipo.component.css',
})
export class DatosequipoComponent implements OnInit{
  public equipo!: Equipo;
  public jugadores!: Array<Jugador>
  constructor(
    private _Activatedrouter: ActivatedRoute,
    private _service: ServiceFutbol,
  ) {
  }
  ngOnInit(): void {
    this._Activatedrouter.params.subscribe((params: Params) => {
      console.log(params["id"]);
      this._service.loadDatosEquipo(params["id"]).subscribe(response => {
        this.equipo = response.equipo
        this.jugadores = response.Jugadores
      })
    })
  }
}
