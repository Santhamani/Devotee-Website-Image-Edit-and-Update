import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrocourseComponent } from './astrocourse.component';

describe('AstrocourseComponent', () => {
  let component: AstrocourseComponent;
  let fixture: ComponentFixture<AstrocourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstrocourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstrocourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
