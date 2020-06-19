import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AutoreFormComponent} from '../autore-form';
import {catchError} from 'rxjs/operators';

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

  postAutore() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/xml',
        Authorization: 'jwt-token'
      })
    };

    return this.httpClient.post<AutoreFormComponent>('http://localhost:8090/api/inserisciAutore',
      {
        nome_autore: 'Gianni11',
        cognome_autore: 'Rodari22',
        data_nascita_autore: '1955-02-08T23:00:00.000+00:00'
      }, httpOptions);
  }
}
