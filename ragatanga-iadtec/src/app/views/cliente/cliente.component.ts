import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Cliente } from '../../models/cliente';

@Component({
  templateUrl: 'cliente.component.html'
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) {}
  ngOnInit() {
    this.clienteService.getClientes().then( result => {
      this.clientes = result;
    });
  }
}
