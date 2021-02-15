import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PautaService } from 'src/app/pauta.service';
import { Pauta } from '../pauta';
import { PautaModule } from '../pauta.module';

@Component({
  selector: 'app-pauta-form',
  templateUrl: './pauta-form.component.html',
  styleUrls: ['./pauta-form.component.css']
})
export class PautaFormComponent implements OnInit {

  pauta: Pauta;
  sucesso: boolean = false;
  errors: String[];
  id: number;


  constructor(
    private service: PautaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.pauta = new Pauta();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(
      urlParams => {
        this.id = urlParams['id'];
        if( this.id ){
          this.service
            .getPautaById(this.id)
            .subscribe(
              response => this.pauta = response,
              errorResponse => this.pauta = new Pauta()
            )
        }
      }
    )
  }

  voltarParaListagem(){
    this.router.navigate(['/pautas/lista']);
  }

  onSubmit(){
    if( this.id ){

      this.service
            .atualizar(this.pauta)
            .subscribe( response =>{
              this.sucesso = true;
              this.errors = null;
            }, errorResponse =>{
              this.errors = ['Erro ao atualizar a Pauta.']
            })

    }else{

      this.service
      .salvar(this.pauta)
      .subscribe( response =>{
        this.sucesso = true;
        this.errors = null;
        this.pauta = response;
      }, errorResponse =>{
        //console.log(errorResponse.error.errors);
        this.errors = errorResponse.error.errors;
        this.sucesso = false;
      })
    }
  }

}
