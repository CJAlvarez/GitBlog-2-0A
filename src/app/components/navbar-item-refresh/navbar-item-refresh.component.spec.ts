import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarItemRefreshComponent } from './navbar-item-refresh.component';

describe('NavbarItemRefreshComponent', () => {
  let component: NavbarItemRefreshComponent;
  let fixture: ComponentFixture<NavbarItemRefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarItemRefreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarItemRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
