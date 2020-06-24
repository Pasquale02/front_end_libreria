import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutoriService {

  urlAutori = 'http://localhost:8090/api/autori';
  urlAutore = 'http://localhost:8090/api/autore/';

  constructor(private httpClient: HttpClient) {
  }

  getAutori() {
    console.log('[get autori]' + this.urlAutori);
    return this.httpClient.get(this.urlAutori);
  }

  getAutore(id) {
    console.log('[get autore]' + this.urlAutore + id);
    return this.httpClient.get(this.urlAutore + id);
  }

  postAutore(autore) {
    console.log('[post autore]', autore);
    const year = autore.data_nascita.year;
    let month;
    let day;

    if (autore.data_nascita.month.toString().length < 2) {
      month = '0' + autore.data_nascita.month;
    } else {
      month = autore.data_nascita.month;
    }

    if (autore.data_nascita.day.toString().length < 2) {
      day = '0' + autore.data_nascita.day;
    } else {
      day = autore.data_nascita.day;
    }
    const dataNascita = year + '-' + month + '-' + day + 'T00:00:00.000+00:00';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: 'jwt-token'
      })
    };

    let autoreToSend;
    if (autore.id_autore) {
      autoreToSend = {
        id_autore: autore.id_autore,
        nome_autore: autore.nome,
        cognome_autore: autore.cognome,
        data_nascita_autore: dataNascita
      };
      return this.httpClient.put<any>('http://localhost:8090/api/autore/update/' + autoreToSend.id_autore,
        autoreToSend, httpOptions);
    } else {
      autoreToSend = {
        nome_autore: autore.nome,
        cognome_autore: autore.cognome,
        data_nascita_autore: dataNascita
      };
      return this.httpClient.post<any>('http://localhost:8090/api/inserisciAutore',
        autoreToSend, httpOptions);
    }

  }

  deleteAutore(id) {
    console.log('[delete autore]' + this.urlAutore + 'delete/' + id);
    return this.httpClient.delete<any>(this.urlAutore + 'delete/' + id);
  }
}
