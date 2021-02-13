import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AssociadoRoutingModule } from './associado-routing.module';
import { AssociadoFormComponent } from './associado-form/associado-form.component';
import { AssociadoListaComponent } from './associado-lista/associado-lista.component';


@NgModule({
  declarations: [
    AssociadoFormComponent,
    AssociadoListaComponent
  ],
  imports: [
    CommonModule,
    AssociadoRoutingModule,
    FormsModule
  ],
  exports: [
    AssociadoFormComponent,
    AssociadoListaComponent
  ]
})
export class AssociadoModule { }
