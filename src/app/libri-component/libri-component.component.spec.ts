import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibriComponentComponent } from './libri-component.component';

describe('LibriComponentComponent', () => {
  let component: LibriComponentComponent;
  let fixture: ComponentFixture<LibriComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibriComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibriComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
