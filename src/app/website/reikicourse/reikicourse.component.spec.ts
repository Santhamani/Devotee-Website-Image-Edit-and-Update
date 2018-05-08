import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReikicourseComponent } from './reikicourse.component';

describe('ReikicourseComponent', () => {
  let component: ReikicourseComponent;
  let fixture: ComponentFixture<ReikicourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReikicourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReikicourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
