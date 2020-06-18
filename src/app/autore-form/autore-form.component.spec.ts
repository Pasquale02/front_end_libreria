import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoreFormComponent } from './autore-form.component';

describe('AutoreFormComponent', () => {
  let component: AutoreFormComponent;
  let fixture: ComponentFixture<AutoreFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoreFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
