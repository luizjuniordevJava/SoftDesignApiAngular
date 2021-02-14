import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Associado } from './associado/associado';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssociadoService {

  apiURL: string = environment.apiURLBase + '/api/associados';

  constructor( private http: HttpClient) { }

  salvar( associado: Associado) : Observable<Associado>{
    return this.http.post<Associado>(`${this.apiURL}`, associado);
  }

  atualizar( associado: Associado) : Observable<any>{
    return this.http.put<Associado>(`${this.apiURL}/${associado.id}`, associado);
  }

  getAssociado() : Observable<Associado[]>{
    return this.http.get<Associado[]>(this.apiURL);
  }

  getAssociadoById(id: number) : Observable<Associado>{
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(associado: Associado) : Observable<any>{
    return this.http.delete<any>(`${this.apiURL}/${associado.id}`);
  }
}
