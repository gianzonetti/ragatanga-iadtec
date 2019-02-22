import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pais } from '../../models/pais';

@Injectable()
export class PaisService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  api = '/api/pais';

  constructor(private http: HttpClient) { }

  getPaises() {
    return this.http.get<Pais[]>(this.api, { headers: this.headers }).toPromise();
  }

  save(pais) {
    if (pais.id) {
      return this.http.put(`${this.api}/${pais.id}`, pais, { headers: this.headers })
      .toPromise();
    } else {
      return this.http.post(`${this.api}/save`, pais, { headers: this.headers })
      .toPromise();
    }
  }

  delete(pais) {
    return this.http.delete(`${this.api}/${pais.id}`, { headers: this.headers })
    .toPromise();
  }

}
