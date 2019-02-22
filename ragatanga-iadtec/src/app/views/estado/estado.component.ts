import { Component, OnInit } from '@angular/core';
import { EstadoService } from './estado.service';
import { Estado } from '../../models/estado';

@Component({
  templateUrl: 'estado.component.html'
})
export class EstadoComponent implements OnInit {
  estados: Estado[];

  constructor(
    private estadoService: EstadoService
  ) {}
  ngOnInit() {
    this.estadoService.getEstados().then( result => {
      this.estados = result;
    });
  }
}
