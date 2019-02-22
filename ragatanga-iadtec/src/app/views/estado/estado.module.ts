import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';
import { EstadoComponent } from './estado.component';
import { EstadoRoutingModule } from './estado-routing.module';
import { PaisService } from '../pais/pais.service';

@NgModule({
  imports: [
    FormsModule,
    EstadoRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ EstadoComponent ],
  providers: [PaisService]
})
export class EstadoModule { }
