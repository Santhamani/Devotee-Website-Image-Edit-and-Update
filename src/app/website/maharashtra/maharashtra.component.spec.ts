import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaharashtraComponent } from './maharashtra.component';

describe('MaharashtraComponent', () => {
  let component: MaharashtraComponent;
  let fixture: ComponentFixture<MaharashtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaharashtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaharashtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
