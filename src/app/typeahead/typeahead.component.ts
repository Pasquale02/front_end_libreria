import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, filter} from 'rxjs/operators';
import {AutoriService} from '../services/autori.service';

interface Autore {
  id_autore: number;
  cognome_autore: string;
  nome_autore: string;
  data_nascita_autore: string;
}

let autori;

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css']
})
export class TypeaheadComponent implements OnInit, OnChanges {

  @Input() autorePred;

  constructor(private autoriService: AutoriService) {
  }

  public model: Autore;

  ngOnInit() {
    this.autoriService.getAutori().subscribe(
      response => {
        autori = response;
      }
    );
  }

  ngOnChanges() {
    if (this.autorePred) {
      this.model = this.autorePred;
    }
  }

  formatter = (autore: Autore) => autore.nome_autore;

  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length >= 2),
    map(term => autori.filter(autore => new RegExp(term, 'mi').test(autore.nome_autore)).slice(0, 10))
  )
}
