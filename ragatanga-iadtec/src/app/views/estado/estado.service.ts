import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Estado } from '../../models/estado';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getEstados() {
    return this.http.get<Estado[]>(`/api/estado`, { headers: this.headers }).toPromise();
  }
}
