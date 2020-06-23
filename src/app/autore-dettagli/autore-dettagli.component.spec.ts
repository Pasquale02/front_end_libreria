import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoreDettagliComponent } from './autore-dettagli.component';

describe('AutoreDettagliComponent', () => {
  let component: AutoreDettagliComponent;
  let fixture: ComponentFixture<AutoreDettagliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoreDettagliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoreDettagliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
