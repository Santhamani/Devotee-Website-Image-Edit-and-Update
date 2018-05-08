import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalktoastrologerComponent } from './talktoastrologer.component';

describe('TalktoastrologerComponent', () => {
  let component: TalktoastrologerComponent;
  let fixture: ComponentFixture<TalktoastrologerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalktoastrologerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalktoastrologerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
