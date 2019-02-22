import { Component, OnInit } from '@angular/core';
import { EstadoService } from './estado.service';
import { Estado } from '../../models/estado';
import { PaisService } from '../pais/pais.service';
import { Pais } from '../../models/pais';

@Component({
  templateUrl: 'estado.component.html',
  styleUrls: ['./estado.component.scss']
})
export class EstadoComponent implements OnInit {
  estados: Estado[];
  paisList: Pais[];
  openForm = false;
  estadoSelecionado: Estado;

  constructor(
    private estadoService: EstadoService,
    private paisService: PaisService
  ) {}

  ngOnInit() {
    this.getPaises();
    this.atualizar();
  }

  getPaises() {
    this.paisService.getPaises().then( result => {
      this.paisList = result;
      console.log(result);
    });
  }

  adicionar() {
    this.openForm = true;
    this.estadoSelecionado.id = 0;
    this.estadoSelecionado.nome = '';
  }

  editar(pais) {
    this.openForm = true;
    this.estadoSelecionado.nome = pais.nome;
    this.estadoSelecionado.id = pais.id;
  }

  salvar() {
    this.estadoService.save(this.estadoSelecionado).then(success => {
      this.atualizar();
    }).catch(error => {
      console.log(error);
    });
  }

  atualizar() {
    this.estadoService.getEstados().then( result => {
      this.estados = result;
    });
  }
}
