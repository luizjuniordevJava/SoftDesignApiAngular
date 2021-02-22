import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Voto } from './voto/voto';

@Injectable({
  providedIn: 'root'
})
export class VotoService {

  apiURL: string = environment.apiURLBase + '/api/votos';

  constructor(private http: HttpClient) { }

  votar( voto: Voto ) : Observable<Voto>{
    return this.http.post<Voto>(`${this.apiURL}`, voto);
  }
}
