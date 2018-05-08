import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmistryComponent } from './palmistry.component';

describe('PalmistryComponent', () => {
  let component: PalmistryComponent;
  let fixture: ComponentFixture<PalmistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalmistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalmistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
