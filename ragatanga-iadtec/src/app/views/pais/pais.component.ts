import { Component, OnInit } from '@angular/core';
import { Pais } from '../../models/pais';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss']
})
export class PaisComponent implements OnInit {
  openForm = false;
  paisSelecionado: Pais;

  constructor() {}

  ngOnInit() {}

  adicionar() {
    this.openForm = !this.openForm;
    this.paisSelecionado.id = '';
    this.paisSelecionado.nome = '';
  }
}
