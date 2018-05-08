import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YantrasComponent } from './yantras.component';

describe('YantrasComponent', () => {
  let component: YantrasComponent;
  let fixture: ComponentFixture<YantrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YantrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YantrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
