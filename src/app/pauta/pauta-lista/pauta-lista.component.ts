import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PautaService } from '../../pauta.service';
import { Pauta } from '../pauta';

@Component({
  selector: 'app-pauta-lista',
  templateUrl: './pauta-lista.component.html',
  styleUrls: ['./pauta-lista.component.css']
})
export class PautaListaComponent implements OnInit {

  pautas: Pauta[] = [];
  pautaSelecionado : Pauta;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor( private service: PautaService, private router: Router ) { }


  ngOnInit(): void {
    this.service 
          .getPauta()
          .subscribe( response => this.pautas = response);
  }

  novoCadastro(){
    this.router.navigate(['/pautas/form']);
  }

  preparaDelecao( pauta: Pauta){
    this.pautaSelecionado = pauta;
  }

  deletarPauta(){
    this.service
          .deletar(this.pautaSelecionado)
          .subscribe( 
            response => {
              this.mensagemSucesso = 'Pauta deletado com sucesso!'
              this.ngOnInit();
            },
            erro => this.mensagemErro = 'Ocorreu um erro ao deletar a pauta!'
            )
    
  }
  votacao(idPauta: number){
    this.router.navigate([`/votos/form/${idPauta}`]);
  }
}
