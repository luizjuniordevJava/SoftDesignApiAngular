import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { PautaFormComponent } from './pauta-form/pauta-form.component';
import { PautaListaComponent } from './pauta-lista/pauta-lista.component';

const routes: Routes = [
  { path: 'pautas', component: LayoutComponent, 
    canActivate: [AuthGuard],
    children:[
      { path: 'form', component: PautaFormComponent},
      { path: 'form/:id', component: PautaFormComponent},
      { path: 'lista', component: PautaListaComponent},
      { path: '', redirectTo: '/pautas/lista',pathMatch: 'full'}

    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PautaRoutingModule { }
