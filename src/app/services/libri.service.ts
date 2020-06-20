import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibriService {

  constructor(private httpClient: HttpClient) { }

  getLibri() {
    return this.httpClient.get('http://localhost:8090/api/elencoLibri');
  }

  getLibro(id) {
    console.log('[in service get libro id]' + id);
    return this.httpClient.get('http://localhost:8090/api/cercaLibro/' + id);
  }

  postLibro(libro) {
    console.log('[in service libro post]', libro);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: 'jwt-token'
      })
    };

    const libroToSend = {
      titolo: libro.titolo,
      isbn: libro.isbn,
      prezzo: libro.prezzo,
      autore: libro.autore
    };
    return this.httpClient.post<any>('http://localhost:8090/api/inserisciLibro',
      libroToSend, httpOptions);
  }

  deleteLibro(id) {
    console.log('[in service delete libro id]' + id);
    return this.httpClient.delete<any>('http://localhost:8090/api/deleteLibro/' + id);
  }
}
