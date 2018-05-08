import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeshopComponent } from './devoteeshop.component';

describe('DevoteeshopComponent', () => {
  let component: DevoteeshopComponent;
  let fixture: ComponentFixture<DevoteeshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
