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
    console.log('TEST');
    this.paisService.getPaises().then( result => {
      console.log(result);
      this.paisList = result;
    });
  }

  adicionar() {
    this.openForm = true;
    this.estadoSelecionado.id = 0;
    this.estadoSelecionado.nome = '';
    this.estadoSelecionado.uf = '';
    this.estadoSelecionado.pais = new Pais();
  }

  editar(estado) {
    this.openForm = true;
    this.estadoSelecionado.id = estado.id;
    this.estadoSelecionado.nome = estado.nome;
    this.estadoSelecionado.uf = estado.uf;
    this.estadoSelecionado.pais = estado.pais;
  }

  salvar() {
    this.estadoService.save(this.estadoSelecionado).then(success => {
      this.atualizar();
    }).catch(error => {
      console.log(error);
    });
  }

  deletar(estado) {
    this.estadoService.delete(estado).then(success => {
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
