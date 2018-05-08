import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RudhrakshasComponent } from './rudhrakshas.component';

describe('RudhrakshasComponent', () => {
  let component: RudhrakshasComponent;
  let fixture: ComponentFixture<RudhrakshasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RudhrakshasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RudhrakshasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
