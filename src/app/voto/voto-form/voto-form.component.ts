import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { VotoService } from '../../voto.service';
import { AssociadoService } from '../../associado.service';
import { PautaService } from '../../pauta.service';
import { Voto } from '../voto';
import { Pauta } from 'src/app/pauta/pauta';
import { Associado } from 'src/app/associado/associado';

@Component({
  selector: 'app-voto-form',
  templateUrl: './voto-form.component.html',
  styleUrls: ['./voto-form.component.css']
})
export class VotoFormComponent implements OnInit {

  voto: Voto;
  pautaId: number;
  associadoId: number;
  sucesso: boolean = false;
  errors: String[];
  usuarioLogado: string = '';
  pauta: Pauta;
  associado: Associado; 

  constructor(
    private service: VotoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private pautaService: PautaService,
    private associadoService: AssociadoService

  ) {
      this.voto = new Voto();
   }

  ngOnInit(): void {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
    this.voto.usuario = this.usuarioLogado;
    this.activatedRoute.params.subscribe(params => {this.pautaId = params['id'] });
    
    this.pautaService.getPautaById(this.pautaId)
                        .subscribe(response=>{
                          this.pauta = response; 
                        }, errorResponse=>{
                          this.errors = errorResponse.error.errors;
                        })
    this.associadoService.getAssociadoPorUsuario(this.usuarioLogado)
                            .subscribe(response =>{
                              this.associado = response;
                            }, errorResponse=>{
                              this.errors = errorResponse.error.errors;
                            })
  }
  teste(){
    console.log("Voto: "+this.voto.voto);
    console.log("Pauta: "+this.voto.idPauta);

  }
  votar(voto: string){
    this.voto.voto = voto;

  }
  onSubmit(){
    this.service.votar( this.voto )
          .subscribe( response =>{
            this.voto = response;
            this.sucesso = true;
            this.errors = []
          }, errorResponse =>{
            this.sucesso = false;
            this.errors = errorResponse.error.errors;
          })
  }

  voltar(){
    this.router.navigate(['/pautas'])
  }

}
