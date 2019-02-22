import { Component, OnInit } from '@angular/core';
import { Pais } from '../../models/pais';
import { PaisService } from './pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss']
})
export class PaisComponent implements OnInit {
  openForm = false;
  paisSelecionado: Pais = new Pais();
  paises;

  constructor( private paisService: PaisService) {}

  ngOnInit() {

    this.paisService.getPaises().then( result => {
      this.paises = result;
    });
  }

  adicionar() {

    this.openForm = true;
    this.paisSelecionado.id = '';
    this.paisSelecionado.nome = '';
  }

  editar(pais) {
    console.log(pais);
    this.openForm = true;
    this.paisSelecionado.nome = pais.nome;
    this.paisSelecionado.id = pais.id;
  }

  salvar() {
    
  }
}
