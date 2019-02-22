import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { EstadoComponent } from './estado.component';

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
  exports: [RouterModule]
})
export class EstadoRoutingModule {}
