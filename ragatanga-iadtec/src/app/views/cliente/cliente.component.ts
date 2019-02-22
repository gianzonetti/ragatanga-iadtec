import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Cliente } from '../../models/cliente';
import { Estado } from '../../models/estado';
import { EstadoService } from '../estado/estado.service';

@Component({
  templateUrl: 'cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  clienteSelecionado: Cliente;
  clientes: Cliente[];
  estados: Estado[];
  openForm = false;

  constructor(
    private clienteService: ClienteService,
    private estadoService: EstadoService
  ) {}

  ngOnInit() {
    this.getEstados();
    this.atualizar();
  }

  getEstados() {
    this.estadoService.getEstados().then(result => {
      console.log(result)
      this.estados = result;
    }).catch(error => {
      console.log(error);
    });
  }

  atualizar() {
    this.clienteService.getClientes().then(result => {
      this.clientes = result;
    });
  }

  adicionar() {
    this.openForm = true;
    this.clienteSelecionado = new Cliente();
  }

  salvar() {}
}
