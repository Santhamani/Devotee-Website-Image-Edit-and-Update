import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VasthuComponent } from './vasthu.component';

describe('VasthuComponent', () => {
  let component: VasthuComponent;
  let fixture: ComponentFixture<VasthuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VasthuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VasthuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
