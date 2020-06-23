import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AutoriService} from '../services/autori.service';
import {LibriService} from '../services/libri.service';

@Component({
  selector: 'app-autore-dettagli',
  templateUrl: './autore-dettagli.component.html',
  styleUrls: ['./autore-dettagli.component.css']
})
export class AutoreDettagliComponent implements OnInit {

  id: any;

  constructor(private activatedRoute: ActivatedRoute, private autoriService: AutoriService, private libriService: LibriService) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  autoreSelected = null;
  libriByAutore = null;
  ngOnInit() {
    this.autoriService.getAutore(this.id).subscribe(
      response => {
        this.autoreSelected = response;
        this.libriService.getLibriPerAutore(this.autoreSelected.id_autore).subscribe(
          libriByAutore => {
            this.libriByAutore = libriByAutore;
          }
        );
      }
    );
  }
}
