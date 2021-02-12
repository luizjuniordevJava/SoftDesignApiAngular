import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociadoRoutingModule } from './associado-routing.module';
import { AssociadoFormComponent } from './associado-form/associado-form.component';


@NgModule({
  declarations: [
    AssociadoFormComponent
  ],
  imports: [
    CommonModule,
    AssociadoRoutingModule
  ]
})
export class AssociadoModule { }
