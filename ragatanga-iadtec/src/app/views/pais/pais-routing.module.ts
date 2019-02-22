import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { PaisComponent } from './pais.component';

const routes: Routes = [
  {
    path: '',
    component: PaisComponent,
    data: {
      title: 'País'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisRoutingModule {}
