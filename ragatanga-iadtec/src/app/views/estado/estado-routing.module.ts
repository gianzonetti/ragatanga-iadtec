import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { EstadoComponent } from './estado.component';
import { PaisService } from '../pais/pais.service';

const routes: Routes = [
  {
    path: '',
    component: EstadoComponent,
    data: {
      title: 'Estado'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PaisService]
})
export class EstadoRoutingModule {}
