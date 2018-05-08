import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumercourseComponent } from './numercourse.component';

describe('NumercourseComponent', () => {
  let component: NumercourseComponent;
  let fixture: ComponentFixture<NumercourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumercourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumercourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
