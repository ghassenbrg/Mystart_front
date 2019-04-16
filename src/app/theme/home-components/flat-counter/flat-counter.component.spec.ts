import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatCounterComponent } from './flat-counter.component';

describe('FlatCounterComponent', () => {
  let component: FlatCounterComponent;
  let fixture: ComponentFixture<FlatCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
