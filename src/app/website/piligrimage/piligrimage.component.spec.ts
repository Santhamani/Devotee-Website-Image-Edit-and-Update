import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiligrimageComponent } from './piligrimage.component';

describe('PiligrimageComponent', () => {
  let component: PiligrimageComponent;
  let fixture: ComponentFixture<PiligrimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiligrimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiligrimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
