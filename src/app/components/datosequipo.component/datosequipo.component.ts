import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceFutbol } from '../../services/ServiceFutbol';
import { DatosEquipo } from '../../models/DatosEquipo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datosequipo.component',
  imports: [CommonModule],
  templateUrl: './datosequipo.component.html',
  styleUrl: './datosequipo.component.css',
})
export class DatosequipoComponent implements OnInit{
  public datosEquipo!: DatosEquipo;
  constructor(
    private _Activatedrouter: ActivatedRoute,
    private _service: ServiceFutbol,
  ) {
  }
  ngOnInit(): void {
    this._Activatedrouter.params.subscribe((params: Params) => {
      console.log(params["id"]);
      this._service.loadDatosEquipo(params["id"]).subscribe(response => {
        this.datosEquipo = response;
      })
    })
  }
}
