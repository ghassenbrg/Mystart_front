import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertSingleComponent } from './expert-single.component';

describe('ExpertSingleComponent', () => {
  let component: ExpertSingleComponent;
  let fixture: ComponentFixture<ExpertSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
