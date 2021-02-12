import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssociadoFormComponent } from './associado-form/associado-form.component'

const routes: Routes = [
  { path: 'associado-form', component: AssociadoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociadoRoutingModule { }
