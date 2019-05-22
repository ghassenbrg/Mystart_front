import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonSingleComponent } from './lesson-single.component';

describe('LessonSingleComponent', () => {
  let component: LessonSingleComponent;
  let fixture: ComponentFixture<LessonSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
