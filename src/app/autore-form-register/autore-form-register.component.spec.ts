import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoreFormRegisterComponent } from './autore-form-register.component';

describe('AutoreFormRegisterComponent', () => {
  let component: AutoreFormRegisterComponent;
  let fixture: ComponentFixture<AutoreFormRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoreFormRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoreFormRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
