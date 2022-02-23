import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Escola } from './escola';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {

  private baseURL= "http://localhost:9999/api/v1/escolas";
  constructor(private httpClient: HttpClient) { }

  getEscolasList(): Observable<Escola[]>{
    return this.httpClient.get<Escola[]>(`${this.baseURL}`);

  }
}
