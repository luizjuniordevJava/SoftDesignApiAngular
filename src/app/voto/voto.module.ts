import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotoRoutingModule } from './voto-routing.module';
import { VotoFormComponent } from './voto-form/voto-form.component';
import { FormsModule } from '@angular/forms';
import { VotoListaComponent } from './voto-lista/voto-lista.component';


@NgModule({
  declarations: [VotoFormComponent, VotoListaComponent],
  imports: [
    CommonModule,
    FormsModule,
    VotoRoutingModule
  ],
  exports: [VotoFormComponent]
})
export class VotoModule { }
