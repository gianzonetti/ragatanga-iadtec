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
  api = '/api/estado';
  constructor(private http: HttpClient) { }

  getEstados() {
    return this.http.get<Estado[]>(`${this.api}`, { headers: this.headers }).toPromise();
  }

  save(estado) {
    if (estado.id) {
      return this.http.put(`${this.api}/${estado.id}`, estado, { headers: this.headers })
      .toPromise();
    } else {
      return this.http.post(`${this.api}/save`, estado, { headers: this.headers })
      .toPromise();
    }
  }

  delete(estado) {
    return this.http.delete(`${this.api}/${estado.id}`, { headers: this.headers })
    .toPromise();
  }
}
