import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssociadoService } from '../../associado.service';
import { Associado } from '../associado';

@Component({
  selector: 'app-associado-lista',
  templateUrl: './associado-lista.component.html',
  styleUrls: ['./associado-lista.component.css']
})
export class AssociadoListaComponent implements OnInit {

  associados: Associado[] = [];
  associadoSelecionado: Associado;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor( private service: AssociadoService, private router: Router ) { }

  ngOnInit(): void {
    this.service 
          .getAssociado()
          .subscribe( response => this.associados = response);
  }

  novoCadastro(){
    this.router.navigate(['/associado-form']);
  }

  preparaDelecao( associado: Associado){
    this.associadoSelecionado = associado;
  }

  deletarAssociado(){
    this.service
          .deletar(this.associadoSelecionado)
          .subscribe( 
            response => {
              this.mensagemSucesso = 'Associado deletado com sucesso!'
              this.ngOnInit();
            },
            erro => this.mensagemErro = 'Ocorreu um erro ao deletar o cliente'
            )
    
  }

}
