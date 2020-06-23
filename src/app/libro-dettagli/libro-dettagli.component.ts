import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LibriService} from '../services/libri.service';

@Component({
  selector: 'app-libro-dettagli',
  templateUrl: './libro-dettagli.component.html',
  styleUrls: ['./libro-dettagli.component.css']
})
export class LibroDettagliComponent implements OnInit {

  id: any;

  constructor(private activatedRoute: ActivatedRoute, private libriService: LibriService) {
    this.id = this.activatedRoute.snapshot.params.id;
    // oppure
    // this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  libro = null;

  ngOnInit() {
    this.libriService.getLibro(this.id).subscribe(
      response => {
        this.libro = response;
      }
    );
  }

}
