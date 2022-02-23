import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Escola } from './escola';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {

  // método para requisição GET via HTTP pro backend.
  private baseURL= "http://localhost:9999/api/v1/escolas";
  constructor(private httpClient: HttpClient) { }

  getEscolasList(): Observable<Escola[]>{
    return this.httpClient.get<Escola[]>(`${this.baseURL}`);

  }

  // método para requisição POST via HTTP pro backend.
  criarEscola(escola: Escola): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, escola);
  }
}
