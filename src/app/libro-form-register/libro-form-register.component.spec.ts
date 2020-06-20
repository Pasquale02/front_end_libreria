import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroFormRegisterComponent } from './libro-form-register.component';

describe('LibroFormRegisterComponent', () => {
  let component: LibroFormRegisterComponent;
  let fixture: ComponentFixture<LibroFormRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroFormRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroFormRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
