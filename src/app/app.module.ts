import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { AssociadoModule } from './associado/associado.module';
import { AssociadoService } from './associado.service';
import { PautaModule } from './pauta/pauta.module';
import { PautaService } from './pauta.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    AssociadoModule,
    PautaModule
  ],
  providers: [
    AssociadoService,
    PautaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
