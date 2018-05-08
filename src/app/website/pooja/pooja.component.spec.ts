import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojaComponent } from './pooja.component';

describe('PoojaComponent', () => {
  let component: PoojaComponent;
  let fixture: ComponentFixture<PoojaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoojaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
