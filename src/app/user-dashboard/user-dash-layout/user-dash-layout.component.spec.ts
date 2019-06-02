import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashLayoutComponent } from './user-dash-layout.component';

describe('UserDashLayoutComponent', () => {
  let component: UserDashLayoutComponent;
  let fixture: ComponentFixture<UserDashLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
