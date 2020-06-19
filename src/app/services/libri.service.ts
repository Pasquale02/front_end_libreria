import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibriService {

  constructor(private httpClient: HttpClient) { }

  getLibri() {
    return this.httpClient.get('http://localhost:8090/api/elencoLibri');
  }
}
