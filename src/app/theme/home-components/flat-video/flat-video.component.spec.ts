import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatVideoComponent } from './flat-video.component';

describe('FlatVideoComponent', () => {
  let component: FlatVideoComponent;
  let fixture: ComponentFixture<FlatVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
