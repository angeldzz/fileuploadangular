import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ServiceFutbol } from '../../services/ServiceFutbol';
import { Equipo } from '../../models/Equipo';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit{
  public equipos!: Array<Equipo>
  constructor(
    private _service: ServiceFutbol,
  ) {}
  ngOnInit(): void {
    this._service.loadEquipos().subscribe(response => {
      this.equipos = response
    })
  }
}
