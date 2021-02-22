import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Associado } from '../associado';
import { AssociadoService } from '../../associado.service'
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-associado-form',
  templateUrl: './associado-form.component.html',
  styleUrls: ['./associado-form.component.css']
})
export class AssociadoFormComponent implements OnInit {

  associado: Associado;
  sucesso: boolean = false;
  errors: String[];
  id: number;
  usuarioLogado: string;

  constructor( 
    private service: AssociadoService, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {
    this.associado = new Associado();
  }

  ngOnInit(): void {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(
      urlParams => {
        this.id = urlParams['id'];
        if( this.id ){
          this.service
            .getAssociadoById(this.id)
            .subscribe(
              response => this.associado = response,
              errorResponse => this.associado = new Associado()
            )
        }
      }
    )
  }

  voltarParaListagem(){
    this.router.navigate(['/associados/lista']);
  }

  onSubmit(){
    if( this.id ){

      this.service
            .atualizar(this.associado)
            .subscribe( response =>{
              this.sucesso = true;
              this.errors = null;
            }, errorResponse =>{
              this.errors = errorResponse.error.errors;
            })

    }else{
      this.associado.usuario = this.usuarioLogado;
      this.service
      .salvar(this.associado)
      .subscribe( response =>{
        this.sucesso = true;
        this.errors = null;
        this.associado = response;
      }, errorResponse =>{
        //console.log(errorResponse.error.errors);
        this.errors = errorResponse.error.errors;
        this.sucesso = false;
      })
    }
  }

}
