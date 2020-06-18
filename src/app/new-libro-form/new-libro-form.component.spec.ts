import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLibroFormComponent } from './new-libro-form.component';

describe('NewLibroFormComponent', () => {
  let component: NewLibroFormComponent;
  let fixture: ComponentFixture<NewLibroFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLibroFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLibroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
