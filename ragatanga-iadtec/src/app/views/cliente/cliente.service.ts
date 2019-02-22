import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Cliente } from '../../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  api = '/api/pais';

  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get<Cliente[]>(`/api/cliente`, { headers: this.headers }).toPromise();
  }

  save(cliente) {
    if (cliente.id) {
      return this.http.put(`${this.api}/${cliente.id}`, cliente, { headers: this.headers })
      .toPromise();
    } else {
      return this.http.post(`${this.api}/save`, cliente, { headers: this.headers })
      .toPromise();
    }
  }

  delete(cliente) {
    return this.http.delete(`${this.api}/${cliente.id}`, { headers: this.headers })
    .toPromise();
  }

}
