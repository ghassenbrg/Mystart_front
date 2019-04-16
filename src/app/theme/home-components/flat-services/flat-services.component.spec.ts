import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatServicesComponent } from './flat-services.component';

describe('FlatServicesComponent', () => {
  let component: FlatServicesComponent;
  let fixture: ComponentFixture<FlatServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
