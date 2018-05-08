import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommmunityComponent } from './commmunity.component';

describe('CommmunityComponent', () => {
  let component: CommmunityComponent;
  let fixture: ComponentFixture<CommmunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommmunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommmunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
