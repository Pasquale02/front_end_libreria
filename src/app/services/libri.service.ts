import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibriService {

  urlLibri = 'http://localhost:8090/api/libri';
  urlLibro = 'http://localhost:8090/api/libro/';

  constructor(private httpClient: HttpClient) {
  }

  getLibri() {
    console.log('[get libri]' + this.urlLibri);
    return this.httpClient.get(this.urlLibri);
  }

  getLibriPerAutore(idAutore) {
    console.log('[get libri by autore]' + this.urlLibri + '/autore/' + idAutore);
    return this.httpClient.get(this.urlLibri + '/autore/' + idAutore);
  }

  getLibro(id) {
    console.log('[get libro]' + this.urlLibro + id);
    return this.httpClient.get(this.urlLibro + id);
  }

  postLibro(libro) {
    console.log('[post libro]', libro);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: 'jwt-token'
      })
    };

    let libroToSend;
    if (libro.id_libro) {
      libroToSend = {
        id_libro: libro.id_libro,
        titolo: libro.titolo,
        isbn: libro.isbn,
        prezzo: libro.prezzo,
        autore: libro.autore
      };
      console.log('[put libro]', libroToSend);

      return this.httpClient.put<any>('http://localhost:8090/api/libro/update/' + libroToSend.id_libro,
        libroToSend, httpOptions);
    } else {
      libroToSend = {
        titolo: libro.titolo,
        isbn: libro.isbn,
        prezzo: libro.prezzo,
        autore: libro.autore
      };
      console.log('[post libro2]', libroToSend);
      return this.httpClient.post<any>('http://localhost:8090/api/inserisciLibro',
        libroToSend, httpOptions);
    }
  }

  deleteLibro(id) {
    console.log('[delete libro]' + this.urlLibro + 'delete/' + id);
    return this.httpClient.delete<any>(this.urlLibro + 'delete/' + id);
  }
}
