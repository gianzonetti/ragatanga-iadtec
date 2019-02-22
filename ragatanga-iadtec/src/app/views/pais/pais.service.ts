import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PaisService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  api = '/api/pais';

  constructor(private http: HttpClient) { }

  getPaises() {
    return this.http.get(this.api, { headers: this.headers }).toPromise();
  }

  save(pais) {
    if (pais.id) {
      console.log('edit');
      return this.http.put(`${this.api}/${pais.id}`, pais, { headers: this.headers })
      .toPromise();
    } else {
      console.log('save');
      return this.http.post(`${this.api}/save`, pais, { headers: this.headers })
      .toPromise();
    }
  }

}
