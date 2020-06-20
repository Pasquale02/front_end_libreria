import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutoriService {

  constructor(private httpClient: HttpClient) {
  }

  getAutori() {
    // return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    return this.httpClient.get('http://localhost:8090/api/elencoAutori');
  }

  getAutore(id) {
    return this.httpClient.get('http://localhost:8090/api/cercaAutore/', id);
  }

  postAutore(autore) {
    console.log('[in service post]', autore);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: 'jwt-token'
      })
    };

    const autoreToSend = {
      nome_autore: autore.nome,
      cognome_autore: autore.cognome,
      data_nascita_autore: autore.data_nascita
    };
    return this.httpClient.post<any>('http://localhost:8090/api/inserisciAutore',
      autoreToSend, httpOptions);
  }
}
