import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmcourseComponent } from './palmcourse.component';

describe('PalmcourseComponent', () => {
  let component: PalmcourseComponent;
  let fixture: ComponentFixture<PalmcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalmcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalmcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
