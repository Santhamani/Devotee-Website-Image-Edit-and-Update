import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaligramComponent } from './shaligram.component';

describe('ShaligramComponent', () => {
  let component: ShaligramComponent;
  let fixture: ComponentFixture<ShaligramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShaligramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShaligramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
