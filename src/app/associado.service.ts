import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Associado } from './associado/associado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssociadoService {

  constructor( private http: HttpClient) { }

  salvar( associado: Associado) : Observable<Associado>{
    return this.http.post<Associado>('http://localhost:8080/api/associados', associado);
  }

  atualizar( associado: Associado) : Observable<any>{
    return this.http.put<Associado>(`http://localhost:8080/api/associados/${associado.id}`, associado);
  }

  getAssociado() : Observable<Associado[]>{
    return this.http.get<Associado[]>('http://localhost:8080/api/associados');
  }

  getAssociadoById(id: number) : Observable<Associado>{
    return this.http.get<any>(`http://localhost:8080/api/associados/${id}`);
  }

  deletar(associado: Associado) : Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/associados/${associado.id}`);
  }
}
