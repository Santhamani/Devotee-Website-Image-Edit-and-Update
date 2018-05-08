import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VasthucourseComponent } from './vasthucourse.component';

describe('VasthucourseComponent', () => {
  let component: VasthucourseComponent;
  let fixture: ComponentFixture<VasthucourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VasthucourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VasthucourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
