import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoriComponentComponent } from './autori-component.component';

describe('AutoriComponentComponent', () => {
  let component: AutoriComponentComponent;
  let fixture: ComponentFixture<AutoriComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoriComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoriComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
