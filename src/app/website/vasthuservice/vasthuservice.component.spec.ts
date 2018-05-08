import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VasthuserviceComponent } from './vasthuservice.component';

describe('VasthuserviceComponent', () => {
  let component: VasthuserviceComponent;
  let fixture: ComponentFixture<VasthuserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VasthuserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VasthuserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
