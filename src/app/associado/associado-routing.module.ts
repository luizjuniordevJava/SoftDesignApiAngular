import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssociadoFormComponent } from './associado-form/associado-form.component'
import { AssociadoListaComponent } from './associado-lista/associado-lista.component';

const routes: Routes = [
  { path: 'associado-form', component: AssociadoFormComponent},
  { path: 'associado-lista', component: AssociadoListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociadoRoutingModule { }
